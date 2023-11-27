import FilterMob from "./components/FilterMob";
import SearchIcon from "./components/SearchIcon";
import LocationIcon from "./components/LocationIcon";
import CheckIcon from "./components/CheckIcon";
import { useState } from "react";
import data from "./data.json"
import { Link } from "react-router-dom"

export const Jobs = () => {

  ///////// VARIABLES /////////

  const initialListCount = 12;
  const [displayCount, setDisplayCount] = useState<number>(initialListCount)
  const [checked, setChecked] = useState<boolean>(false)
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const [titleInput, setTitleInput] = useState<string>('')
  const [locationInput, setLocationInput] = useState<string>('')
  const [fullTime, setFullTime] = useState<boolean>(false)
  const [filteredData, setFilteredData] = useState(data);

  ///////// FILTERS AND BUTTON FUNCTIONS /////////

  const handleTitleSearch = () => {
    const titleFiltered = data.filter((job) =>
      job.position.toLowerCase().includes(titleInput.toLowerCase())
    );
    setFilteredData(titleFiltered);
    console.log(titleFiltered);
  };

  const handleLocationSearch = () => {
    const locationFiltered = data.filter((job) =>
      job.location.toLowerCase().includes(locationInput.toLowerCase()) && (!fullTime || job.contract.toLowerCase() === 'full time')
    );
    setFilteredData(locationFiltered);
    console.log(locationFiltered);
  };

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 12);
  };

  const DATA = filteredData
  .filter((job) => (!fullTime || job.contract.toLowerCase() === 'full time'))
  .slice(0, displayCount);
  
  const loadMoreButton = displayCount >= filteredData.length;

  const handleCheckbox = () => {
    setChecked(!checked)
    setFullTime(!fullTime)
  }

  const handleFilter = () => {
    setOpenFilter(!openFilter)
  }

  return (
    <>
      <section>
          <div className="w-auto mx-6 h-20 bg-white dark:bg-[#19202D] flex items-center justify-between pl-6 pr-2 -mt-10 md:-mt-[18px] rounded-md md:mx-10">




            <div className="flex items-center w-full md:justify-between">

              <div className="flex gap-3 md:max-w-[463px]">
                <button onClick={() => {
                  handleTitleSearch()
                }} className="hidden md:flex"><SearchIcon/></button>
                <input onChange={(e) => {
                setTitleInput(e.target.value)}} placeholder="Filter by title…" className="outline-none w-[60%] dark:text-white dark:bg-[#19202D]" type="text" />
              </div>

              <div className="h-[72px] hidden md:flex xl:w-full md:max-w-[300px] items-center gap-4 px-4 border-l  border-l-[#6E8098]  border-opacity-20">
                <LocationIcon/>
                <input onChange={(e) => {setLocationInput(e.target.value)}} className="outline-none w-[80%] dark:text-white dark:bg-[#19202D]" placeholder="Filter by location…" type="text" />
              </div>

              <div className="pl-4 md:w-auto hidden md:flex items-center xl:gap-12 gap-7 min-w-[250px] h-[72px] border-opacity-20 border-l border-l-[#6E8098]">
                <button className="flex items-center gap-2 xl:gap-4" onClick={() => {
                  handleCheckbox()
                }}>
                  <span className={`w-6 h-6 rounded-[3px] bg-custom dark:bg-customDark flex items-center justify-center ${checked ? 'bg-customChecked' : '' } ${checked ? 'dark:bg-customChecked' : '' }`}>
                    <span className={`${!checked ? 'hidden' : ''}`}><CheckIcon/></span>
                  </span>
                  <p className="text-[16px] w-[80px] md:w-auto flex font-bold text-[#19202D] dark:text-white">Full Time</p>
                </button>
                <div className="hidden md:flex">
                <button onClick={() => {
                    handleLocationSearch();
                  }} className="w-[80px] h-[48px] bg-[#5964E0] font-bold text-white rounded-md flex items-center justify-center mx-auto">
                    Search
                </button>
              </div>
              </div>


            </div>




            <div className="flex items-center gap-6">
              <div>
                <button className="md:hidden" onClick={() => {
                  handleFilter()
                }}>
                  <FilterMob/>
                </button>
                {openFilter && <div className="dim-overlay"></div>}
                <div className={`absolute transform -translate-x-1/2 -translate-y-1/2 something top-1/2 left-1/2 w-[327px] h-[217px] bg-white rounded-lg ${!openFilter ? 'hidden' : 'block'} dark:bg-[#19202D] `}>
                  <div className="h-[72px] border-b border-[#6E8098] flex items-center">
                    <LocationIcon/>
                    <input onChange={(e) => {setLocationInput(e.target.value)}} className="px-6 outline-none dark:text-white dark:bg-[#19202D]" placeholder="Filter by location…" type="text" />
                  </div>
                  <div className="flex items-center gap-4 px-6 py-7">
                    <button className="flex items-center gap-4" onClick={() => {
                      handleCheckbox()
                    }}>
                      <span className={`w-6 h-6 rounded-[3px] bg-custom dark:bg-customDark flex items-center justify-center ${checked ? 'bg-customChecked' : '' } ${checked ? 'dark:bg-customChecked' : '' }`}>
                        <span className={`${!checked ? 'hidden' : ''}`}><CheckIcon/></span>
                      </span>
                      <p className="text-[16px] font-bold text-[#19202D] dark:text-white">Full Time Only</p>
                    </button>
                  </div>
                  <button onClick={() => {
                    handleLocationSearch()
                    handleFilter()
                  }} className="w-[279px] h-[48px] bg-[#5964E0] font-bold text-white rounded-md flex items-center justify-center mx-auto">
                    Search
                  </button>
                </div>
              </div>
              <button onClick={() => {handleTitleSearch()}}>
                <span className="bg-[#5964E0] w-12 h-12 rounded-lg md:hidden flex items-center justify-center">
                  <SearchIcon/>
                </span>
              </button>
            </div>
          </div>
        </section>
        <>
        <main className="flex flex-col gap-[50px] mt-[60px] pb-16 md:grid md:grid-cols-2 md:px-10 xl:grid-cols-3">
          {DATA.map((d: any, index: number) => (
            <Link className="flex" key={index} to={`/job/${d.company}`}>
                    <div key={index} className="px-8 w-[327px] md:w-[339px] bg-white dark:bg-[#19202D] rounded-md pb-9 mx-auto">
                        <div className="w-[50px] h-[50px] flex items-center justify-center rounded-2xl -mt-[25px]" style={{backgroundColor: `${d.logoBackground}`}}>
                          <img src={d.logo} alt={d.company} />
                        </div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-[#6E8098] font-normal text-[16px]">{d.postedAt}</span>
                        <span className="block w-1 h-1 bg-[#6E8098] rounded-full"></span>
                        <span className="text-[#6E8098] font-normal text-[16px]">{d.contract}</span>
                      </div>
                        <h3 className="text-[#19202D] dark:text-white font-bold text-[20px] my-4">{d.position}</h3>
                        <h3 className="text-[#6E8098] font-normal text-[16px]">{d.company}</h3>
                      <span className="text-[#5964E0] font-bold text-[14px] block mt-10">{d.location}</span>
                    </div>
            </Link>
          ))}
          </main>
          {!loadMoreButton && <div className="flex items-center justify-center pb-16">
            <button onClick={() => {
              handleLoadMore()
            }} className="text-[16px] text-white bg-[#5964E0] font-bold w-[141px] h-12 rounded-lg mx-auto">
              Load More
            </button>
            </div>}
          </>
    </>
  )
}