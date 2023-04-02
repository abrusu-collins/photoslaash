import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero">
      <img src="/images/star.png" className="star" alt="" />
      <img src="/images/avatar.png" className="avatar" alt="" />

      <p className="hero-title">PhotoSlaash</p>
      <p className="hero-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed libero
        reiciendis, id tenetur consectetur itaque animi explicabo dolor. Quos
        exercitationem necessitatibus illum placeat alias quod repellendus quam
        laborum cum eveniet.
      </p>

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
