# Step: Execução de Código - Retorno de Informação do Intent  

## O que faz?  
Este step busca a resposta correspondente ao intent detectado no Dialogflow a partir de uma variável de ambiente e a retorna como resposta para o usuário.  

## Funcionamento  
1. O nome do intent detectado é extraído da requisição do webhook (`steps.trigger.event.body.queryResult.intent.displayName`).  
2. O código procura uma variável de ambiente que tenha o mesmo nome do intent.  
3. Se encontrar a variável, retorna seu conteúdo. Caso contrário, encerra o fluxo com uma mensagem de erro.  

## Código  
```javascript
export default defineComponent({
  async run({ steps, $ }) {
    // Nome do intent recebido
    const intent = steps.trigger.event.body.queryResult.intent.displayName;

    // Busca a variável de ambiente correspondente
    const envVariable = process.env[intent];

    // Verifica se a variável de ambiente foi encontrada
    if (!envVariable) {
      $.flow.exit("Variável correspondente ao intent não encontrada.");
    }

    // Retorna o conteúdo da variável de ambiente
    return { text: envVariable };
  }
});
