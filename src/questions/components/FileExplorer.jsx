import { useState } from "react";

const json = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    children: [
      { id: 4, name: "App.jsx", isFolder: false },
      { id: 5, name: "App.css", isFolder: false },
      { id: 6, name: "index.jsx", isFolder: false },
      {
        id: 7,
        name: "components",
        isFolder: true,
        children: [{ id: 8, name: "questions.jsx", isFolder: false }],
      },
    ],
  },
  { id: 9, name: "package.json", isFolder: false },
];

const List = ({ list, onInsertFolder, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const onClickArrow = (item) => {
    setIsExpanded((prev) => ({ ...prev, [item.id]: !prev[item.id] }));
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item?.id} className="folder-item">
            {item?.isFolder && (
              <span className="folder-arrow" onClick={() => onClickArrow(item)}>
                {isExpanded[item?.id] ? "↑" : "↓"}
              </span>
            )}
            {item?.name}
            {item?.isFolder && (
              <span
                className="add-button"
                onClick={() => onInsertFolder(item?.id)}
              >
                ➕
              </span>
            )}
            <span className="add-button" onClick={() => onDelete(item?.id)}>
              ⛔️
            </span>
            {item?.children && isExpanded[item?.id] && (
              <List
                list={item?.children}
                onInsertFolder={onInsertFolder}
                onDelete={onDelete}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
const FileExplorer = () => {
  const [data, setData] = useState(json);

  const onInsertFolder = (parentId) => {
    const name = prompt("Enter folder name");

    const addFolder = (data) => {
      // {
      //   id: 7,
      //   name: "components",
      //   isFolder: true,
      //   children: [{ id: 8, name: "questions.jsx", isFolder: false }],
      // },
      return data.map((item) => {
        if (item?.id === parentId) {
          return {
            ...item,
            children: [
              ...item.children,
              {
                id: `${parentId}.${item.children?.length}`,
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (item?.children)
          return { ...item, children: addFolder(item?.children) };
        else return item;
      });
    };
    name && setData((prev) => addFolder(prev));
  };

  const onDelete = (id) => {
    // {
    //   id: 7,
    //   name: "components",
    //   isFolder: true,
    //   children: [{ id: 8, name: "questions.jsx", isFolder: false }],
    // },
    const deleteNode = (list) => {
      return list
        .filter((item) => item.id !== id)
        .map((item) => {
          if (item.children) {
            return { ...item, children: deleteNode(item.children) };
          } else return item;
        });
    };
    setData((prev) => deleteNode(prev));
  };

  return (
    <div>
      <h1 className="title">Folder structure</h1>
      <List list={data} onInsertFolder={onInsertFolder} onDelete={onDelete} />
    </div>
  );
};
export default FileExplorer;
