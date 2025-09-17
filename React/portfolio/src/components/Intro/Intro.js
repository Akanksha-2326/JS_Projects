import "./intro.css";
import { Link } from "react-scroll";
import bg from "../../assets/image37.png";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <h3 className="hello">Hello,</h3>
        <h2>I am </h2>
        <h2 className="introName">Akanksha Lodhe </h2>

        <p className="introPara">
          Skilled and passionate Front end Developer with 3+ years of hands on
          working expirence <br />
          with latest front end tools and techniques.
          <br /> My tech stack includes React ,Javascript, HTML, CSS, Azure,
          SQL, Tailwind CSS etc.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me ..
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
