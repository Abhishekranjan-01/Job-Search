import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import Form from "@/components/Form/Form";
import ApplyOptions from "@/components/SearchResult/ApplyOptions/ApplyOptions";
import { callApi, incrementPage } from "@/Features/ApiResult/ApiResultSlice";
import Footer from "@/components/Footer/Footer";

import { trefoil } from "ldrs";
trefoil.register();

export default function Result() {
  const { query } = useParams();
  const { inputText } = useSelector(
    (store) => store.formSlice[0].requiredParameters
  );
  const dispatch = useDispatch((store) => store.apiResponse);
  const { apiResponse } = useSelector((store) => store.apiResponse);
  const { isLoading } = useSelector((store) => store.apiResponse);
  const inputRef = useRef(inputText);

  // const HandleScrollEvent = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 30 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     dispatch(incrementPage());
  //     callApi();
  //   }
  // };
  // window.addEventListener("scroll", HandleScrollEvent);
  return (
    <>
      <main className="relative w-full py-2 sm:py-4 px-2 sm:px-4 md:px-8 flex flex-col gap-12 text-gray-950 bg-gray-200 min-h-screen">
        <Form isResultPage={true} />

        {console.log(apiResponse)}
        {!isLoading ? (
          apiResponse.map((result, i) => {
            return (
              <section
                className=" flex flex-col gap-2 sm:gap-3 items-start justify-center"
                key={i + "a"}
              >
                <div className="flex gap-4 justify-center items-center w-fit">
                  <img
                    className="max-w-32 rounded-full text-xs"
                    src={result.employer_logo}
                    alt={result.employer_name}
                  />
                  <h1 className=" h-fit text-lg font-bold capitalize">
                    {result.employer_name}
                  </h1>
                </div>
                <ApplyOptions apply_options={result.apply_options} />
                <article className=" text-sm sm:text-lg ">
                  {result.job_description.split("\n").map(
                    (des, i) =>
                      des !== "" && (
                        <h3
                          key={i + "b"}
                          className={
                            des.length <= 25
                              ? "text-lg sm:text-xl font-semibold"
                              : null
                          }
                        >
                          {des}
                        </h3>
                      )
                  )}
                </article>
              </section>
            );
          })
        ) : (
          <>
            <div className="mx-auto my-auto">
              <l-trefoil
                size="150"
                stroke="9"
                stroke-length="0.17"
                bg-opacity="0.34"
                speed="0.5"
                color="black"
              ></l-trefoil>
            </div>
          </>
        )}
        {console.log("Data Done")}
      </main>
      <Footer />
    </>
  );
}
