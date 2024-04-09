import DatePosted from "./Date-Posted/DatePosted";
import EmploymentsTypes from "./Employments-Types/EmploymentsTypes";
import Job_requirements from "./Job-Requirements/Job-Requirements";
import Remote_jobs_only from "./Remote-Jobs-Only/RemoteJobsOnly";

export default function OptionalParameters() {
  return (
    <section className="flex flex-col md:flex-row justify-evenly w-full text-sm lg:text-lg llg:text-base px-4 ssm:px-4 gap-3 ssm:gap-4 ">
      <DatePosted />
      <EmploymentsTypes />
      <Job_requirements />
      <Remote_jobs_only />
    </section>
  );
}
