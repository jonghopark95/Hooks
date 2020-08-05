// 사용자의 입력값을 검증하며 오류가 없을 시 해당 입력값을 input의 value로 입력한다.
// Use example ...
// const validator = testString.length < 10;
// const test = useInput("Test", validator);
// <input {...test}>

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    // console.log(e.target);
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
