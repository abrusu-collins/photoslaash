import { MdHideImage } from "react-icons/md";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div>
          <MdHideImage color="#fcfeff" size={40} />
          <p className="footer-title">PhotoSlaash</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            explicabo nulla voluptates vel omnis
          </p>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <a href="">Home</a>
          <a href="">Single Image</a>
          <a href="">Multiple Images</a>
          <a href="">Sponsor</a>
        </div>

        <div>
          <p className="footer-title">Legal Center</p>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Sponsor</a>
        </div>

        <div>
          <p className="footer-title">Sposor Us</p>
          <a href="">Patreon</a>
          <a href="">ko-fi</a>
          <a href="">buymeacoffee</a>
        </div>
      </div>
      <p>Copyright &copy; {year}. Built by Collins Abrusu</p>
    </footer>
  );
}

export default Footer;
