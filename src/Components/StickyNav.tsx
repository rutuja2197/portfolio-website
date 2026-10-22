import { useEffect, useState } from "react"
import { Link } from "react-router"

type NavProps = {
    links: string[],
}

function StickyNav({ links }: NavProps ) {
    const [active, setActive] = useState(links[0])

    useEffect(() => {
        const sections = links
            .map((link) => document.getElementById(link.slice(1)))
            .filter((section): section is HTMLElement => section !== null)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(`#${entry.target.id}`)
            })
        }, { rootMargin: "-30% 0px -60% 0px" })

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [links])

    return (
        <nav data-section-nav aria-label="On this page" className="sticky top-(--nav-height) z-10 h-(--section-nav-height) bg-forest-light text-forest-gray border-b-1/2 border-sage-medium">
            <div className="flex flex-row font-mono py-2.5 uppercase text-10 lg:text-12 gap-4 lg:gap-8 global-side-padding">
                <p>On this page:</p>
                { links.map((link) => (
                    <Link key={link} to={link} aria-current={active == link ? "location" : undefined} className={`hover:font-semibold ${active == link ? "font-extrabold" : ""}`}>{link.replace('#', '').replace('_', ' ')}</Link>
                ))}
            </div>
        </nav>
    )
}

export default StickyNav