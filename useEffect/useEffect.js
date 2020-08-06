// html 태그를 클릭했을 시 해당 태그를 참조하여 함수를 넣어주고,
// 컴포넌트 종료시 해당 함수를 제거한다.

// Use Example...
// const sayHello = () => {
//     console.log("say Hello");
//   };
//   const title = useClick(sayHello);

const useClick = (onClick) => {
  const element = useRef();
  if (typeof onClick !== "function") {
    return;
  }
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
