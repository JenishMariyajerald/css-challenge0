import { Twitter, Facebook, Instagram,Whatsapp } from "../../assets"
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
          <img src={Twitter} alt="logo" />
          <img src={Facebook} alt="logo" />
        
          <img src={Instagram} alt="logo" />
       
          <img src={Whatsapp} alt="logo" />
          </div>
    </div>
  </footer>
}

export default Footer