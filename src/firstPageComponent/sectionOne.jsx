import Image from '../photo_2023-08-02_13-23-22.jpg'
import '../firstPageComponent/SectionOne.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function sectionOne() {

    return <>
        <div className='grid md:grid-cols-2 sm:grid-cols-1  mt- container mx-auto ' dir='rtl'>
            <div data-aos="fade-left" className='lg:p-10 md:p-7 sm:p-5 mr-2 ring-1 rounded-full ring-gray-300 dark:ring-gray-500  ' >
                <img   src={Image} alt="" className=' rounded-full hover:shadow-xl hover:shadow-black/40 ' loading='lazy'/>
            </div>
            <div className='flex justify-center items-center text-5xl font-bold lg:mt-[-100px]'>

                <section data-aos="fade-right" class=" ">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 ">
                        <h1 class="mb-4 text-4xl  tracking-tight leading-none text-white md:text-4xl lg:text-5xl font-kalamehblack transition duration-0 ">سلام! مهدی قاسمی هستم</h1>
                        <p class="mb-8 text-lg font-kalamehbold text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> برنامه نویس فرانت اند <br /> عاشق یادگیری و پیشرفت</p>
                        <div class="flex flex-col space-y-10 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-12">
                            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                نمونه کارها
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="Gallery.jsx" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                درباره من
                            </a>
                        </div>
                    </div>
                </section>

            </div>

        </div>

    </>

}
export default sectionOne;