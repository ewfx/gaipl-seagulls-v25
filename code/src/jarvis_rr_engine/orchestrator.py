from langchain.agents import initialize_agent, AgentType

from code.src.jarvis_rr_engine.agents.PlatformSupportToolkit import PlatformSupportToolkit
from code.src.jarvis_rr_engine.llm.llm import get_llm

toolkit = PlatformSupportToolkit()

# Initialize OpenAI Chat Model

# Create memory for conversation tracking
# memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)
# # Create LangChain Agent with Toolkit Tools
# # Create an OpenAI-powered agent
#
# system_prompt = """
# You are an AI assistant integrated with a server management system.
# Your job is to help users monitor, restart, and manage services running in Docker containers.
#
# You have access to the following tools:
# - ListContainers: To list all running or stopped containers.
# - HealthCheck: To check if a service is running.
# - RestartService: To restart a specific service.
#
# Make sure to extract the correct service name from user queries and take appropriate action.
# """
#
# template = ChatPromptTemplate([
#     ("system", system_prompt),
#     ("human", "{agent_scratchpad}"),
# ])
#
# agent = create_openai_functions_agent(llm=llm, tools=toolkit.get_tools(), prompt=template)
#
# # Initialize the agent executor with error handling
# agent_executor = AgentExecutor(
#     agent=agent,
#     tools=toolkit.get_tools(),
#     verbose=True,
#     memory=memory,
#     handle_parsing_errors=True,  # Allows retrying in case of output parsing errors
# )

agent = initialize_agent(
    tools=toolkit.get_tools(),
    llm=get_llm(),
    agent=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)


def get_agent():
    return agent
