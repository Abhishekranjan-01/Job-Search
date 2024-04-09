import { useRef } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addInputText } from "@/Features/formSlice/formSlice";
import TextInput from "./InputText/TextInput";

export default function RequiredParameters() {
  const dispatch = useDispatch((store) => store.formSlice);
  const inputRef = useRef("");

  return (
    <div className="mx-auto w-11/12 sm:w-3/4 md:w-3/4 llg:w-3/5 lg:w-1/2 xl:w-3/5 flex gap-2 ssm:gap-4 rounded-md px-1 sm:px-2 sm:py-1 py-[2px] bg-gray-300 border border-slate-500">
      <TextInput inputRef={inputRef} />
      <button
        className="bg-sky-500 text-sm sm:text-base font-semibold text-gray-200 px-2 sm:py-1 rounded-md"
        type="submit"
        onClick={(e) => {
          dispatch(addInputText(inputRef.current.value));
        }}
      >
        <PiPaperPlaneRightFill className="text-xl sm:text-3xl 2xl:text-4xl " />
      </button>
    </div>
  );
}
