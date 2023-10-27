# Go Templates: Loops and Iterations

In Cloney template repositories, you can perform iterations using the `range` construct to loop through slices, arrays, and maps. This enables you to process each element of a collection or iterate through a sequence of values.

## How to Use Range for Iteration

To use the `range` construct for iteration, follow these steps:

1. **Select a Collection**: Choose a collection data structure like a slice, array, or map that you want to iterate over. You'll specify the collection to be iterated using the `range` construct.

1. **Use the Range Construct**: Employ the `range` construct to initiate the iteration. The basic syntax is as follows:

      ```plaintext
      {{ range $index, $element := .myCollection }}
         {{ $index }}: {{ $element }}
      {{ end }}
      ```

      - `$index` is an optional variable that holds the index of the current element.
      - `$element` is the variable that represents the current element in the collection.

      Alternatively, you can simplify the syntax by directly iterating over a list:

      ```plaintext
      {{ range .myCollection }}
         Item: {{ . }}
      {{ end }}
      ```

1. **Perform Actions**: Within the `range` block, you can execute actions or access data related to each element. For example:

      ```plaintext
      {{ range $index, $element := .myCollection }}
         Item {{ $index }}: {{ $element.name }}
      {{ end }}
      ```

      In this example, we're accessing the `name` property of each element within the collection.

## Example 1: Iterating Through a Slice

Here's an example of iterating through a slice of items:

```plaintext
{{ range $item := .items }}
   {{ $item }}
{{ end }}
```

In this case, we're using a slice named `items` and printing each item's value.

## Example 2: Iterating Through a Map

You can also iterate through a map using the `range` construct:

```plaintext
{{ range $key, $value := .data }}
   Key: {{ $key }}, Value: {{ $value }}
{{ end }}
```

In this example, we're iterating through a map named `data` and displaying its key-value pairs.

## Important Considerations

- The `$index` and `$element` variables are optional. You can choose different variable names for more descriptive context.
- To loop through a map, Cloney preserves the order in which key-value pairs were defined.
