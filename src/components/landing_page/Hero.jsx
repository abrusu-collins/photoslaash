import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero">
      <img src="/images/star.png" className="star" alt="" />
      <img src="/images/avatar.png" className="avatar" alt="" />

      <p className="hero-title">PhotoSlaash</p>
      <p className="hero-text">
        Photoslaash is an image compression app, the perfect solution to
        optimize your images without compromising quality. Effortlessly reduce
        file sizes while preserving the visual integrity of your photos, making
        them easier to store, share, and upload.
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
