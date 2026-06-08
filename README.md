# 🐄 AI Survival Game (Mistral 7B + Voice Control)

An AI-powered real-time survival game where a cow is controlled using **voice or natural language**, and a tiger autonomously chases it.

The system uses **Mistral 7B (via Ollama)** to convert human language into structured multi-step actions, which are executed in a real-time physics simulation.

---

# 🚀 Features

- 🎤 Voice-controlled gameplay (browser speech recognition)
- 🧠 AI reasoning using Mistral 7B (Ollama)
- 📋 Multi-step action planning (temporal reasoning)
- 🐄 Cow movement controlled by AI-generated plans
- 🐅 Tiger AI that chases the cow (slightly slower for balance)
- 🎮 Real-time simulation using p5.js
- 🌐 Fully browser-based (no backend required except Ollama)

---

# 🧠 How AI Works (Core Idea)

The system does NOT directly control the game.

Instead:

### 👉 Mistral acts as a PLANNER

It converts natural language into step-by-step actions:
User: "go right for 1 sec then up fast"

↓

AI Output:
action=move dir=right duration=1
action=move dir=up duration=2


---

# 🧩 Architecture Diagram

```
🎤 Voice Input (Mic)
        │
        ▼
🌐 Browser Speech Recognition
        │
        ▼
🧠 Mistral 7B (Ollama)
        │
        ▼
📋 Action Planner Output
(action=move, dir=left, duration=1)
        │
        ▼
🧩 JS Parser + Queue System
        │
        ▼
⏱ Action Scheduler (time-based execution)
        │
        ▼
🎮 Game Engine (p5.js)
        │
        ├───────────────┐
        ▼               ▼
🐄 Cow (AI controlled)  🐅 Tiger (Autonomous AI chase)
        │               │
        └──────┬────────┘
               ▼
        🖥 Real-time Canvas Output
```

---

# 🧠 How Reasoning Works

## 1. Language Understanding (Mistral)
- Detects intent (move, escape, direction)
- Breaks command into steps
- Assigns duration to each step

## 2. Planning (AI output)
- Converts sentence → structured plan
- Example:
    - "escape left then go up fast"

## 3. Execution (JavaScript engine)
- Executes each action sequentially
- Uses timers (millis)
- Updates movement per frame

---

# 🎮 Game Logic

### 🐄 Cow (Player Agent)
- Controlled by AI-generated actions
- Moves step-by-step
- Executes time-based commands

### 🐅 Tiger (Enemy Agent)
- Continuously chases cow
- Uses distance vector (dx, dy)
- Slightly reduced speed for fairness

---

# 🎤 Voice Commands Examples

Say:

```
go left for 1 second
then go up fast
escape right slowly
move down then left
```

---

# ⚙️ Installation

## 1. Install Ollama

```bash
brew install ollama
```

or download from:
https://ollama.com

---

## 2. Pull model

```bash
ollama pull mistral:7b
```

---

## 3. Start Ollama server

```bash
ollama serve
```

---

## 4. Run project

```bash
python3 -m http.server 8000
```

---

## 5. Open in browser

```
http://localhost:8000
```

---

# 📁 Project Structure

```
ai-mistral-survival-game/
│
├── index.html      # UI + canvas
├── style.css       # Styling (glass UI)
├── game.js         # Simulation + physics engine
├── voice.js        # Speech recognition system
├── ai.js           # Action parsing logic
├── ollama.js       # Mistral API communication
├── config.js       # Model configuration
```

---

# 🔥 Key Concept (Very Important)

This project demonstrates:

> 🧠 “LLM as a temporal action planner for real-time systems”

Instead of generating text, the AI generates:

- structured commands
- time-based actions
- execution sequences

---

# 🚀 Why This Project is Powerful

- Real-time AI interaction
- Voice + LLM integration
- Multi-step reasoning
- Game AI + simulation
- Production-like architecture

---

# 🎯 Future Improvements

- 🧠 Predictive tiger AI (future position tracking)
- 🐄 survival strategy AI for cow
- 🎤 full sentence understanding ("escape aggressively")
- 🔊 sound effects & animations
- 🧩 multi-agent ecosystem
- 📱 mobile support

---

# 🧠 Summary

This system combines:

- Speech Recognition 🎤
- LLM Planning (Mistral 7B) 🧠
- Temporal Action Execution ⏱
- Game Simulation 🎮

to create a **real-time AI-controlled interactive world**.

---

# ⚡ End
```

---

If you want next upgrade, I can also create:

- :contentReference[oaicite:0]{index=0}
- :contentReference[oaicite:1]{index=1}
- :contentReference[oaicite:2]{index=2}
- :contentReference[oaicite:3]{index=3}

Just tell 👍