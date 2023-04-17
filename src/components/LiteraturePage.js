import { Link } from "react-router-dom";
import AuthorCard from "./Literature/AuthorCard";
import authorsData from "./Literature/AuthorsData";
import { ProgressBar } from 'react-bootstrap';
import useScrollProgress from "./Literature/useScrollProgress";

function LiteraturePage() {

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
                        <li><Link to="/literature" className="active">Literature</Link></li>
                        <li><Link to="/history">History and Politics</Link></li>
                        <li><Link to="/dictionary">Feminist Dictionary</Link></li>
                    </ul>
                </nav>

                <h1>Feminist Literature</h1>
            </header>

            <main>
                <ProgressBar now={progress} style={{ height: '4px', position: 'fixed', top: 0, zIndex: 1000, width: '100%' }} />
                <div className="authors-container">
                    {authorsData.map((author, index) => (
                        <AuthorCard
                            key={index}
                            name={author.name}
                            imageUrl={author.imageUrl}
                            about={author.about}
                            keyWorks={author.keyWorks}
                        />
                    ))}
                </div>
            </main>
            <footer>
                <p class="thanks">
                    Thanks for visiting! <i class="far fa-grin"> </i>
                </p>
                <p>Orginal content created by Kelsey Toporski 2019</p>
                <a href="#top" class="tops">Back to Top</a>

            </footer>
        </div>
    );
}

export default LiteraturePage;