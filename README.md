<p align="center">
  <a
    href="https://github.com/SecureSECODAO/dao-documentation/blob/main/LICENSE"
    alt="License"
  >
    <img src="https://img.shields.io/github/license/SecureSECODAO/dao-documentation" />
  </a>
  <a
    href="https://github.com/SecureSECODAO/dao-documentation/graphs/contributors"
    alt="Contributors"
  >
    <img src="https://img.shields.io/github/contributors/SecureSECODAO/dao-documentation" />
  </a>
  <a
    href="https://github.com/SecureSECODAO/dao-documentation/pulse"
    alt="Activity"
  >
    <img src="https://img.shields.io/github/commit-activity/m/SecureSECODAO/dao-webapp" />
  </a>
  <a
    href="https://docs.secureseco.org/"
    alt="Vercel deployment"
  >
    <img src="https://img.shields.io/github/deployments/SecureSECODAO/dao-documentation/production?label=vercel&logo=vercel" />
  </a>
</p>

# SecureSECO DAO documentation

This is the readme for the SecureSECO DAO documentation. This documentation was made using [Nextra's](https://nextra.site/) docs theme, see their [documentation](https://nextra.site/docs) for more information.

The documentation is deployed at [docs.secureseco.org](https://docs.secureseco.org/).

## Installing dependencies and setting up environment variables

1. Copy the .env.example file to .env and fill in the values (if there isn't a env.example, there aren't any environment variables to set)
2. Optional: Install the _Prettier_, _MDX_ and _ESlint_ plugin in vscode (or your editor of choice), might have to restart your editor.
3. In case you haven't already: Install _npm_
4. run: `npm i`

## Local Development

First, run `npm i` to install the dependencies.

Then, run `npm run dev` to start the development server and visit localhost:3000.

## Quick Start

### Folder structure

See [Nextra's folder structure guide](https://nextra.site/docs/guide/organize-files) for more information.

### Editing a page

Find the page in the pages folder and edit it. The pages are written in markdown (mdx), so you can use markdown syntax to format the page. Check out [Nextra's markdown guide](https://nextra.site/docs/guide/markdown) and [Nextra's syntax highlighting guide](https://nextra.site/docs/guide/syntax-highlighting) for more information.

### Images

Use images like this: `![Hello](/demo.png)` in the markdown, it supports automatically optimizing your static image imports with the Markdown syntax, using [Next.js Image](https://nextjs.org/docs/pages/api-reference/components/image) component under the hood.

Images are rounded by default (see global.css), if you don't want the rounded images, add the `no-round-image` class to a div around the image like this:

```jsx
<div className="no-round-image">![Hello](/demo.png)</div>
```

With Next.js Image, there will be no layout shift, and a beautiful blurry placeholder will be shown by default when loading the images.

You can place images with kebab-case names in the [public/img folder](/public/img) and use them like this: `![Hello](/img/demo.png)`.

### Links and navigation

All relative Markdown links are automatically converted to Next.js links. This means that the target page will be prefetched. And when you click on a link, the page will be loaded on the client-side like a SPA, without making a full page load. For example:

```md
[Home](/)
```

will automatically use Next.js Link component under the hood, and will be prefetched.

### Latex

See [Nextra's latex guide](https://nextra.site/docs/guide/latex) for more information.

### Diagrams

See [Nextra's Mermaid guide](https://nextra.site/docs/guide/mermaid) for more information.

You can ofcourse also just use an image of a diagram.

### Tables

See [Nextra's table guide](https://nextra.site/docs/guide/table) for more information.

### Icons

This project uses [Lucide](https://lucide.dev/) and svg's for icons. To use an icon import it from the `@lucide/react` package in [icons.tsx](/components/icons.tsx). Add it to the object like:

```tsx
import { IconName } from "@lucide/react";

export const Icons = {
  // ...
  iconName: IconName,
  // or with an svg:
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path fill="currentColor" d="M409.132 ... "></path>
    </svg>
  ),
};
```

Then you can use it like this in your mdx or tsx files:

```tsx
import { Icons } from "../components/icons";

<Icons.iconName className="h-5 w-5" />;
```

You can do this directly in the mdx or in a tsx component.

This way we keep all the svg and icon imports in one place and have autocomplete for the icons.

### Useful Components for the mdx

#### Callout component

Checkout the [Callout component](https://nextra.site/docs/guide/built-ins/callout) for a nice callout component.

Use it like this:

- `type`: The type of the Callout.
  Type: 'default' | 'info' | 'warning' | 'error'
  Default: 'default'

- `emoji`: Optional emoji to show in the Callout.

```tsx
import { Callout } from "nextra/components";

<Callout type="error" emoji="️🚫">
  This is a dangerous feature that can cause everything to explode.
</Callout>;
```

#### Steps component

Checkout the [Steps component](https://nextra.site/docs/docs-theme/built-ins/steps) for a nice steps component.

Usage:

When using the step component, please provide a h2 heading for the steps title, you can call it x Guide. Otherwise you might have an H1 go straight to an H3.

```mdx
import { Steps } from "nextra-theme-docs";

<Steps>

### Step 1

Contents for step 1.

### Step 2

Contents for step 2.

</Steps>
```

#### Tabs component

Checkout the [Tabs component](https://nextra.site/docs/docs-theme/built-ins/tabs) for a nice tabs component.

Usage:

```tsx
import { Tab, Tabs } from "nextra-theme-docs";

<Tabs items={["pnpm", "npm", "yarn"]} defaultIndex="1">
  <Tab>**pnpm**: Fast, disk space efficient package manager.</Tab>
  <Tab>
    **npm** is a package manager for the JavaScript programming language.
  </Tab>
  <Tab>**Yarn** is a software packaging system.</Tab>
</Tabs>;
```

`defaultIndex` is optional and defaults to 0.

#### Card component

A nice [Card](components/card.tsx) component with a cool hover effect that links to a page

Usage:

- For multiple cards rendered automatically in a grid, use the Cards component.

```tsx
import { Cards } from "../components/cards";

<Cards
  cardData={[
    {
      href: "/joining",
      name: "Joining SecureSECO DAO",
      description:
        "Find out how you can become a part of the SecureSECO DAO and contribute to safer software ecosystems.",
      icon: Icons.doorOpen,
      pattern: {
        y: 16,
        squares: [
          [0, 1],
          [1, 3],
        ],
      },
    },
    {
      href: "/query",
      name: "Making a Query",
      description:
        "Learn how to make queries to check if your repository contains any known vulnerabilities.",
      icon: Icons.search,
      pattern: {
        y: -6,
        squares: [
          [-1, 2],
          [1, 3],
        ],
      },
    },
  ]}
/>;
```

- For a single card, use the Card component.

```tsx
import { Card } from "../components/cards";

<Card
  card={{
    href: "/joining",
    name: "Joining SecureSECO DAO",
    description:
      "Find out how you can become a part of the SecureSECO DAO and contribute to safer software ecosystems.",
    icon: Icons.doorOpen,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  }}
/>;
```

### Styling

#### Tailwind

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Tailwind is a utility-first CSS framework for rapidly building custom user interfaces. You can use Tailwind classes directly in the mdx files. For example:

```md
<div className="text-red-500">Hello</div>
```

It is also possible to use Tailwind classes in tsx components.

#### Darkmode

You need to provide both colors for light mode and darkmode in your tailwind styling in components or mdx directly. For example:

```tsx
<div className="bg-black dark:bg-white">Hello</div>
```

Don't worry about things like changing text-white and text-black each time, since those classes are already set by Nextra, unless you want to override them.

#### optional classes

We use [Clsx](https://github.com/lukeed/clsx#readme) + [Tailwind-Merge](https://github.com/dcastil/tailwind-merge) for conditional CSS class application.

Clsx and Tailwind-Merge are used together to create the `cn()` function, which makes it easier to conditionally apply Tailwind CSS classes. Defined in [lib/utils.ts](/src/lib/utils.ts). This function is inspired by the shadcn: https://ui.shadcn.com/docs.

Example use:

```jsx
import { cn } from "../lib/utils";

const isRed = true;

<div className={cn(isRed ?? "text-red-500", "w-full")}>Hello</div>;
```

### Naming conventions

In this project, we use the following naming conventions:

#### kebab-case

For folders, files (both mdx file names and tsx components), images (in the public folder), and css classes.

#### Title Case

For page titles (in \_meta.json files) and headings, we use Title Case.

Title case is a style in which the first letter of each word is capitalized, except for certain short words, such as articles (a, an, the), conjunctions (and, but, or, for, nor), and prepositions (in, to, of, at, by, up, for, off, on). For example:

- Welcome to SecureSECO DAO

#### PascalCase

For React components itself.

#### camelCase

For variables, icon and function names.

### Formatting

#### Code style

The code should be formatted as dictated by the automatic formatting tools.
It is advised to turn on the `Format On Save` option in settings if you are using VS Code. Alternatively, you can run `npm run format` to format **_all_** files in the project, however, it is preferable to format only the files that you change.

## License

This project is licensed under the MIT License.
