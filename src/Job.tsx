import { useParams } from "react-router-dom"
import data from "./data.json"

const Job = () => {

  const {company} = useParams()
  const job = data.find((job) => job.company === company);

  return (
    <>
        {job && (
          <>
            <div className="px-6 font-kumbh">
              <div className="px-6 h-[205px] mx-auto bg-white dark:bg-[#19202D] rounded-lg flex flex-col items-center justify-between pb-8 -mt-4 md:flex-row md:h-[140px] md:p-0 md:justify-normal">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-2xl -mt-[25px] md:w-[160px] md:h-[140px] md:rounded-none md:rounded-bl-2xl md:m-0" style={{backgroundColor: `${job.logoBackground}`}}>
                  <img src={`.${job.logo}`} alt={job.company} />
                </div>
                <div className="md:flex md:justify-between md:w-[100%] px-10">
                  <div className="flex flex-col items-center">
                    <h3 className="text-[#19202D] dark:text-white font-bold text-[20px]">{job.company}</h3>
                    <p className="text-[#6E8098] dark:text-[#9DAEC2] font-normal text-[16px]">{job.company}.com</p>
                  </div>
                  <a className="md:dark:bg-white/10 md:text-[#5964E0] md:dark:text-white px-[20px] py-4 bg-[#5964E0] bg-opacity-10 font-bold text-[16px] text-[#5964E0] rounded-md" href={`${job.website}`}>Company Site</a>
                </div>
              </div>
              <div className="bg-white dark:bg-[#19202D]  mx-auto rounded-md px-6 md:px-10 py-10 mt-6">
                <div className="justify-between md:items-center md:flex">
                  <div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#6E8098] dark:text-[#9DAEC2] font-normal text-[16px]">{job.postedAt}</span>
                    <span className="block w-1 h-1 bg-[#6E8098] dark:bg-[#9DAEC2] rounded-full"></span>
                    <span className="text-[#6E8098] dark:text-[#9DAEC2] font-normal text-[16px]">{job.contract}</span>
                  </div>
                  <h3 className="text-[#19202D] dark:text-white font-bold text-[20px] my-2">{job.position}</h3>
                  <span className="text-[#5964E0] font-bold text-[14px] block">{job.location}</span>
                  </div>
                  <div className="">
                    <a href={job.apply} className="w-[279px] h-[48px] md:w-[141px] bg-[#5964E0] font-bold text-white rounded-md flex items-center justify-center mx-auto mt-[54px] md:m-0">
                      Apply Now
                    </a>
                  </div>
                </div>
                <p className="text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4 mt-8">{job.description}</p>
                <h4 className="text-[#19202D] dark:text-white text-[20px] font-bold mt-10">Requirements</h4>
                <p className="text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4 mt-7">{job.requirements.content}</p>
                <ul className="flex flex-col gap-2 mt-8">
                  {job.requirements.items.map((item, index) => (
                    <li className="flex items-center text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4" key={index}>{item}</li>
                  ))}
                </ul>
                <h4 className="text-[#19202D] dark:text-white text-[20px] font-bold mt-10">What You Will Do</h4>
                <p className="text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4 mt-7">{job.role.content}</p>
                <ul className="flex flex-col gap-2 mt-8">
                  {job.role.items.map((item, index) => (
                    <li className="flex items-center text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4" key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white dark:bg-[#19202D] rounded-tl-lg rounded-tr-lg py-6 mt-16 md:flex md:items-center md:justify-between md:px-10">
              <div className="hidden md:block">
                <h3 className="text-[#19202D] dark:text-white font-bold text-[20px] my-2">{job.position}</h3>
                <p className="text-[#6E8098] dark:text-[#9DAEC2] leading-[26px] font-normal text-4">So Digital Inc.</p>
              </div>
              <a href={job.apply} className="w-[279px] h-[48px] bg-[#5964E0] font-bold text-white rounded-md flex items-center justify-center mx-auto md:m-0 md:w-[141px]">
                  Apply Now
              </a>
            </div>
          </>
        )}
    </>
  )
}

export default Job;