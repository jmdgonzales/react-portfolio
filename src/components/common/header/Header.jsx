import React from 'react';
import './Header.css';

function Header() {
    return (
        <section className='Header'>
            <section className='Header-jmdg'>
                <a className="Home-link"
                href="/"
                rel="noopener noreferrer"
                >
                John Michael Gonzales
                </a>
            </section>
            <section className='Header-phone-num'>
                +1 (604)-724-7953
            </section>
            <section className='Header-email'>
                jmdg.gonzales@gmail.com
            </section>
        </section>
    );
  }
  
export default Header;