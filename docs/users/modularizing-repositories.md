# Cloney's Modularization: Building Your Project Block by Block

Cloney offers a practical approach to modularizing your Git repositories, enabling you to create well-structured projects by joining multiple template repositories into a single, organized directory. This approach promotes efficient template reuse and effective project management. In this documentation, we'll explore how Cloney's modularization capabilities can simplify your workflow.

## The Modularization Workflow

To modularize a project with Cloney, follow these straightforward steps:

### 1. Create a Project Directory

Begin by creating the root directory for your project. This directory will serve as the location for all the modules you intend to include.

```bash
mkdir my-project
cd my-project
```

### 2. Clone Template Repositories

Utilize the `clone` command to clone template repositories into your project directory. For instance, let's say you need both a backend and a frontend for your project:

```bash
# Clone a Java REST API template repository into the 'api' directory.
cloney clone https://github.com/username/java-rest-api -o api

# Clone a React frontend template repository into the 'frontend' directory.
cloney clone https://gitlab.com/username/react-boilerplate -o frontend
```

In this example, we've cloned a Java REST API template repository into the `api` directory and a React frontend template repository into the `frontend` directory. These template repositories are just fictitious examples, but you can use any template repositories you'd like.

!!! note ""
    When cloning repositories with Cloney, the `.git` folder from the cloned template repositories is not copied. This ensures that everything remains within a single repository, and you won't have multiple `.git` directories to manage.

### 3. Module Organization

You now have a series of modules within your project directory, each representing a specific part of your project. Organize these modules according to your project's structure and requirements.

```plaintext
my-project/
  ├── README.md (Project README)
  ├── api/
  │   ├── ... (REST API files and directories)
  ├── frontend/
  │   ├── ... (React frontend files and directories)
  └── ... (Additional modules as needed)
```

With Cloney's modularization, you can efficiently build your project by incorporating components from various template repositories, ensuring a well-organized and productive development process.
