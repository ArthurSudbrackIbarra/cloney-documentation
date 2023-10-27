# Go Templates: Hyphens

In Go templates, you may have noticed the use of hyphens (`-`) in constructs like `{{- end -}}`. These hyphens serve specific purposes in template rendering, enabling you to control the whitespace and formatting of your output.

Here's how hyphens are used in Go templates:

## Leading Hyphens (`{{- ...}}`)

Placing hyphens immediately after the opening curly brace (`{{`) trims any whitespace and newline characters that follow. This ensures that the content right after the opening brace is rendered immediately, without any leading whitespace.

**Example**:

```plaintext
Hello, 
{{- " this will have no leading whitespace." }}
```

**Output**:

```plaintext
Hello, This will have no leading whitespace.
```

In this example, the use of leading hyphens ensures that the text immediately follows the opening curly brace without any leading whitespace.

## Trailing Hyphens (`{{ ... -}}`)

When hyphens are placed just before the closing curly brace (`}}`), any trailing whitespace and newline characters are trimmed. This prevents extra whitespace from being added after the content enclosed by the template tags.

**Example**:

```plaintext
{{ "This will have no trailing whitespace. " -}}
Goodbye!
```

**Output**:

```plaintext
This will have no trailing whitespace. Goodbye!
```

Here, the trailing hyphens ensure that there's no trailing whitespace after the content enclosed by the template tags.

## Both Leading and Trailing Hyphens (`{{- ... -}}`)

Using hyphens on both sides trims both leading and trailing whitespace, resulting in tight control over the spacing and formatting of your content.

**Example**:

```plaintext
Hello, 
{{- " this will have no trailing whitespace. " -}}
Goodbye!
```

**Output**:

```plaintext
Hello, This will have no trailing whitespace. Goodbye!
```

With both leading and trailing hyphens, the content is rendered without any unnecessary whitespace.
