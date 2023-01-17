<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## Notes on the code:

**plugins:**

- *gatsby-plugin-image:*  Plugin to add responsive images to your site
- *gatsby-plugin-sharp:*  Handles the actual image processing that is used by gatsby-plugin-image.
- *gatsby-transformer-sharp:* Same as above but for gatsbyImage.
- *gatsby-source-filesystem:*  Lets you pull in data from your computer’s filesystem
- *gatsby-plugin-mdx:* Lets you read mdx files, adds mdx in the graphql

[**graphql**](https://www.gatsbyjs.com/docs/tutorial/part-4/)

- To pull data into a “building block” component, use the useStaticQuery hook (components/seo.js).
- To pull data into a page component, use a page query. (pages/blog/index.js)

[**Image**](https://www.gatsbyjs.com/docs/tutorial/part-7/#whats-the-difference-between-gatsbyimage-and-staticimage)

- The *StaticImage* component is for static image sources, like a hard-coded file path or remote URL. In other words, the source for your image is always going to be the same every time the component renders. (pages/index.js)
- The *GatsbyImage* component is for dynamic image sources, like if the image source gets passed in as a prop. (blog/{mdx.frontmatter__slug})

essentially use the *GatsbyImage* when you are passing the image as a variable. It may be a different picture depending on the data.