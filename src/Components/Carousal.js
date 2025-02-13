import React from 'react'
import RealEstateImage from '../assets/images/RealEstateImage1.jpg'
import RealEstateImage1 from '../assets/images/RealEstateImage2.jpg'
import RealEstateImage2 from '../assets/images/RealEstateImage3.jpg'
import RealEstateImage3 from '../assets/images/RealEstateImage4.jpg'
import RealEstateImage4 from '../assets/images/RealEstateImage5.jpg'
import RealEstateImage5 from '../assets/images/RealEstateImage6.jpg'
import RealEstateImage6 from '../assets/images/RealEstateImage7.jpg'
import DistributionImage1 from '../assets/images/DistributionImage1.jpg'
import DistributionImage2 from '../assets/images/DistributionImage2.jpg'
import DistributionImage3 from '../assets/images/DistributionImage3.jpg'
import DistributionImage4 from '../assets/images/DistributionImage4.jpg'
import DistributionImage5 from '../assets/images/DistributionImage5.jpg'
import DistributionImage6 from '../assets/images/DistributionImage6.jpg'
import AutomobileImage1 from '../assets/images/AutomobileImage1.jpg'
import AutomobileImage2 from '../assets/images/AutomobileImage2.jpg'
import AutomobileImage3 from '../assets/images/AutomobileImage3.jpg'
import ChetakImage1 from '../assets/images/ChetakImage1.jpg'
import ChetakImage2 from '../assets/images/ChetakImage2.jpg'
import ChetakImage3 from '../assets/images/ChetakImage3.jpg'
import ChetakImage4 from '../assets/images/ChetakImage4.jpg'
import TextileImage1 from '../assets/images/TextileImage1.jpg'
import TextileImage2 from '../assets/images/TextileImage2.jpg'
import TextileImage3 from '../assets/images/TextileImage3.jpg'
import RajasthanTextileImage1 from '../assets/images/RajasthanTextileImage1.jpg'
import RajasthanTextileImage2 from '../assets/images/RajasthanTextileImage2.jpg'
import RajasthanTextileImage3 from '../assets/images/RajasthanTextileImage3.jpg'
import RajasthanTextileImage4 from '../assets/images/RajasthanTextileImage4.jpg'
import { Carousel } from 'flowbite-react'
// import { Carousel } from "flowbite-react";

const Carousal = ({title,subTitle}) => {
  return (
    <>
        <div className="py-4 sm:h-64 xl:h-80 2xl:h-96">
        {
            title==='Real Estate' && <Carousel>
            <img src={RealEstateImage} alt="..." />
            <img src={RealEstateImage1} alt="..." />
            <img src={RealEstateImage2} alt="..." />
            <img src={RealEstateImage3} alt="..." />
            <img src={RealEstateImage4} alt="..." />
            <img src={RealEstateImage5} alt="..." />
            <img src={RealEstateImage6} alt="..." />
        </Carousel>
        }
        {
            title==='Distributorship' && <Carousel>
            <img src={DistributionImage1} alt="..." />
            <img src={DistributionImage1} alt="..." />
            <img src={DistributionImage2} alt="..." />
            <img src={DistributionImage3} alt="..." />
            <img src={DistributionImage4} alt="..." />
            <img src={DistributionImage5} alt="..." />
            <img src={DistributionImage6} alt="..." />
        </Carousel>
        }
        {
            title==='Automobile Dealerships' && subTitle!=='BAJAJ' && subTitle!=='CHETAK' &&<Carousel>
            <img src={AutomobileImage1} alt="..." />
            <img src={AutomobileImage2} alt="..." />
            <img src={AutomobileImage3} alt="..." />
        </Carousel>
        }
        {
            title==='Automobile Dealerships' && (subTitle==='BAJAJ' || subTitle==='CHETAK') && <Carousel>
            <img src={ChetakImage1} alt="..." />
            <img src={ChetakImage2} alt="..." />
            <img src={ChetakImage3} alt="..." />
            <img src={ChetakImage4} alt="..." />
        </Carousel>
        }
        {
            title==='Textiles' && subTitle!=='RAJASTHAN GROUP' && <Carousel>
            <img src={TextileImage1} alt="..." />
            <img src={TextileImage2} alt="..." />
            <img src={TextileImage3} alt="..." />
        </Carousel>
        }
        {
            title==='Textiles' && subTitle==='RAJASTHAN GROUP' && <Carousel>
            <img src={RajasthanTextileImage1} alt="..." />
            <img src={RajasthanTextileImage2} alt="..." />
            <img src={RajasthanTextileImage3} alt="..." />
            <img src={RajasthanTextileImage4} alt="..." />
        </Carousel>
        }
        {title==='Agriculture' && <Carousel>
            <img src={RealEstateImage} alt="..." />
            <img src={RealEstateImage1} alt="..." />
            <img src={RealEstateImage2} alt="..." />
            <img src={RealEstateImage3} alt="..." />
            <img src={RealEstateImage4} alt="..." />
            <img src={RealEstateImage5} alt="..." />
            <img src={RealEstateImage6} alt="..." />
        </Carousel>}
        </div>
    </>
  )
}

export default Carousal
