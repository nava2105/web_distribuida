# web_distribuida

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

---

## General Info
***  
This project is a simple **Express.js** application that serves a static HTML file and provides a JSON endpoint `/info` to retrieve the local IP address and server port information.

### **Key Features**
- **Static HTML Page:** The main page (`index.html`) is served with interactive content.
- **JSON API Endpoint:**
  - **Route:** `/info`
  - **Response:** Returns the server's IP address and port.
- **Client-Side Interaction:**
  - Uses `fetch` to retrieve server data dynamically.
  - Includes a button to refresh the page.

---

## Technologies
***  
The following technologies are used in this project:

- [Node.js](https://nodejs.org): Version 20.0.0
- [Express.js](https://expressjs.com): Version 4.x
- HTML5, CSS3, and JavaScript (Frontend)
- Font Awesome (for icons)

---

## Installation
***  
Follow these steps to install and run the project:

### Via GitHub
Make sure **Node.js** and **npm** are installed on your system:

```
node --version  
npm --version
```

Copy the repository

```
git clone https://github.com/nava2105/js_mqtt.git
```

Enter the directory

```
cd ../web_distribuida
```

Install the dependencies

```
npm install  
```

Run the server

```
node app.js
```

Run testing

```
nmp test
```

Activate the pre-commit Git hook: Copy the **pre-commit** hook to the Git hooks directory:

```
copy pre-commit .git\hooks
```

Open a browser and enter to

Server: [http://localhost:3000](http://localhost:3000)

### Via Docker-hub

Pull the image from Docker-hub

```
docker pull na4va4/web_distribuida
```

Start a container from the image

```
docker run -p 3000:3000 na4va4/web_distribuida
```

Open a browser and enter to
Server: [http://localhost:3000](http://localhost:3000)