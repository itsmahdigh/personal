import LOGO from '../LOGO.png'
function footer(){

    return<>
    
    
<footer class=" rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0">
                <img src={LOGO} class="h-[100px] mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">itsMahdi</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white dark:text-white sm:mb-0 ">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">نمونه کارها</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">ارتباط با من</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">itsMahdi™</a>. All Rights Reserved.</span>
    </div>
</footer>


    </>
}export default footer;