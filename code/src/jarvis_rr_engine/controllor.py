from fastapi import FastAPI
from pydantic import BaseModel

from code.src.jarvis_rr_engine.orchestrator import get_agent

class Command(BaseModel):
    command: str

class Body(BaseModel):
    query: Command

app = FastAPI()


@app.post("/invokeagent")
async def create_item(body: Body):
    response = get_agent().invoke({"input": body.query.command})
    print("\nAI Response:", response)
    return response

@app.get("/invokeagent/{query}")
async def create_item(query: str):
    print(query)
    # req_body = json.loads(body)
    # query = req_body['query']['command']
    response = get_agent().invoke({"input": query})
    print("\nAI Response:", response)
    return response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5679)