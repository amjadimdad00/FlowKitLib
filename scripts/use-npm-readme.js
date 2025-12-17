import fs from "fs";

fs.copyFileSync("README.npm.md", "README.md");
console.log("Switched to npm README");
