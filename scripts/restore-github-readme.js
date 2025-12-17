import { execSync } from "child_process";

try {
  execSync("git checkout -- README.md", { stdio: "inherit" });
  console.log("Restored GitHub README");
} catch {
  console.warn("Could not restore README.md automatically");
}
