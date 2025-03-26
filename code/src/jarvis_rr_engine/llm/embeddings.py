from langchain_community.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()

def get_embedding_model():
    return embeddings