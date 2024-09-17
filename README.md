# Angular SaaS Starter

> [!IMPORTANT]  
> This repo is WIP. Breaking changes may be introduced without warning. Please raise an issue if you see something wrong!

This is a boilerplate template for building an Angular application. It provides an opinionated implementation for default application behaviors, such as auth, payment, and project structure to quickly bootstrap and start development

**Demo: [{{DEMO_URL}}]({{DEMO_URL}})**

<details>
  <summary>Summary Text</summary>
  
  Summary Description

</details>

## Features

- Up-To-Date Angular Versioning
- TailwindCSS Fully Configured
- Design Token Based UI System
- Basic OAuth Implementation
- Auth Guards to Protect Private Routes
- Github Actions to Automate CI/CD

## Tech Stack

- **UI Framework**: [Angular](https://angular.dev/)
- **CSS Framework**: [tailwindcss](https://tailwindcss.com/)
- **UI LIbrary**: [spartan/ui](https://www.spartan.ng/)

## Getting Started

```bash
git clone https://github.com/techgardencode/angular-saas-starter
npm install
```

## Running Locally

Once you have cloned the repo and installed dependencies, run the development server:

```bash
npm run start
```

Open [http://localhost:4200](http://localhost:4200) in your browser to see the app in action.

## Going to Production

When you're ready to deploy your SaaS application to production, follow these steps:

### Test the app builds locally

```bash
npm run test
npm run build:prod
```

### Push your code/raise a PR to the 'main' branch

```bash
git push -u origin main
```

### Wait for CI to complete

CI will run through all unit tests and create a build that can be ingested using your CD platform of choice
