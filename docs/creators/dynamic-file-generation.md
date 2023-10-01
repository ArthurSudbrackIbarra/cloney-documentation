# Dynamic File Generation

Cloney, allows you to not only replace placeholders with variable values but also generate files and directories dynamically. This feature is particularly useful for creating multiple files based on a template and data. Let's dive into the process using a practical example.

## Example Scenario

Suppose you have a YAML variables file like the one below:

```yaml
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

```html
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

1. `{{- define "currency-file-content" -}} ... {{- end -}}`: This defines a template named `currency-file-content` that will be used to generate the content of each currency's page.

2. `{{- range .currencies }} ... {{- end }}`: This iterates through the list of currencies provided in your YAML data.

3. `{{- $fileName := printf "%s.html" .name }}`: This creates a variable named `fileName` to store the name of the file to be generated. The file name will be constructed using the currency's name with the `.html` extension.

4. `{{- toFile $fileName "currency-file-content" . }}`: This generates a file named `fileName` using the `currency-file-content` template and the current currency as the context. This is where the dynamic file generation happens.

### Generated Output

When Cloney processes this template, it generates several files. The `home.html` file will have the following content:

```html
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

```html
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

### Limitation: Accessing Root-Level Variables

In the example provided, accessing root-level variables like `app_name` from within the `currency-file-content` template can be challenging. This is because the context within the template is limited to the data passed to it, and it does not have direct access to variables defined outside the template.

### Workaround: Using a Dictionary

To access root-level variables within a dynamically generated template, you can use a dictionary to store both the root-level variables and the parameters needed for the `currency-file-content` template. Here's how to do it:

```html
{{- $dict := dict "root" $ "param" . -}}
{{- toFile $fileName "currency-file-content" $dict -}}
```

In this code, a dictionary named `$dict` is created, which contains two key-value pairs: `"root"` and `"param"`. `"root"` is assigned the value of the root-level context (`$`), and `"param"` is assigned the value of the current currency data (`.`).

### Accessing Variables in the Template

With the dictionary approach, you can now access root-level variables and parameters in the `currency-file-content` template as follows:

```html
{{- define "currency-file-content" -}}
<p>The app name is: {{ .root.app_name }}</p>
<p>The currency name is: {{ .param.name }}</p>
{{- end -}}
```

By using this workaround, you can access both root-level and local variables within your dynamically generated files.