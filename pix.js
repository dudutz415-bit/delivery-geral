/* ========================================
   DELIVERY GERAL - PIX Payment Module
   ======================================== */

/**
 * Gera um codigo PIX estatico (payload EMV/BRCode)
 * Baseado no padrao do Banco Central do Brasil
 *
 * @param {string} pixKey - Chave PIX (CPF, CNPJ, email, celular ou chave aleatoria)
 * @param {string} name - Nome do recebedor (ate 25 chars)
 * @param {string} city - Cidade do recebedor
 * @param {number} amount - Valor em reais (ex: 49.90)
 * @param {string} description - Descricao do pagamento (opcional)
 */
function generatePixCode(pixKey, name, city, amount, description = '') {
  // Helper para criar campos TLV
  function field(id, value) {
    const len = String(value.length).padStart(2, '0');
    return id + len + value;
  }

  // Trunca nome e cidade conforme especificacao
  const truncatedName = name.substring(0, 25).toUpperCase();
  const truncatedCity = city.substring(0, 15).toUpperCase();
  const txId = 'DELIVERYGERAL' + Date.now().toString(36).toUpperCase();

  // Merchant Account Information (chave PIX)
  const merchantAccount = field('00', 'BR.GOV.BCB.PIX') + field('01', pixKey);
  const merchantAccountField = field('26', merchantAccount);

  // Merchant Category Code (0000 = nao informado)
  const mcc = field('52', '0000');

  // Transaction Currency (986 = BRL)
  const currency = field('53', '986');

  // Transaction Amount
  const amountStr = amount.toFixed(2);
  const amountField = field('54', amountStr);

  // Country Code
  const country = field('58', 'BR');

  // Merchant Name
  const merchantName = field('59', truncatedName);

  // Merchant City
  const merchantCity = field('60', truncatedCity);

  // Additional Data Field Template (TXID)
  const additionalData = field('62', field('05', txId));

  // Monta o payload
  let payload = '';
  payload += field('00', '01'); // Payload Format Indicator
  payload += field('01', '12'); // Point of Initiation Method (12 = estatico)
  payload += merchantAccountField;
  payload += mcc;
  payload += currency;
  payload += amountField;
  payload += country;
  payload += merchantName;
  payload += merchantCity;
  payload += additionalData;
  payload += '6304'; // CRC16

  // Calcula CRC16-CCITT-FALSE
  const crc = calculateCRC16(payload);
  payload += crc;

  return {
    code: payload,
    txId: txId,
    amount: amountStr,
    key: pixKey
  };
}

/**
 * Calcula CRC16-CCITT-FALSE para o payload PIX
 */
function calculateCRC16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/**
 * Gera um QR Code a partir do codigo PIX usando a API do Google Chart
 * (funciona sem bibliotecas externas)
 */
function generatePixQRCodeUrl(pixCode, size = 250) {
  const encoded = encodeURIComponent(pixCode);
  return `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chld=M|0&chl=${encoded}`;
}

/**
 * Salva a chave PIX do admin no Firestore
 */
async function saveAdminPixKey(pixKey, name, city) {
  await db.collection('config').doc('payment').set({
    pixKey: pixKey,
    receiverName: name,
    receiverCity: city,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

/**
 * Carrega a chave PIX do admin do Firestore
 */
async function loadAdminPixKey() {
  const doc = await db.collection('config').doc('payment').get();
  if (doc.exists) return doc.data();
  // Fallback: valores padrao para teste
  return {
    pixKey: 'delivery.geral@email.com',
    receiverName: 'DELIVERY GERAL LTDA',
    receiverCity: 'SAO PAULO'
  };
}

/**
 * Copia o codigo PIX para a area de transferencia
 */
async function copyPixCode(code) {
  try {
    await navigator.clipboard.writeText(code);
    return true;
  } catch (err) {
    // Fallback para navegadores antigos
    const ta = document.createElement('textarea');
    ta.value = code;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  }
}
