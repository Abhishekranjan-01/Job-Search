import { useSelector } from "react-redux";

export default function TextInput({ inputRef }) {
  const { inputText } = useSelector(
    (store) => store.formSlice[0].requiredParameters
  );

  return (
    <input
      ref={inputRef}
      className="w-full text-slate-950 text-base xm:text-lg ssm:text-xl md:text-2xl rounded-md outline-none bg-gray-300 h-fit placeholder:text-slate-500"
      type="text"
      name="search"
      required
      defaultValue={inputText}
      placeholder="Ex- Frontend developer/intern India"
    />
  );
}
