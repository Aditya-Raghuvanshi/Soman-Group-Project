import React, { useState } from 'react'
import CompanyLogo from '../assets/company.svg'
import northEastArrow from '../assets/north-east-arrow.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const [toggleClicked,setToggleClicked] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const array = [
    {
      img:0,
      title:'Real Estate',
      projects:[
        {
          id:1,
          title:'Realty',
          description:'The Somani Group ventured into the real estate sector in early 2023, marking a new chapter in our journey of growth and innovation. In just two years, we have made significant strides, establishing ourselves as a trusted name in residential and commercial real estate. With a commitment to quality, transparency, and customer satisfaction, we have been aggressively expanding our footprint in this sector. Currently in 2 years  we have an impressive 6 lakh square feet of projects under construction, catering to diverse needs and preferences. At Somani Group, we believe in building more than just structures – we create spaces that inspire, connect, and uplift communities. With a focus on sustainable practices and cutting-edge designs, we are redefining the landscape of real estate in Pune, Baramati, and beyond.',
        },
      ]
    },
    {
      img:1,
      title:'Automobile Dealerships',
      projects:[
        {
          id:1,
          title:'HYUNDAI',
          description:'Initially started in 2011 in Baramati, have now sold over 10,000 cars in till 2021. Our dealership has around 45% market share in Baramati. We have also received many awards from the company with an excellent reputation in the market',
          locations:['Baramati','Saswad','Indapur','Akluj','Patas','Bhor'],
          people:250,
        },
        {
          id:2,
          title:'BAJAJ',
          description:'We started in 2008. Mainly focused on two wheeler supply in and around Satara district including 8 different talukas. We also act as main supplier to more than 20 sub dealers. Making us the dealership with high market share.',
          locations:['Baramati','Phaltan'],
          people:250,
        },
        {
          id:3,
          title:'CHETAK',
          description:'After a longstanding partnership with Bajaj, the Somani Group was entrusted with the opportunity to establish Chetak EV dealerships across multiple locations. With EVs being the future of mobility, we are confident in expanding further to support the transition to sustainable transportation. Our dealerships offer a premium buying experience, combining expert guidance with robust after-sales support, reflecting our commitment to innovation and excellence.',
          locations:['Baramati','Phaltan','Saswad','Uruli Kanchan','Chaufulla'],
          people:250,
        },
        {
          id:4,
          title:'TATA Authorized Service Station (TASS)',
          description:'The Somani Group’s journey with TATA began in 2013 as a trusted supplier of genuine parts to TASSs across the region. Building on this foundation, we launched two TATA Authorized Service Stations (TASSs) in 2024, strategically located in Wadki and Lonikand. Our state-of-the-art facility at Lonikand stands as a benchmark in the industry, reflecting our commitment to excellence. With advanced infrastructure and a customer-centric approach, we have earned multiple awards and recognition for our service quality, setting new standards for other service stations.',
          locations:['Wadki','Lonikand'],
          people:250,
        }
      ]
    },
    {
      img:2,
      title:'Distributorship',
      projects:[
        {
          id:1,
          title:'TATA CVBU Distributor',
          description:'We started working with TATA in the year 2013. Gradually got appointed as an authorized distributor of TATA Genuine spare parts for commercial vehicles for entire Maharashtra (Excluding Mumbai). We also act as a supplier to TASS i.e. TATA authorized service station. We have warehouses located at the cities known as business hubs in Maharashtra namely:',
          locations:['Pune','Nagpur','Nashik'],
          people:54,
          area:'40,000+ sq.ft Warehouse',
        },
        {
          id:2,
          title:'TATA VOR (Vehicle off road)',
          description:'We started working for TATA VOR in the year 2019. We mainly focus on supplying urgent and genuine spare parts within Maharashtra including the dealers and TASS within 24 hours. Main station located at Pune.',
          area:'10,000+ sq.ft Warehouse.',
        },
        {
          id:3,
          title:'TATA retail spare Distributor',
          description:'We started working as an authorized distributor for after sales spare parts in 2018. We are currently working in 6 distinct markets in Kolhapur, Satara, Raigad, Ratnagiri and Solapur. Main warehouse is located at',
          locations:['Kolhapur','Solapur'],
          area:'10,000+ sq.ft Warehouse',
        },
        {
          id:4,
          title:'HYUNDAI MOBIS Distributor',
          description:'This is our latest partnership started in the year 2020. We got appointed as an authorized distributor for selling Hyundai Genuine spare parts in the after sales markets Main warehouse located at Pune.',
          area:'8,000+ sq.ft Warehouse',
        },
        {
          id:5,
          title:'EICHER TRACTOR Distributor',
          description:'Newest collaboration is with Eicher Tractors started in 2021 which mainly focuses on selling spare parts to all the dealers and retailers in Maharashtra. Main warehouse is located at Pune.',
          people:13,
          area:'10,000+ sq.ft Warehouse',
        }
      ]
    },
    {
      img:3,
      title:'Textiles',
      projects:[
        {
          id:1,
          title:'RAJASTHAN GROUP',
          description:'The first venture of somani group of companies which started 60 years ago down the line. Started on the occasion of padwa by the founder of the Somani group, late Mr. Champalal Motilal Somani. It is a complete family cloth store which comprises clothes right from a born baby to a person in the 90s.',
          locations:['RAJASTHAN SS','RAJASTHAN SADI','THE WODROBE','RAJASTHAN LADY SHOPEE'],
          people:250,
          area:'80,000 sq.ft',
        },
        {
          id:2,
          title:'DWARKADAS SHAMKUMAR',
          description:'12 years ago looking at the resonpse from the textile sector in Baramati the founders thought of spreading the business in complete Maharashtra . They partnered with dwarkadas shamkumar. They both 1st partnered in Baramati',
          locations:['Latur (6)','Aurangabad (4)','Solapur','Aambejogai','Baramati','Phaltan','Osmanabad','Beed','Jalna','Omerga','Aehmadpur','Sillod'],
          people:850,
          area:'80,000 sq.ft'
        }, 
      ]
    },
    {
      img:4,
      title:'Agriculture',
      projects:[
        {
          id:1,
          title:'Agri',
          description:'We mainly started working in this sector with a vision of bringing prosperity to Farmers and everything that we do revolves around that one single objective. And we do that by following the tenets of our Rise philosophy: Accepting No Limits, Alternative Thinking & Driving Positive Change. Started in the year 2000 now has around 850 acres of land divided across in contract farming of Sugarcane including around 150 acres of private land.Now working with the most advanced technology and automation we have become one of the highest sugarcane producers in Maharashtra today.',
        },
      ]
    },
  ]
  const handleNavigateClick =(id)=>{
    navigate('/industry',{
      state:{
        data:array[id]
      }
    })
  }
  const handleClick=()=>{
    window?.scrollTo({top: document.body.scrollHeight,behavior:'smooth'});
  }
  return (
  //   <>
  //   {
  //     <img onClick={()=>setToggleClicked(!toggleClicked)} classNameName='h-10 w-10 ml-auto mr-2 mt-2 md:hidden block' src="https://cdn-icons-png.flaticon.com/512/3388/3388823.png" alt="" />
  //   }
  //   {
  //     <div classNameName='sticky top-0 px-20 py-3 border-2 border-d border-[#F2F4F7] bg-white z-10 hidden md:block'>
  //     <div classNameName='flex md:flex-row flex-col justify-between'>
  //         <div classNameName='flex flex-col'>
  //             <img classNameName='cursor-pointer h-10 md:h-auto' onClick={()=>navigate('/')} src={CompanyLogo} alt="" />
  //         </div>
  //         <div classNameName='flex md:flex-row flex-col'>
  //             <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'onClick={()=>navigate('/legacy')}>Legacy</button>
  //             <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]' onClick={()=>navigate('/profile')}>Profile</button>
  //             {/* <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>Products</button> */}
  //             <div classNameName='relative group my-auto mx-auto'>
  //               <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>
  //                 Products
  //               </button>
                
  //               {/* Dropdown Options */}
  //               <div classNameName='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 z-10'>
  //                 <ul classNameName='py-2'>
  //                   <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(0)}>Real Estate</li>
  //                   <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(1)}>Automobile</li>
  //                   <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(2)}>Distribution</li>
  //                   <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(3)}>Textile</li>
  //                   <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(4)}>Farming</li>
  //                 </ul>
  //               </div>
  //             </div>
  //             <button onClick={handleClick} classNameName='flex text-sm text-white bg-[#0B6476] cursor-pointer text-center px-5'><p classNameName='my-auto mx-auto'>CONTACT US </p><img src={northEastArrow} alt="" classNameName='pl-1 my-auto' /></button>
  //         </div>  
  //     </div>
  // </div>
  //   }
  //   {toggleClicked && <div classNameName='sticky top-0 px-20 py-3 border-2 border-d border-[#F2F4F7] bg-white z-10'>
  //       <div classNameName='flex md:flex-row flex-col justify-between'>
  //           <div classNameName='flex flex-col'>
  //               <img classNameName='cursor-pointer h-10 md:h-auto' onClick={()=>navigate('/')} src={CompanyLogo} alt="" />
  //           </div>
  //           <div classNameName='flex md:flex-row flex-col'>
  //               <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'onClick={()=>navigate('/legacy')}>Legacy</button>
  //               <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]' onClick={()=>navigate('/profile')}>Profile</button>
  //               {/* <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>Products</button> */}
  //               <div classNameName='relative group my-auto mx-auto'>
  //                 <button classNameName='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>
  //                   Products
  //                 </button>
                  
  //                 {/* Dropdown Options */}
  //                 <div classNameName='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 z-10'>
  //                   <ul classNameName='py-2'>
  //                     <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(0)}>Real Estate</li>
  //                     <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(1)}>Automobile</li>
  //                     <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(2)}>Distribution</li>
  //                     <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(3)}>Textile</li>
  //                     <li classNameName='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(4)}>Farming</li>
  //                   </ul>
  //                 </div>
  //               </div>
  //               <button onClick={handleClick} classNameName='flex text-sm text-white bg-[#0B6476] cursor-pointer text-center px-5'><p classNameName='my-auto mx-auto'>CONTACT US </p><img src={northEastArrow} alt="" classNameName='pl-1 my-auto' /></button>
  //           </div>  
  //       </div>
  //   </div>}
  //   </>
  

<nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a onClick={()=>navigate('/')} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={CompanyLogo} className="h-8 md:h-10" alt="Flowbite Logo" />
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium font-zodiac p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className='py-2 md:py-2 px-3'>
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full text-gray-900 text-sm rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Products{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <a
                        onClick={()=>handleNavigateClick(0)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Real Estate
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>handleNavigateClick(1)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Automobile
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>handleNavigateClick(2)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Distribution
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>handleNavigateClick(3)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Textile
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={()=>handleNavigateClick(4)}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Farming
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className='py-2 px-3'>
              <a
                onClick={()=>navigate('/legacy')}
                className="block  text-gray-900 text-sm rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Legacy
              </a>
            </li>
            <li className='pt-2 pb-3 md:pt-2 md:pb-2 px-3'>
              <a
                onClick={()=>navigate('/profile')}
                className="block  text-sm text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Profile
              </a>
            </li>
            <li className='md:pt-auto'>
              <a
                onClick={handleClick}
                className="flex py-2 px-3 md:px-5 md:py-2 bg-[#0B6476] text-white text-sm rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <p classNameName='my-auto mx-auto text-sm'>CONTACT US </p><img src={northEastArrow} alt="" classNameName='pl-2 my-auto' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
