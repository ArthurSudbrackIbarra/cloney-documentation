# Cloney Documentation

<br>
<p align="center">
  <img src="docs/images/cloney-logo-rounded.png">
</p>
<br>

Certainly, let's expand the Docker section to provide more detailed information:

## Development - Docker

### Prerequisites

Before you can use Docker to run Cloney with MkDocs Material, ensure that you have Docker installed on your system. You can download and install Docker from the official Docker website.

### Pulling the MkDocs Material Docker Image

To get started, you need to pull the MkDocs Material Docker image. This image contains all the necessary dependencies to build and serve your documentation site. Open your terminal and run the following command:

```bash
docker pull squidfunk/mkdocs-material
```

This command downloads the latest version of the MkDocs Material image from Docker Hub. Once the image is downloaded, you can use it to build and serve your documentation.

### Running Cloney with MkDocs Material in Docker

Now that you have the MkDocs Material Docker image, you can run Cloney with MkDocs Material in a Docker container. The following command accomplishes this:

```bash
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

Let's break down this command:

- `docker run`: This command is used to create and run a new Docker container.

- `--rm`: This flag ensures that the container is removed automatically when you stop it, helping to keep your system clean.

- `-it`: These flags make the container run in interactive mode, allowing you to see the logs and interact with the running container.

- `-p 8000:8000`: This flag maps port 8000 from your host machine to port 8000 inside the Docker container. Port 8000 is where the MkDocs development server runs.

- `-v ${PWD}:/docs`: This flag mounts the current working directory on your host machine (represented by `${PWD}`) to the `/docs` directory inside the Docker container. This is where your MkDocs project files should be located.

After running this command, MkDocs will build your documentation site and start a development server. You can access the site by opening a web browser and navigating to `http://localhost:8000`. Any changes you make to your documentation source files will be automatically reflected in the live preview served by Docker.

### Stopping the Docker Container

To stop the Docker container and shut down the MkDocs development server, simply press `Ctrl+C` in your terminal. This will gracefully stop the container, and you can use the same `docker run` command to start it again whenever you need to work on your documentation.

By following these steps, you can develop and preview your documentation using Cloney with MkDocs Material within a Docker container, ensuring a consistent and isolated environment for your project.

### Deploying Cloney with MkDocs Material to GitHub Pages

Once you're ready to deploy your documentation site, you can use the MkDocs Material Docker image to build your site and deploy it to GitHub Pages. The following command accomplishes this:

```bash
docker run --rm -it -v ~/.ssh:/root/.ssh -v ${PWD}:/docs squidfunk/mkdocs-material gh-deploy
```
