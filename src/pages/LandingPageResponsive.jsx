import {Link as SchroolLink ,Element} from 'react-scroll'
import hero from '../assets/Hero.jpg'
import personLaptop from '../assets/personLaptop.jpg'
import { AdjustmentsHorizontalIcon,CameraIcon,UserGroupIcon,ChartBarIcon,InboxStackIcon,ShieldCheckIcon,UserCircleIcon,ArrowsRightLeftIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import WhyPennyPal from '../components/WhyPennyPal'
import {useInView} from 'react-intersection-observer'
import {useState,useEffect} from 'react'
import risfan from '../assets/risfan.jpg'
import wika from '../assets/wika.jpg'
import zaf from '../assets/zaf.jpg'
import zain from '../assets/zain.jpg'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import {Link as PathLink} from 'react-router-dom'

function LandingPage() {
  // defining state scroll
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// tampilan nav bar
  useEffect(() => {
    const handleScroll = () => {
      // change 400 according to your hero height
      if (window.scrollY > window.innerHeight-30) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  //animasi 
  const {ref,inView} = useInView({
    threshold:0.2,
    triggerOnce:false
  })

  // inView CTO, animasi fade in
  const {ref:refCTO,inView:inViewCTO} = useInView({
    threshold:0.2,
    triggerOnce:false
  })

  return (
    <>
      {/* Hero Section - Team Members */}
      <div className='max-w-screen h-[150vh] md:h-screen flex flex-col items-center justify-start py-5 font-sans gap-5 px-4 font-sans'>
        <h1 className='text-2xl md:text-3xl text-center'>KADA 2025 Capstone Project </h1>
        <h1 className='text-2xl md:text-3xl text-center font-bold'>Group 4 CORE</h1>
        <div className='flex flex-row gap-2'><FaGithub size={24}/><h1 className='font-bold'>Github :</h1> </div>
        <a href='https://github.com/Core-KADA-2025/PennyPal' className='hover:text-blue-500 text-xs md:text-sm'>https://github.com/Core-KADA-2025/PennyPal</a>
        <div className='w-full max-w-6xl md:h-[60%]   flex flex-col md:flex-row items-center justify-center gap-2 '>
            <div className='w-full md:w-[25%] md:flex-col  flex-row h-25 md:h-full flex items-center  gap-2 px-2 py-4'>
              <div className='w-20 h-20  md:w-48 md:h-48 rounded-full  bg-contain bg-cover' style={{ backgroundImage: `url(${risfan}`}}></div>
              <div className='flex items-center ml-30 md: flex-col md:ml-0 ml-5'>
                 <h1 className='md:text-xl text-sm font-bold'>Risfandhiani Triara Putri</h1>
                 <h1 className='italic'> Leader</h1>
                 <div className='flex flex-row gap-1'><FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />  <h1 className='font-bold'>Linkedin :</h1></div>
                  <a href="https://www.linkedin.com/in/risfandhiani/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 text-xs mt-2'>https://www.linkedin.com/in/risfandhiani/</a> 
               
              </div>
              
               
            </div>
           <div className='w-full md:w-[25%] md:flex-col flex-row h-25 md:h-full flex items-center gap-2 px-2 py-4'>
              <div className='w-20 h-20 md:w-48 md:h-48 rounded-full k bg-contain bg-cover' style={{ backgroundImage: `url(${wika}`}}></div>
              <div className='flex items-center md: flex-col md:ml-0 ml-5'>
                 <h1 className='md:text-xl text-md font-bold'>Satwika Zahrani Putri</h1>
                 <h1 className='italic'>Member</h1>
                 <div className='flex flex-row gap-1'><FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />  <h1 className='font-bold'>Linkedin :</h1></div>
                  <a href="https://www.linkedin.com/in/satwika-putri/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 text-xs mt-2'>https://www.linkedin.com/in/satwika-putri/</a> 
               
              </div>
              
               
            </div>
            <div className='w-full md:w-[25%] md:flex-col flex-row h-25 md:h-full flex items-center  gap-2 px-2 py-4'>
              <div className='w-20 h-20 md:w-48 md:h-48 rounded-full  bg-contain bg-cover' style={{ backgroundImage: `url(${zaf}`}} ></div>
              <div className='flex items-center md: flex-col md:ml-0 ml-5'>
                 <h1 className='md:text-xl text-md font-bold'>Zafyra Raisidha Azhari</h1>
                 <h1 className='italic'> Member</h1>
                 <div className='flex flex-row gap-1'><FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />  <h1 className='font-bold'>Linkedin :</h1></div>
                  <a href="https://www.linkedin.com/in/zafyrazhari/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 text-xs mt-2'>https://www.linkedin.com/in/zafyrazhari/</a> 
               
              </div>
              
               
            </div>
            <div className='w-full md:w-[25%] md:flex-col flex-row h-25 md:h-full flex items-center gap-2 px-2 py-4'>
              <div className='w-20 h-20 md:w-48 md:h-48 rounded-full bg-contain bg-cover' style={{ backgroundImage: `url(${zain}`}}  ></div>
              <div className='flex items-center md: flex-col md:ml-0 ml-5'>
                 <h1 className='md:text-xl text-md font-bold'>Zaini Ahmad</h1>
                 <h1 className='italic'> Member</h1>
                 <div className='flex flex-row gap-1'><FaLinkedin size={24} className="text-blue-600 hover:text-blue-800" />  <h1 className='font-bold'>Linkedin :</h1></div>
                  <a href="https://www.linkedin.com/in/zaini-ahmad-364392147" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 text-xs mt-2'>www.linkedin.com/in/zaini-ahmad/</a> 
               
              </div>
              
               
            </div>
    
        </div>
      </div>

      {/* Main Landing  */}
      <div className='relative min-h-screen max-w-screen bg-gray-100 font-sans'>
        {/* Fixed Header */}
        <div className={`fixed top-2 md:top-4 left-[2%] md:left-[5%] w-[96%] md:w-[90%] px-4 flex flex-row justify-between items-center rounded-xl h-[10%] md:h-[8%] shadow-xl bg-white z-50 ${showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <h1 className='text-xl md:text-3xl font-bold font-sans'>Pennypal</h1>
          
          {/* Desktop Navi */}
          <div className='hidden md:flex min-w-0 w-[50%] h-full items-center px-4 gap-10 font-sans'>
            <SchroolLink to='home' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Home</SchroolLink>
            <SchroolLink to='features' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Features</SchroolLink>
            <SchroolLink to='testimoni' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Testimonials</SchroolLink>
            <SchroolLink to='login' duration={300} smooth={true} className='hover:cursor-pointer hover:underline text-xl'>Login</SchroolLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden p-2'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className='h-6 w-6' />
            ) : (
              <Bars3Icon className='h-6 w-6' />
            )}
          </button>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className='absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl md:hidden'>
              <div className='flex flex-col py-4 px-6 gap-4'>
                <SchroolLink 
                  to='home' 
                  duration={300} 
                  smooth={true} 
                  className='hover:cursor-pointer hover:underline text-lg py-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </SchroolLink>
                <SchroolLink 
                  to='features' 
                  duration={300} 
                  smooth={true} 
                  className='hover:cursor-pointer hover:underline text-lg py-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </SchroolLink>
                <SchroolLink 
                  to='testimoni' 
                  duration={300} 
                  smooth={true} 
                  className='hover:cursor-pointer hover:underline text-lg py-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimoni
                </SchroolLink>
                <SchroolLink 
                  to='login' 
                  duration={300} 
                  smooth={true} 
                  className='hover:cursor-pointer hover:underline text-lg py-2'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </SchroolLink>
              </div>
            </div>
          )}
        </div>

        {/* Hero Content */}
        <div className='max-w-screen min-h-screen flex flex-col items-center md:flex-row px-4 md:px-0' id='home'>
          <div className='w-full md:w-1/2 h-screen md:h-full flex flex-col items-center justify-center px-2 md:px-4'>
            <h1 className='text-4xl md:text-8xl text-green-500 text-center'>PennyPal</h1>
            <h1 className='text-2xl md:text-4xl text-center mt-6 md:mt-10 leading-tight'>Take Control of Your Money, Without Losing Your Mind</h1>
            <h1 className='text-lg md:text-xl md:text-opacity-90 text-center px-4 md:px-20 mt-6 md:mt-10 w-full'>Organize your spending, track your budgets, and stay in charge — all in one clean, collaborative dashboard.</h1>
          </div>
          <div className='w-full md:w-1/2 h-64 md:h-screen bg-contain bg-no-repeat bg-cover bg-red-200' style={{ backgroundImage: `url(${hero})` }}></div>
        </div>
      </div>

      {/* Features Section */}
      <div className='min-h-screen w-full bg-white-200 flex flex-col items-center pt-20 md:pt-40 font-sans px-4'>
        <WhyPennyPal/>
        
        <div className='flex flex-col md:flex-row h-auto md:h-[60vh] w-full mt-10 md:mt-20 gap-8 md:gap-0'>
          <div className='w-full md:w-1/2 h-64 md:h-full mx-2 mb-5 bg-contain bg-cover rounded-lg' style={{ backgroundImage: `url(${personLaptop})`}}></div>
          <div className='w-full md:w-1/2 h-auto md:h-full flex-col flex items-center justify-center px-2 md:px-5 gap-5'>
            <h1 className='text-green-400 text-2xl md:text-3xl text-center mx-2 md:mx-10 font-bold'>PennyPal is built to make budgeting feel human again — collaborative, clear, and flexible.</h1>
            <p className='text-center mx-4 md:mx-20 text-base md:text-lg'>Our platform helps you and your team stay on top of finances without the stress. Track expenses, set budgets, and collaborate with ease — all from a single, easy-to-use dashboard.</p>
          </div>
        </div>

        <h1 className='text-3xl md:text-5xl mt-20 md:mt-40 mb-10 md:mb-20 font-sans font-bold text-center' id='features'>Key Features</h1>
        
        {/* Features Grid */}
        <div ref={ref} className={`min-h-screen mt-4 flex flex-col w-full md:w-[60%] px-4 md:px-0 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}>
          
          {/* Feature Row 1 */}
          <div className='w-full flex flex-col md:flex-row gap-8 md:gap-0 mb-8 md:mb-0'>
            {/* Smart Budgeting */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <AdjustmentsHorizontalIcon className='h-20 w-20 md:h-[240px] md:w-[180px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-1/2 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold font-sans'>Smart Budgeting</h1>
                <p className='text-base md:text-lg'>Set, track, and adjust budgets for groceries, travel, rent, and more in real time.</p>
              </div>
            </div>
            
            {/* Receipt Capture */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <CameraIcon className='h-20 w-20 md:h-[200px] md:w-[150px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-3/4 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold'>Receipt Capture (OCR)</h1>
                <p className='text-base md:text-lg'>Upload or snap a photo of your receipt, and we'll extract the items and amounts automatically.</p>
              </div>
            </div>
          </div>

          {/* Feature Row 2 */}
          <div className='w-full flex flex-col md:flex-row gap-8 md:gap-0 mb-8 md:mb-0'>
            {/* Visual Insights */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <ChartBarIcon className='h-20 w-20 md:h-[200px] md:w-[150px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-1/2 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold'>Visual Insights</h1>
                <p className='text-base md:text-lg'>Simple charts to help you see what's eating your money — no spreadsheets needed.</p>
              </div>
            </div>
            
            {/* Smart Reports */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <InboxStackIcon className='h-20 w-20 md:h-[200px] md:w-[150px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-3/4 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold'>Smart Spending Reports</h1>
                <p className='text-base md:text-lg'>Get monthly, yearly, and category-based summaries — all in one place, no digging</p>
              </div>
            </div>
          </div>

          {/* Feature Row 3 */}
          <div className='w-full flex flex-col md:flex-row gap-8 md:gap-0'>
            {/* Currency Converter */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <ArrowsRightLeftIcon className='h-20 w-20 md:h-[200px] md:w-[150px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-1/2 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold'>Currency Converter</h1>
                <p className='text-base md:text-lg'>Convert your spending into any currency — instantly.</p>
              </div>
            </div>
            
            {/* Privacy First */}
            <div className='w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-start'>
              <div className='w-full md:w-1/2 flex items-center justify-center md:justify-start mb-4 md:mb-0'>
                <ShieldCheckIcon className='h-20 w-20 md:h-[200px] md:w-[150px] mx-4 md:mx-10 text-green-400'/>
              </div>
              <div className='w-full md:w-3/4 px-2 py-2 md:py-7 flex flex-col gap-2 text-center md:text-left'>
                <h1 className='text-2xl md:text-3xl font-bold'>Privacy-First</h1>
                <p className='text-base md:text-lg'>Your financial data stays yours. No ads, no selling data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimoni */}
    <div className='min-h-screen lg:h-screen k max-w-screen bg-white font-sans flex flex-col items-center py-10 md:py-20 gap-10 md:gap-20 px-4' id='testimoni'>
        <h1 className='text-2xl md:text-4xl font-bold font-sans text-center'>What Our Clients Say</h1>
        <div className='w-full md:w-[90%] lg:h-[60vh] flex flex-col md:flex-row px-2 justify-center gap-4'>
            {[1,2,3].map((testimonial, index) => (
                <div key={index} className='w-full h-auto lg:h-full md:w-[30%] flex flex-col items-center justify-center gap-5 px-6 md:px-10 py-6 lg:py-8 bg-green-100 rounded-xl mb-4 md:mb-0'>
                    <UserCircleIcon className='w-16 h-16 md:w-[30%] lg:w-24 lg:h-24 md:h-auto'/>
                    <p className='text-center leading-normal text-lg md:text-xl'>❝ PennyPal helps me track my daily expenses effortlessly. No more messy spreadsheets — everything I need is right on the dashboard! ❞</p>
                    <h1 className='text-xl md:text-2xl font-bold text-green-700'>Nat Reynolds</h1>
                    <h1 className='text-lg md:text-xl'>Secretary</h1>
                </div>
             ))}
         </div>
    </div>

      {/* CTO */}
      <div id='login' className={`max-w-screen min-h-[90vh] bg-green-200 flex flex-col items-center justify-center font-sans gap-5 px-4 py-10 ${inViewCTO ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700`} ref={refCTO}>
        <h1 className='text-3xl md:text-6xl text-center leading-tight'>Ready to take control of your finances</h1>
        <h2 className='text-lg md:text-2xl text-center'>Log in now and start managing your budget effortlessly.</h2>
         <a href="https://core-pennypal.vercel.app/" className='bg-green-600 hover:bg-green-700 w-[60%]  text-white font-bold rounded-2xl h-12 md:w-[20%]  flex items-center justify-center min-h-[48px]' target="_blank"><button className='bg-green-600 hover:bg-green-700 w-full md:w-full text-white font-bold rounded-2xl h-12 md:h-[5%] min-h-[48px]'>Log in PennyPal</button></a>
      </div>

      {/* Footer */}
      <div className='min-h-[30vh] max-w-screen bg-green-800 flex flex-col px-4'>
        <div className='max-w-full h-3/4 bg-green-800 flex flex-col md:flex-row md:ml-20 py-8'>
          {/* Brand Section */}
          <div className='w-full md:w-[30%] flex flex-col px-4 py-4 md:py-8 font-sans gap-5 mb-6 md:mb-0'>
            <h2 className='text-white font-bold text-lg'>Brand & Tagline</h2>
            <div className='ml-4'>
              <span className='font-bold text-white text-xl'>PennyPal</span>
              <h2 className='font-bold italic text-white mt-2'>Take control of your money — without losing your mind.</h2>
            </div>
          </div>

          {/* Resources */}
          <div className='w-full md:w-[15%] flex flex-col px-4 py-4 md:py-8 font-sans gap-5 mb-6 md:mb-0'>
            <h2 className='text-white font-bold text-lg'>Resources</h2>
            <ul className='list-disc ml-4 space-y-2'>
              <li className='font-bold text-white'>Blog</li>
              <li className='font-bold text-white'>Help Center</li>
              <li className='font-bold text-white'>Privacy Policy</li>
              <li className='font-bold text-white'>Terms of Service</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className='w-full md:w-[15%] flex flex-col px-4 py-4 md:py-8 font-sans gap-5 mb-6 md:mb-0'>
            <h2 className='text-white font-bold text-lg'>Quick Links</h2>
            <ul className='list-disc ml-4 space-y-2'>
              <li className='font-bold text-white'>Home</li>
              <li className='font-bold text-white'>Features</li>
              <li className='font-bold text-white'>FAQs</li>
              <li className='font-bold text-white'>Contact Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='w-full md:w-[30%] flex flex-col px-4 py-4 md:py-8 font-sans gap-5'>
            <h2 className='text-white font-bold text-lg'>Contact Info</h2>
            <ul className='list-disc ml-4 space-y-2'>
              <li className='font-bold text-white'>📧 Email: support@pennypal.com</li>
              <li className='font-bold text-white'>📍 Address: 123 Green Street, Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='max-w-screen h-1/4 font-bold flex items-center justify-center py-4 text-white text-center'>
          © {new Date().getFullYear()} PennyPal. All rights reserved.
        </div>
      </div>
    </>
  )
}

export default LandingPage