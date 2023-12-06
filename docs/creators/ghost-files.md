# Ghost Files

In Cloney template repositories, ghost files are special files or directories whose names start with double underscores (`__`). These files are ignored during the cloning process, meaning they won't be included in the final result. However, any Go template logic embedded within these ghost files is still processed.

## Creating Ghost Files

To create a ghost file, follow these steps:

1. **Name Convention**: Begin by naming your file or directory with a double underscore prefix, like `__my-ghost-file.txt` or `__my-ghost-dir`.

2. **Define Template Logic**: Inside the ghost file, include Go template logic using constructs like `{{ ... }}` and other Go template syntax.

Here's an example of a simple ghost file named `__ghost-file.txt`:

```plaintext title="__ghost-file.txt"
This is a ghost file.
This file won't appear in the cloned project.

{{- $variable := "You can use this variable anywhere." -}}

{{- define "my-ghost-block" }}
You can reference this block in non-ghost template files!
{{- end }}
```

## Usage and Purpose

Ghost files serve various purposes in Cloney template repositories:

- **Organizing Template Logic**: Ghost files provide a space to organize and encapsulate template logic without affecting the cloned project's structure.

- **Sharing Common Logic**: You can create shared ghost files containing commonly used template logic, making it accessible across multiple template files.

- **Conditional Content**: Include conditional logic in ghost files to control content based on specific criteria without cluttering the cloned project.

## Example Use Case

Suppose you need to include a license header in every file of your cloned project. You can create a ghost file `__license-header.txt` containing the license header definition and then reference it in all the other template files.

```plaintext title="__license-header.txt" hl_lines="1-4"
{{- define "license-header" -}}
This is a license header.
Copyright 2020.
{{- end -}}
```

```plaintext title="template-file.txt" hl_lines="1"
{{ template "license-header" }}

Content of the template file...
```

In this way, ghost files provide a convenient mechanism to structure, share, and reuse template logic without affecting the final output of the cloned project.
