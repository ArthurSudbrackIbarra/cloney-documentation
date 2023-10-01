# Providing Custom Variables

When working with Cloney Template Repositories, users can easily customize variables by providing values that correspond to the variable definitions in the template repository's `.cloney.yaml` metadata file. This allows you to tailor the template to your specific requirements.

## Creating a YAML Variables File

To provide custom values for the variables, create a YAML variables file. In this file, you'll define the values you want to assign to the variables. Here's an example of a YAML variables file:

```yaml
app_name: My App
enable_https: true
currencies:
  - Real
  - US Dollar
  - Yen
```

In this example, we've defined values for three variables: `app_name`, `enable_https`, and `currencies`. You can customize these variables according to your project's needs.

## Using Cloney CLI to Apply Custom Variables

Once you've created your YAML variables file, you can apply it to the Cloney Template Repository using the Cloney Command-Line Interface (CLI). Here's how to do it:

```bash
cloney clone https://github.com/username/repository.git --variables your-variables-file.yaml
```

In this command:

- `https://github.com/username/repository.git` is the URL of the Cloney Template Repository you want to clone.
- `--variables your-variables-file.yaml` specifies the path to your YAML variables file, which contains the custom values for the template variables.

By running this command, Cloney will clone the template repository and apply the custom values from your YAML variables file during the cloning process. This ensures that the generated project reflects your specific configurations and requirements.
