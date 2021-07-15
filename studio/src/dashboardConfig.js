export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f0463f327251512f9a4eb6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-bis-studio",
                  apiId: "883c08b7-f7a5-4185-a4c3-897c0ebf1d5a",
                },
                {
                  buildHookId: "60f0463fd6bb445257b278d1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-bis",
                  apiId: "0e2b75f9-bc6a-4e55-af75-296ad4f7aafe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/NickFormatC/sanity-gatsby-blog-bis",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-bis.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
