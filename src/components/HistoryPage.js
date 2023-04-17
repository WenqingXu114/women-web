import { Link } from "react-router-dom";
import { ProgressBar } from 'react-bootstrap';
import useScrollProgress from "./Literature/useScrollProgress";
import PersonCard from './History/PersonCard';
import personData from "./History/personData";
import AudioPlayer from "./History/AudioPlayer";


function HistoryPage() {
  const progress = useScrollProgress();
  return (
    <div>
      <a class="skip" href="#main">Skip to Main Content</a>
      <header>
        <nav>
          <div className="hamburger" onClick={() => {
            const ul = document.querySelector("nav ul");
            ul.style.display = ul.style.display === "none" ? "flex" : "none";
          }}>&#9776;</div>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/literature">Literature</Link></li>
            <li><Link to="/history" className="active">History and Politics</Link></li>
            <li><Link to="/dictionary">Feminist Dictionary</Link></li>
          </ul>
        </nav>

        <h1>History &amp; Politics</h1>
        <AudioPlayer />
      </header>

      <main>
        <ProgressBar now={progress} style={{ height: '4px', position: 'fixed', top: 0, zIndex: 1000, width: '100%' }} />

        <div className="container">
          {personData.map((person, index) => (
            <PersonCard
              key={index}
              name={person.name}
              imageUrl={person.imageUrl}
              description1={person.description1}
              description2={person.description2}
              description3={person.description3}
              description4={person.description4}
            />
          ))}
        </div>
      </main>
      <footer>
        <p class="thanks">
          Thanks for visiting! <i class="far fa-grin"></i>
        </p>
        <p>Orginal content created by Kelsey Toporski 2019</p>

        <a href="#top" class="tops">Back to Top</a>
      </footer>

    </div>
  );
}

export default HistoryPage;