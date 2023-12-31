# Creating Your First Template Repository

Creating a Cloney template repository allows you to share project templates that others can clone and customize. Follow these steps to create your very first Cloney template repository:

## Step 1: Initialize a New Template Repository

Use the Cloney Command-Line Interface (CLI) to start a new Cloney template repository. This will create a directory with the necessary files for your template.

```bash
cloney start
```

This command will guide you through the setup process, where you can specify details like authors, description, and license for your template repository.

## Step 2: Define Template Variables

Within your template repository directory, you can define variables in a [`.cloney.yaml`](cloney-metadata-file.md) metadata file. These variables will be customizable by users who clone your template repository. Here's an example:

```yaml title=".cloney.yaml"
# Other metadata fields...

# Define variables.
variables:
  - name: app_name
    description: The name of the application.
    default: My App
    example: My App

  - name: dark_mode
    description: Whether or not to enable dark mode.
    example: true
```

Define the variables that users can customize and provide descriptions and examples to help users understand their purpose.

## Step 3: Create Template Files

Create the template files that make up your project or application. In these template files, you can [reference the user variables](accessing-template-variables.md) you defined in the `.cloney.yaml` file. For example, to include the user's chosen `app_name` in a file, use the variable like this:

```python title="example-file.py" hl_lines="2"
print("Hello, World!")
print("This is my app: {{ .app_name }}")
print("Bye!")
```

You can insert variables throughout your template files to make them dynamic and adapt to the user's inputs.

## Step 4: Share Your Template Repository

Share your template repository on platforms like GitHub, GitLab, or Bitbucket. Others can then clone your template repository and customize it according to their project requirements.

- Upload your template repository to a code hosting platform of your choice.
- Ensure that the repository is public or accessible to your intended audience.
