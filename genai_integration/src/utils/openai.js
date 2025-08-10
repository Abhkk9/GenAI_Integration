import OpenAI from "openai";
import { openApiKey } from "./openApiKey";

const openai = new OpenAI({
    apiKey: openApiKey,
    dangerouslyAllowBrowser: true, 
});

export default openai;