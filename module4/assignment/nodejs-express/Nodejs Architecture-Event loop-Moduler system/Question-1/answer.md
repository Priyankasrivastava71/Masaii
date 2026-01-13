1. Node.js Architecture-

Node.js architecture is designed to handle many users at the same time. It works on a single thread but still manages multiple tasks using asynchronous behavior.

JavaScript Engine (V8):

The V8 engine is made by Google. JavaScript runs on the V8 engine, and it helps JavaScript code run fast and smoothly in Node.js.

Node.js Core APIs:

Core APIs are built-in features like file system, HTTP, and OS. They help us create servers, read files, and handle requests.

Native Bindings:

Native bindings connect JavaScript with C/C++ code so Node.js can interact with the system.

Event Loop:

The event loop manages all tasks and callbacks. It mainly handles time-taking tasks and decides which task should run next without blocking the main thread.

2. libuv-

What is libuv?

libuv is a library that helps Node.js handle async operations. In simple words, it helps manage time-taking tasks.

Why Node.js needs libuv?

Node.js needs libuv to manage time-taking and non-blocking tasks like file reading and network calls, basically async tasks.

Responsibilities of libuv:

libuv handles the event loop, async I/O operations, timers, and the thread pool.

3. Thread Pool-

What is a thread pool?

A thread pool is a group of background threads used to execute heavy tasks.

Why Node.js uses a thread pool?

Node.js uses a thread pool so that heavy tasks do not block the main thread.

Which operations are handled by the thread pool?

File system operations, crypto tasks, and DNS operations use the thread pool.

4. Worker Threads-

What are worker threads?

Worker threads are extra threads used to run heavy JavaScript code.

Why are worker threads needed?

They are needed to handle CPU-heavy tasks without blocking the main thread.

Difference between thread pool and worker threads:

Thread pool is used internally by Node.js, while worker threads are used for custom heavy JavaScript work.

5. Event Loop Queues-

Macro Task Queue:
Handles tasks like setTimeout, setInterval, and I/O callbacks.

Micro Task Queue:
Handles promises and process.nextTick.

Execution priority:
Micro task queue is executed before macro task queue.
Example:
Promise callbacks run before setTimeout.