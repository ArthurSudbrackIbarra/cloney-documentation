# Reusable Blocks

In Cloney template repositories, you can create reusable blocks of content using the `define` block. These named templates allow you to define specific content that can be easily integrated into multiple template files. This enables you to create components that can be reused throughout your Cloney template repository.

## What are Reusable Blocks?

Reusable blocks are named templates with specific content. These blocks are global in scope, which means they are accessible from any file in any directory within your Cloney template repository. Therefore, it's essential to choose **unique block names** to avoid conflicts. These blocks can be referenced and included in other template files, making them a powerful tool for creating components that can be reused throughout your Cloney template repository.

## How to Create Reusable Blocks

To create a reusable block in a Cloney template repository, follow these steps:

1. **Open a Template File**: Begin by opening a template file where you want to define your reusable block.

2. **Use the `define` Block**: Within the template file, use the `{{ define "block-name" }}` block to define a reusable block.

3. **Add Block Content**: Inside the `define` block, add the content for your reusable block. This content can include text, template variables, and any other template-specific code.

Here's an example of creating a simple reusable block named `"greeting"`:

```plaintext title="hello-1.txt"
{{ define "greeting" }}
Hello, {{ . }}!
{{ end }}
```

In this example, we've defined a reusable block named `"greeting"` that includes a greeting message to be displayed. The `{{ . }}` placeholder is a reference to the current context, which allows you to insert dynamic values when the block is used. In this case, `{{ . }}` represents the value passed to the block when it's referenced.

## Using Reusable Blocks

Once you've defined a reusable block, you can easily use it in other template files. To do so, follow these steps:

1. **Reference the Block**: In your target template file, reference the defined reusable block using the `{{ template "block-name" }}` function.

2. **Customize Block Variables**: If the defined block includes variables, you can customize them in the `template` function by passing values.

Here's an example of using the `"greeting"` reusable block we defined earlier in a different template file:

```plaintext title="hello-2.txt"
{{ template "greeting" .name }}
```

In this example, we're referencing the `"greeting"` reusable block and passing the value of an arbitrary variable called `name` as an argument to the block. This enables us to customize the content of the `"greeting"` block based on the specific value provided when it's used.

### The `include` Function

In addition to the `template` function, you can also use the `include` function. The `include` function allows you to bring in a block and pass the results to other template functions.

Here's an example of using the `include` function to include a block named `"my-block-name"` and convert its content to uppercase:

```plaintext title="hello-3.txt"
{{ include "my-block-name" | upper }}
```
