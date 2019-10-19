import React, { Component } from 'react';
import Hero from '../../components/Hero';

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />

        {/* Projects slides */}
      <div className= "w-full mt-40 max-w-screen-xl mx-auto px-6  sm:pr-20 sm:pl-20">
        <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">Projects we love</h1>
           <div className="border-orange-500 border-l-2 pl-5 pt-5 pb-5 ">        
              <p>we are always adventurous and that drive us to build cool product</p>
              <p>We derive joy in making your space your space truly.</p>
           </div>

          <div
            className="w-full flex flex-col  pt-24 items-center lg:flex-row lg:h-80 lg:justify-between">

            <div className="w-1/3 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="w-2/3 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div> */}

            </div>
        </div>


         {/* Projects slides */}
      <div className= "w-full mt-40 max-w-screen-xl mx-auto px-6 pb-24  sm:pr-20 sm:pl-20">
      <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">We build awesome stuffs too</h1>
          <div className="border-orange-500  border-l-2 pl-5 pt-5 pb-5 ">
              
              <p>we are always adventurous and that drive us to build cool product</p>
              <p>we are always adventurous and that drive us to build cool product</p>
          </div>

          <div
            className="w-full flex flex-col  pt-24 items-center
        lg:flex-row lg:h-80 lg:justify-between"
        >

            <div className="max-w-sm lg:w-1/3 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="max-w-sm lg:w-2/3 rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://res.cloudinary.com/appnet/image/upload/v1571059042/cns/cribs_logo.jpg" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
            </div>

            </div>
           
           
      </div>

     
       {/* About section */}
       <div className="w-full flex flex-col bg-gray-200  pt-24 pb-24 items-center lg:flex-row lg:h-80 lg:justify-between">
              <div className="w-1/2 pl-5 pr-5">
                  <h1 className="font-raleway pb-4 leading-tight sm:text-3xl md:text-4xl lg-text-5xl xl:text-5xl text-2xl">Our Studio</h1>
                  <img className="w-1/2" src="https://res.cloudinary.com/appnet/image/upload/v1571058998/cns/bathtub.png" /> 
              </div>  
              <div className="w-1/2 pl-5 pr-5">
                  <div className="border-orange-500  border-l-2 pl-5 pt-5 pb-5 ">
                  
                      <p>We are a team young smart people who
                        are commited to frontiering the interior
                        design movement in Africa and the world
                        at large.</p>
                      
                  </div>

                  <p>we are always adventurous and that drive us to build cool product</p>



                  <form className=" flex w-full max-w-sm">
                    <div className="md:flex md:items-center">
                      <div className="md:w-1/3">
                          <input className="bg-gray-200  border-2 border-orange-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" value="example@mail.com" />
                      </div>
                      <div clasNames="md:w-2/3">
                        <button className="shadow bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                         Join
                        </button>
                      </div>
                    </div>
                  </form> 
              </div> 
            </div>  
      </>
    )
  }
}
