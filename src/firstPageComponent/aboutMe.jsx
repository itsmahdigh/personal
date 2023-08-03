import Pic from '../photo_2023-08-03_11-22-36.jpg'
function aboutMe() {

    return <>
        <div className="container mx-auto rounded-lg lg:h-[500px] md:h-[400px] sm:h-[300px]  mt-8 grid grid-cols-2">
            <div className="title ">
                <img src={Pic} alt="" className='lg:h-[500px] md:h-[400px] sm:h-[300px] rounded-lg' />
            </div>
            <div>
            <div className='flex  justify-between  mt-4 mr-4' dir='rtl'>
                <span class="flex w-5 h-3 hover:h-5 animation-bounce bg-gray-500 rounded-full"></span>
                <span class="flex w-3 h-5 hover:w-5 bg-blue-600 rounded-full"></span>
                <span class="flex w-5 h-3 hover:h-5 bg-green-500 rounded-full"></span>
                <span class="flex w-3 h-5 hover:w-5 bg-purple-500 rounded-full"></span>
                <span class="flex w-5 h-3 hover:h-5 bg-indigo-500 rounded-full"></span>
                <span class="flex w-3 h-5 hover:w-5 bg-teal-500 rounded-full"></span>
                </div>
                <span className='flex justify-center text-center text-2xl items-center'>   متولد 11مردادماه 1380 شهرستان میانه اذربایجان شرقی <br />دانشجوی کارشناسی مهندسی کامپیوتر دانشگاه سراسری زنجان </span>
            </div>
        </div>

    </>
}
export default aboutMe;