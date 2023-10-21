# `joinDoubleQuote` Function

The `joinDoubleQuote` function takes a list and a separator and returns a string with the list elements separated by the specified separator and enclosed in double quotes.

## Description

The `joinDoubleQuote` function is a useful utility for creating a formatted string by joining the elements of a list with a specified separator and enclosing them in double quotes. This is particularly handy when you need to generate text for various data serialization formats or configuration files where values need to be enclosed in double quotes.

## Parameters

- `list`: The list of elements that you want to join within double quotes.
- `separator`: The string that should separate the elements within the double quotes.

## Return Value

The `joinDoubleQuote` function returns a string with the list elements joined together, separated by the specified separator, and enclosed in double quotes.

## Example

Here's an example of how to use the `joinDoubleQuote` function in a Cloney template:

``` title="config.json" hl_lines="3"
{
    "servers": [
        {{ joinDoubleQuote .servers ", " }}
    ]
}
```

Suppose we have the following list of servers:

```yaml title="cloney-vars.yaml"
servers:
  - server1
  - server2
  - server3
```

When used in the Cloney template, it will generate content like:

```json title="config.json"
{
    "servers": [
        "server1", "server2", "server3"
    ]
}
```

!!!info "Compatibility"
    This function is available in Cloney `1.0.0` and later.
