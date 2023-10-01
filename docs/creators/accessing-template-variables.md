# Accessing Template Variables

Cloney makes it effortless to access and utilize variables within your template files. It employs the Go template syntax, a powerful and flexible language for generating text and code. It's essential to note that you **don't require any knowledge of Go programming** to utilize Cloney effectively. The term "Go template" is simply a historical reference to the language where these templates initially emerged.

To access and use variables within your template files, follow these steps:

1. **Enclose Variables with Double Curly Braces**: To indicate that a piece of text should be replaced with a variable's value, enclose the variable name within double curly braces. For example, `{{ .VariableName }}`.

2. **Use the Dot (`.`) to Access Variables**: In Go templates, you access variables by prefixing their names with a dot (`.`). This dot signifies the context in which the variable is defined.

**Example:**

Imagine you're working with a Cloney Template Repository for a billing system. In this template, you want to create a customized HTML file based on various parameters. Let's explore how Cloney's variables can make this process effortless.

Here's a snippet from your template HTML file, `index.html`:

```html
<!-- File: index.html -->

<h1>
  {{ .app_name }} is a fantastic app that supports the following currencies:
</h1>
<ul>
  {{- range .currencies }}
  <li>{{ . }}</li>
  {{- end }}
</ul>

{{- if .enable_https }}
<p>HTTPS is enabled.</p>
{{- end }}
```

Now, let's break down what's happening here:

- `{{ .app_name }}`: This placeholder will be replaced with the user-defined name of the application when you generate your customized template.

- `{{- range .currencies }} ... {{- end }}`: This construct iterates through the list of currencies provided by the user during the cloning process. It dynamically generates list items for each currency.

- `{{- if .enable_https }} ... {{- end }}`: This conditional block checks if the user has chosen to enable HTTPS during cloning. If so, it includes a paragraph indicating that HTTPS is enabled.

When you use Cloney to create your template based on user input, it automatically populates these placeholders with the values you specified during the cloning process. This results in a tailored HTML file that perfectly suits your requirements.

Here's an example of what the generated HTML could look like:

```html
<!-- File: index.html -->

<h1>MyApp is a fantastic app that supports the following currencies:</h1>
<ul>
  <li>Real</li>
  <li>US Dollar</li>
  <li>Yen</li>
</ul>

<p>HTTPS is enabled.</p>
```

!!! note ""

    It's important to mention that, although this example uses HTML, you can use Cloney variables in any type of file. This includes YAML, JSON, Markdown, and even source code files.
