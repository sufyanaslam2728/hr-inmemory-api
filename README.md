# HR Backend (Node.js + TypeScript)

A lightweight backend service built with **Node.js** and **TypeScript**, designed for HR management operations using **in-memory data storage** (no external database).

---

## 🚀 Getting Started

### **1. Install dependencies**

```bash
npm install
```

### **2. Start the server**

```bash
npm start
```

### **3. Run unit tests**

```bash
npm test
```

## 🧩 API Base URL

All API endpoints are prefixed with:

```
http://localhost:8080/api/v1/
```

## 📬 Testing the API

A Postman collection is included in the repository for easy testing of the available endpoints.
Import the collection into Postman and update the environment if necessary before sending requests.

### File:

```
HR-inmemory_api.postman_collection.json
```

## 🧠 Notes / Assumptions

- The project uses in-memory storage, so all data resets on server restart.

- Follows a modular folder structure for scalability and clarity.

- Built for demonstration and learning purposes.
