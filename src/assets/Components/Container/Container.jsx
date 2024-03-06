import './Container.css'

const Container = ({fisrtimg ,secimg,title, para,reverse}) => {
  return (
    <div className='popcontainer' style={{flexDirection:(reverse)?"row-reverse":"row"}}>
        <div className="pict">
        <img src={fisrtimg} />
        <img src={secimg} />
        </div>
        <div className="texts">
            <h1>{title}</h1>
            <p>{para}</p>
        </div>
    </div>
  )
}

export default Container