import './ElementsHomePage.css';
import { Link } from 'react-router-dom';

export default function ElementsHomePage () {
    return (
        <div className="ElementsHomePage">
            <div className='ToKnowTheCity'>
                <Link to={"/places-to-know"}><h2>To Know the City</h2></Link>
                <img src="" alt="ToKnowTheCityImage" />
            </div>
            <div className='ToHaveFun'>
                <Link to={"/places-to-have"}><h2>To Have Fun</h2></Link>
                <img src="" alt="ToHaveFunImage" />
            </div>
            <div className='ToMoveYourBody'>
                <Link to={"/places-to-move"}><h2>To Move Your Body</h2></Link>
                <img src="" alt="ToMoveYourBodyImage" />
            </div>
        </div>
    )
}