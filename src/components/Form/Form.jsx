import { callApi, resetPageCount } from "@/Features/ApiResult/ApiResultSlice";
import "./style.css";
import AccordionU from "./Optional Parameters/AccordionU";
// import OptionalParameters from "./Optional Parameters/OptionalParameters";
import RequiredParameters from "./Required-Parameters/RequiredParameters";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Form({ isResultPage = false }) {
  const { apiResponse } = useSelector((store) => store.apiResponse);
  const navigate = useNavigate();
  const { inputText } = useSelector((store) => {
    console.log(store.formSlice[0].requiredParameters);
    return store.formSlice[0].requiredParameters;
  });
  const dispatch = useDispatch((store) => store.apiResponse);
  return (
    <form
      className={
        (isResultPage
          ? "fixed top-0 w-full bg-transparent"
          : "shadow-2xl  min-h-72 flex flex-col gap-4 llg:gap-6 justify-evenly items-center") +
        ` mx-auto max-h-full py-1 sm:py-4`
      }
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form Submission Detected !!");
        // dispatch(resetPageCount());
        dispatch(callApi("Submit From Call API"));
        navigate(`/Result/${inputText}`);
        console.log("Submission ENd");
      }}
    >
      {!isResultPage ? (
        <div className="flex flex-col gap-4 w-full h-full justify-evenly items-center ">
          <h1 className="font-pacifico_regula text-center text-2xl xm:text-3xl ssm:text-4xl md:text-6xl llg:text-7xl xl:text-8xl gradient-text">
            Search For Jobs/Internsips
          </h1>
          <RequiredParameters />
          {/* OptionalParameters  */}
          <AccordionU />
        </div>
      ) : (
        <RequiredParameters />
      )}
    </form>
  );
}
