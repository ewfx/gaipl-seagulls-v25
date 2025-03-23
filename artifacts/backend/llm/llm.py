# Initialize OpenAI Chat Model
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4", temperature=0)

def get_llm():
    return llm
