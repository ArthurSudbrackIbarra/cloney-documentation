# Dynamic File Generation

Cloney, allows you to not only replace placeholders with variable values but also generate files and directories dynamically. This feature is particularly useful for creating multiple files based on a template and data. Let's dive into the process using a practical example.

## Example Scenario

Suppose you have a YAML variables file like the one below:

```yaml title=".cloney-vars.yaml"
app_name: MyApp
currencies:
  - name: USD
    symbol: $
    description: "United States Dollar"
  - name: EUR
    symbol: €
    description: "Euro"
  - name: GBP
    symbol: £
    description: "British Pound"
```

Your goal is to create a home page that lists all the currencies and links to a dedicated page for each currency.

### Creating the `home.html` Template

You can start by creating a `home.html` file that dynamically generates the content for each currency and generates links to their respective pages.

```html title="home.html" hl_lines="3-18 25"
<!-- File: home.html -->

{{- define "currency-file-content" -}}
<!-- File: {{ .name }}.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Currency: {{ .name }}</title>
</head>
<body>
    <h1>Currency: {{ .name }}</h1>
    <p>Symbol: {{ .symbol }}</p>
    <p>Description: {{ .description }}</p>
</body>
</html>
{{- end -}}

<p>Check out the different currencies:</p>

<ul>
{{- range .currencies }}
{{- $fileName := printf "%s.html" .name }}
{{- toFile $fileName "currency-file-content" . }}
  <li>
    <a href="{{ $fileName }}">{{ .name }}</a>
  </li>
{{- end }}
</ul>
```

Let's break down what's happening within this template:

!!! note ""

    `{{- define "currency-file-content" -}} ... {{- end -}}`: This defines a template named `currency-file-content` that will be used to generate the content of each currency's page.

!!! note ""

    `{{- range .currencies }} ... {{- end }}`: This iterates through the list of currencies provided in your YAML data.

!!! note ""

    `{{- $fileName := printf "%s.html" .name }}`: This creates a variable named `fileName` to store the name of the file to be generated. The file name will be constructed using the currency's name with the `.html` extension.

!!! note ""

    `{{- toFile $fileName "currency-file-content" . }}`: This generates a file named `fileName` using the `currency-file-content` template and the current currency as the [context](./go-template-tutorials/contexts.md). This is where the dynamic file generation happens.


### Generated Output

When Cloney processes this template, it generates several files. The `home.html` file will have the following content:

```html title="home.html"
<!-- File: home.html -->

<p>Check out the different currencies:</p>
<ul>
  <li>
    <a href="USD.html">USD</a>
  </li>
  <li>
    <a href="EUR.html">EUR</a>
  </li>
  <li>
    <a href="GBP.html">GBP</a>
  </li>
</ul>
```

Additionally, Cloney generates three other files, namely `USD.html`, `EUR.html`, and `GBP.html`, each containing content specific to the respective currency:

```html title="USD.html"
<!-- File: USD.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Currency: USD</title>
</head>
<body>
    <h1>Currency: USD</h1>
    <p>Symbol: $</p>
    <p>Description: United States Dollar</p>
</body>
</html>
```

## Known Limitations and Workarounds

While Cloney's dynamic file generation is a powerful feature, there are certain limitations and workarounds to consider when working with it.

### Limitation: Variable Scopes in Dynamic File Generation

When working with Cloney's dynamic file generation, one notable limitation is related to variable scopes. In the example provided, the challenge lies in accessing variables defined in the outer scope, which may not be directly accessible within the `currency-file-content` template. This is because the context within the template is limited to the data passed to it, and it may not grant direct access to variables defined outside the template.

### Workaround: Using a Dictionary to Pass Context

To address the issue of variable scopes and ensure that the `currency-file-content` template can access all the necessary variables, a workaround involves using a dictionary. This dictionary is used to encapsulate the required variables, both from the outer scope and the local context, and pass them as a single context to the `toFile` function.

Here's how to implement this workaround:

```html title="home.html" hl_lines="1"
{{- $dict := dict "outer" $ "local" . -}}
{{- toFile $fileName "currency-file-content" $dict -}}
```

In this code, a dictionary named `$dict` is created to hold two key-value pairs: `"outer"` and `"local"`. `"outer"` is assigned the value of the outer scope context (`$`), while `"local"` is assigned the value of the current currency data (`.`).

### Accessing Variables in the Template

After implementing the workaround of using a dictionary to encapsulate both outer scope and local variables, you can access these variables within the `currency-file-content` template as follows:

```html title="home.html" hl_lines="2 3"
{{- define "currency-file-content" -}}
<p>The app name is: {{ .outer.app_name }}</p>
<p>The currency name is: {{ .local.name }}</p>
{{- end -}}
```

!!! note ""

    `{{ .outer.app_name }}` accesses the `app_name` variable from the outer scope, which might not have been directly accessible within the template. The `.outer` context represents the outer scope context, and you can access any variable defined outside the template block.

!!! note ""

    `{{ .local.name }}` accesses the `name` variable from the local context, which contains data specific to the current currency being processed. The `.local` context provides access to all variables passed as local context data, ensuring you can work seamlessly with variables specific to the current block.

By adopting this approach, you can effectively address variable scope challenges and ensure that the `currency-file-content` template has access to all the variables it needs to generate dynamic files accurately. This method allows for flexibility in working with variables, both from the outer scope and the local context, within your dynamically generated templates.
