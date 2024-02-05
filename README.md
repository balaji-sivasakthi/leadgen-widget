# LeadGen Widget

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
   ```
2. **Include CSS and JavaScript Files:**
   ```js
   <link rel="stylesheet" href="leadgen-widget/css/leadgen-widget.css">
   <script src="leadgen-widget/js/leadgen-widget.js"></script>```
   
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

## License

LeadGen Widget is licensed under the [MIT License](notion://www.notion.so/balajisivasakthi/LICENSE).

---

Thank you for using LeadGen Widget! If you encounter any issues or have suggestions, please open an issue on our [GitHub repository](https://github.com/balaji-sivasakthi/leadgen-widget/issues).
