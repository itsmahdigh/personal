import Pic from '../photo_2023-08-03_11-22-36.jpg'
import Img from '../photo_2023-08-03_11-22-44.jpg'
import Picture from '../photo_2023-08-03_11-22-50.jpg'
import 'aos/dist/aos.css';
function aboutMe() {

    return <>
        <div className="container mx-auto    mt-40 grid grid-cols-2  ">
            <div className="title flex justify-center  "
     >
                <img src={Pic} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl ' loading='lazy'/>
            </div>
            <div>
               
                <div className='flex justify-center flex-col text-center text-xl items-center '>
                    <h1 className='text-5xl font-black m-4'>درباره من</h1>
                    <span className='text-right'>   متولد 11مردادماه 1380 شهرستان میانه اذربایجان شرقی <br />
                    دانشجوی ارشد فناوری اطلاعات </span>
                </div>
            </div>
        </div>
{/*        
        <div className='grid grid-cols-2 container mx-auto'>

            <div>

            </div>
            <div className='flex justify-center ' data-aos="fade-left"  data-aos-offset="400"
     data-aos-easing="ease-in-sine">
                <img src={Img} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl 'loading='lazy' />

            </div>
        </div>

        <div className='grid grid-cols-2 container mx-auto mb-4'>

            <div className='flex justify-center'data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <img src={Picture} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl ' loading='lazy'/>
            </div>
            <div >


            </div>
        </div> */}
    </>
}
export default aboutMe;