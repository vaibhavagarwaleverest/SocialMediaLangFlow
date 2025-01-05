
import asyncHandlers from "./asyncHandlers.js";
import express from "express";
import cookieParser from "cookie-parser";
import { Router } from "express";
import cors from "cors"
import {EventSource} from "eventsource"
import ApiResponse from "./apiResponse.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import LangflowClient from "./LangFlowClient.js";
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename);
// dotenv.config({ path: path.resolve(__dirname, "./.env") });

dotenv.config()

const SocialMediaApi=asyncHandlers(async(req,res)=>
{
const {input}=req.body
async function main(inputValue, inputType = 'chat', outputType = 'chat', stream = false) {
    console.log(inputValue)
    const flowIdOrName = 'd179e86d-d642-4a4b-bca5-568c07e8d902';
    const langflowId = '6d8f93d9-5cd2-463a-b92a-c7e6654f5517';
    const applicationToken = process.env.applicationToken;
    const langflowClient = new LangflowClient('https://api.langflow.astra.datastax.com',
        applicationToken);

    try {
      const tweaks = {
  "ChatInput-jmUcp": {
    "background_color": "",
    "chat_icon": "",
    "files": "",
    "sender": "User",
    "sender_name": "User",
    "session_id": "",
    "should_store_message": true,
    "text_color": ""
  },
  "ParseData-yYt4E": {
    "sep": "\n",
    "template": "{text}"
  },
  "Prompt-CzkdE": {
    "context": "",
    "question": "",
    "template": "{context}\n\n---\n\nThe user has provided a single input word, which could be \"Reel,\" \"Image,\" or \"Carousel.\" Based on this input, please analyze the dataset and provide insights on the average engagement metrics for the specified post type. For example:\n\nCarousel posts exhibit 20% higher engagement compared to static posts.\nReels generate 2x more comments than other formats.\nPlease include similar insights for the given post type based on the data provided.\nQuestion: {question}\n\nAnswer: "
  },
  "SplitText-sLO7u": {
    "chunk_overlap": 200,
    "chunk_size": 1000,
    "separator": "\n"
  },
  "OpenAIModel-SN5mD": {
    "api_key": "OpenAiApiKey",
    "input_value": "",
    "json_mode": false,
    "max_tokens": null,
    "model_kwargs": {},
    "model_name": "gpt-4o-mini",
    "openai_api_base": "",
    "output_schema": {},
    "seed": 1,
    "stream": false,
    "system_message": "",
    "temperature": 0.1
  },
  "ChatOutput-42sTY": {
    "background_color": "",
    "chat_icon": "",
    "data_template": "{text}",
    "input_value": "",
    "sender": "Machine",
    "sender_name": "AI",
    "session_id": "",
    "should_store_message": true,
    "text_color": ""
  },
  "AstraDB-TpzAn": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://941c9045-682e-45f5-ba7d-5832f519114c-us-east-2.apps.astra.datastax.com",
    "batch_size": null,
    "bulk_delete_concurrency": null,
    "bulk_insert_batch_concurrency": null,
    "bulk_insert_overwrite_concurrency": null,
    "collection_indexing_policy": "",
    "collection_name": "post_details",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": false,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "OpenAIEmbeddings-Y2463": {
    "chunk_size": 1000,
    "client": "",
    "default_headers": {},
    "default_query": {},
    "deployment": "",
    "dimensions": null,
    "embedding_ctx_length": 1536,
    "max_retries": 3,
    "model": "text-embedding-3-large",
    "model_kwargs": {},
    "openai_api_base": "",
    "openai_api_key": "OpenAiApiKey",
    "openai_api_type": "",
    "openai_api_version": "",
    "openai_organization": "",
    "openai_proxy": "",
    "request_timeout": null,
    "show_progress_bar": false,
    "skip_empty": false,
    "tiktoken_enable": true,
    "tiktoken_model_name": ""
  },
  "AstraDB-MFBM8": {
    "advanced_search_filter": "{}",
    "api_endpoint": "https://941c9045-682e-45f5-ba7d-5832f519114c-us-east-2.apps.astra.datastax.com",
    "batch_size": null,
    "bulk_delete_concurrency": null,
    "bulk_insert_batch_concurrency": null,
    "bulk_insert_overwrite_concurrency": null,
    "collection_indexing_policy": "",
    "collection_name": "post_details",
    "embedding_choice": "Embedding Model",
    "keyspace": "",
    "metadata_indexing_exclude": "",
    "metadata_indexing_include": "",
    "metric": "cosine",
    "number_of_results": 4,
    "pre_delete_collection": false,
    "search_filter": {},
    "search_input": "",
    "search_score_threshold": 0,
    "search_type": "Similarity",
    "setup_mode": "Sync",
    "token": "ASTRA_DB_APPLICATION_TOKEN"
  },
  "OpenAIEmbeddings-pnvyh": {
    "chunk_size": 1000,
    "client": "",
    "default_headers": {},
    "default_query": {},
    "deployment": "",
    "dimensions": null,
    "embedding_ctx_length": 1536,
    "max_retries": 3,
    "model": "text-embedding-3-large",
    "model_kwargs": {},
    "openai_api_base": "",
    "openai_api_key": "OpenAiApiKey",
    "openai_api_type": "",
    "openai_api_version": "",
    "openai_organization": "",
    "openai_proxy": "",
    "request_timeout": null,
    "show_progress_bar": false,
    "skip_empty": false,
    "tiktoken_enable": true,
    "tiktoken_model_name": ""
  },
  "File-2uML7": {
    "concurrency_multithreading": 4,
    "path": "post.json",
    "silent_errors": false,
    "use_multithreading": false
  }
};
      const response = await langflowClient.runFlow(
          flowIdOrName,
          langflowId,
          inputValue,
          inputType,
          outputType,
          tweaks,
          stream,
          (data) => console.log("Received:", data.chunk), // onUpdate
          (message) => console.log("Stream Closed:", message), // onClose
          (error) => console.log("Stream Error:", error) // onError
      );
      if (!stream && response && response.outputs) {
          const flowOutputs = response.outputs[0];
          const firstComponentOutputs = flowOutputs.outputs[0];
          const output = firstComponentOutputs.outputs.message;
            console.log("ok")
          console.log("Final Output:", output.message.text);
          return res.status(200).json(new ApiResponse(200,"Success",output.message.text));
          
      }
    } catch (error) {
      console.error('Main Error', error.message);
    }
}

main(
    input, // inputValue
    'chat', // inputType
    'chat', // outputType
    false // stream
  );}
)
const app=express();
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
  cors({
    origin: '*',
    Credentials: true,
  })
);

const router = Router();

router.route("/getAllAnalysis").post(SocialMediaApi);

app.use("/api/v1/socialMedia",router)

const __dirname1 = path.resolve();

//-----------------Deployement-----------//

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/LangflowFrontend-final/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "LangflowFrontend-final", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

try{
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });

}
catch(error)
{
    console.log(error)
}