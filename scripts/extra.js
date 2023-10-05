// Script to recommend the appropriate Cloney version based on the user's OS and architecture.

// Initialize the user agent parser.
const parser = new UAParser();

// Get the user's operating system and architecture.
const os = parser.getOS().name;
const arch = parser.getCPU().architecture;

// Function to detect if the user is on Windows OS.
function isWindows() {
  return os === "Windows";
}

// Function to detect if the user is on macOS.
function isMac() {
  return os === "Mac OS";
}

// Function to detect if the user is on Linux (assuming non-Windows and non-Mac OS).
function isLinux() {
  return !isWindows() && !isMac();
}

// Function to detect if the user's architecture is AMD64.
function isAMD64() {
  return arch === "amd64";
}

// Function to detect if the user's architecture is ARM64.
function isARM64() {
  return arch.startsWith("arm64");
}

// Find and highlight the appropriate download button with a pulse effect.
let downloadButtons = [];
if (isWindows() && isAMD64()) {
  downloadButtons = document.getElementsByClassName("download-windows-amd64");
} else if (isWindows() && isARM64()) {
  downloadButtons = document.getElementsByClassName("download-windows-arm64");
} else if (isLinux() && isAMD64()) {
  downloadButtons = document.getElementsByClassName("download-linux-amd64");
} else if (isLinux() && isARM64()) {
  downloadButtons = document.getElementsByClassName("download-linux-arm64");
} else if (isMac() && isAMD64()) {
  downloadButtons = document.getElementsByClassName("download-macos-amd64");
} else if (isMac() && isARM64()) {
  downloadButtons = document.getElementsByClassName("download-macos-arm64");
}

// Apply the pulse effect to the matched download buttons
for (const button of downloadButtons) {
  button.innerHTML += "<br/><span style='color: #1e7275'>Your System</span>";
}
