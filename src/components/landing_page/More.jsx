import Link from "next/link";
function More() {
  return (
    <div className="more">
      {/* <img src="/images/avaatar.png" className="avaatar" alt="img" /> */}
      <img src="/images/sharp.png" className="sharp" alt="img" />

      <div className="more-inner container">
        <div className="left-grid">
          <p className="more-title">Upload More, Save Time</p>
          <p className="more-text">
            Photoslaash empowers users to effortlessly upload and compress
            multiple images simultaneously. Enjoy the convenience of bulk
            compression, saving you time and effort. Effortlessly optimize and
            shrink your entire photo collection with just a few clicks.
          </p>
          <Link href="/multiple">Try it out</Link>
        </div>
        <img src="/images/img-grid.png" alt="img" />
      </div>
    </div>
  );
}

export default More;
