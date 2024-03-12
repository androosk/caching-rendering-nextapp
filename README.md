# NextJS with TypeScript and Tailwind CSS - Pexels API Example

This project demonstrates the use of NextJS with TypeScript and Tailwind CSS to showcase the difference between server-side rendering (SSR) and client-side rendering (CSR) by accessing the Pexels API.

## Getting Started

Before you begin, make sure you have Node.js and npm/yarn installed on your system.

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    ```

2. **Install dependencies**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```bash
    cd <project-name>
    npm install
    # or
    yarn install
    ```

3. **Setup Pexels API key**

    Sign up at [Pexels Developers](https://www.pexels.com/api/new/) to get your API key. Create a `.env.local` file in the root of your project and add your Pexels API key as follows:

    ```
    NEXT_PUBLIC_PEXELS_API_KEY=<Your Pexels API Key>
    ```

4. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/api/`: Server-side code for accessing the Pexels API.
- `src/app/search/page.tsx`: A client-side rendered page that shows images fetched from the Pexels API.
- `src/app/static/page.tsx`: A server-side rendered page that shows images fetched from the Pexels API on the server before page load. Page is cached and image does not change on reload.
- `src/app/dynamic/page.tsx`: A server-side rendered page that shows images fetched from the Pexels API on the server before page load. Page is cached, but will revalidate on each load.
- `src/app/incremental/page.tsx`: A server-side rendered page that shows images fetched from the Pexels API on the server before page load. Page is cached but will revalidate after 15 seconds.
- `src/components/`: Reusable UI components.
- `src/app/golbals.css`: Global styles and Tailwind CSS configuration.
- `src/functions/classnames.ts`: A function for consolidating classnames from multiple lines.
- `src/models/pexels.ts`: a function to access the API for static, server-side rendered pages

## Features

- **Server-Side Rendering (SSR):** Demonstrates how to fetch data from the Pexels API on the server side and render it directly into the HTML.
- **Client-Side Rendering (CSR):** Shows how to fetch data from the Pexels API on the client side, after the page has loaded.

## Contributing

Contributions are always welcome! Please read the contribution guidelines first.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Next.js - The React Framework
- Tailwind CSS - A utility-first CSS framework
- Pexels API - Free stock photos and videos AP
- React-Icons - Free icons for your React app!
- Coding in Flow YouTube page Next JS 14 tutorial - gave me the idea for this app and it's structure!

## Link to Slide Show
[Rendering and Caching in Next 14](https://docs.google.com/presentation/d/1ytu9zdi--ddmERNmOt5mcNFG0GYxccc02aROxYo-0Hs/edit?usp=sharing)