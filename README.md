# 🚀 Project Name

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
A brief overview of your project and its purpose. Mention which problem statement are your attempting to solve. Keep it concise and engaging.

**Jarvis: An Integrated solution for Platform Engineers**

We have developed an **Integrated Platform Environment**, a **one-stop solution for platform engineers** to efficiently **manage incidents, access platform-related insights, monitor application health, and verify upstream/downstream dependencies**.  

Our approach goes beyond just implementing a **GenAI model**—we have built a **comprehensive workflow** that delivers an **end-to-end, AI-powered platform support system**.  

This solution enhances operational efficiency by providing:  
✅ **Automated incident resolution**  
✅ **Intelligent recommendations**  
✅ **Real-time system health monitoring**  

Empowering engineers with a seamless troubleshooting experience. 🚀

## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) (if applicable)  
🖼️ Screenshots: <br><br>
High Level Architecture: <br><br>
<img width="769" alt="image" src="https://github.com/user-attachments/assets/c83c857c-6fef-4b73-b344-2603aad21afb" /> <br>


![Screenshot 1](link-to-image)

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
Describe the major technical or non-technical challenges your team encountered.

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
- 🔹 Frontend: React
- 🔹 Backend: Node.js
- 🔹 Database: PostgreSQL / Vector Db
- 🔹 Dependencies: n8n, LangChain, OpenAI, FastAPI, Uvicorn Server

## 👥 Team
- **SeagullsV25** - [GitHub](https://github.com/ewfx/gaipl-seagulls-v25)
- **Mahesh Joysula** - [GitHub](https://github.com/maheshjosyula) | [LinkedIn](#)
- **Naveen Sambangi** - [Github](https://github.com/Naveen1603) | [LinkedIn](https://www.linkedin.com/in/naveen1603/)
- **Delli Kilari** - [Github](https://github.com/dellikilari) | [LikendIn](https://www.linkedin.com/in/delli-kilari/)
- **Sri Harshita Pendyala** - [Github](https://github.com/PendyalaHarshita) | [LinkedIn](https://www.linkedin.com/in/sri-harshita-pendyala/)
- **Shanmukesh Satya** - [Github](#) | [LinkedIn](https://www.linkedin.com/in/satya-gowri-shiva-shanmukesh-putra/)
