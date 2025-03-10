# Step: Geração de Resposta com Google Gemini  

## O que faz?  
Este step envia uma pergunta e um trecho de texto de referência ao modelo Gemini, solicitando uma resposta baseada na informação disponível.  

## Funcionamento  
1. Obtém o texto relevante armazenado na variável de ambiente do step anterior (`steps.code.$return_value.text`).  
2. Obtém a dúvida do usuário (`steps.trigger.event.body.queryResult.parameters.user_doubt`).  
3. Envia ambos ao Gemini para gerar uma resposta.  
4. Retorna a resposta gerada.  

## Prompt Utilizado  
```plaintext
busca na base de dados: {{steps.code.$return_value.text}}

dúvida: {{steps.trigger.event.body.queryResult.parameters.user_doubt}}

Leia a informação capturada na base de dados e responda a dúvida.
