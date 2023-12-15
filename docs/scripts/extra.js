/*
  **************************************************************************************************************************
  Script to update the download buttons (Windows) and the download command (Linux/macOS) based on the latest Cloney release.
  **************************************************************************************************************************
*/

// Constants for the Cloney website.
const CLONEY_GETTING_STARTED_PAGE_URL_SUFFIX = "/getting-started/";

// Constants for Cloney GitHub API and website elements.
const CLONEY_GITHUB_API_URL =
  "https://api.github.com/repos/ArthurSudbrackIbarra/cloney";
const DOWNLOAD_LABELS = document.querySelectorAll(".download-label");
const LINUX_MACOS_DOWNLOAD_LINK = document.querySelector(
  "#linux-macos-download-link"
);

// Function to update the download buttons (Windows) and the download command (Linux/macOS) to the latest Cloney release.
async function updateVersionReferences() {
  // Fetch information about the latest Cloney releases from the GitHub API.
  const response = await fetch(`${CLONEY_GITHUB_API_URL}/tags`);
  const releases = await response.json();

  // Choose the first release as the latest (modify the index if needed).
  const latestTag = releases[0]?.name;
  if (!latestTag) {
    console.error("Failed to retrieve the latest Cloney release from GitHub.");
    return;
  }

  // Update the download labels with the latest release version.
  for (const label of DOWNLOAD_LABELS) {
    label.innerHTML = `${latestTag} (Latest)`;
  }

  // Update the download buttons (Windows) with the latest release link.
  for (const button of DOWNLOAD_WINDOWS_AMD64_BUTTONS) {
    button.innerText = `Download Cloney ${latestTag}`;
    button.href = `https://github.com/ArthurSudbrackIbarra/cloney/releases/download/${latestTag}/cloney-windows-amd64.zip`;
  }
  for (const button of DOWNLOAD_WINDOWS_ARM64_BUTTONS) {
    button.innerText = `Download Cloney ${latestTag}`;
    button.href = `https://github.com/ArthurSudbrackIbarra/cloney/releases/download/${latestTag}/cloney-windows-arm64.zip`;
  }

  // Update the download command (Linux/macOS) with the latest release link.
  LINUX_MACOS_DOWNLOAD_LINK.innerText = `"https://raw.githubusercontent.com/ArthurSudbrackIbarra/cloney/${latestTag}/installation/install.sh"`;
}

/*
  *******************************************************************************************
  Script to recommend the appropriate Cloney version based on the user's OS and architecture.
  *******************************************************************************************
*/

// Constants for download buttons on the Cloney website.
const DOWNLOAD_WINDOWS_AMD64_BUTTONS = document.querySelectorAll(
  ".download-windows-amd64"
);
const DOWNLOAD_WINDOWS_ARM64_BUTTONS = document.querySelectorAll(
  ".download-windows-arm64"
);

// Initialize the user agent parser to extract information about the user's system.
const parser = new UAParser();

// Extract the user's operating system and architecture from the user agent information.
const os = parser.getOS().name;
const arch = parser.getCPU().architecture;

// Functions to detect the user's system characteristics.
function isWindows() {
  return os === "Windows";
}
function isMac() {
  return os === "Mac OS";
}
function isLinux() {
  return !isWindows() && !isMac();
}
function isAMD64() {
  return arch === "amd64";
}
function isARM64() {
  return arch.startsWith("arm64");
}

// Function to add a guide to the download buttons to assist users in selecting the correct download.
function addGuideToDownloadButtons() {
  if (window.location.href.includes(CLONEY_GETTING_STARTED_PAGE_URL_SUFFIX)) {
    // Determine the appropriate download buttons based on the user's system.
    let downloadButtons = [];
    if (isWindows() && isAMD64()) {
      downloadButtons = DOWNLOAD_WINDOWS_AMD64_BUTTONS;
    } else if (isWindows() && isARM64()) {
      downloadButtons = DOWNLOAD_WINDOWS_ARM64_BUTTONS;
    }

    // Add a label to the download buttons to assist users in selecting the correct download.
    // This label helps users who might not be familiar with their system's OS and architecture.
    for (const button of downloadButtons) {
      button.innerHTML +=
        "<br/><span style='color: #1e7275'>Your System</span>";
    }
  }
}

// Update the version references when the script is executed on the Cloney website's "Getting Started" page.
if (window.location.href.includes(CLONEY_GETTING_STARTED_PAGE_URL_SUFFIX)) {
  updateVersionReferences().then(() => {
    addGuideToDownloadButtons();
  });
}
