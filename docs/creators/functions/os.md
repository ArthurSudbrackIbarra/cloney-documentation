# `os` Function

The `os` function provided by Cloney returns the user's operating system.

## Description

This function has no parameters and is useful for generating OS-specific content in your Cloney templates.

## Return Value

The `os` function returns a string representing the user's operating system.

## Example

Here's an example of how to use the `os` function in a Cloney template:

``` title="README.md" hl_lines="3"
To start the 'abc' service, run the following command:

{{ if eq (os) "windows" }}
    ./abc.exe
{{ else }}
    ./abc
{{ end }}
```

This will generate content like:

``` title="README.md"
To start the 'abc' service, run the following command:

./abc.exe
```

!!!info "Compatibility"
    This function is available in Cloney 0.1.0 and later.
