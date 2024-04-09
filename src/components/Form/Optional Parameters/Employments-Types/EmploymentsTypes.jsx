import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmploymentTypes } from "@/Features/formSlice/formSlice";

export default function EmploymentsTypes() {
  const { employment_types } = useSelector(
    (store) => store.formSlice[1].optionalParameters
  );
  const dispatch = useDispatch((store) => store.formSlice);
  const [employmentValue, setEmploymentTypesValue] = useState("");

  useEffect(() => {
    if (employmentValue === "" && employment_types !== "") {
      setEmploymentTypesValue(employment_types);
    }
  });

  return (
    <div className="w-full lg:w-fit flex flex-col ssm:gap-[2px]">
      <label
        htmlFor="employment_types"
        className="font-Kalam_Regular font-semibold text-base llg:text-lg"
      >
        Employment Types
      </label>
      <select
        className="font-Roboto_Mono llg:min-w-44 lg:min-w-56 text-center "
        name="employment_types"
        value={employmentValue}
        onChange={(e) => {
          setEmploymentTypesValue(e.target.value);
          dispatch(addEmploymentTypes(e.target.value));
        }}
      >
        <option value="">Optional</option>
        <option value="FULLTIME">FULLTIME</option>
        <option value="CONTRACTOR">CONTRACTOR</option>
        <option value="PARTTIME">PARTTIMES</option>
        <option value="INTERN">INTERN</option>
        {/* <option value="">Do not include</option> */}
      </select>
      <aside className="ssm:w-full text-[10px] ssm:text-xs leading-tight">
        Find jobs of particular employment types, specified as a comma delimited
        list of the following values:{" "}
        <span className="bg-blue-950">FULLTIME</span>,
        <span className="bg-blue-950">CONTRACTOR</span>,{" "}
        <span className="bg-blue-950">PARTTIME</span>,{" "}
        <span className="bg-blue-950">INTERN</span>.
      </aside>
    </div>
  );
}
