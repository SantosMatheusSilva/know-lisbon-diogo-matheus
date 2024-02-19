import { Link } from 'react-router-dom';

export default function NavBar (){
    return (
        <div>
            <Link to={"/"}><img src="" alt="Logo" /></Link>
            <h2>Name App</h2>
            <h1>To know Lisbon</h1>

        </div>
    );
}