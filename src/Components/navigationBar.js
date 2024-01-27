import "./navigationBar.css"
import Button from 'react-bootstrap/Button';


const Navigation = ({username, load, save}) => { //TODO Need to change
    return (
        <nav className="navbar">
            <Button variant={username}>Username</Button>{' '}
            <Button variant={load}>Save</Button>{' '}
            <Button variant={save}>Load</Button>{' '}
        </nav>
      );
    };
  
  export default Navigation;