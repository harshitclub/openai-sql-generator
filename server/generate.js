import openai from "./api.js";

const generate = async (queryDescriptions) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Convert the following natural language description into a SQL query: \n\n${queryDescriptions}.`,
    max_tokens: 100,
    temperature: 0,
  });

  return response.data.choices[0].text;
};

export default generate;
