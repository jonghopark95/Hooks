// 사용자가 지정된 영역을 벗어났을시 경고문을 출력하는 훅

// Use Example

// const begForLife = () => console.log("pls dont leave me...");
// useBeforeLeave(begForLife);

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
