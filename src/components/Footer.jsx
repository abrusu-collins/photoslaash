import { MdHideImage } from "react-icons/md";
import Link from "next/link";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div>
          <MdHideImage color="#fcfeff" size={40} />
          <p className="footer-title">PhotoSlaash</p>
          <p>Compress with Confidence, Preserve with Perfection!</p>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <Link href="/">Home</Link>
          <Link href="/single">Single Image</Link>
          <Link href="/multiple">Multiple Images</Link>
          <Link href="/sponsor">Sponsor</Link>
        </div>

        <div>
          <p className="footer-title">Legal Center</p>
          <Link href="/coming-soon">Privacy Policy</Link>
          <Link href="/coming-soon">Terms of Use</Link>
        </div>

        <div>
          <p className="footer-title">Sponsor Us</p>
          <a href="https://www.buymeacoffee.com/collinsabrusu">buymeacoffee</a>
          <a href="https://www.patreon.com/abrusucollins">Patreon</a>
          <a href="https://ko-fi.com/abrusucollins">ko-fi</a>
        </div>
      </div>
      <p>Copyright &copy; {year}. Built by Collins Abrusu</p>
    </footer>
  );
}

export default Footer;
