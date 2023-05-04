import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openAPI = process.env.openapi;

if (!openAPI) {
  console.error("Key is not set!");
  process.exit(1);
}

const configuration = new Configuration({
  apiKey: openAPI,
});

const openai = new OpenAIApi(configuration);

export default openai;
