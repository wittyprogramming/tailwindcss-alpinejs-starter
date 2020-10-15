# Landing Starter Template using TailwindCSS and AlpineJs

An opinionated starter template based on Tailwind CSS, Alpine.js, postcss and esbuild.

It is an opinionated template that has the following features:

- Tailwind CSS for styling
- Alpine.js for template/dynamic logic
- a simple build system which may help me scale up if the needs arise (for example, add scss for styles or Typescript)

[Tailwind CSS](https://tailwindcss.com/) is a highly customizable, low-level CSS framework that is gaining popularity lately.  It is not opinionated as it gives you the building blocks for styling your components.

[Alpine.js](https://github.com/alpinejs/alpine) is very similar to tailwind but for the javascript. It provides the features of [Vue.js](https://vuejs.org/) with a much lower cost and - I think - a most suitable replacement for [jQuery](https://jquery.com/) than other frameworks.

For an HTML starter base, the gorgeous, simple, and versatile landing page design from the [Creative Tim's Tailwind Starter Kit](https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation)  is used.

During the development (for the watch mode) use:

```shell
npm start
```

For deployment, run:

```shell
npm run deploy
```

The output web page is at `dist` folder.

For more information read [the current blog post](https://www.wittyprogramming.dev/articles/starter-tailwind-alpine/)