import { useSelector, useDispatch } from "react-redux";
import { addremote_jobs_only } from "@/Features/formSlice/formSlice";
import { useEffect, useState } from "react";
import { store } from "@/store/store";

export default function remote_jobs_only() {
  const { remote_jobs_only } = useSelector(
    (store) => store.formSlice[1].optionalParameters
  );
  const dispatch = useDispatch((store) => store.formSlice);
  const [remoteJobsValue, setRemoteJobsValue] = useState("");

  useEffect(() => {
    if (remote_jobs_only !== "") {
      setRemoteJobsValue(remote_jobs_only);
    }
  });

  return (
    <div className="w-full lg:w-fit flex flex-col ssm:gap-[2px]">
      <label
        htmlFor="remote_jobs_only"
        className="font-Kalam_Regular font-semibold text-base llg:text-lg"
      >
        Remote Jobs Only
      </label>
      <select
        name="remote_jobs_only"
        id=""
        value={remoteJobsValue}
        onChange={(e) => {
          setRemoteJobsValue(e.target.value);
          dispatch(addremote_jobs_only(e.target.value));
        }}
        className="font-Roboto_Mono llg:min-w-44 lg:min-w-56 text-center "
      >
        <option value="">Optional</option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <aside className="ssm:w-full text-[10px] ssm:text-xs leading-tight">
        Find remote jobs only (work from home). Default:{" "}
        <span className="bg-blue-950">false</span>.
      </aside>
    </div>
  );
}
