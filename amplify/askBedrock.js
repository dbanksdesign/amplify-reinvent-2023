export function request(ctx) {
  console.log({ ctx });
  const {
    answers = [],
    question = '',
    model = 'anthropic.claude-v2',
    temperature = 0.5,
  } = ctx.args;
  const prompt = `Please choose the best answer: ${answers.join(
    ','
  )} to the following question: ${question}. You must choose one answer, guess if you have to. Only respond with your answer.`;

  return {
    resourcePath: `/model/${model}/invoke`,
    method: 'POST',
    params: {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        prompt: `\n\nHuman:${prompt}\n\nAssistant:`,
        max_tokens_to_sample: 300,
        temperature,
        top_k: 250,
        top_p: 1,
        stop_sequences: ['\\n\\nHuman:'],
      },
    },
  };
}

export function response(ctx) {
  return {
    body: ctx.result.body,
  };
}
