import "./NavBarStyle.css"
const NavBar = ({logo,menu,btn}) => {
  return (
    <div className="nav">
        <h3>{logo}</h3>
        <ul>
            {menu.map((e,i)=>{
                return <li key={i}><i  className={e.icon}></i>{e.title}</li>
            })}
        <button>{btn}</button>
        </ul>
    </div>
  )
}

export default NavBar