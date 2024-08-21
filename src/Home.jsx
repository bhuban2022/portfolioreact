import React from "react";
import SliderRight from "./SliderRight";
import { Avatar } from "antd";

import { UserOutlined } from '@ant-design/icons';
import CountUp from "react-countup";
const Home = () => {
  return (
    <div className="container new-containr">
      <div className="header-wrapper">
        <div className="">
          <div className="circle-dzn">
            <span className="c-change">Welcome</span>
          </div>

          <p className="main-clor">
            I have <span className="cr-des">Creative Design</span> Experience
          </p>
          <p className="para">
            I am Bhuban. I am full Stack Developer and looking for role as a
            FrontEnd Developer
          </p>
          <div className="wraps">
            <div>
              <button className="btn btn-success">Contact me</button>
            </div>

            <div className="d-flex gap-3">
              <div>
                <p>
                  <b>View Portfolio</b>
                </p>
              </div>
              <div>
                <i class=" fa fa-solid fa-turn-up"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-bord"></div>
          <div className="heroimage">
            <img src="new3.png" />
          </div>
        </div>

        <div class="social_side">
          <div class="text_social">Follow me on:</div>
          <div class="line_hero"></div>
          <div class="social_icons">
            <div class="sociallink">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div class="sociallink">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div class="sociallink">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-sect">
        <div className="bord">
          <div className="numbers-stl"><CountUp start={0} end={80} duration={5}></CountUp>+</div>
          <div className="txt-stl">Satisfied clients</div>
        </div>
        <div className="bord-one">
          <div>
             <div className="numbers-stl">200+</div>
          <div className="txt-stl"> Projects completed</div>
          </div>
         
        </div>
        <div className="bord-three">
          <div>
            <div className="numbers-stl">99+</div>
          <div className="txt-stl">Reviews given</div>
          </div>
          
        </div>
      </div>

      <div className="circle-dzn">
        <span>My skills</span>
      </div>

      <div className="wrap-overall">
        <div className="wrap-main">
          <p className="txt-editing">
            Why Hire Me For Your Next <span>Project</span>
          </p>
          <p className="txt-editing-one">
            I am specialist in User Interface Design.My passion is designing and
            solving problems through user experience and research
          </p>
          <button className="btn btn-success">Hire Me</button>
        </div>

        <div className=" main-div">
          <div className="wrap-two">
            <div>
              <i class="fa-solid fa-rainbow"></i>
            </div>
            <div>
              <span><b>Visual Design</b></span>
            </div>
            <div className="design-visual">
              <p>Create user interface design with unique and modern ideas</p>
            </div>
          </div>
          <div className="wrap-three">
            <div className="three">
         <div >
            <div>
              <i class="fa-solid fa-rainbow"></i>
            </div>
            <div>
              <span><b>Design prototype</b></span>
            </div>
            <div className="design-visual">
              <p>Create user interface design with unique and modern ideas</p>
            </div>
          </div>
         </div>
          </div>
         
          <div className="wrap-four">
            <div>
              <i class="fa-solid fa-rainbow"></i>
            </div>
            <div>
              <span><b> UX Research</b></span>
            </div>
            <div className="design-visual">
              <p>Create user interface design with unique and modern ideas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-dzn">
        <span>Portfolio</span>
      </div>

      <div className="wrap-new">
        <div className="wrap-main">
          <p className="txt-editing-two">
            My Creative works latest <span>Project</span>
          </p>
          <p className="txt-editing-one">
            I am specialist in User Interface Design.My passion is designing and
            solving problems through user experience and research
          </p>
          <button className="btn btn-success">Hire Me</button>
        </div>

        <SliderRight />
      </div>
      <div className="circle-dzn">
        <span>Reviews</span>
      </div>
      <div className="wrap-main">
        <p className="txt-editing-two">
          Our Customer Says Something <span>About Us</span>
        </p>
      </div>
      <div className="btm-all">
        <div className="btm">
          <div className="star-one">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="txt-name">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est temporibus, aliquid nemo provident officiis!
            </span>
          </div>
          <div className="d-flex gap-3">
            <div>
            <Avatar size={40} icon={<UserOutlined />} src="8.png" className="img-edit"/>
            </div>
            <div>
              <span className="nm">Amir Udan</span>

              <p className="nm-one">UX Designer</p>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="star-one" >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="txt-name">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est temporibus, aliquid nemo provident officiis!
            </span>
          </div>
          <div className="d-flex gap-3">
            <div>
            <Avatar size={40} icon={<UserOutlined />} src="8.png"/>
            </div>
            <div>
              <span className="nm">Amir Udan</span>

              <p className="nm-one">UX Designer</p>
            </div>
          </div>
        </div>
        <div className="btm">
          <div className="star-one">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="txt-name">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              est temporibus, aliquid nemo provident officiis!
            </span>
          </div>
          <div className="d-flex gap-3">
            <div>

            <Avatar size={40} icon={<UserOutlined />} src="8.png"/>

              {/* <i class="fa-solid fa-user-astronaut"></i> */}
            </div>
            <div>
              <span className="nm">Amir Udan</span>

              <p className="nm-one">UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-sect">
        <div className="circle-dzn-new">
          <span>Contact </span>
        </div>
        <div>
          <p className="txt-algn-new-btn">
            Lets discuss your <span className="text-aln-new">Projects</span>{" "}
          </p>
        </div>
        <div className="bnt-txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          voluptas laboriosam porro aperiam. Saepe, atque!
        </div>
      </div>

      <div className="fotr-wrap">
        <div className="phn-wrap">
          <div className="phn">
            <div className="sociallink">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="call-sect">
              <p>Call Me</p>
              <p>+8121151555</p>
            </div>
          </div>
          <div className="phn">
            <div className="sociallink">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="call-sect" >
              <p>Email Me</p>
              <p>bhuban@gmail.com</p>
            </div>
          </div>
          <div className="phn">
            <div className="sociallink">
              <i class="fa-solid fa-address-book"></i>
            </div>
            <div className="call-sect">
              <p>Address</p>
              <p>1-12-13 Shinjuku,Tokyo</p>
            </div>
          </div>
        </div>
        <div className="forms-dsn">
          <div className="inpt-wrap">
            <div className="inpt-name">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="inpt-name">
              <input type="text" placeholder="Email" />
            </div>
          </div>

          <div className="inpt-wrap-one">
            <div className="inpt-name">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="inpt-name">
              <input type="text" placeholder="Budget" />
            </div>
          </div>

          <div className="siz-expand">
            <textarea name="" placeholder="Message" />
          </div>
          <div className="btn-aligns">
          <button className="btn btn-success btn-editin">Submit Message</button>

          </div>
        </div>
      </div>

      <hr></hr>
      <div className="bottm-section">
        <div>
          <span>@2024. All Rights Reserved</span>
        </div>
        <div>
          <p>Designed by Bhuban Pandey</p>
        </div>
        <div className="social-icons">
          <span>
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span>
            <i class="fa-brands fa-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
