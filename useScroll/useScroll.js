// 사용자가 스크롤 시 일정 값 이상을 스크롤하면 변화 발생

// Use Example
// <div className="App" style={{ height: "1000vh" }}>
//       <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
//         Hello
//       </h1>
// </div>

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    // console.log("y", window.scrollY, "x ", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return state;
};
