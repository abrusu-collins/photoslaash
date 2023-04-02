import { HiBadgeCheck } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero">
      <p className="hero-title">PhotoSlaash</p>
      <p className="hero-text">Compress all your large images with ease</p>
      <div className="points">
        <div>
          <HiBadgeCheck color="#0362fc" />
          <p>lorem lorem lorem</p>
        </div>
        <div>
          <HiBadgeCheck color="#0362fc" />
          <p>lorem lorem lorem</p>
        </div>
        <div>
          <HiBadgeCheck color="#0362fc" />
          <p>lorem lorem lorem</p>
        </div>
        <div>
          <HiBadgeCheck color="#0362fc" />
          <p>lorem lorem lorem</p>
        </div>
      </div>
      <div className="image-grid">
        <div>
        <img src="/images/girl.jpg" alt="ss" />
        <p>3.28MB</p>
        </div>
        <BsArrowRight size={100} />
<div>
<img src="/images/girl4.jpg" alt="ss" />
<p>229KB</p>
</div>
      </div>
      <a href="">Upload an Image</a>
    </div>
  );
}

export default Hero;
