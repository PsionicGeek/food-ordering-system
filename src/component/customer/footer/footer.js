import React from "react";
import logo from '../../../images/logowhite.png'
import Food from "../../foodImages";
import '../footer/footer.css'
import { useNavigate } from "react-router-dom";
import insta from '../../../images/instagram.png';
import whatsapp from '../../../images/whatsapp.png';
import linkedin from '../../../images/likedin.png'
import pintrest from '../../../images/pintrest.png'
import youtube from '../../../images/youtube.png'
import { Link } from "react-router-dom";
function Footer(){
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood')
    let navigate=useNavigate();
      function Alldish(titleId){
        navigate(`/alldish?id=${titleId}`)
    }
    return(
        <div className="footer">
              <img src={logo} className='flogo'></img>
              <div className="footer-main">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Pages</h4>
                    <ul>
                        <li><Link to={'/'} className='linkto'>Home</Link></li>
                        <li> <Link to={'/cart'} className='linkto'>Cart</Link></li>
                        <li><Link to={'/profile'} className='linkto'>Profile</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Categories</h4>
                    <ul>
                        <li onClick={()=>Alldish(Food1[0].titleId) } >Indian</li>
                        <li onClick={()=>Alldish(Food2[0].titleId)}>Italian</li>
                        <li>Korean</li>
                    </ul>
                </div>
                <div>
                    <h4>Places</h4>
                    <ul>
                        <li>Tamil Nadu</li>
                        <li>Kerala</li>
                        <li>Karnataka</li>
                    </ul>
                </div>
                <div>
                    <h4>Contact us</h4>
                    <a href="#"><img src={insta} className='footerimg' ></img></a>
                    <a href="#"><img src={whatsapp}  className='footerimg'></img></a>
                    <a href="#"><img src={pintrest} className='footerimg' ></img></a>
                    <a href="#"><img src={linkedin} className='footerimg' ></img></a>
                    <a href="#"><img src={youtube} className='footerimg' ></img></a>
                </div>
              
              </div>
              <p>Copyrights@2023</p>
        </div>
    )
}

export default Footer