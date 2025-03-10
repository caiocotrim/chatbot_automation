# Trigger: Webhook do Dialogflow  

## O que faz?  
Este trigger recebe uma requisição HTTP do Dialogflow quando o chatbot não encontra uma resposta correspondente para a dúvida do usuário. Ele captura a sessão, a pergunta do usuário e outros parâmetros relevantes para processamento no workflow.  
  

## Configuração  
- **Tipo:** Webhook HTTP  
- **Método:** `POST`  
- **Autenticação:** Nenhuma (aceita qualquer requisição)  
- **Domínios permitidos:** `pipedream.net`  
- **Filtro de `favicon.ico` habilitado:** Sim  

## Estrutura da Requisição  
A requisição do Dialogflow chega no seguinte formato JSON:  

```json
{
  "session": "projects/chatbot-ifba-wpp-wjfd/agent/sessions/x",
  "queryText": "como funciona o tcc e quando eu devo entregar o meu?",
  "parameters": {
    "user_doubt": "como funciona o tcc e quando eu devo entregar o meu?"
  },
  "intent": {
    "displayName": "tcc_",
    "name": "projects/chatbot-ifba-wpp-wjfd/agent/intents/2b64c49e-e50a-4e83-9124-7bad67cfd6ca",
    "confidence": 0.3
  }
}
