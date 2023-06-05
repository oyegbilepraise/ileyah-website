import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { IconSearch } from '@tabler/icons-react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        {/* <section className="relative md:pt-44 pt-36 pb-36">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="text-center">
                <h1 className="font-bold lg:leading leading-normal text-4xl lg:text-7xl mb-6">Are you ready to find your dream home</h1>
                <p className="text-slate-400 mx-auto text-xl max-w-xl">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                <div className="subcribe-form relative z-1 mt-8">
                  <form className="relative max-w-2xl mx-auto">
                    <IconSearch className="feather feather-search w-5 h-5 absolute top-[47%] -translate-y-1/2 start-4" />
                    <input type="name" id="search_name" name="name" className="rounded-full bg-white  shadow  ps-12" placeholder="City, Address, Zip :" />
                    <button type="submit" className="btnn bg-green-600 hover:bg-green-700 text-white rounded-full">Search</button>
                  </form>
                </div>
              </div>
              <div className="relative -mt-[25px]">
                <img src="https://shreethemes.in/hously/layouts/assets/images/bg/05.jpg" className="rounded-xl shadow-md dark:shadow-gray-700" alt="" />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-md dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-green-600">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  )
}

export default page