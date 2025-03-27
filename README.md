# 🚀 Jarvis - One stop AI solution for Platform Support

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction

**Jarvis: An Integrated solution for Platform Engineers**

We have developed an **Integrated Platform Environment**, a **one-stop solution for platform engineers** to efficiently **manage incidents, access platform-related insights, monitor application health, and verify upstream/downstream dependencies**. Jarvis Web features a **responsive design**, adapting seamlessly to **desktops, tablets, and smartphones** for an optimal user experience.

Our approach goes beyond just implementing a **GenAI model**—we have built a **comprehensive workflow** that delivers an **end-to-end, AI-powered platform support system**.  

This solution enhances operational efficiency by providing:  
✅ **Automated incident resolution**  
✅ **Intelligent recommendations**  
✅ **Real-time system health monitoring**  

Empowering engineers with a seamless troubleshooting experience. 🚀

## 🎥 Demo

🔗 Live Demo<br>
**Use this link to access the Jarvis Platform **
http://4.188.72.83:3000/dashboard <br>
📹 [Video Demo](#) (if applicable)<br>
**Use this link to access the video of demo**<br>
https://github.com/ewfx/gaipl-seagulls-v25/tree/main/artifacts/demo<br>
**Use this link to access the video of demo for better quality : **
https://drive.google.com/drive/u/1/folders/1PeJSBPH7h624ZdVHbqemAibdxQogCZUA
<br><br>
**Prompos for ChatAI:**
1. list all the upstream and downstream  system connectivity dependencies for payment_gateway
2.	Incidents: List all realted incidents related to UI crash on login
3.	List all Containers
🖼️ Screenshots: <br><br>
High Level Architecture: <br><br>
<img width="769" alt="image" src="https://github.com/user-attachments/assets/c83c857c-6fef-4b73-b344-2603aad21afb" /> <br><br>
Multi Agent Orchestration workflow: <br>
<img width="900" alt="image" src="https://github.com/user-attachments/assets/f18e1629-55f5-4d94-b13a-28ef9e2183aa" /> <br><br>
Incident Recommendation & Resolution MCP workflow: <br>
<img width="875" alt="image" src="https://github.com/user-attachments/assets/ffdac692-bdcf-4d99-82d3-48490f657ddc" /> <br><br>
Incident data sync workflow: <br>
<img width="806" alt="image" src="https://github.com/user-attachments/assets/f83a44fd-8776-4d10-910d-94816b8c9112" /> <br><br>
Knowledge source data sync workflow: <br>
<img width="904" alt="image" src="https://github.com/user-attachments/assets/c05919ea-d8eb-47bd-b820-7a0a59242393" /> <br><br>
Jarvis UI: Homepage: <br>
<img width="867" alt="image" src="https://github.com/user-attachments/assets/e694119c-5c98-4cba-b81b-c860f976ee04" /> <br><br>
Jarvis UI: App dependency health View: <br>
<img width="885" alt="image" src="https://github.com/user-attachments/assets/478181ea-43c7-41c6-bf0c-5cf0b90a77f2" /> <br><br>
Jarvis UI: Portfolio health View: <br>
<img width="869" alt="image" src="https://github.com/user-attachments/assets/448b1ec4-1fe7-4d5e-9535-397a3d32d2db" /> <br><br>
Jarvis UI: Metrics: <br>
<img width="875" alt="image" src="https://github.com/user-attachments/assets/331a107b-42de-4f9e-b428-befe0c781d74" /> <br><br>

## 💡 Inspiration
What inspired you to create this project? Describe the problem you're solving.

Modern **platform engineering teams** face increasing challenges in managing **complex infrastructure, resolving incidents efficiently, and ensuring application stability** across distributed systems.

**Key Challenges**
- **Incident Resolution Delays** – Engineers spend significant time manually diagnosing issues.
- **Lack of Centralized Support** – Multiple tools and dashboards lead to inefficiencies.
- **Limited AI-driven Automation** – Existing solutions lack **GenAI-powered** insights for proactive support.

**Our Inspiration**
We aimed to build an **Integrated Platform Environment**, an **AI-driven, one-stop solution** for platform engineers. By combining **GenAI capabilities with a structured workflow**, we empower engineers to:

✅ **Quickly resolve incidents** with AI-powered recommendations.  
✅ **Gain real-time visibility** into application health, dependencies, and platform insights.  
✅ **Automate platform support** for faster and more efficient troubleshooting.  

This solution streamlines platform management, reduces downtime, and **enhances operational efficiency** like never before. 🚀

## ⚙️ What It Does

**🚀 AI-Powered Incident Resolution**
- Uses **GenAI** to analyze and provide recommended solutions for incidents.  
- Reduces **mean time to resolution (MTTR)** by offering **automated troubleshooting steps**.  
- Provides contextual insights based on past incidents and historical data.  

**📊 Real-Time Application Health Monitoring**
- Displays the **health status of all applications** engineers have access to.  
- Identifies **upstream and downstream dependencies** to diagnose potential cascading failures.  
- Centralized dashboard for **quick visibility into system performance**.  

**🔍 Integrated Query Assistance for Platform Support**
- Engineers can ask **platform-related queries**, and the **GenAI model** provides intelligent responses.  
- Fetches relevant documentation, logs, and best practices automatically.  
- Eliminates the need for manual searches across different tools.  

**🔄 Automated Workflow for Incident Management**
- A **structured incident lifecycle** from **detection → analysis → resolution → validation**.  
- **Progress tracking** via a **stepper UI** to indicate incident resolution stages.  
- Engineers can approve or escalate incidents within the workflow.  

**📡 Upstream & Downstream Dependency Verification**
- Automatically maps **dependencies between applications**.  
- Helps engineers identify whether an **issue originates from an upstream failure**.  
- Reduces **time spent in root cause analysis (RCA)** by providing dependency impact insights.  

**🔧 Customizable Incident Dashboard**
- Engineers can **filter incidents based on severity, status, application, and date**.  
- Provides a **graphical view of incident trends over time**.  
- Ensures **quick identification of recurring platform issues**.  

**🛠️ End-to-End Workflow for Platform Engineers**
- A **single integrated platform** combining AI, monitoring, and support tools.  
- Engineers can manage everything **without switching between multiple dashboards**.  
- **Seamless automation + human-in-the-loop approach** ensures reliability.  

---

## Why This Matters?
✅ **Faster incident resolution → Reduced downtime**  
✅ **AI-driven insights → Smarter decision-making**  
✅ **Automation → Increased efficiency & productivity**  

## 🛠️ How We Built It
Briefly outline the technologies, frameworks, and tools used in development.

## 🚧 Challenges We Faced
- Real time integrations with Enterprise Tools like Service now, Splunk, Appdynamics
- Creation of sample Datasets for incidents and telemetry related data
- Hosting  infrastructure for the complete solution
- Single click Paging when any application dependency is down

## 🏃 How to Run the UI code
1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/gaipl-seagulls-v25
   ```
2. Install dependencies  
   ```sh
   npm install
   ```
3. Run the project  
   ```sh
   npm run dev
   ```
## 🏃 How to run the Backend
1. Install dependencies
   ```sh
   npm install express pg dotenv cors
   ```

2. Run the backend
   ```sh
   node src/server.js
   ```

**Jarvis RR Engine**

**Setup Instructions**

Follow the steps below to set up and run the application.

**1. Create a Virtual Environment**
Run the following command to create a virtual environment:
```sh
python -m venv .venv
```

**2. Activate Virtual Environment**
- **Windows:**
  ```sh
  .venv\Scripts\activate
  ```
- **macOS/Linux:**
  ```sh
  source .venv/bin/activate
  ```

**3. Install Dependencies**
Use `pip` to install the required dependencies:
```sh
pip install -r code/src/jarvis_rr_engine/req_v1.txt
```

**4. Install & Start Docker**
Ensure Docker is installed on your system. If not, download and install it from [Docker's official website](https://www.docker.com/).  
Once installed, start Docker before proceeding.

**5. Run Uvicorn Server**
Start the Uvicorn server with the following command:
```sh
uvicorn code.src.jarvis_rr_engine.controllor:app --host 0.0.0.0 --port 5679 --reload
```

**6. Set Up n8n Workflow in Local Docker Instance**
To set up the `n8n` workflow locally, follow these steps:

1. Start an `n8n` instance in Docker:
   ```sh
   docker run -d --restart=always --name n8n \
    -p 5678:5678  -e GENERIC_TIMEZONE="Asia/Kolkata"  -e TZ="Asia/Kolkata" \
   -e N8N_SECURE_COOKIE=false -e N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true \
   -v n8n_data:/home/node/.n8n  n8nio/n8n
   ```

2. Once `n8n` is running, open your browser and go to `http://localhost:5678/`.

3. Import the workflow JSON file located at:
   ```sh
   code/src/jarvis_rr_engine/n8n/Integrated_Platform_Support_workflow.json
   ```
   - Navigate to `n8n` UI.
   - Click on `Import` in the workflow editor.
   - Select the JSON file and upload it.

4. Save and activate the workflow.

**Additional Notes**
- Ensure Python and `pip` are installed before starting the setup.
- If any issues arise, check dependencies in `code/src/jarvis_rr_engine/req_v1.txt` and ensure Docker is running.

---

🚀 **You're all set!** The application should now be running at `http://0.0.0.0:5679/`.

## 🏗️ Tech Stack
| **Technology**            | **Purpose**                                                 | **Reason for Choosing**                                      |
|--------------------------|-------------------------------------------------------------|--------------------------------------------------------------|
| **Frontend: React**      | Build the UI for the application                           | Component-based architecture, fast rendering, and scalability |
| **Backend: Node.js**     | Handle API requests and business logic                    | Asynchronous, event-driven, and scalable                     |
| **Database: PostgreSQL** | Store structured data                                      | Relational, ACID-compliant, and supports complex queries     |
| **Database: Vector DB**  | Store embeddings for similarity searches                   | Optimized for vector-based search and AI-driven applications |
| **n8n**                 | Automate workflows and integrations                        | Powerful automation tool with easy integration into communication channels like Slack, Discord, and email. Provides visual workflow building, extensive third-party API support, and seamless orchestration of tasks. |
| **LangChain**           | Enable AI-powered workflows                                | Simplifies working with LLMs and chaining multiple AI tasks  |
| **OpenAI**              | Provide LLM capabilities                                   | Best-in-class AI models for NLP tasks                        |
| **FastAPI**             | Build high-performance APIs                               | Async support, fast execution, and easy-to-use framework    |
| **Uvicorn Server**      | Run FastAPI applications                                  | Lightweight, high-performance ASGI server                    |
| **nginx**               | Reverse proxy and load balancer                           | Secure, efficient, and handles high traffic                 |
| **Supabase Vector Store** | Manage and retrieve vector embeddings                    | Open-source, scalable alternative to proprietary vector DBs  |
| **Docker**              | Containerize and deploy applications                      | Ensures consistency across environments and simplifies deployment |
| **Azure**               | Cloud hosting and infrastructure management               | Scalable, secure, and integrates well with enterprise applications |


<img width="885" alt="image" src="https://github.com/user-attachments/assets/3ccc08f4-e5b9-40c0-b6a9-fd7337fbfc1c" /> <br><br>


## 👥 Team
- **SeagullsV25** - [GitHub](https://github.com/ewfx/gaipl-seagulls-v25)
- **Mahesh Joysula** - [GitHub](https://github.com/maheshjosyula) | [LinkedIn](#)
- **Naveen Sambangi** - [Github](https://github.com/Naveen1603) | [LinkedIn](https://www.linkedin.com/in/naveen1603/)
- **Delli Kilari** - [Github](https://github.com/dellikilari) | [LikendIn](https://www.linkedin.com/in/delli-kilari/)
- **Sri Harshita Pendyala** - [Github](https://github.com/PendyalaHarshita) | [LinkedIn](https://www.linkedin.com/in/sri-harshita-pendyala/)
- **Shanmukesh Satya** - [Github](#) | [LinkedIn](https://www.linkedin.com/in/satya-gowri-shiva-shanmukesh-putra/)
