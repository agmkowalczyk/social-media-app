# Social Media App

## Description
Social Media App (React, TypeScript, Vite, Appwrite, TailwindCSS)

<p>
  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="vite.js">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=vite&logoColor=white" alt="typescript">
  <img src="https://img.shields.io/badge/appwrite-%23ff0077.svg?style=for-the-badge&logo=appwrite&logoColor=white" alt="vite.js">
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white" alt="react query">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind">
</p>

## Live Preview
[Click here](https://social-media-app-pi-ochre.vercel.app/)



## Image

![preview](https://github.com/agmkowalczyk/social-media-app/blob/main/screenshot_snapgram1.png "Social Media App")

![preview](https://github.com/agmkowalczyk/social-media-app/blob/main/screenshot_snapgram2.png "Social Media App")

![preview](https://github.com/agmkowalczyk/social-media-app/blob/main/screenshot_snapgram3.png "Social Media App")  
\
\
\
<br> 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
