<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Grain Menu

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
- [📃 Challenges](#challenges)

<!-- PROJECT DESCRIPTION -->

# 📖 Grain Menu <a name="about-project"></a>

This is a grain menu showing a list of items within their specific sections in a menu.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://vite.dev/">Vite + React</a></li>
    <li><a href="https://www.apollographql.com/docs/react">Apollo Client</a></li>
  </ul>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **View for menu data**
- **Deployed Application**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

### [Grain Menu on Vercel](https://grain-menu.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- VS Code or any other code editor
- Chrome or any other browser
- Node.js installed
- npm/pnpm installed

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com:anbehindY/grain-menu.git
```

### Install

Install this project with:

```sh
  cd grain-menu
  pnpm i
```

### Usage

build the project with the following command:

```sh
pnpm run build
```

To run the project:

```sh
pnpm preview
```

For development purposes:

```sh
pnpm dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📃 Challenges <a name="challenges"></a>

> My first challenge starts with a cors error and that was also the most common error when integrating server and client applications. It was resolved by installing rack-cors and exposing origins in rails app.

> My thinking process regarding this task is pretty straight forward. I've never tried Apollo client so I test it first to get a sample query. I defined the types for the data that are required for the display. Then I just mapped through the sections data both for the sidebar and the main component.

> When I got a overall layout, I tried to build a modal with motion library and play with some CSS to look like the UI referenced. Then I go for the details, typography, behaviour and finally the interactive sidebar.

> I noticed some new entities in the part(2) of the assignment, such as availability status and a different view for it. I added a new attribute to both section and item model in the rails server application and work along with it.

> To make sure all the sections and items are displayed in order, I also sorted the data return from api to be in ascending order. The data is sorted in that way by default but just in case anything goes wrong, we can know that it was already sorted from the server.

> Vite is not my go-to tech stack. I always use Next.js so even though I'm familiar wtih deploying React applications, I had to tweak some vite config for the deployed app to work properly on Vercel.
