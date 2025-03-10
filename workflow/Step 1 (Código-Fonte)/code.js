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