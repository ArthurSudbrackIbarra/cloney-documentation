# `validate` Command

Validate your Cloney template repository using the `validate` command. This command checks whether your Cloney template repository is valid by verifying the presence of the `.cloney.yaml` metadata file and checking if it is valid.

## Flags

| Flag                  | Description                                                                   | Default Value       |
|-----------------------|-------------------------------------------------------------------------------|---------------------|
| `-h, --help`          | Displays help information for the `validate` command.                         |                     |
| `-p, --path string`   | Specifies the path to your local template repository for validation.          | `"."`               |

You can use this content to create the documentation for the `validate` command in your documentation. If you have more commands to document or need further assistance, please feel free to let me know!


## Example 1: Basic Validation

Validate the current template repository (assuming it is a template repository):

```bash
cloney validate
```

## Example 2: Validation from Local Path

Validate a template repository from a local path:

```bash
cloney validate --path ./path/to/my/template
```

!!!info "Compatibility"
    This command is available in Cloney 0.1.0 and later.
