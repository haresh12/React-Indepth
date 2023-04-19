 const NavItems = () => (
    <div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
)  

const Logo = () => (
    <a href="/"> 
    <img alt="logo" className="logo" src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"/> 
    </a> 
   )    

export default Header = () => (
    <div className="header">
    <Logo/>
    <NavItems/>
    </div>
)