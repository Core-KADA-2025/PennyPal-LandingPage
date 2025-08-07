
import {Link as SchroolLink ,Element} from 'react-scroll'
import hero from '../assets/Hero.jpg'
import personLaptop from '../assets/personLaptop.jpg'
import { AdjustmentsHorizontalIcon,CameraIcon,UserGroupIcon,ChartBarIcon,InboxStackIcon,ShieldCheckIcon,UserCircleIcon,ArrowsRightLeftIcon} from '@heroicons/react/24/outline'
import WhyPennyPal from '../components/WhyPennyPal'
import {useInView} from 'react-intersection-observer'
import {useState,useEffect} from 'react'
function LandingPage() {
  //defining state schrool
   const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ubah 400 sesuai tinggi hero kamu
      if (window.scrollY > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {ref,inView} = useInView({
    threshold:0.2,
    triggerOnce:false
  })
  // inView CTO, buat animasi fade in ketika di schrlling
   const {ref:refCTO,inView:inViewCTO} = useInView({
    threshold:0.2,
    triggerOnce:false
  })
  return (
    <>
      <div className='max-w-screen h-screen flex flex-col items-center justify-center font-sans gap-5'>
        <h1 className='text-3xl'>CORE Group 4</h1>
        <div className='w-full h-[60%] border border-black flex items-center  justify-center gap-2'>
          <div className='w-[25%] h-full flex items-center border border-black flex-col py-4'>
            <div className='w-48 h-48 rounded-full border-4 border border-black'></div>
            
          </div>
           <div className='w-[25%] h-full flex items-center border border-black flex-col py-4'>
            <div className='w-48 h-48 rounded-full border-4 border border-black'></div>
            
          </div>
           <div className='w-[25%] h-full flex items-center border border-black flex-col py-4'>
            <div className='w-48 h-48 rounded-full border-4 border border-black'></div>
            
          </div>
           <div className='w-[25%] h-full flex items-center border border-black flex-col py-4'>
            <div className='w-48 h-48 rounded-full border-4 border border-black'></div>
            
          </div>
        

      



        </div>
      </div>
      <div className='relative h-screen max-w-screen bg-gray-100 font-sans'>
        {/* header */}
        <div className={`fixed top-4 left-[5%] w-[90%] px-4 flex flex-row justify-between items-center rounded-xl h-[8%] md:flex-row shadow-xl bg-white z-50 ${showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} >
          <h1 className='text-3xl tex-bold-200 font-sans'>Pennypal</h1>
          <div className=' min-w-0 w-[30%]  h-full flex items-center px-4 gap-10 font-sans'>
            <SchroolLink to='home' duration={300} smooth={true}  className='hover:cursor-pointer hover:underline text-xl '>Home</SchroolLink>
            <SchroolLink to='features' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Features</SchroolLink>
            <SchroolLink to='testimoni' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Testimoni</SchroolLink>
            <SchroolLink to='login' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Login</SchroolLink>


          </div>

        </div>
        {/*heading */}
        <div className='max-w-screen h-[95%] flex flex-row'  id='home'>
          <div className='w-1/2 h-full flex flex-col items-center justify-center px-2'>
            <h1 className='md:text-8xl text-sm text-green-500'>PennyPal</h1>
            <h1 className='text-6xl text-center mt-10'>Take Control of Your Money, Without Losing Your Mind</h1>
            <h1 className='text-2xl text-center px-20  mt-10 w-full'>Organize your spending, track your budgets, and stay in charge — all in one clean, collaborative dashboard.</h1>
          </div>
          <div className='w-1/2 h-screen bg-contain bg-no-repeat bg-cover bg-red-200' style={{ backgroundImage: `url(${hero})` }}> </div>
        </div>
     


      </div>
      {/* features */}

      <div className='min-h-screen w-full bg-white-200 flex flex-col items-center pt-40 font-sans' >
          <WhyPennyPal/>
          
          <div className='flex flex-row h-[60vh] w-full   mt-20'>
            <div className='w-1/2 h-full mx-2 mb-5 bg-contain bg-cover' style={{ backgroundImage: `url(${personLaptop})`}}></div>
            <div className='w-1/2 h-full flex-col flex items-center justify-center px-5 gap-5 '>
              <h1 className='text-green-400 text-3xl text-center mx-10 font-bold'>  PennyPal is built to make budgeting feel human again — collaborative, clear, and flexible.</h1>
              <p className='text-center mx-20 px-30 '> Our platform helps you and your team stay on top of finances without the stress. Track expenses,
      set budgets, and collaborate with ease — all from a single, easy-to-use dashboard.</p>
            
            </div>
          </div>
          <h1 className='text-5xl mt-40 mb-20 font-sans font-bold' id='features'>Key-Features</h1>
           <div ref={ref} className={`h-[100vh] mt-50 flex flex-col w-[60%]  mt-2 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
            <div className='w-full h-[30%]   flex flex-row'>
              <div className='w-1/2 h-full  flex flex-row'>
                <div className='w-1/2 h-full flex items-center justify-start'>
                  <AdjustmentsHorizontalIcon className='h-[240px] w-[180px] mx-10 text-green-400 mb-10'/>
                </div>
                <div className='w-1/2 h-full px-2 py-7 flex flex-col gap-2'>
                  <h1 className='text-3xl font-bold font-sans '>Smart Budgeting</h1>
                  <p className='text-lg'>
                    Set, track, and adjust budgets for groceries, travel, rent, and more in real time.
                  </p>
                </div>
              </div>
              <div className='w-1/2 h-full flex flex-row'>
                 <div className='w-1/2 h-full flex items-center justify-centers'>
                  <CameraIcon className='h-[200px] w-[150px] mx-10 mb-10 text-green-400'/>
                  </div>
                  <div className='w-3/4 h-full px-2 py-7 flex flex-col gap-2'>
                     <h1 className='text-3xl font-bold'>Receipt Capture (OCR)</h1>
                    <p className='text-lg pb-10'>
	                    Upload or snap a photo of your receipt, and we’ll extract the items and amounts automatically.                    </p>
                  </div>
                </div>

            </div>
            <div className='w-full h-[30%] flex flex-row'>
              <div className='w-1/2 h-full flex flex-row'>
                <div className='w-1/2 h-full'>
                  <ChartBarIcon className='h-[200px] w-[150px] mx-10 mb-10 text-green-400'/>
                </div>
                <div className='w-1/2 h-full px-2 py-7 flex flex-col gap-2'>
                  <h1 className='text-3xl font-bold'>	Visual Insights</h1>
                  <p className='text-lg'>
                     Simple charts to help you see what’s eating your money — no spreadsheets needed.</p>
                </div>
              </div>
              <div className='w-1/2 h-full flex flex-row'>
                 <div className='w-1/2 h-full'>
                  <InboxStackIcon className='h-[200px] text-green-400 w-[150px] mx-10 mb-10'/>
                 
                 </div>
                  <div className='w-3/4 h-full px-2 py-7 flex flex-col gap-2'>
                     <h1 className='text-3xl font-bold'>	Smart Spending Reports</h1>
                    <p className='text-lg'>
                      Get monthly, yearly, and category-based summaries — all in one place, no digging</p>
                  </div>
                </div>

            </div>
            <div className='w-full h-[30%]  flex flex-row'>
              <div className='w-1/2 h-full flex flex-row'>
                <div className='w-1/2 h-full'>
                  <ArrowsRightLeftIcon className='h-[200px] w-[150px] mx-10 mb-10 text-green-400'/>
                </div>
                <div className='w-1/2 h-full px-2 py-7 flex flex-col gap-2'>
                  <h1 className='text-3xl font-bold'>Currency Converter </h1>
                  <p className='text-lg'>
                    Convert your spending into any currency — instantly.</p>
                </div>
              </div>
              <div className='w-1/2 h-full flex flex-row'>
                 <div className='w-1/2 h-full'>
                  <ShieldCheckIcon className='h-[200px] w-[150px] mx-10 mb-10 text-green-400'/>
                 </div>
                  <div className='w-3/4 h-full px-2 py-7 flex flex-col gap-5'>
                     <h1 className='text-3xl font-bold'>Privacy-First</h1>
                    <p className='text-lg'>
	                      Your financial data stays yours. No ads, no selling data.  </p>
                  </div>
                </div>

            </div>
                        


           
             
            
           </div>

      </div>
      {/* testomoni */}
      <div className='h-screen max-w-screen bg-white font-sans flex flex-col items-center py-20 gap-20' id='testimoni'>
        <h1 className='text-4xl font-bold font-sans'>What Our Clients Say</h1>
        <div className='w-[90%] h-[80%]  flex flex-row px-2 justify-center gap-4 '>
          <div className='w-[30%] h-full flex flex-col items-center gap-5 px-10 py-2 bg-green-100 rounded-xl'>
            <UserCircleIcon className='w-[30%]'/>
            <p className='text-center leading-normal text-xl'>❝ PennyPal helps me track my daily expenses effortlessly. No more messy spreadsheets — everything I need is right on the dashboard! ❞</p>
            <h1 className='text-2xl font-bold text-green-700'>Nat Reynolds</h1>
            <h1 className='text-xl'>Secretary</h1>

          </div>
          <div className='w-[30%] h-full flex flex-col items-center gap-5 px-10 py-2 bg-green-100 rounded-xl'>
            <UserCircleIcon className='w-[30%]'/>
            <p className='text-center leading-normal text-xl'>❝ PennyPal helps me track my daily expenses effortlessly. No more messy spreadsheets — everything I need is right on the dashboard! ❞</p>
            <h1 className='text-2xl font-bold text-green-700'>Nat Reynolds</h1>
            <h1 className='text-xl'>Secretary</h1>

          </div>
          <div className='w-[30%] h-full flex flex-col items-center gap-5 px-10 py-2 bg-green-100 rounded-xl'>
            <UserCircleIcon className='w-[30%]'/>
            <p className='text-center leading-normal text-xl'>❝ PennyPal helps me track my daily expenses effortlessly. No more messy spreadsheets — everything I need is right on the dashboard! ❞</p>
            <h1 className='text-2xl font-bold text-green-700'>Nat Reynolds</h1>
            <h1 className='text-xl'>Secretary</h1>

          </div>
          


        </div>

      </div>
      {/* Cto */}
      <div id='login' className={`max-w-screen h-[90vh] bg-green-200 flex flex-col items-center justify-center font-sans gap-5 ${inViewCTO ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`} ref={refCTO}>

        <h1 className='text-6xl'>Ready to take control of your finances</h1>
        <h2 className='text-2xl'>Log in now and start managing your budget effortlessly.</h2>
        <button className='bg-green-600 hover:bg-green-700 w-[15%] text-white font-bold rounded-2xl h-[5%]'>Log in PennyPal</button>

      </div>
      {/* footer */}
      <div className='h-[30vh] max-w-screen bg-green-800 flex flex-col'>
        <div className='max-w-full ml-20 h-3/4 bg-gree-800 flex flex-row'>
          <div className='w-[30%] h-full  flex flex-col px-4 py-8 font-sans gap-5'>
            <h2 className='text-white font-bold'>Brand & Tahgline</h2>
            <ul className='list-disc ml-4'>
              <li><span className='font-bold'>PennyPal</span>
                <h2 className=' font-bold italic'>Take control of your money — without losing your mind.</h2>


              </li>

            </ul>
            

          </div>
          <div className='w-[15%] h-full e flex flex-col px-4 py-8 font-sans gap-5'>
            <h2 className='text-white font-bold'>Resources</h2>
            <ul className='list-disc ml-4'>
              <li className='font-bold'>Blog</li>
              <li className='font-bold'>Help Center</li>
              <li className='font-bold'>Privacy Policy</li>
              <li className='font-bold'>Terms of Service</li>

            </ul>
            

          </div>
           <div className='w-[15%] h-full flex flex-col px-4 py-8 font-sans gap-5'>
            <h2 className='text-white font-bold'>Quick Links</h2>
            <ul className='list-disc ml-4'>
              <li className='font-bold'>Home</li>
              <li className='font-bold'>Features</li>
              <li className='font-bold'>FAQs</li>
              <li className='font-bold'>Contact Us</li>

            </ul>
            

          </div>
          <div className='w-[30%] h-full  flex flex-col px-4 py-8 font-sans gap-5'>
            <h2 className='text-white font-bold'>Contact Info</h2>
            <ul className='list-disc ml-4'>
              <li className='font-bold'>📧 Email: support@pennypal.com</li>
              <li className='font-bold'>📍 Address: 123 Green Street, Jakarta, Indonesia</li>
             

            </ul>
            

          </div>
          
        </div>
        <div className='max-w-screen h-1/4 font-bold flex items-center justify-center py-2'>
          © {new Date().getFullYear()} PennyPal. All rights reserved.
        </div>

      </div>


        

      
    </>
  )
}

export default LandingPage
