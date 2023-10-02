# The Cloney Metadata File

To harness the full potential of Cloney Template Repositories, it's crucial to grasp the structure and content of the `.cloney.yaml` metadata file. This file serves as the blueprint for your template, defining its characteristics, variables, and default settings. Below is an illustrative example of a `.cloney.yaml` file:

```yaml title=".cloney.yaml"
manifest_version: v1

name: Bank Site
description: A template to create a site for a bank.
authors:
  - Chico Buarque
  - Freddie Mercury
  - John Lennon
license: MIT
template_version: "1.1.0"

configuration:
  ignore_paths:
    - development/*.html
    - images/*.jpg

variables:
  - name: app_name
    description: The name of your application.
    default: my_app
    example: my_app

  - name: enable_https
    description: Wheter to enable HTTPS or not.
    example: true

  - name: currencies
    description: List of currencies to use.
    example:
      - Real
      - US Dollar
      - Yen
```

!!! note ""

    **manifest_version**: The version of the Cloney manifest file used in the template, ensuring compatibility with different versions of Cloney.

!!! note ""

    **name**: The name of your template, providing a clear identifier for users.

!!! note ""
  
    **description**: A brief but informative description of your template's purpose and functionality.

!!! note ""
  
    **authors**: A list of contributors or creators of the template, acknowledging their role in its development.

!!! note ""
    
    **license**: The licensing information for your template, specifying how others can use and distribute it.

!!! note ""
      
    **template_version**: The version number of your template, allowing users to identify different releases.

!!! note ""
        
    **configuration**: A section that allows you to configure some optional aspects of your template.

!!! note ""
        
    **variables**: A list of variables that users can customize during the cloning process.

## Template Configuration

The `.cloney.yaml` metadata file also allows you to configure some aspects of your template. These configurations are optional and can be omitted if you don't require them.

!!! note ""

    **Ignore Paths**: This configuration allows you to specify a list of paths to ignore when cloning the template. This is useful for excluding files that are not relevant to the template's customization process.

## Template Variables

Within the `.cloney.yaml` metadata file, Cloney allows you to define variables that users can customize during the cloning process. These variables play a central role in enabling dynamic template creation, ensuring that users can tailor templates to their specific requirements.

!!! note ""

    **Name**: Assign a unique identifier to each variable, making it easy for users to reference and customize.

!!! note ""
  
      **Description**: Provide a clear and concise description of each variable's purpose. These descriptions guide users in understanding how each variable affects the template.

!!! note ""
        
    **Default (Optional)**: Specify a default value for each variable. This value is used when a user doesn't provide a custom value during the cloning process. If this field is omitted, Cloney assumes that the variable is mandatory and must be informed by the user.

!!! note ""
          
    **Example Value**: Every variable must include an example value that demonstrates how it should be formatted and used. This example serves as a practical reference for users, helping them correctly configure variables within their customized templates.

!!! note ""
            
    **Validate (Optional)**: This parameter determines whether the variable's value should undergo validation when it is cloned. By default, this setting is enabled (`true`). Although not recommended, you have the option to disable validation by setting this field to `false`. Disabling validation can be particularly beneficial for variables with dynamic characteristics, such as variables that may assume various types or maps with dynamically changing keys.
