# Go Templates: Conditional Statements

In Cloney template repositories, you can employ conditional statements to make your templates react dynamically to various conditions. These conditionals allow you to control the flow of your templates, showing or hiding content based on specific criteria.

## The `if` Statement

To use conditional statements in Go templates, follow these steps:

1. **Choose a Condition**: Begin by defining the condition you want to check. For example, you can check if a variable is equal to a specific value.

1. **Use the `if` Statement**: Employ the `if` statement to initiate the conditional check. The basic syntax is as follows:

    ```plaintext
    {{ if .condition }}
        Content to display when the condition is true.
    {{ else }}
        Content to display when the condition is false.
    {{ end }}
    ```

    - `.condition` represents the expression or variable you want to evaluate.
    - The content inside the `if` block will be displayed if the condition is true.
    - The content inside the `else` block will be displayed if the condition is false.

1. **Execute Actions**: Within the `if` and `else` blocks, you can execute actions or access data depending on the condition.

## Example 1: Using an `if` Statement

Here's an example of using an `if` statement to check if a variable equals a specific value:

```plaintext
{{ if eq .status "active" }}
   This is an active item.
{{ else }}
   This item is not active.
{{ end }}
```

In this example, we're checking the `status` variable to see if it's equal to the string `"active"`.

## The `else if` Statement

You can also use the `else if` statement to check multiple conditions in a structured manner. Here's how you can use it:

```plaintext
{{ if eq .status "active" }}
   This is an active item.
{{ else if eq .status "inactive" }}
   This item is inactive.
{{ else }}
   The status is neither active nor inactive.
{{ end }}
```

In this example, we're checking the `status` variable and providing different responses based on the possible values.

## Multiple Conditions

You can also use multiple conditions by nesting `if` and `else if` statements or combining conditions using `or` and `and` operators.

Here's an example of combining conditions using the `or` operator:

```plaintext
{{ if or (eq .status "active") (eq .priority "high") }}
   This item has a high priority or is active.
{{ else }}
   This item is not high priority and not active.
{{ end }}
```

In this example, we're checking if the `status` is equal to `"active"` or the `priority` is equal to `"high"`.

## Important Considerations

- Go templates follow Go's comparison operators, such as `eq` for equality, `ne` for not equal, `lt` for less than, and `gt` for greater than.
