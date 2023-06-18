import { AiFillStar } from "react-icons/ai";
function Testimonies() {
  return (
    <div className="testimonies">
      <p className="users">What our users say about us</p>
      <div className="testimonials-inner">
        <div className="grid1">
          <p className="testimonial-title">Best app ever</p>
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
          <p className="testimonial-title">Best app ever</p>
          <p className="testimonial-text">
            I've tried several image compression tools, but none compare to this
            app. It handled my diverse range of images flawlessly, from
            professional photographs to casual snapshots. The compressed images
            look fantastic, and I can't believe how much faster they load on my
            website now.
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
          <p className="testimonial-title">Best app ever</p>
          <p className="testimonial-text">
            I love how user-friendly this app is! Uploading and compressing
            multiple images at once is a breeze, and the results are impressive.
            It's made managing my photo library so much easier, allowing me to
            free up space on my devices and enjoy seamless sharing across all my
            social media platforms
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
          <p className="testimonial-title">Best app ever</p>
          <p className="testimonial-text">
            I'm amazed at how this app strikes the perfect balance between file
            size reduction and image quality. It managed to significantly shrink
            my images while retaining the vibrant colors and sharp details. It's
            become an essential tool for my online business.
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
