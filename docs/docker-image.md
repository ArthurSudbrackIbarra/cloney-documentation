# Cloney Docker Image

The [Cloney Docker image](https://hub.docker.com/r/magicmanatee/cloney) offers a convenient way to use Cloney within an isolated environment, thanks to the power of [Docker](https://www.docker.com). With this approach, you can run Cloney without the need for a direct installation on your machine, making template cloning processes straightforward and reproducible.

## Quick Start with Docker Run

To clone a Cloney template repository to your local machine using the Cloney Docker image, follow this simple example:

```bash
docker run --rm -it -v ./:/home/cloney magicmanatee/cloney cloney clone https://github.com/ArthurSudbrackIbarra/cloney-example.git --variables .cloney-vars.yaml
```

!!! note ""

    `https://github.com/ArthurSudbrackIbarra/cloney-example.git`: The URL of the repository to clone.

!!! note ""

    `--variables .cloney-vars.yaml`: The path to a variables file relative to your current working directory.

**Note**: The volume mount `./:/home/cloney` ensures that every file in your current working directory becomes available to the Cloney Docker container. This way, you can point to a variables file in your current working directory, as shown in the example above.

## Simplify with Docker Compose

For an even smoother process, consider using Docker Compose. Create a Docker Compose file like this:

```yaml title="docker-compose.yaml" hl_lines="5 6"
services:
  cloney:
    image: magicmanatee/cloney
    command: >
      cloney clone https://github.com/ArthurSudbrackIbarra/cloney-example.git
      --variables .cloney-vars.yaml
    volumes:
      - ./:/home/cloney
```

Now, run the following command:

```bash
docker compose run --rm cloney
```

This will achieve the same result as the previous example. Don't forget to also adapt the repository URL and the path to the variables file to your needs.
