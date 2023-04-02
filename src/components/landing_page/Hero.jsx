import { HiBadgeCheck } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero">
      <img src="/images/star.png" className="star" alt="" />
      <img src="/images/avatar.png" className="avatar" alt="" />

      <p className="hero-title">PhotoSlaash</p>
      <p className="hero-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsum
        ducimus sunt aperiam laudantium? Esse laudantium consequuntur itaque
        doloremque ut quidem, delectus mollitia suscipit fugit sint quisquam
        eum! Sunt, ad.
      </p>
      <div className="points">
        <div>
          <HiBadgeCheck color="#0362fc" size={22} />
          <p>lorem lorem lorem lorem lorem lorem</p>
        </div>
        <div>
          <HiBadgeCheck color="#0362fc" size={22} />
          <p>lorem lorem lorem lorem lorem lorem</p>
        </div>
        <div>
          <HiBadgeCheck color="#0362fc" size={22} />
          <p>lorem lorem lorem lorem lorem lorem</p>
        </div>
      </div>
      <div className="image-grid">
        <div>
          <img src="/images/girl.jpg" alt="girls" />
          <p>3.28MB</p>
        </div>
        <BsArrowRight size={100} />
        <div>
          <img src="/images/girl4.jpg" alt="girl" />
          <p>229KB</p>
        </div>
      </div>
      <a href="">Upload an Image</a>
    </div>
  );
}

export default Hero;