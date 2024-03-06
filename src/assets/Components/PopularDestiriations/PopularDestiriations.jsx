import "./PopularDestiriations.css"
const PopularDestiriations = ({title,para,children}) => {
  return (
    <div className="Destiriations">
        <div className="con">
            <h1>{title}</h1>
            <p>{para}</p>
        </div>
        {children}
    </div>
  )
}

export default PopularDestiriations