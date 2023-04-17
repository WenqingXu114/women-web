const PersonCard = ({ name, imageUrl, description1, description2, description3, description4 }) => {
    return (
        <div className="person">
            <h2>{name}</h2>
            <img src={imageUrl} width="200" alt={`Headshot of ${name}`} />
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <p>{description4}</p>
        </div>
    );
}

export default PersonCard;