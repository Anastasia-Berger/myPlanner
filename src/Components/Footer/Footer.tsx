import SocialMedia from "../SocialMedia/SocialMedia";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <div className="credits">@BergerAnastasia</div>
            <SocialMedia />
        </div>
    );
}

export default Footer;
