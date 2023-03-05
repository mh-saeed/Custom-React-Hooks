import useLocalStorage from "./useLocalStorage";
import useUpdaterLogger from "./useUpdaterLogger";

const CustomHookApp = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdaterLogger(name);

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};
export default CustomHookApp;
