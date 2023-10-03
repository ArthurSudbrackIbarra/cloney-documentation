# `arch` Function

The `arch` function provided by Cloney returns the user's operating system architecture.

## Description

This function has no parameters and is useful for generating architecture-specific content in your Cloney templates.

## Return Value

The `arch` function returns a string representing the user's operating system architecture.

## Example

Here's an example of how to use the `arch` function in a Cloney template:

``` title="README.md" hl_lines="3"
To start the 'abc' service, run the following command:

{{ if eq (arch) "amd64" }}
    ./abc_amd64
{{ else if eq (arch) "arm64" }}
    ./abc_arm64
{{ else }}
    ./abc
{{ end }}
```

This will generate content like:

``` title="README.md"
To start the 'abc' service, run the following command:

./abc_amd64
```

!!!info "Compatibility"
    This function is compatible with Cloney versions `v0.1.0` and above.
