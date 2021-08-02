import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

const Header = () => {

    useEffect(() => {


        // TOGGLE FUNCTION
        const toggle = document.getElementById("night-toggle");

        toggle.addEventListener("change", function() {
        
            if (toggle.checked == false) {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("data-theme", "light");
            }

            else if (toggle.checked == true) {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("data-theme", "dark");
            }
        });


        // CHECKING OS / LS
        var t = localStorage.getItem("data-theme");

        if (t) {
            document.documentElement.setAttribute("data-theme", t);
        } else {
            var n = window.matchMedia("(prefers-color-scheme: dark)");
            t = n.matches ? "dark" : "light",
            document.documentElement.setAttribute("data-theme", t);
        }

        document.documentElement.setAttribute("data-theme", t);

        if (document.documentElement.getAttribute("data-theme") === "dark") {
            toggle.checked = true;
        }
    
        else if (document.documentElement.getAttribute("data-theme")  === "light") {
            toggle.checked = false;
        }


        // NAV-open/close
        const navButton = document.getElementById("toggle");
        const navMenu = document.querySelector("header .nav-container nav");
        const navItems = document.querySelectorAll("header .nav-container nav ul li, header .nav-container nav ul button, header > div > a");

        let menuOpen = false;

        navButton.addEventListener("change", function() {

            if(!menuOpen) {
                navMenu.classList.add("open");
                menuOpen = true;
                navButton.checked = true;

            } else {
                navMenu.classList.remove("open");
                menuOpen = false;
                navButton.checked = false;
            }
        });


        navItems.forEach((item) => {
            item.onclick = function() {
                navMenu.classList.remove("open");
                menuOpen = false;
                navButton.checked = false;
            }
        });
    });


    return (
        <>
            <Head>
                <meta charset="UTF-8"/>
                <title>Genesisnow</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                <link rel="icon" type="image/png" href="/favicon.png"/>
            </Head>

            <header data-scroll-section>
                <div className="nav-container">
                    <Link href="/">Genesis.</Link>
                    <div>
                        <input type="checkbox" id="night-toggle" />
                        <label htmlFor="night-toggle">
                            <div></div>
                        </label>
                    </div>

                    <input type="checkbox" id="toggle" className="input"/>
                    <label htmlFor="toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link><Link href="/"><span></span></Link></li>
                            <li><Link href="/">Cookie verklaring</Link><Link href="/"><span></span></Link></li>
                            <li><Link href="#">LoremDolor</Link><Link href="#"><span></span></Link></li>
                            <li><Link href="#">LoremDolor</Link><Link href="#"><span></span></Link></li>
                            <li><Link href="/contact">Contact</Link><Link href="/contact"><span></span></Link></li>
                            <button type="button" name="button" className="button">Lorem Ipsum Dolor</button>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;  