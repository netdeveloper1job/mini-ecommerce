This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.


## Approach
First, I created a Next.js project using the command line. For styling and responsive design, I integrated Bootstrap.
After that, I fetched the product list from the Fake Store API and displayed it in the application. When a user clicks on Add to Cart, the item gets added to the cart, and the header shows a cart icon with a count that updates dynamically.
I also implemented a Cart page, where all the selected products are displayed along with their quantity. Each product has plus and minus buttons, so the user can increase or decrease the quantity. There is also a remove option to delete the product from the cart.
Additionally, I configured toast notifications so that whenever a product is added or removed, the user gets instant feedback.

## References
## Fake Store API

The product listing data is fetched from the Fake Store API:
👉 https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts

## Bootstrap Configuration in Next.js

For styling and responsive layout, Bootstrap 5 is used. Learn how to configure it in Next.js here:
👉 https://blog.logrocket.com/handling-bootstrap-integration-next-js

##  React Hot Toast

For user interactions such as Add to Cart, Remove, and Checkout notifications, React Hot Toast is integrated:
👉 https://www.npmjs.com/package/react-hot-toast

## React Icons

For icons like Cart, Trash, and Categories, the React Icons library is used:
👉 https://www.npmjs.com/package/react-icons