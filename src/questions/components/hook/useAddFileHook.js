const useAddFileHook = (data, parentId, name, isFolder) => {
  const addNew = () => {
    let newData = data;
    if (data.id === parentId) {
      newData.children.push({
        id: new Date(),
        name,
        children: [],
        isFolder,
      });
      return newData;
    }
  };
  return addNew;
};
