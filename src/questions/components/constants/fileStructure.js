const data = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      children: [
        {
          id: 5,
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      id: 3,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 6,
          name: "App.js",
          isFolder: false,
        },
        {
          id: 7,
          name: "App.css",
          isFolder: false,
        },
        {
          id: 8,
          name: "components",
          isFolder: true,
          children: [
            {
              id: 9,
              name: "FileStructure.jsx",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "package.json",
      isFolder: false,
    },
  ],
};

export default data;
