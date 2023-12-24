// ! Cluster Module
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

// If the current process is the master process
if (cluster.isMaster) {
  console.log(`Master process is running (PID: ${process.pid})`);

  // Fork workers (chefs)
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for the exit event to fork a new worker if one dies
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker (PID: ${worker.process.pid}) died. Forking a new one.`);
    cluster.fork();
  });
} else {
  // If the current process is a worker (chef)
  console.log(`Worker process is running (PID: ${process.pid})`);

  // Create an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("Hello from the chef!\n");
    })
    .listen(3000);
}

// **Analogy: Restaurant with Multiple Chefs**

// 1. **Simple Explanation:**
//    - Imagine you're running a busy restaurant. To handle many incoming orders efficiently, you decide to have multiple chefs in the kitchen. Each chef can independently cook a dish, allowing your restaurant to serve more customers at the same time.

// 2. **Relating to Node.js:**
//    - In Node.js, the Cluster module is like having multiple chefs (workers) to handle incoming requests concurrently. It allows your Node.js application to utilize multiple processes, taking advantage of all available CPU cores.

// **Translating the Analogy into Code:**

// Let's consider a scenario where your restaurant (Node.js application) uses the Cluster module to handle incoming orders (requests) more efficiently.

// **Explanation of the Code:**

// 1. **Master Process:**
//    - The master process (`cluster.isMaster`) is like the restaurant owner. It forks multiple worker processes (chefs) to handle incoming orders.

// 2. **Worker Processes:**
//    - Each worker process (`cluster.fork()`) is like a chef. They can independently handle requests without waiting for each other.

// 3. **Handling Worker Death:**
//    - If a worker (chef) dies for any reason, the master process listens for the 'exit' event and forks a new worker to replace the one that died.

// 4. **HTTP Server:**
//    - Each worker (chef) runs its own HTTP server, responding to incoming requests independently.

// **In Node.js Terms:**
// - **Cluster Module:** It's like having multiple chefs (workers) in a restaurant (Node.js application) to handle orders (requests) concurrently, making the application more efficient and scalable.

// This analogy simplifies the concept of the Cluster module, which allows Node.js applications to take advantage of multi-core systems by distributing incoming requests across multiple processes.
