# Getting Started with Cloney

Whether you want to use existing Cloney templates or create your own, the first step is to install the Cloney Command-Line Interface (CLI) on your system.

## Installing Cloney

To begin your Cloney journey, follow these steps to install the Cloney CLI on your system. You can install Cloney on Windows, Linux, or macOS.

=== "Windows :fontawesome-brands-windows:"
    ### Step 1: Download the Cloney Executable for Windows

    Refer to the table below to choose the download button corresponding to your operating system's architecture:

    === "1.0.0 (Latest) <img class='twemoji lg middle' src='../images/cloney-logo-no-text-rounded.png' style='margin-left: 5px'>"
        --8<-- "partials/downloads/windows/_1.0.0.md"

    ### Step 2: Unzip the Downloaded File and Add Cloney to Your System's PATH

    After downloading Cloney, to make it accessible from the command line, you will need to unzip the downloaded file and then add the Cloney executable to your system's PATH:

    1. **Unzip the Downloaded File:** Locate the downloaded Cloney zip file and right-click on it. Select "Extract All" from the context menu and follow the prompts to unzip the file.

    1. **Open the Start Menu:** Click on the Windows icon in the taskbar to open the Start Menu.

    1. **Search for "Environment Variables":** In the search bar, type "Environment Variables" and select "Edit the system environment variables" from the results.

    1. **Open the Environment Variables:** In the System Properties window, click the "Environment Variables" button near the bottom right.

    1. **Edit the PATH Variable:** In the Environment Variables window, under the "System variables" section, find the "Path" variable and click "Edit."

    1. **Add Cloney to PATH:** Click "New" and then enter the path to the directory where you extracted the Cloney executable file. For example, if you extracted it to `C:\Program Files\Cloney`, add that path. Click "OK" to save your changes.

    1. **Verify Installation:** Open a new command prompt window, type `cloney`, and press Enter. If you see Cloney's command-line interface information, you have successfully added it to your PATH.

    That's it! Now, you've successfully unzipped the downloaded file and added Cloney to your system's PATH, allowing you to use it from the command line.

=== "Linux and macOS :material-linux: :simple-apple:"
    ### Step 1: Download the Cloney Executable for Linux or macOS

    Select your desired Cloney version and run the presented command. This command downloads and installs the Cloney executable, prompting you to enter your sudo password.

    === "1.0.0 (Latest) <img class='twemoji lg middle' src='../images/cloney-logo-no-text-rounded.png' style='margin-left: 5px'>"
        --8<-- "partials/downloads/linux-macos/_1.0.0.md"

    That's it! You've now successfully downloaded and installed Cloney on your system.

For information about the latest changes and to explore more versions, check out the [Changelog](https://github.com/ArthurSudbrackIbarra/cloney/blob/main/CHANGELOG.md) and [Releases](https://github.com/ArthurSudbrackIbarra/cloney/releases) on GitHub.

## Next Steps

Now that you have Cloney installed on your system, you're ready to start working with Cloney templates. Depending on your goals, you can choose one of two paths:

### User's Path: Using Cloney Templates as a User

If you want to leverage existing Cloney templates created by others, follow the path of a user. You can explore and clone templates tailored to various use cases. To get started as a user, head over to the [User's Guide](users/index.md) for detailed instructions on how to clone and customize Cloney templates.

### Creator's Path: Creating Your Own Cloney Templates as a Creator

If you're interested in crafting your own Cloney templates and sharing them with the community, follow the path of a creator. You can design templates, define variables, and empower others to generate projects based on your templates. To start creating templates as a creator, visit the [Creator's Guide](creators/index.md) for comprehensive guidance on template creation and customization.
