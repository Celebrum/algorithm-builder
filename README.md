# Custom Math Library

A custom JavaScript mathematics library.

## Usage

```javascript
// Node.js
const mathLib = require('./mathLib.js');

// Browser
<script src="mathLib.js"></script>
```

## Documentation

Add your mathematical functions documentation here.

## Version

1.0.0

# Algorithm Builder Installation Guide

## Prerequisites

1. **Node.js and npm**
   - Download Node.js from [nodejs.org](https://nodejs.org/)
   - npm comes included with Node.js
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

2. **Docker**
   - Download Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)
   - Install Docker Desktop
   - Start Docker Desktop
   - Verify installation:
     ```bash
     docker --version
     ```

## Installation Steps

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd algorithm-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

## Verification

To verify everything is working:

1. The application should be running on `http://localhost:3000`
2. Docker containers should be running (check with `docker ps`)

## Troubleshooting

- If npm installation fails, try clearing npm cache:
  ```bash
  npm cache clean --force
  ```
- If Docker fails to start, ensure virtualization is enabled in your BIOS settings
