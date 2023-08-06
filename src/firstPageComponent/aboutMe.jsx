import Pic from '../photo_2023-08-03_11-22-36.jpg'
import Img from '../photo_2023-08-03_11-22-44.jpg'
import Picture from '../photo_2023-08-03_11-22-50.jpg'
function aboutMe() {

    return <>
        <div className="container mx-auto    mt-8 grid grid-cols-2 ">
            <div className="title flex justify-center ">
                <img src={Pic} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl ' loading='lazy'/>
            </div>
            <div>
                <div className='flex  justify-between  mt-4 mr-4' dir='rtl'>
                    <span class="flex w-5 h-3 hover:h-5 animation-bounce bg-gray-500 rounded-full"></span>
                    <span class="flex w-3 h-5 hover:w-5 bg-blue-600 rounded-full"></span>
                    <span class="flex w-5 h-3 hover:h-5 bg-green-500 rounded-full"></span>
                    <span class="flex w-3 h-5 hover:w-5 bg-purple-500 rounded-full"></span>
                    <span class="flex w-5 h-3 hover:h-5 bg-indigo-500 rounded-full"></span>
                    <span class="flex w-3 h-5 hover:w-5 bg-teal-500 rounded-full"></span>
                </div >
                <div className='flex justify-center text-center text-2xl items-center'>
                    <span className=''>   متولد 11مردادماه 1380 شهرستان میانه اذربایجان شرقی <br />
                        دانشجوی کارشناسی مهندسی کامپیوتر دانشگاه سراسری زنجان </span>
                </div>
            </div>
        </div>
        {/* <div className='container mx-auto flex  justify-between  mt-4 mr-4' dir='rtl'>
            <span class="flex w-5 h-3 hover:h-5 animation-bounce bg-gray-500 rounded-full"></span>
            <span class="flex w-3 h-5 hover:w-5 bg-blue-600 rounded-full"></span>
            <span class="flex w-5 h-3 hover:h-5 bg-green-500 rounded-full"></span>
            <span class="flex w-3 h-5 hover:w-5 bg-purple-500 rounded-full"></span>
            <span class="flex w-5 h-3 hover:h-5 bg-indigo-500 rounded-full"></span>
            <span class="flex w-3 h-5 hover:w-5 bg-teal-500 rounded-full"></span>
        </div > */}
        <div className='grid grid-cols-2 container mx-auto'>

            <div>

            </div>
            <div className='flex justify-center'>
                <img src={Img} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl 'loading='lazy' />

            </div>
        </div>

        <div className='grid grid-cols-2 container mx-auto mb-4'>

            <div className='flex justify-center'>
                <img src={Picture} alt="" className='lg:h-[400px] md:h-[300px] sm:h-[200px] rounded-2xl ' loading='lazy'/>
            </div>
            <div >


            </div>
        </div>
    </>
}
export default aboutMe;