# `toFile` Function

The `toFile` function allows you to write the output of a template to a file, enabling dynamic file generation based on your templates and data. This function is particularly powerful when you need to generate multiple files with varying content from a single template.

## Description

The `toFile` function takes three parameters:

1. **Relative Path (String):** The first parameter specifies the relative path where the file will be created. This path is **relative** to the directory of the current template file.

2. **Template Name (String):** The second parameter is the name of a template containing the data that will be written to the file. This template defines the structure and content of the file.

3. **Template Data (Context):** The third parameter is the template data or context that will be used for rendering the template. This data provides the necessary information and variables required by the template.

## Usage

Here's a basic example of using the `toFile` function within a Cloney template:

```plaintext title="example-template.txt"
{{ toFile "output/example-file.txt" "my-template" . }}
```

In this example:

- The first parameter specifies that the file should be created at the relative path `"output/example-file.txt"`.
- The second parameter is the name of the template `"my-template"` that defines the content of the file.
- The third parameter (`.`) provides the template data or context needed for rendering the template.

## Example Scenario

Suppose you have a list of items, and you want to generate a separate file for each item. Here's how you can achieve this using the `toFile` function:

```plaintext title="main-template.txt" hl_lines="1-3 7"
{{- define "item-file-content" -}}
The item is: {{ . }}
{{- end -}}

{{- range .items }}
{{- $fileName := printf "output/%s.txt" . }}
{{- toFile $fileName "item-file-content" . }}
{{- end }}
```

In this example:

- The `item-file-content` is a template that defines the content for each file.
- The `range` block iterates through the list of items.
- The `$fileName` variable is dynamically created based on the current item's name.
- The `toFile` function is then used to generate a file at the specified path with the content from the template and the data from the current item.

!!!info "Compatibility"
    This function is available in Cloney `0.1.0` and later.
