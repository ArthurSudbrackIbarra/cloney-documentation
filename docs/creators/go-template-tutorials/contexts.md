# Go Templates: Contexts

In Cloney template repositories, understanding Go template contexts is essential to create dynamic and adaptable templates. Contexts determine the scope and availability of variables within your templates. This documentation will provide you with insights into the root context, local contexts, and how to navigate between them.

## Root Context

The root context in Cloney represents the top-level scope of your template. It contains global variables and user-provided variables, making it the starting point for template execution. Variables in the root context can be accessed directly using the `.` notation.

## Local Contexts

Local contexts are specific to a block or construct within your template. When you use control structures like `{{ range }}`, `{{ with }}`, or define reusable blocks with `{{ define }}`, you enter a local context. The variables available in these local contexts depend on the structure you're using.

## Accessing Variables

In Go templates, you can access variables within the current context using the `.` (dot) notation. To navigate to the root context, you can use the `$` (dollar sign) symbol. Here's an example of how variable access works in Go templates:

```plaintext
Root-level variable: {{ .app_name }}

{{ range .items }}
    Local variable: {{ .name }}
    Accessing root variable within local context: {{ $.app_name }}
{{ end }}
```

In this example, `app_name` is a root-level variable, and `name` is a local variable. We use `.` to access the local variable and `$.app_name` to access the root-level variable from within a local context.

> Note: In a [`define`](../reusable-blocks.md) structure, the root context's variables, such as `$.app_name`, are not accessible. That's because the `define` structure creates a new local context.
