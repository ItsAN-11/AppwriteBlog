# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


    LEARNING OUTCOMES:::::::===>>>>>>


All domain or tech I've used in this project::-

--> Appwrite is a backend as service app (or BaaS). 
    It is an open-source and self-hosted BaaS platform used to build web, mobile and Flutter applications. 
    Appwrite provides developers with the core backend features they need to build an application without having to build it from scratch.
    It abstract the complexity and repetitiveness required to build a modern backend API from scratch.


-->Tinymce is a rich text editior that allow users to create fromatted content within a user friendly interface
-->React HTML parser is a powerfull tool that converts standard HTML elements into react elements that can be rendered into a web app.
    It's a react parser.     
-->React Hook Form 
-->Vite environment variable 


--> Points to takeaway
1. whenever you'll create react app with create react app then while setting the variable in .env file that variable must start with    "REACT_APP_variablename". and then use it by calling 'process.env.REACT_APP_variablename'
2. project created by vite app variable name in .env should start with "VITE_variablename" and then use it by calling "import.meta.env.VITE_variablename"

Vendor lock-in :  is a situation where a customer is trapped into using a specific company's products or services, making it difficult to switch to alternatives. This can limit flexibility, increase costs, and lead to dependency and compatibility issues.
In order to prevent this we use services (nothing but a class) from there we import some methods.
In this project appwrite folder within src is the example of services ...

