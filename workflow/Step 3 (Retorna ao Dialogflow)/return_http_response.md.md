# Step: Retorno da Resposta HTTP para o Dialogflow  

## O que faz?  
Este step envia a resposta gerada pelo Gemini de volta para o Dialogflow, garantindo que o usuário receba a resposta correta no WhatsApp.  

## Funcionamento  
1. **Captura** a resposta gerada pelo Gemini no step anterior.  
2. **Formata** a resposta para o Dialogflow, adicionando mensagens auxiliares ao usuário.  
3. **Retorna** um código de status `200` para confirmar que a resposta foi enviada corretamente.  

## Corpo da Resposta HTTP (`Response Body`)  
```json
{
  "fulfillmentText": "{{steps.generate_content_from_text.$return_value.candidates[0].content.parts[0].text}}\n\n📌 Caso sua dúvida tenha sido respondida, digite /finalizar para encerrar a conversa.\n💡 Se preferir continuar, digite /menu para acessar o menu novamente.",
  "source": "gemini_response",
  "session": "{{steps.trigger.event.body.session}}"
}

