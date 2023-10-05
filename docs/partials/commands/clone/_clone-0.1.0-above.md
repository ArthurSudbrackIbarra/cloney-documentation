Clone a template repository using the `clone` command. This command allows you to clone a Cloney Template Repository while providing the option to customize it with specific variable values.

By default, this command searches for a file named `.cloney-vars.yaml` in your current directory for variable values. However, with the `--variables` flag you can specify a different file or pass the variables inline as YAML.

## Flags

| Flag                     | Description                                                                   | Default Value         |
|--------------------------|-------------------------------------------------------------------------------|-----------------------|
| `-b, --branch string`    | Specifies the Git branch.                                                     | `"main"`              |
| `-o, --output string`    | Specifies the path to clone the repository to.                                |                       |
| `-t, --tag string`       | Specifies the Git tag.                                                        |                       |
| `-k, --token string`     | Specifies the Git token, if referencing a private Git repository.             |                       |
| `-v, --variables string` | Specifies the path to a template variables file or raw YAML.                  | `".cloney-vars.yaml"` |

## Example 1: Basic Cloning

Clone a template repository without specifying a variables file:

```bash
cloney clone https://github.com/username/repository.git
```

## Example 2: Using a Custom Variables File

Clone a template repository and specify a different variables file (e.g., `variables.yaml`):

```bash
cloney clone https://github.com/username/repository.git -v variables.yaml
```

## Example 3: Inline Variables

Clone a template repository with inline variable values:

```bash
cloney clone https://github.com/username/repository.git -v '{ var1: value, var2: value }'
```
