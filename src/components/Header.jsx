import headerHero from '../assets/header-hero.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className='header'>
            <img src={headerHero} alt="header" className='hero' />
            <div className='info'>
                <h1>Easily create a professional resume!</h1>
                <p>Create a professional resume in just a few clicks. 100% free!</p>
                <Link className="btn" to="/" style={{fontSize: '0.9rem'}}>Create CV</Link>
            </div>
        </header>
    );   
}