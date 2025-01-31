import React from 'react'
import CompanyLogo from '../assets/company.svg'
import northEastArrow from '../assets/north-east-arrow.svg'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  const array = [
    {
      img:0,
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
      ]
    },
    {
      img:1,
      title:'Distributorship',
      projects:[
        {
          id:1,
          title:'TATA CVBU Distributor',
          description:'We started working with TATA in the year 2013. Gradually got appointed as an authorized distributor of TATA Genuine spare parts for commercial vehicles for entire Maharashtra (Excluding Mumbai). We also act as a supplier to TASS i.e. TATA authorized service station. We have warehouses located at the cities known as business hubs in Maharashtra namely:',
          locations:['Pune','Nagpur','Nashik'],
          people:54,
          area:'40,000+ sq.ft Warehouse'
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
      img:2,
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
      img:3,
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
    <div className='sticky top-0 px-20 py-3 border-2 border-d border-[#F2F4F7] bg-white z-10'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <img className='cursor-pointer' onClick={()=>navigate('/')} src={CompanyLogo} alt="" />
            </div>
            <div className='flex'>
                <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'onClick={()=>navigate('/legacy')}>Legacy</button>
                <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]' onClick={()=>navigate('/profile')}>Profile</button>
                {/* <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>Products</button> */}
                <div className='relative group my-auto'>
                  <button className='text-sm text-[#667085] mr-8 cursor-pointer hover:text-[#0B6476]'>
                    Products
                  </button>
                  
                  {/* Dropdown Options */}
                  <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 z-10'>
                    <ul className='py-2'>
                      <li className='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(0)}>Automobile</li>
                      <li className='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(1)}>Distribution</li>
                      <li className='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(2)}>Textile</li>
                      <li className='px-4 py-2 text-sm text-[#667085] hover:bg-[#F2F4F7] cursor-pointer' onClick={()=>handleNavigateClick(3)}>Farming</li>
                    </ul>
                  </div>
                </div>
                <button onClick={handleClick} className='flex text-sm text-white bg-[#0B6476] cursor-pointer py-4 px-5'><p>CONTACT US </p><img src={northEastArrow} alt="" className='pl-1' /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
