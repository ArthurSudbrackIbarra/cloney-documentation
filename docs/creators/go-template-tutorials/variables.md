# Go Templates: Variables

In Cloney template repositories, you can create and use variables within your templates to store and manipulate data. These variables are specific to your template and can help you make your templates more dynamic.

## How to Create Variables

To create a variable in a Go template, follow these steps:

1. **Choose a Descriptive Name**: Start by selecting a descriptive name for your variable. The name should reflect the data or information it represents.

1. **Define the Variable**: Use the following syntax to define the variable and assign it a value:

    ```plaintext
    {{ $variableName := "Variable Value" }}
    ```

    In this example, we've created a template-specific variable named `variableName` and assigned it the value `"Variable Value"`.

    > **Note:** It's important not to confuse variables defined in your template (created using `$`) with user-provided variables (accessed as `.variableName`) passed during the cloning process.

1. **Use the Variable**: You can use your defined variable anywhere within your template using `{{ $variableName }}`. For instance:

    ```plaintext
    Welcome to {{ $variableName }} Cloney Template!
    ```

    In this example, we've inserted the variable's value within the template to create dynamic content.

## Variable Naming Rules

When naming variables in Go templates, keep these rules in mind:

- Variable names must start with a letter and can only contain letters, numbers, and underscores.
- Variable names are case-sensitive. This means that `myVar` and `myvar` are considered different variables.

## Variable Scope

Variables in Go templates are block-scoped, meaning they are available only within the block in which they are defined. If you define a variable within a control structure like `{{ range }}` or `{{ with }}`, it is accessible only within that specific block.
