import "./Card.css"

const Card = ({img,para}) => {
  return (
    <div className="card">
        <img src={img}  />
        <p>{para}</p>

    </div>
  )
}

export default Card