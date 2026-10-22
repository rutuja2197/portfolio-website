import { RESUME_URL, LINKEDIN } from './links'
import { Link } from 'react-router'

const navlinks = [
    { href: '/#work', label: "Work" },
    { href: '/#about', label: "About" },
    { href: '/#skills', label: "Skills" },
]

function NavBar() {
    return (
        <header className="sticky top-0 z-10 section-dark w-full">
            <nav 
                aria-label="Main" 
                className="flex flex-wrap global-side-padding py-2.5 lg:py-3.5 xl:py-4  w-full items-center justify-between"
            >
                <Link to={"/#home"} className="med-text-18 text-forest-light font-bold hover:font-black">Rutuja Deshpande</Link>
                <ul className="flex med-text-18 font-normal">
                    {navlinks.map((link) => (
                        <li key={link.href} className="px-2.5 lg:px-3.5 xl:px-4 hover:font-bold hover:text-white">
                            <Link to={link.href}>{link.label}</Link>
                        </li>
                    ))}
                    <li className="px-2.5 lg:px-3.5 xl:px-4 hover:font-bold hover:text-white">
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                            Resume<span className="sr-only"> (PDF, opens in new tab)</span>
                        </a>
                    </li>
                    <li className="pl-2.5 lg:pl-3.5 xl:pl-4 hover:font-bold hover:text-white">
                        <a
                            href={LINKEDIN}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn<span className="sr-only"> (opens in new tab)</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar