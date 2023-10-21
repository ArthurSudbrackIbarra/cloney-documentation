# `joinSingleQuote` Function

The `joinSingleQuote` function is similar to the [`joinDoubleQuote`](joinDoubleQuote.md) function, but it takes a list and a separator and returns a string with the list elements separated by the specified separator and enclosed in single quotes. This function is useful when you need to generate text for scripting languages or scenarios where single quotes are the preferred choice for string delimiters.

## Parameters

- `list`: The list of elements that you want to join within single quotes.
- `separator`: The string that should separate the elements within the single quotes.

## Return Value

The `joinSingleQuote` function returns a string with the list elements joined together, separated by the specified separator, and enclosed in single quotes.

## Example

Here's an example of how to use the `joinSingleQuote` function in a Cloney template:

```bash title="script.sh" hl_lines="3"
#!/bin/bash

servers=({{ joinSingleQuote .servers " " }})

for server in "${servers[@]}"; do
    echo "Processing server: $server"
done
```

Suppose we have the following list of servers:

```yaml title="cloney-vars.yaml"
servers:
  - server1
  - server2
  - server3
```

When used in the Cloney template, it will generate content like:

```bash title="script.sh"
#!/bin/bash

servers=('server1' 'server2' 'server3')

for server in "${servers[@]}"; do
    echo "Processing server: $server"
done
```

!!!info "Compatibility"
    This function is available in Cloney `1.0.0` and later.
