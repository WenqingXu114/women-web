import { Link } from "react-router-dom";
import Preview from "./About/Preview";
import heroImage from './images/women_march_pano.jpg';
import literatureImage from './images/literature.jpg';
import HistoryImage from './images/simone_db.jpg';
import DictionaryImage from './images/wordcloud.jpg';

function AboutPage() {
  return (
    <div>
      <a className="skip" href="#main">Skip to Main Content</a>
      <header>
        <nav>
          <div className="hamburger" onClick={() => {
            const ul = document.querySelector("nav ul");
            ul.style.display = ul.style.display === "none" ? "flex" : "none";
          }}>&#9776;</div>
          <ul>
            <li><Link to="/" className="active">About</Link></li>
            <li><Link to="/literature">Literature</Link></li>
            <li><Link to="/history">History and Politics</Link></li>
            <li><Link to="/dictionary">Feminist Dictionary</Link></li>
          </ul>
        </nav>
        <h1> Woman's Web </h1>
      </header>

      <main>
        <img className="hero" src={heroImage} alt="Image of the Ann Arbor Women's March" />

        <div>
          <p>
            This website started as an idea when Kelsey Toporski was a freshman in college taking my first <a
              href="https://lsa.umich.edu/women"> Women's Studies</a> className. As a junior, she had the skill set to make it
            happen. Growing up in a small, rural, conservative town, this className was really her first introduction to
            feminism and feminist thought, and she wanted to share her new found knowledge with others. This website is
            where a lot of feminist things could be compiled in one place, purely because people might not otherwise know
            about it. Her hometown may not have been forward thinking, but it did have internet connection.
          </p>
          <p>
            This website currently contains 3 pages other than this one - click below to see a short description of each!
          </p>
        </div>

        <div className="thumbnail">
          <Preview
            imgSrc={literatureImage}
            altText="Women reading a book"
            title="Literature"
            description="This page features books written by women and for women, books and essays about feminism, poems, plays, and bios of female writers."
            link="/literature"
          />
          <Preview
            imgSrc={HistoryImage}
            title="History / Politics"
            description="This page features bios of important women in history and women currently in Congress or otherwise politically involved."
            link="/history"
          />
          <Preview
            imgSrc={DictionaryImage}
            title="Feminist Dictionary"
            description="This page features a collection of important feminist terminology that might make reading easier. These will include formal definitions and my own understandings of the terms."
            link="/dictionary"
          />
        </div>
        <div className="flip">
          <div className="flip-front">
            <h2>Kelsey's DISCLAIMER</h2>
          </div>
          <div className="flip-back">
            <p>I did not know everything!! I'm only human - I'm still growing and learning
              and I have a limited knowledge of things, but I will do my best and work to make this page as inclusive and
              unbiased as possible.</p>
          </div>
        </div>

      </main>

      <footer>
        <p className="thanks">
          Thanks for visiting! <i className="fa fa-heart"></i>
        </p>
        <p>Orginal content created by Kelsey Toporski 2019</p>
        <a href="#main">Back to Top</a>
      </footer>
    </div >
  );
}

export default AboutPage;