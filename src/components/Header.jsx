import coverImage from '../assets/images/cover-image.png';

function Header(props) {

    return (
      <header className="flex-row space-between px-1">
        <h1 style={{ fontSize: "72px" }}>ZEKUZA'S PORTFOLIO</h1>
        <img src={coverImage} alt="dreamland background"></img>
        {props.children}
      </header>
    );
  }
  
  export default Header;