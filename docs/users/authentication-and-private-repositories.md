# Authentication and Private Repositories

When working with private Git repositories in Cloney, you have multiple approaches to authenticate. Here are the 3 available methods:

## Approach 1: Cloning the Private Repository and Using `cloney dry-run` (Recommended) :material-emoticon-happy:

The recommended and more secure approach is to clone the private repository manually using Git and then use the `cloney dry-run` command to apply Cloney's customizations without the need for explicit token authentication. This method is the recommended and secure way to work with private Git repositories in Cloney, as it leverages your existing access to the repository through Git.

1. Clone the private repository using Git:

   ```bash
   # Assuming you have access to the private repository.
   git clone https://github.com/username/private-repository.git
   ```

1. Run the `cloney dry-run` command to apply Cloney's customizations:

   ```bash
   cloney dry-run ./private-repository -o results
   ```

   This command will apply Cloney's customizations to the `private-repository` directory and output the results to the `results` directory.

## Approach 2: Using the `-k, --token` Flag (Not Recommended) :material-emoticon-sad:

Although not recommended, you can pass your Git token directly to Cloney using the `-k` or `--token` flag when running Cloney commands. Here's how to use it:

```bash
# Clone command.
cloney clone https://github.com/username/private-repo.git --token your-git-token

# Info command.
cloney info https://github.com/username/private-repo.git --token your-git-token
```

Replace `your-git-token` with your actual Git token. This method is suitable for one-time authentication within a single command.

## Approach 3: Using the `CLONEY_GIT_TOKEN` Environment Variable (Linux and macOS Only) :material-emoticon-neutral:

For Linux and macOS systems, you can set the `CLONEY_GIT_TOKEN` environment variable to specify your Git token once and use it across multiple Cloney commands without having to provide it every time.

```bash
export CLONEY_GIT_TOKEN=your-git-token
```

After setting the environment variable, you can run Cloney commands without the need to pass the token explicitly.
