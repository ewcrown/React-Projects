import logo from "../../images/logo.png"

const Logo = ({size,text}) => {
    return (
        <div className="lodge-logo flex justify-start items-center gap-2" id="lodge-logo">
            <img src={logo} alt="" className={size} />
            <h3 className={text}>Lodge</h3>
        </div>
    )
}

export default Logo