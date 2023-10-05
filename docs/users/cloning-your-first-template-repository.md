# Cloning Your First Template Repository

Cloney makes it easy to get started with template repositories and customize them to suit your needs. Let's walk through the process of cloning your first Cloney template repository.

## Step 1: Choose a Cloney Template Repository

Start by selecting a Cloney template repository that matches your project requirements. You can find Cloney template repositories on platforms like GitHub, GitLab, or Bitbucket.

## Step 2: Create a YAML Variables File

If the Cloney template repository you've chosen includes variables that you'd like to customize, you can create a YAML variables file. This file allows you to define custom values for variables specified in the template repository's [`.cloney.yaml`](../creators/cloney-metadata-file.md) metadata file. Here's an example:

```yaml title=".cloney-vars.yaml"
app_name: My App
enable_https: true
currencies:
  - Real
  - US Dollar
  - Yen
```

In this example, we've customized variables like `app_name`, `enable_https`, and `currencies` to match our project's requirements.

## Step 3: Clone the Template Repository

Use the Cloney Command-Line Interface (CLI) to clone the template repository and, if needed, apply your custom variables. Here's how to do it:

```bash
cloney clone https://github.com/username/repository.git --variables your-variables-file.yaml
```

- Replace `https://github.com/username/repository.git` with the URL of the Cloney template repository you want to clone.
- Use `--variables your-variables-file.yaml` to specify the path to your YAML variables file if you've created one.

By running this command, Cloney will clone the template repository and, if provided, apply the custom values from your YAML variables file. This ensures that your generated project reflects your specific configurations and requirements.
