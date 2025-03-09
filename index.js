// index.js
const path = require("path");
const strapiProcess = require("child_process").spawn("node", [
  "./node_modules/.bin/strapi",
  "start",
]);

strapiProcess.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

strapiProcess.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});

strapiProcess.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
