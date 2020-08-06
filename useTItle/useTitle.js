// html title을 변경해주는 훅

// Use example
// const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("Home"), 5000);

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
