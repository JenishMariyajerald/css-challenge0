import { socialMediaIcons } from "../../assets";
import Image from "../Image";
const Footer = () =>{
    return <footer className="footer-container">
    <div>
      <h1>Support</h1>
      
          <p>FAQs</p>
        
          <p>customer service</p>
       
    </div>
    <div>
      <h1>Legal</h1>
          <p>Terms & Conditions</p>
        
          <p>Privacy policy</p>
      
    </div>
    <div>
      <h1 id="follow">Follow Us</h1>
      <div className="footer-icon">
        {socialMediaIcons.map((item)=>{
          return (
            <Image src={item}/>
          )
        })}
          </div>
    </div>
  </footer>
}

export default Footer