import './App1.css';
import { IoIosMail, IoIosSunny, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward,IoIosQuote  } from "react-icons/io";
import { FaGooglePlusG, FaAngleDown } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiStudentFill,PiPencilSimpleLineFill,PiChalkboardTeacherFill,PiEnvelopeOpenFill,PiQuotesFill  } from "react-icons/pi";
import img1 from './image/logo.svg';
import img2 from './image/slider1.jpeg';
import img3 from './image/course1.webp';
import img4 from './image/course2.webp';
import img5 from './image/course3.webp';
import img6 from './image/course4.webp';
import img7 from './image/course5.webp';
import img8 from './image/course6.webp';
import img9 from './image/about.jpeg';
import img10 from './image/count.jpeg';
// import img11 from './image/counter-icon.png';
import img12 from './image/happy1.jpeg';
import img13 from './image/happy-bg1.jpeg';
import img14 from './image/happy-bg1.png';
import ad1 from './image/ad1.png';
import ad2 from './image/ad2.png';
import ad3 from './image/ad3.png';
import ad4 from './image/ad4.png';
import ad5 from './image/ad5.png';
import ad6 from './image/ad6.png';
import partner1 from './image/asset 40.png';
import partner2 from './image/asset 41.png';
import partner3 from './image/asset 42.png';
import partner4 from './image/asset 43.png';
import partner5 from './image/asset 44.png';
import partner6 from './image/asset 45.png';
// import abc from './image/asset 54.jpeg';
import footer from './image/footer.svg'

function App() {
  return (
    <div className='website'>

      {/* TOP-MENU START */}
      <div className="top-menu">
        <div className="d-flex container">
          <div className='d-flex right'>
            <div className='d-flex mail'>
              <IoIosMail className='icon'></IoIosMail>
              <p>info@cdmi.in</p>
            </div>

            <div className='d-flex sun'>
              <IoIosSunny className='icon'></IoIosSunny >
              <p>Verify Certificate</p>
            </div>
          </div>
          <div>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div d-flex>
            <IoLogoFacebook className='socail'></IoLogoFacebook>
            <IoLogoTwitter className='socail'></IoLogoTwitter>
            <FaGooglePlusG className='socail'></FaGooglePlusG>
            <IoLogoLinkedin className='socail'></IoLogoLinkedin>
            <IoLogoInstagram className='socail'></IoLogoInstagram>
            <IoLogoYoutube className='socail'></IoLogoYoutube>
            <IoLogoWhatsapp className='socail'></IoLogoWhatsapp>
          </div>
        </div>
      </div>
      {/* TOP-MENU END */}

      {/* MAIN-MENU START */}
      <div className='menu'>
        <div className='d-flex container'>
          <div className='logo'>
            <img src={img1}></img>
          </div>

          <nav>
            <ul className='main-menu d-flex'>
              <li><a href=''>Home</a></li>
              <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Activities<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Known Us<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Get In Touch<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Student Zone</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* MAIN-MENU END */}

      {/* Slider Start */}
      <div className='slider'>
        <img src={img2}></img>
      </div>
      {/* Slider End */}

      {/* CREATIVE COURSE START */}
      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          <div className='w-33'>
            <div className='content'>
              <img src={img3}></img>
              <h2>Development Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img4}></img>
              <h2>Design Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img5}></img>
              <h2>Programming IT</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img6}></img>
              <h2>Trendy Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img7}></img>
              <h2>Civil-Mech. Engineering</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img8}></img>
              <h2>Bussiness Development</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE END */}

      {/* ABOUT US START */}
      <div className='about pd-y'>
        <div className='d-flex'>
          <div className='about-content'>
            <div className='container'>
              <p className='about-head'>About Us
                <div className='line'></div>
              </p>
              <h1>IT Career in Surat, moving towards the better Tomorrow!</h1>
              <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
                institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
                types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
                in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
                or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
                hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <button className='about-btn'><a href=''>Enroll Now...!<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
            </div>
          </div>
          <div className='about-img'>
            <img src={img9}></img>
          </div>
        </div>
      </div>
      {/* ABOUT US END */}

      {/* COUNTING START */}
      <div className='count'>

        <div style={{
          width:'100%',
          height:'230px',
          backgroundImage:`url(${img10})`,
          backgroundSize:'cover',
          backgroundPosition:'center',
        }}>

          <div className='container content'>
            <div className='d-flex'>
                  <div className='w-25 c-1'>
                    <PiStudentFill className='count-icon'></PiStudentFill> 
                    <h1>14000+</h1>
                    <h2>Happy students</h2>
                  </div>
                  <div className='w-25 c-2'>
                    <PiPencilSimpleLineFill className='count-icon'></PiPencilSimpleLineFill>
                    <h1>10+</h1>
                    <h2>Certification Approval</h2>
                  </div>
                  <div className='w-25 c-3'>
                    <PiChalkboardTeacherFill className='count-icon'></PiChalkboardTeacherFill>
                    <h1>70+</h1>
                    <h2>Certified Teachers</h2>  
                  </div>
                  <div className='w-25 c-4'>
                    <PiEnvelopeOpenFill className='count-icon'></PiEnvelopeOpenFill>
                    <h1>9000+</h1>
                    <h2>Students Placed</h2>
                  </div>
            </div>
          </div>

        </div>
        
      </div>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>
      
        <div className='d-flex'>
          <div className='w-50 happy'>
              <p className='happy-head'>Happy Students
                <div className='line'></div>
              </p>
              <h1>Alumni Speak</h1>
              <PiQuotesFill  className='happy-icon'></PiQuotesFill>
              <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

              <div className='happy-bottom d-flex'>
                  <img src={img12}></img>
                  <div className='bottom-con'>
                      <h3>Goti Shruti</h3>
                      <h5><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>
                  </div>
              </div>
          </div>

          <div className='w-50 happy-img'>
              <div style={{
              width:'500px',
              height:'500px',
              backgroundImage:`url(${img13})`,
              backgroundSize:'cover',
              backgroundPosition:'center',
            }}>
              
            <div className='happy1'>
              <img src={img14}></img>
            </div>
            </div>  
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}
{/* 
       {/*  Creative Section End */}

       <div className="read space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className="sub_title">READ OUR DIFFERNCE</span>
                        <h2>WHY CHOOSE CREATIVE</h2>
                    </div>
                    <div className="row d-flex">
                        <div className="box2">
                            <div className="img">
                                <img src={ad1} style={{ backgroundColor: "#F6475F" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={ad2} style={{ backgroundColor: "#FFBC06" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={ad3} style={{ backgroundColor: "#B3D369" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={ad4} style={{ backgroundColor: "#554DA7" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={ad5} style={{ backgroundColor: "#4382FF" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={ad6} style={{ backgroundColor: "#F94FA4" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Creative Section End */}

            {/*  partners Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>STUDENT PLACEMENT</span>
                        <h2>OUR RECRUITMENT PARTNERS</h2>
                    </div>
                    <div className="row partner d-flex">
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner1} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner2} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner3} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner4} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner5} alt="" /></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img">
                                <a href=""><img src={partner6} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  partners Section End */}
       {/* Widget Section Start */}

       <div className="space-y">
                <div className="container">
                    <div className="widget">
                        <h5>Our Demanded Course -</h5>
                    </div>
                    <div className="tag ">
                        <a href="">Adobe xd design course</a>
                        <a href="">Game design training institute in surat</a>
                        <a href="">C programming language training institute in katargam</a>
                        <a href="">Advance nodejs training institute in surat</a>
                        <a href="">game design class in Mota Varachha</a>
                        <a href="">codeigniter training course</a>
                        <a href="">Graphics design training in katargam</a>
                        <a href="">Best flutter training institute</a>
                        <a href="">Graphics design training course</a>
                        <a href="">Blender 3d design course</a>
                        <a href="">Creo parametrics mechanical training course</a>
                        <a href="">computer institutes in yogichowk</a>
                        <a href="">mechanical engineering training institute in Mota Varachha</a>
                        <a href="">Maya animation training institute</a>
                        <a href="">Advance Unity 3d training institute in surat</a>
                        <a href="">PHP training institute in varachha</a>
                        <a href="">Advance react js training institute in surat</a>
                        <a href="">spoken english class in adajan</a>
                        <a href="">Latest technology course</a>
                        <a href="">Civil engineering training institute in Mota Varachha</a>
                    </div>
                </div>
            </div>

            {/* Widget Section End */}

            {/* Footer Section Start */}

            <div className="space">
                <div className="footer">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="box" style={{ width: "380px" }}>
                                <div className="logo">
                                    <a href=""><img src={footer} alt="" /></a>
                                </div>
                                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                <h6>Follow Us On</h6>
                            </div>
                            <div className="box" style={{ width: "255px" }}>
                                <h6 style={{ color: "White" }}>Feature links</h6>
                                <ul className='links'>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href="">Join Us</a></li>
                                    <li><a href="">Company Login</a></li>
                                    <li><a href="">Certificate Verification</a></li>
                                </ul>
                            </div>
                            <div className="box">
                                <h6 style={{ color: "White" }}>Contact US</h6>
                                <div className="head">
                                    <h6><a href="">HEAD OFFICE - YOGICHOWK</a></h6>
                                    <span>401-404, 4<sup>th</sup> Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</span>
                                    <div className='d-flex'>
                                        <p>Mo: </p>
                                        <a href="">+91 90333 16003</a>
                                    </div>
                                    <h6><a href=''>Other Branches</a> </h6>
                                    <ul className='branch'>
                                        <li><a href="">Katargam</a></li>
                                        <li><a href="">Mota varachha</a></li>
                                        <li><a href="">Adajan</a></li>
                                        <li><a href="">Navsari</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                </div>
            </div>

            {/* Footer Section End */}
      

    </div>
  );
}

export default App;
