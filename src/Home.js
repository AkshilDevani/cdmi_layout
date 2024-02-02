import './Home.css';
import { MdMailOutline } from "react-icons/md";
import { FaCertificate, FaAngleDown, FaStar, FaStarHalfAlt, FaUniversity, FaHandPointRight, FaQuoteLeft, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";

import logo from './../image/logo.svg';
import banner from './../image/asset 8.webp';
import box1 from './../image/asset 22.webp';
import box2 from './../image/asset 14.webp';
import box3 from './../image/asset 17.webp';
import box4 from './../image/asset 20.webp';
import box5 from './../image/asset 25.webp';
import box6 from './../image/asset 28.webp';
import about from './../image/asset 29.jpeg';
import c1 from './../image/c1.png';
import c2 from './../image/c2.png';
import c3 from './../image/c3.png';
import c4 from './../image/c4.png';
import test1 from './../image/asset 31.jpeg';
import read1 from './../image/read1`.png';
import read2 from './../image/read2.png';
import read3 from './../image/read3.png';
import read4 from './../image/read4.png';
import read5 from './../image/read5.png';
import read6 from './../image/read6.png';
import partner1 from './../image/asset 40.png';
import partner2 from './../image/asset 41.png';
import partner3 from './../image/asset 42.png';
import partner4 from './../image/asset 43.png';
import partner5 from './../image/asset 44.png';
import partner6 from './../image/asset 45.png';
import abc from './../image/asset 54.jpeg';
import footer from './../image/footer.svg'


function Home() {
    return (
        <>

            {/* Top Info Section Start */}

            <div className='top_info'>
                <div className='container'>
                    <div className='top_nav'>
                        <ul className='left d-flex'>
                            <li><a href=""><MdMailOutline style={{ marginRight: "5px", fontSize: "20px" }} />info@cdmi.in </a></li>
                            <li><a href=""><FaCertificate style={{ marginRight: "5px", fontSize: "20px" }} /> Verify Certificate</a></li>
                        </ul>
                        <ul className='mid'>
                            <li><a href=''>HAVE ANY QUESTION ? +91 90333 16003</a></li>
                        </ul>
                        <ul className='icon d-flex'>
                            <li><a href=""><FaFacebookF /></a></li>
                            <li><a href=""><FaTwitter /></a></li>
                            <li><a href=""><TiSocialGooglePlus /></a></li>
                            <li><a href=""><FaLinkedin /></a></li>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><AiOutlineYoutube /></a></li>
                            <li><a href=""><FaWhatsapp /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Top Info Section End */}

            {/* NavMenu Section Start */}

            <div className='container'>
                <div className='nav'>
                    <div className='logo'>
                        <a href=""><img src={logo} /></a>
                    </div>
                    <nav >
                        <ul className='main_menu d-flex'>
                            <li><a href="" className='active'>Home</a></li>
                            <li><a href="">Coures<FaAngleDown className='arrow' /></a></li>
                            <li><a href="">Activities<FaAngleDown className='arrow' /></a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Know Us<FaAngleDown className='arrow' /></a></li>
                            <li><a href="">Get In Touch</a></li>
                            <li><a href="">Student Zone<FaAngleDown className='arrow' /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* NavMenu Section End */}

            {/* Banner Section Start */}

            <div className='banner'>
                <img src={banner} />
            </div>

            {/* Banner Section End */}


            {/* Courese Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="heading text-center">
                        <span className='sub_title'>CREATIVE COURSE</span>
                        <h2>OFFERED COURSES</h2>
                    </div>
                    <div className="row d-flex">
                        <div className="box1">
                            <div className="img">
                                <img src={box1} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Development Courses</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="img">
                                <img src={box2} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Design Courses</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="img">
                                <img src={box3} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Programming IT</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="box1">
                            <div className="img">
                                <img src={box4} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Trendy Courses</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="img">
                                <img src={box5} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Civil-Mech. Engineering</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                        <div className="box1">
                            <div className="img">
                                <img src={box6} />
                            </div>
                            <div className="content">
                                <h4 className='title'><a href="">Business Development</a></h4>
                            </div>
                            <div className="bottom">
                                <div>
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                </div>
                                <div className="btn">
                                    <a href="">Know More..!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row1">
                        <div className="button">View All Courses</div>
                    </div>
                </div>
            </div>

            {/* Courese Section End */}

            {/* About Us Section Start */}

            <div className="m_about space-y">
                <div className='bg'>
                    <div className="about">
                        <div className="heading">
                            <div className="sub_title">ABOUT US</div>
                            <h6>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h6>
                        </div>
                        <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                        <div className="btn">
                            <div className="button">Enroll Now..!</div>
                        </div>
                    </div>
                    <div className="video">
                        <div className="img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section End */}

            {/*  Counter Section End */}

            <div className='space-y'>
                <div className='count'>
                    <div className='counter '>
                        <div className='container w'>
                            <div className='blog'>
                                <div className='box'>
                                    <div className='img'>
                                        <img src={c4} />
                                    </div>
                                    <div className='desc'>
                                        <h2>18000+</h2>
                                        <h4>happy students</h4>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <img src={c2} />
                                    </div>
                                    <div className='desc'>
                                        <h2>10+</h2>
                                        <h4>CERTIFICATION APPROVAL</h4>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <img src={c1} />
                                    </div>
                                    <div className='desc'>
                                        <h2>100+</h2>
                                        <h4>CERTIFIED TEACHERS</h4>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='img'>
                                        <img src={c3} />
                                    </div>
                                    <div className='desc'>
                                        <h2>12000+</h2>
                                        <h4>STUDENTS PLACED</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Counter Section End */}

            {/*  Student Section Start */}

            <div className="space-y">
                <div className="container">
                    <div className="d-flex">
                        <div className="student">
                            <div className="heading">
                                <span className='sub_title'>HAPPY STUDENTS</span>
                                <h2>ALUMNI SPEAK</h2>
                            </div>
                            <div className="test">
                                <FaQuoteLeft className='quote' />
                                <p className="content">
                                    Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.
                                </p>
                                <div className="desc d-flex">
                                    <div className="img">
                                        <img src={test1} alt="" />
                                    </div>
                                    <div className="user">
                                        <h6>KOLADIYA MANSI</h6>
                                        <span className='default'>UI/UX Designer</span>
                                        <span className='muted'>@ Patoliya Infotech</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="shape">
                                <img src={abc} alt="" width={'100%'} />
                            </div>
                            <div className="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Student Section End */}

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
                                <img src={read1} style={{ backgroundColor: "#F6475F" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={read2} style={{ backgroundColor: "#FFBC06" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={read3} style={{ backgroundColor: "#B3D369" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={read4} style={{ backgroundColor: "#554DA7" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={read5} style={{ backgroundColor: "#4382FF" }} alt="" />
                            </div>
                            <div className="desc">
                                <h5>Industry Experts As Trainers</h5>
                                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="img">
                                <img src={read6} style={{ backgroundColor: "#F94FA4" }} alt="" />
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
                                <ul className='social'>
                                    <li><a href=""><FaFacebookF /></a></li>
                                    <li><a href=""><FaTwitter /></a></li>
                                    <li><a href=""><TiSocialGooglePlus /></a></li>
                                    <li><a href=""><FaLinkedin /></a></li>
                                    <li><a href=""><FaInstagram /></a></li>
                                    <li><a href=""><AiOutlineYoutube /></a></li>
                                    <li><a href=""><FaWhatsapp /></a></li>
                                </ul>
                            </div>
                            <div className="box" style={{ width: "255px" }}>
                                <h6 style={{ color: "White" }}>Feature links</h6>
                                <ul className='links'>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />About us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Blogs</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Join Us</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Company Login</a></li>
                                    <li><a href=""><FaHandPointRight style={{ marginRight: "10px" }} />Certificate Verification</a></li>
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
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Katargam</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Mota varachha</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Adajan</a></li>
                                        <li><a href=""><FaUniversity style={{ marginRight: "10px" }} />Navsari</a></li>
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


        </>
    );
}

export default Home;
