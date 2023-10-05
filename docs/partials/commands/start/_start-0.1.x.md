Start a new Cloney template repository using the `start` command. This command creates a directory with all the necessary files to begin a new Cloney template repository.

## Flags

| Flag                        | Description                                                                   | Default Value                    |
|-----------------------------|-------------------------------------------------------------------------------|----------------------------------|
| `-a, --authors stringArray` | Specifies the authors of the template repository.                             | `[]`                             |
| `-d, --description string`  | Specifies the description of the template repository.                         | `"A Cloney template repository"` |
| `-l, --license string`      | Specifies the license of the template repository.                             | `"MIT"`                          |
| `-n, --name string`         | Specifies the name of the template repository.                                | `"cloney-template"`              |
| `-y, --non-interactive`     | Skip questions and use default values and/or flags.                           | `false`                          |
| `-o, --output string`       | Specifies the directory where the template repository will be saved.          | `"cloney-template"`              |


## Example 1: Basic Template Creation

Start a new template repository with interactive prompts:

```bash
cloney start
```

## Example 2: Non-Interactive Mode

Start a new template repository with default values and skip prompts:

```bash
cloney start -y
```
