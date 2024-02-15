<img width="876" alt="Screenshot 2024-02-15 at 11 29 22 PM" src="https://github.com/balaji-sivasakthi/leadgen-widget/assets/65065614/dead9f92-4f6c-465e-8ff6-933aa61dbbd4"># LeadGen Widget

## Overview

Welcome to LeadGen Widget, an open-source, pluggable widget designed to enhance lead generation on websites. This README file provides essential information to help you understand, install, and customize the LeadGen Widget for your website.

## Features

- **Plug and Play**: Easily integrate the LeadGen Widget into your website with minimal effort.
- **Customizable**: Tailor the widget's appearance and behavior to match your brand and user experience.
- **Lead Capture**: Efficiently capture leads through a user-friendly interface.
- **Extensible**: Expand functionality by adding custom plugins and integrations.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/balaji-sivasakthi/leadgen-widget.git

   npm run build
   ```
2. **Include CSS and JavaScript Files:**
   ```js
   <link rel="stylesheet" href="leadgen-widget/css/leadgen-widget.css">
   <script src="leadgen-widget/js/leadgen-widget.js"></script>
   ```
   
3. **Initialize the Widget:**
   ```js
   <script>
    document.addEventListener("DOMContentLoaded", function () {
      // Initialize LeadGen Widget
      new LeadGenWidget({
        callbackUrl: 'http://example.com/form-data'
      });
    });
   </script>
   ```
## Example
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./../src//assets//css/style.css" />
  </head>
  <body>

    <script type="module" src="./main.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
          // Initialize LeadGen Widget
          new LeadGenWidget({
            callbackUrl: 'http://example.com/form-data'
          });
        });
     </script>
  </body>
</html>

```

## Screenshot
<img width="957" alt="Screenshot 2024-02-16 at 12 18 28 AM" src="https://github.com/balaji-sivasakthi/leadgen-widget/assets/65065614/ae45a24c-bfaa-4cd6-8014-35cc17957ff1">

## License

LeadGen Widget is licensed under the [MIT License](notion://www.notion.so/balajisivasakthi/LICENSE).

---

Thank you for using LeadGen Widget! If you encounter any issues or have suggestions, please open an issue on our [GitHub repository](https://github.com/balaji-sivasakthi/leadgen-widget/issues).
