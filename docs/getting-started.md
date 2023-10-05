# Getting Started with Cloney

Whether you want to use existing Cloney templates or create your own, the first step is to install the Cloney Command-Line Interface (CLI) on your system.

## Installing Cloney

To begin your Cloney journey, follow these steps to install the Cloney CLI on your system. You can install Cloney on Windows, Linux, or macOS and choose the appropriate architecture for your machine.

### Step 1: Choose Your Operating System and Architecture

Refer to the table below to select the download button that matches your operating system and architecture:

=== "Latest (0.1.1) <img class='twemoji lg middle' src='../images/cloney-logo-no-text-rounded.png' style='margin-left: 5px'>"
    --8<-- "partials/downloads/_0.1.1.md"

### Step 2: Unzip the Downloaded File and Add Cloney to Your System's PATH

After downloading Cloney, to make it accessible from the command line, you will need to unzip the downloaded file and then add the Cloney executable to your system's PATH. The process for adding Cloney to your PATH varies depending on your operating system:

=== "Windows :fontawesome-brands-windows:"

    1. **Unzip the Downloaded File:** Locate the downloaded Cloney zip file and right-click on it. Select "Extract All" from the context menu and follow the prompts to unzip the file.

    2. **Open the Start Menu:** Click on the Windows icon in the taskbar to open the Start Menu.

    3. **Search for "Environment Variables":** In the search bar, type "Environment Variables" and select "Edit the system environment variables" from the results.

    4. **Open the Environment Variables:** In the System Properties window, click the "Environment Variables" button near the bottom right.

    5. **Edit the PATH Variable:** In the Environment Variables window, under the "System variables" section, find the "Path" variable and click "Edit."

    6. **Add Cloney to PATH:** Click "New" and then enter the path to the directory where you extracted the Cloney executable file. For example, if you extracted it to `C:\Program Files\Cloney`, add that path. Click "OK" to save your changes.

    7. **Verify Installation:** Open a new command prompt window, type `cloney`, and press Enter. If you see Cloney's command-line interface information, you have successfully added it to your PATH.

=== "Linux and macOS :material-linux: :simple-apple:"

    1. **Unzip the Downloaded File:** Open a terminal window, navigate to the directory where you downloaded Cloney, and use the `unzip` command to extract the contents of the downloaded zip file.

        ```bash
        unzip cloney-linux-amd64.zip # Change the filename as needed.
        ```

    1. **Edit Your Shell Profile:** Depending on your shell (bash, zsh, etc.), open the appropriate shell profile configuration file.

        - For bash, you can edit the `.bashrc` file using a text editor like `nano` or `vim`:

            ```bash
            nano ~/.bashrc
            ```

        - For zsh, edit the `.zshrc` file:

            ```bash
            nano ~/.zshrc
            ```

    1. **Add Cloney to PATH:** Add the following line at the end of the file, replacing `/path/to/cloney` with the actual path to the directory where you extracted the Cloney executable file:
        
        ```bash
        export PATH="$PATH:/path/to/cloney"
        ```

    1. **Save and Exit:** Save the file and exit the text editor.

    1. **Reload Your Shell:** To apply the changes, either restart your terminal or run the following command:

        ```bash
        source ~/.bashrc   # For bash users.
        source ~/.zshrc    # For zsh users.
        ```

    1. **Verify Installation:** Open a new terminal window, type `cloney`, and press Enter. If you see Cloney's command-line interface information, you have successfully added it to your PATH.

That's it! Now, you've successfully unzipped the downloaded file and added Cloney to your system's PATH on Windows, Linux, or macOS, allowing you to use it from the command line.

## Next Steps

Now that you have Cloney installed on your system, you're ready to start working with Cloney templates. Depending on your goals, you can choose one of two paths:

### User's Path: Using Cloney Templates as a User

If you want to leverage existing Cloney templates created by others, follow the path of a user. You can explore and clone templates tailored to various use cases. To get started as a user, head over to the [User's Guide](users/index.md) for detailed instructions on how to clone and customize Cloney templates.

### Creator's Path: Creating Your Own Cloney Templates as a Creator

If you're interested in crafting your own Cloney templates and sharing them with the community, follow the path of a creator. You can design templates, define variables, and empower others to generate projects based on your templates. To start creating templates as a creator, visit the [Creator's Guide](creators/index.md) for comprehensive guidance on template creation and customization.
