# Cloney Docker Image

The [Cloney Docker image](https://hub.docker.com/r/magicmanatee/cloney) offers a hassle-free way to use Cloney within an isolated environment, thanks to the power of [Docker](https://www.docker.com). With this approach, you can run Cloney without the need for a direct installation on your machine, making template cloning processes straightforward and reproducible.

## Quick Start with Docker Run

To clone a Cloney template repository to your local machine using the Cloney Docker image, follow this simple example. Replace the placeholders with your specific details.

**Note**: The volume mount `${PWD}:/home/cloney` ensures that every file in your current working directory becomes available in the `/home/cloney` directory within the Docker container.

```bash
docker run --rm \
  -v ${PWD}:/home/cloney \
  magicmanatee/cloney cloney clone \
  https://github.com/ArthurSudbrackIbarra/cloney-example.git \
  --output /home/cloney/<DESIRED_REPOSITORY_NAME> \
  --variables /home/cloney/<VARIABLES_FILE_PATH>
```

- `${PWD}:/home/cloney`: Mounts your current working directory into `/home/cloney` within the Docker container.

- `magicmanatee/cloney`: Specifies the Cloney Docker image.

- `cloney clone`: Executes the Cloney clone command.

- `https://github.com/ArthurSudbrackIbarra/cloney-example.git`: The URL of the repository to clone.

- `--output /home/cloney/<DESIRED_REPOSITORY_NAME>`: Specifies the output directory for the cloned repository.

- `--variables /home/cloney/<VARIABLES_FILE_PATH>`: Specifies the path to the variables file.

## Simplify with Docker Compose

For an even smoother process, consider using Docker Compose. Create a Docker Compose file like this:

```yaml title="docker-compose.yaml" hl_lines="7 11"
services:
  cloney:
    image: magicmanatee/cloney
    command: 
      - cloney
      - clone
      - https://github.com/ArthurSudbrackIbarra/cloney-example.git
      - --output
      - /home/cloney/clone-results
      - --variables
      - /home/cloney/.cloney-vars.yaml
    volumes:
      - ${PWD}:/home/cloney
```

Now, run the following command:

```bash
docker compose run --rm cloney
```

This command clones the repository to the `clone-results` directory in your current working directory. Remember to replace the repository URL and the variables file path, highlighted in blue, with your specific details.
