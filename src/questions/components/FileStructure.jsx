import { useState } from "react";
import fileData from "./constants/fileStructure";

const Folder = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState({
    visible: false,
    isFolder: false,
  });

  const onAddNewNode = (e, isFolder) => {
    e.stopPropagation();
    setInput({ visible: true, isFolder: isFolder });
    setExpanded(true);
  };
  const onChangeInput = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log(e.target.value);
      setInput((prev) => ({ ...prev, visible: false }));
    }
  };

  if (data.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpanded((prev) => !prev)}>
          📁 {data.name}{" "}
          <span className="add" onClick={(e) => onAddNewNode(e, true)}>
            ➕Folder
          </span>
          <span className="add" onClick={(e) => onAddNewNode(e, false)}>
            ➕File
          </span>
        </div>
        {expanded && (
          <div className="folder-next">
            {input.visible && (
              <div>
                {input.isFolder ? "📁" : "📄"}
                <input
                  type="text"
                  autoFocus
                  onBlur={() =>
                    setInput((prev) => ({ ...prev, visible: false }))
                  }
                  onKeyDown={(e) => onChangeInput(e)}
                />
              </div>
            )}
            {data.children.map((item) => (
              <Folder key={item.id} data={item} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return <div className="file">📄 {data.name}</div>;
  }
};

const FileStructure = () => {
  const [data, setdata] = useState(fileData);

  return (
    <div>
      <Folder data={data} />
    </div>
  );
};

export default FileStructure;
