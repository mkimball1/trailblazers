import "./navigationBar.css"

const Navigation = ({username, load, save}) => { //TODO Need to change
    return (
        <nav className="navbar">
          <ul>
            <li>username</li>
            <li>load</li>
            <li>save</li>
          </ul>
        </nav>
      );
    };
  
  export default Navigation;