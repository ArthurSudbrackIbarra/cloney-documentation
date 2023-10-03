# Getting Started with Cloney

Whether you want to use existing Cloney templates or create your own, the first step is to install the Cloney Command-Line Interface (CLI) on your system.

## Installing Cloney

To begin your Cloney journey, follow these steps to install the Cloney CLI on your system. You can install Cloney on Windows, Linux, or macOS and choose the appropriate architecture for your machine.

### Step 1: Choose Your Operating System and Architecture

Refer to the table below to select the download button that matches your operating system and architecture:

=== "Latest (0.1.1)"
    --8<-- "partials/downloads/_0.1.1.md"

<!-- Include UAParser package to detect OS and architecture. -->
<script src="https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js"></script>

<!-- Script to recommend the appropriate Cloney version based on the user's OS and architecture. -->
<script>
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
    button.classList.add("pulse");
  }
</script>

### Step 2: Add Cloney to Your System's PATH

After the download is complete, you will need to unzip the downloaded file. Once unzipped, add the Cloney executable to your system's PATH to make it accessible from the command line.

## Next Steps

Now that you have Cloney installed on your system, you're ready to start working with Cloney templates. Depending on your goals, you can choose one of two paths:

### User's Path: Using Cloney Templates as a User

If you want to leverage existing Cloney templates created by others, follow the path of a user. You can explore and clone templates tailored to various use cases. To get started as a user, head over to the [User's Guide](users/index.md) for detailed instructions on how to clone and customize Cloney templates.

### Creator's Path: Creating Your Own Cloney Templates as a Creator

If you're interested in crafting your own Cloney templates and sharing them with the community, follow the path of a creator. You can design templates, define variables, and empower others to generate projects based on your templates. To start creating templates as a creator, visit the [Creator's Guide](creators/index.md) for comprehensive guidance on template creation and customization.
