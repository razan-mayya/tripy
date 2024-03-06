import "./Footer.css"

const Footer = ({title,para}) => {
  return (
    <div className="footer">
        <div className="upper">
            <div>
               <h1>{title}</h1>
               <p>{para}</p>
            </div>
            <div>
                <p>jjkkll;lllll</p>
            </div>
        </div>
        <div className="down">
            <div>
                <h3>project</h3>
                <p>chongeiog</p>
                <p>status</p>
                <p>ucense</p>
                <p>all versions</p>
            </div>
            <div>
                <h3>community</h3>
                <p>github</p>
                <p>issues</p>
                <p>project</p>
                <p>teitter</p>
            </div>
            <div>
                <h3>help</h3>
                <p>support</p>
                <p>traublooting</p>
                <p>contact us</p>
            </div>
            <div>
                <h3>others</h3>
                <p>terms and service</p>
                <p>privacy policy</p>
                <p>contact us</p>
            </div>


        </div>
    </div>
  )
}

export default Footer