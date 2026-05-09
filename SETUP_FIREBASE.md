# ========================================
# GUIA DE CONFIGURACAO DO FIREBASE
# Delivery Geral
# ========================================

## 1. Criar conta e projeto

1. Acesse https://console.firebase.google.com
2. Faca login com sua conta Google
3. Clique em "Criar projeto"
4. Nome: **delivery-geral**
5. Desative Google Analytics (ou deixe ativado, opcional)
6. Clique em "Criar projeto"

## 2. Registrar app Web

1. No painel do projeto, clique no icone **</>** (Adicionar app da Web)
2. De um apelido: "Delivery Geral Web"
3. Clique em "Registrar app"
4. **Copie o objeto firebaseConfig**
5. Cole no arquivo `firebase-config.js` substituindo os valores placeholder
6. Cole a MESMA config nos arquivos `entregador.html`, `lojista.html` e `admin.html`

## 3. Ativar servicos

### Authentication
- No menu lateral, clique em "Authentication"
- Clique em "Comecar"
- Ative "Email/Senha" (provedor nativo)
- Salve

### Firestore Database
- No menu lateral, clique em "Firestore Database"
- Clique em "Criar banco de dados"
- Escolha "Iniciar no modo de teste" (depois atualizamos as regras)
- Selecione a regiao mais proxima (ex: southamerica-east1 para Brasil)
- Clique em "Ativar"

### Cloud Messaging (Notificacoes Push)
- No menu lateral, clique em "Configuracoes do projeto" (engrenagem)
- Va em "Cloud Messaging"
- Gere uma chave VAPID (pares de chaves Web Push)
- Copie a chave PUBLICA
- Cole no arquivo `firebase-config.js` na linha `messaging.usePublicVapidKey("...")`

## 4. Configurar regras de seguranca

1. Va em Firestore Database > Regras
2. Substitua o conteudo pelo arquivo `firestore.rules` que esta na pasta
3. Clique em "Publicar"

## 5. Criar o primeiro admin

1. Abra o app no navegador (index.html)
2. Crie uma conta normalmente
3. Abra o Console do Navegador (F12 > Console)
4. Execute:
   ```js
   createFirstAdmin('seu@email.com', 'suaSenha123', 'Admin Master')
   ```
5. Ou, va no Firebase Console > Authentication e crie um usuario manualmente
6. Depois va no Firestore > users > [uid do usuario] e mude `role` para `"admin"`

## 6. Configurar PIX

1. Faca login como admin no painel `admin.html`
2. Va ate a secao de configuracoes (ou use o Console do Navegador)
3. Execute:
   ```js
   saveAdminPixKey('sua-chave-pix-aqui', 'NOME DA SUA EMPRESA', 'SAO PAULO')
   ```

## 7. Hospedar o app (Firebase Hosting - opcional)

Se quiser usar o Firebase Hosting (gratuito):

1. Instale o Firebase CLI (precisa do Node.js):
   ```bash
   npm install -g firebase-tools
   ```
2. Faca login:
   ```bash
   firebase login
   ```
3. Inicialize:
   ```bash
   firebase init hosting
   ```
4. Selecione o projeto "delivery-geral"
5. Use "delivery-geral" como pasta publica
6. Deploy:
   ```bash
   firebase deploy
   ```

Ou use o **Netlify** (mais facil):
1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `delivery-geral` inteira
3. Pronto! O app ja esta online

## 8. Publicar na Play Store

1. Acesse https://pwabuilder.com
2. Cole a URL do app hospedado
3. Clique em "Package for Stores"
4. Baixe o arquivo `.aab` (Android App Bundle)
5. Acesse https://play.google.com/console
6. Crie conta de desenvolvedor (US$ 25, pagamento unico)
7. Crie um app, envie o `.aab` e preencha os dados

## 9. Cloud Functions (futuro)

Para notificacoes automaticas e processamento de pedidos:

1. No Firebase Console, ative "Cloud Functions"
2. Instale localmente:
   ```bash
   firebase init functions
   ```
3. Escolha JavaScript
4. Edite `functions/index.js` com as funcoes de trigger
5. Deploy:
   ```bash
   firebase deploy --only functions
   ```

## Arquivos novos criados nesta atualizacao

| Arquivo | Funcao |
|---------|--------|
| `firebase-config.js` | Configuracao e inicializacao do Firebase |
| `auth.js` | Login, cadastro, logout, verificacao de role |
| `pix.js` | Gerador de codigo PIX estatico + QR Code |
| `notifications.js` | Notificacoes push via FCM |
| `firestore.rules` | Regras de seguranca do banco de dados |
| `SETUP_FIREBASE.md` | Este guia |

## Contato / Suporte

- Firebase Docs: https://firebase.google.com/docs
- Suporte Firebase: https://firebase.google.com/support
