import { ScrollTrigger } from 'react-scroll-trigger';
import { useInView } from 'react-intersection-observer';

const AuthorCard = ({ name, imageUrl, about, keyWorks }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      return (
        <div className="author-card">
          <h2>{name}</h2>
          <img src={imageUrl} alt={`Image of ${name}`} width="200" />
          <h3>About:</h3>
          <p>{about}</p>
          <h3>Key Works:</h3>
          <div ref={ref}>
            <ul className={`key-works ${inView ? 'visible' : ''}`}>
              {keyWorks.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        </div>
      );
};

export default AuthorCard;