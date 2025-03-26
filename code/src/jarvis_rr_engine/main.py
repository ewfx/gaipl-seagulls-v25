# Run the agent interactively
from code.src.jarvis-rr-engine.orchestrator import get_agent

if __name__ == "__main__":
    print("🔹 Integrated Platform Support AI Agent")
    print("Type 'exit' to quit.")

    while True:
        user_query = input("\nAsk the AI: ")
        if user_query.lower() == "exit":
            print("Exiting...")
            break
        response = get_agent().invoke({"input": user_query})
        print("\nAI Response:", response)