# SecureSECO DAO documentation

this is the readme for the SecureSECO DAO documentation. This documentation was made using [nextra's](https://nextra.site/) docs theme, see their [documentation](https://nextra.site/docs) for more information.

## Installing dependencies and setting up environment variables

1. Copy the .env.example file to .env and fill in the values
2. Optional: Install the _Prettier_ and _ESlint_ plugin in vscode (or your editor of choice), might have to restart your editor.
3. In case you haven't already: Install _npm_
4. run: `npm i`

## Local Development

First, run `npm i` to install the dependencies.

Then, run `npm run dev` to start the development server and visit localhost:3000.

## Quick Start

### Folder structure

### Editing a page

Find the page in the pages folder and edit it. The pages are written in markdown (mdx), so you can use markdown syntax to format the page. Check out [nextra's markdown guide](https://nextra.site/docs/guide/markdown) and [Nextra's syntax highlighting guide](https://nextra.site/docs/guide/syntax-highlighting) for more information.

### Images

Use images like this: `![Hello](/demo.png)` in the markdown, it supports automatically optimizing your static image imports with the Markdown syntax, using [Next.js Image](https://nextjs.org/docs/pages/api-reference/components/image) component under the hood.

Images are rounded by default (see global.css), if you don't want the rounded images, add the `no-round-image` class to a div around the image like this:

```jsx
<div className="no-round-image">![Hello](/demo.png)</div>
```

With Next.js Image, there will be no layout shift, and a beautiful blurry placeholder will be shown by default when loading the images

### Links and navigation

All relative Markdown links are automatically converted to Next.js links. This means that the target page will be prefetched. And when you click on a link, the page will be loaded on the client-side like a SPA, without making a full page load. For example:

```md
[Home](/)
```

will automatically use Next.js Link component under the hood, and will be prefetched.

### Latex

See [nextra's latex guide](https://nextra.site/docs/guide/latex) for more information.

### diagrams

See [nextra's Mermaid guide](https://nextra.site/docs/guide/mermaid) for more information.

### Tables

See [nextra's table guide](https://nextra.site/docs/guide/table) for more information.

### Icons

This project uses [Lucide](https://lucide.dev/) for icons. To use an icon import it from the `@lucide/react` package and use it like this:

```jsx
import { IconName } from "@lucide/react";

<IconName />;
```

You can do this directly in the mdx or in a tsx component.

### Styling

#### Tailwind

#### Darkmode

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

For folders, files (mdx), images (in the public folder), and css classes.

#### files

#### page titles and headings

### Formatting

#### Code style

The code should be formatted as dictated by the automatic formatting tools.
It is advised to turn on the `Format On Save` option in settings if you are using VS Code. Alternatively, you can run `npm run format` to format **_all_** files in the project, however, it is preferable to format only the files that you change.

## License

This project is licensed under the MIT License.
