# Cloney Template Repositories

A Cloney Template Repository serves as the foundation for creating dynamic Git repositories using Cloney. It contains essential information and structures that allow users to customize and generate project templates tailored to their specific needs.

## What is a Cloney Template Repository?

A Cloney Template Repository is a regular Git repository enriched with a special configuration file, [`.cloney.yaml`](creators/cloney-metadata-file.md), which defines the characteristics and variables of the template. This configuration file serves as the control center for your template, enabling dynamic content generation during the cloning process.

### Key Components of a Cloney Template Repository

A Cloney Template Repository consists of the following key components:

!!! note ""

    **1. Git Repository**: The core of your project, containing all the files, directories, and code that you want to share as a template.

!!! note ""

    **2. `.cloney.yaml` Metadata File**: This special YAML file is located in the root of the repository and stores essential details about the template, such as variable definitions, descriptions, and other crucial information that Cloney relies on to generate dynamic templates.

### The Power of Variables

One of the primary strengths of Cloney Template Repositories is the ability to define variables within your templates. These variables act as placeholders for values that can be customized during the cloning process, making your templates highly adaptable.

### Template Configuration

The `.cloney.yaml` metadata file also allows you to configure some aspects of your template. These configurations are optional and can be omitted if you don't require them. For example, you can define paths to ignore when cloning the template, ensuring that specific files or directories are excluded from the customization process.

## Discover Cloney Templates in Action

Explore Cloney templates and see how they work by visiting the [Cloney Example Template Repository](https://github.com/ArthurSudbrackIbarra/cloney-example). Here, you can:

- Explore its structure.
- Check out its `.cloney.yaml` metadata file.
- Customize variables to see Cloney in action.

Experience the simplicity of project setup and customization by exploring this example repository.
