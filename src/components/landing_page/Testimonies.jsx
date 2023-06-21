import { AiFillStar } from "react-icons/ai";
function Testimonies() {
  return (
    <div className="testimonies">
      <p className="users">What our users say about us</p>
      <div className="testimonials-inner">
        <div className="grid1">
          <div className="testifier">
            <p className="testimonial-title">Joe Owusu</p>
            <img src="/images/blackboy.png" alt="" />
          </div>
          <p className="testimonial-text">
            Wow, this image compression app is a game-changer! I was able to
            compress a batch of 100 high-resolution images in just a few
            minutes, without any loss in quality. It saved me so much storage
            space and made sharing them a breeze.
          </p>
          <div className="stars">
            <AiFillStar color="#0362fc" size={25} />
            <AiFillStar color="#0362fc" size={25} />
            <AiFillStar color="#0362fc" size={25} />
            <AiFillStar color="#0362fc" size={25} />
            <AiFillStar color="#0362fc" size={25} />
          </div>
        </div>
        <div className="grid2">
          <div className="testifier">
            <p className="testimonial-title"> Ivy Scott</p>
            <img src="/images/woman.png" alt="" />
          </div>
          <p className="testimonial-text">
            I&apos;ve tried several image compression tools, but none compare to
            this app. It handled my diverse range of images flawlessly, from
            professional photographs to casual snapshots. The compressed images
            look fantastic, and I can&apos;t believe how much faster they load
            on my website now.
          </p>
          <div className="stars">
            <AiFillStar color="#0fcfeff" size={25} />
            <AiFillStar color="#0fcfeff" size={25} />
            <AiFillStar color="#0fcfeff" size={25} />
            <AiFillStar color="#0fcfeff" size={25} />
            <AiFillStar color="#0fcfeff" size={25} />
          </div>
        </div>
        <div className="grid3">
          <div className="testifier">
            <p className="testimonial-title">Jane Afi</p>
            <img src="/images/blackgirl.png" alt="" />
          </div>
          <p className="testimonial-text">
            I love how user-friendly this app is! Uploading and compressing
            multiple images at once is a breeze, and the results are impressive.
            It&apos;s made managing my photo library so much easier, allowing me
            to free up space on my devices and enjoy seamless sharing across all
            my social media platforms
          </p>
          <div className="stars">
            <AiFillStar color="#fcfeff" size={25} />
            <AiFillStar color="#fcfeff" size={25} />
            <AiFillStar color="#fcfeff" size={25} />
            <AiFillStar color="#fcfeff" size={25} />
            <AiFillStar color="#fcfeff" size={25} />
          </div>
        </div>
        <div className="grid4">
          <div className="testifier">
            <p className="testimonial-title">John Yaw</p>
            <img src="/images/man.png" alt="" />
          </div>
          <p className="testimonial-text">
            I&apos;m amazed at how this app strikes the perfect balance between
            file size reduction and image quality. It managed to significantly
            shrink my images while retaining the vibrant colors and sharp
            details. It&apos;s become an essential tool for my online business.
          </p>
          <div className="stars">
            <AiFillStar color="#000000" size={25} />
            <AiFillStar color="#000000" size={25} />
            <AiFillStar color="#000000" size={25} />
            <AiFillStar color="#000000" size={25} />
            <AiFillStar color="#000000" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonies;
