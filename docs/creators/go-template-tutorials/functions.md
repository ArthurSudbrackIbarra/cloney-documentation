# Go Templates: Functions

In Cloney template repositories, you can enhance the functionality and flexibility of your templates by utilizing built-in Go template functions. These functions allow you to perform various operations, manipulate data, and generate dynamic content within your templates.

## Using Functions

To use functions in Go templates, follow these steps:

1. **Choose a Function**: Begin by selecting the appropriate function for the task you want to perform. Cloney supports a wide range of Go template functions.

1. **Insert the Function**: Use the chosen function by inserting it within double curly braces `{{ }}`. The function syntax consists of the function name and its arguments.

    ```plaintext
    {{ function-name argument1 argument2 ... }}
    ```

3. **Provide Arguments**: Fill in the function's arguments with the necessary values or variables.

## Examples: Utilizing Functions

Here are some examples of how you can use functions in your Cloney templates:

### Uppercase Function

You can use the `upper` function to convert text to uppercase:

```plaintext
{{ upper "convert this to uppercase" }}
```

In this example, the text "convert this to uppercase" is transformed into "CONVERT THIS TO UPPERCASE."

### Adding Function

The `add` function allows you to perform addition on numbers:

```plaintext
5 + 8 is equal to: {{ add 5 3 }}
```

In this example, the function returns the result of 5 + 3, which is 8.

### Repeating Strings

With the `repeat` function, you can create repeated sequences of text:

```plaintext
{{ repeat "Cloney " 3 }}
```

In this case, the function generates "Cloney Cloney Cloney ".

## Important Considerations

- Cloney provides a variety of built-in Go template functions. Explore the [Cloney's custom functions](../functions/index.md) for a list of custom functions specifically designed for Cloney templates. Additionally, you can refer to the [Sprig functions](https://masterminds.github.io/sprig) documentation for an extensive list of custom functions provided by the Sprig library, which is included in Cloney's template engine. These functions can further expand your template capabilities.
