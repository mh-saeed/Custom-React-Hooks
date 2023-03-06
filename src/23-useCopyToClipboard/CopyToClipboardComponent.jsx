import { useRef } from "react";
import useCopyToClipboard from "./useCopyToClipboard";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  let inputRef = useRef();

  return (
    <>
      <button onClick={() => copyToClipboard(`${inputRef.current.value}`)}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" ref={inputRef} />
    </>
  );
}
