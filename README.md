# Reservoir-Aging-Silt-Removal-Analysis-System
# 🌊 Hydro-Agent: 智慧水庫防汛與清淤調度平台

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.10%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.100%2B-009688)
![React](https://img.shields.io/badge/React-18.2-61DAFB)
![Edge AI](https://img.shields.io/badge/Edge%20AI-NVIDIA%20Jetson-76B900)

Hydro-Agent 是一個基於物聯網 (IoT)、邊緣運算 (Edge AI) 與 3D 數位孿生技術的現代化水庫管理平台。本專案旨在解決台灣核心水庫面臨的老齡化與極端氣候淤積危機，透過全自動化的感知網絡與演算法，最大化水力排砂效率並優化機械清淤調度，實踐水資源的永續循環經濟。

## ✨ 核心功能 (Key Features)

*   **🚀 Edge AI 現地智慧排砂控制：** 於防淤隧道現地端部署輕量化 AI 模型 (1D-CNN + Bi-LSTM)，在完全斷網環境下也能於 3 秒內自動判定異重流並聯動 PLC 閥門。
*   **🗺️ 3D 數位孿生與時序預測：** 整合多波束聲納點雲數據與 PostGIS 空間資料庫，動態渲染庫底 3D 淤積熱區，並可視化歷史時序數據。
*   **⚓ 智慧清淤船隊 (USV Fleet) 調度：** 運用基因演算法 (Genetic Algorithm) 自動計算淤積熱區，為無人抽泥船規劃耗能最低、產出最大的最佳作業航線。
*   **♻️ 淤泥循環經濟自動媒合：** 自動生成淤泥品質數位身分證，結合下游公共工程與綠色建材廠的 Open Data，落實廢棄物再利用的 ESG 指標。
*   **📊 全區即時監控與多通路告警：** 介接政府公眾 API (水位、雨量) 與現地感測器 (光纖位移、水質探頭)，異常時自動觸發 LINE/Email 通報。

## 🛠️ 技術架構 (Tech Stack)

### 前端應用 (Frontend)
*   **核心框架:** React.js, Tailwind CSS
*   **3D 渲染與圖表:** Three.js / Cesium.js, Recharts, ECharts
*   **狀態管理:** Context API / Redux

### 後端服務 (Backend)
*   **核心框架:** Python, FastAPI (Asynchronous RESTful API)
*   **AI 與資料處理:** PyTorch, Scikit-learn, NumPy, Pandas

### 資料庫與基礎設施 (Database & DevOps)
*   **時序資料庫:** InfluxDB (高頻率感測器數據)
*   **空間資料庫:** PostgreSQL + PostGIS (3D 點雲與地理幾何運算)
*   **部署環境:** Docker, Docker Compose

### IoT 通訊與邊緣端 (IoT & Edge)
*   **通訊協定:** MQTT, LoRaWAN, HTTP/REST API
*   **硬體端:** NVIDIA Jetson (Edge Gateway), PLC 控制模組

## 📂 專案目錄結構 (Project Structure)

```text
hydro-agent/
├── frontend/                # React 前端應用程式
│   ├── src/
│   │   ├── components/      # UI 與視圖元件 (Dashboard, Twin, Fleet...)
│   │   ├── services/        # API 請求邏輯
│   │   └── App.jsx          # 主程式進入點
├── backend/                 # FastAPI 後端服務
│   ├── app/
│   │   ├── api/             # API 路由與端點
│   │   ├── core/            # 系統設定與安全驗證
│   │   ├── models/          # 資料庫 ORM 模型
│   │   └── services/        # 核心商業邏輯與 AI 推論
├── edge_ai/                 # 邊緣運算模型與推論腳本
│   ├── models/              # 預訓練權重 (.pt / .onnx)
│   └── inference.py         # 現地端 PLC 聯動控制腳本
└── docker-compose.yml       # 容器化部署配置檔
```

🚀 快速開始 (Quick Start)
系統需求

Docker & Docker Compose

Node.js (v18+)

Python 3.10+

安裝與啟動

複製專案：
git clone [https://github.com/Kai-EC/Reservoir-Aging-Silt-Removal-Analysis-System.git](https://github.com/Kai-EC/Reservoir-Aging-Silt-Removal-Analysis-System.git)
    cd hydro-agent
    ```
2.  **啟動全端容器 (後端、資料庫與 Message Broker)：**
```bash
    docker-compose up -d
    ```
3.  **啟動前端開發伺服器：**
```bash
    cd frontend
    npm install
    npm run dev
    ```
4.  開啟瀏覽器並前往 `http://localhost:5173` 檢視系統儀表板。

### 📄 授權條款 (License)
本專案採用 [MIT License](LICENSE) 授權。
```


## 🌐 English Version

Hydro-Agent is a modern reservoir management platform built on the Internet of Things (IoT), Edge AI, and 3D Digital Twin technologies. This project is designed to address the aging and extreme-weather-induced siltation crises facing core reservoirs in Taiwan. By leveraging a fully automated sensory network and advanced algorithms, it maximizes hydraulic desilting efficiency, optimizes mechanical dredging schedules, and implements a sustainable circular economy for water resources.

### ✨ Key Features

*   **🚀 Edge AI Smart Desilting Control:** Deploys lightweight AI models (1D-CNN + Bi-LSTM) directly at the desilting tunnel edge gateway. It detects density currents and triggers PLC valves within 3 seconds, even completely offline.
*   **🗺️ 3D Digital Twin & Time-Series Prediction:** Integrates multi-beam sonar point clouds with a PostGIS spatial database to dynamically render 3D siltation heatmaps and visualize historical time-series data.
*   **⚓ Smart USV Fleet Scheduling:** Utilizes a Genetic Algorithm to calculate siltation hot zones and automatically map out the most energy-efficient and high-yield routes for the unmanned surface vehicle (USV) dredging fleet.
*   **♻️ Circular Economy Matching:** Automatically generates a "Digital Quality ID" for extracted silt and matches it with open data from downstream public works and green building material factories, fulfilling ESG waste-reuse metrics.
*   **📊 Real-time Monitoring & Multi-Channel Alerts:** Connects government Open Data APIs (water levels, rainfall) with local sensors (fiber-optic displacement, water quality probes), automatically triggering LINE/Email alerts upon anomaly detection.

### 🛠️ Tech Stack

**Frontend**
*   **Core Framework:** React.js, Tailwind CSS
*   **3D Rendering & Charts:** Three.js / Cesium.js, Recharts, ECharts
*   **State Management:** Context API / Redux

**Backend**
*   **Core Framework:** Python, FastAPI (Asynchronous RESTful API)
*   **AI & Data Processing:** PyTorch, Scikit-learn, NumPy, Pandas

**Database & DevOps**
*   **Time-Series Database:** InfluxDB (High-frequency sensor data)
*   **Spatial Database:** PostgreSQL + PostGIS (3D point clouds & geographic computing)
*   **Deployment:** Docker, Docker Compose

**IoT & Edge**
*   **Protocols:** MQTT, LoRaWAN, HTTP/REST API
*   **Hardware:** NVIDIA Jetson (Edge Gateway), PLC Control Modules

### 📂 Project Structure

```text
hydro-agent/
├── frontend/                # React frontend application
│   ├── src/
│   │   ├── components/      # UI and View components (Dashboard, Twin, Fleet...)
│   │   ├── services/        # API request logic
│   │   └── App.jsx          # Main application entry point
├── backend/                 # FastAPI backend service
│   ├── app/
│   │   ├── api/             # API routes and endpoints
│   │   ├── core/            # System config and security validation
│   │   ├── models/          # Database ORM models
│   │   └── services/        # Core business logic and AI inference
├── edge_ai/                 # Edge computing models and inference scripts
│   ├── models/              # Pre-trained weights (.pt / .onnx)
│   └── inference.py         # On-site PLC linked control script
└── docker-compose.yml       # Containerized deployment configuration
```
