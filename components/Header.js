import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Components/Header.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
    return (
        <header className={`navbar navbar-expand-md navbar-dark ${styles.headerMainTag}`}>
            <div className="container-fluid">
                <Link href="/#home" className="navbar-brand">
                    <Image src="/svg_files/Logo (1).svg" alt="Logo (1).svg" width={50} height={50} className={styles.navbarLogo} />
                </Link>

                <button className={`navbar-toggler ${styles.navbarToggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <Image src="/svg_files/menu-02.svg" alt="menu-02.svg" width={50} height={50} className={styles.menuIcon} />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/#home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#stacks" className="nav-link">Stacks</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#testimonials" className="nav-link">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
