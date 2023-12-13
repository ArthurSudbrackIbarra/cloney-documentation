Get information about a Cloney template repository using the `info` command. This command provides details about a Cloney template repository, including its name, description, and variables.

The `info` command can retrieve information from both local and remote template repositories. By default, it retrieves information from the current directory, assuming it is a template repository.

## Flags

| Flag                  | Description                                                                   | Default Value       |
|-----------------------|-------------------------------------------------------------------------------|---------------------|
| `-b, --branch string` | Specifies the Git branch when referencing a git repository.                   | `"main"`            |
| `-t, --tag string`    | Specifies the Git tag when referencing a git repository.                      |                     |
| `-k, --token string`  | Specifies the Git token when referencing a private git repository.            |                     |


## Example 1: Basic Info Retrieval

Retrieve information about the current template repository (assuming it is a template repository):

```bash
cloney info
```

## Example 2: Info from Local Path

Retrieve information about a template repository from a local path:

```bash
cloney info ./path/to/my/template
```

## Example 3: Info from Remote Repository URL

Retrieve information about a template repository from a remote repository URL:

```bash
cloney info https://github.com/username/repository.git
```
