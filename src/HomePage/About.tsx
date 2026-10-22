import { LINKEDIN, RESUME_URL } from "../links"

const timeline = [
    {
        years: '2020-21',
        org: 'Envirofoods',
        role: 'Business Analyst',
        lesson: 'Some of our best decisions there came from listening to people. For example, shopkeepers led us to switch to local-language packaging.'
    },
    {
        years: '2022-24',
        org: 'ZS Associates',
        role: 'Decision Analytics Associate Consultant',
        lesson: 'A big part of my job was looking at data to understand what was happening.'
    },
    {
        years: '2025',
        org: 'Carnegie Mellon University',
        role: 'UX Researcher',
        lesson: 'I worked as a UX researcher on a project here and realized the why interested me much more than the what.'
    },
    {
        years: '2026-Present',
        org: 'Privoce',
        role: 'Design Research Intern',
        lesson: "I'm leading an exploratory study with freelancers, and after the interviews, I recommended the team target a different customer segment."
    },
]
function About() {
    return (
        <section id="about" className="w-full bg-forest-light">
            <div className="global-side-padding my-16 lg:my-20">
                <h2 className="text-forest-dark font-bold pb-2 med-text-36 border-b border-b-forest-dark">About</h2>
                {/* Main grid */}
                <div className="grid grid-cols-1">
                    {/* Main info */}
                    <div className="grid grid-cols-3 py-3 lg:py-5 gap-4">
                        {/* Info rows */}
                        <div className="col-span-2 border-r-sage-medium border-r pr-4 md:pr-8 lg:pr-12 xl:pr-16">
                            <h4 className="med-text-22 text-forest-dark">
                                Hi, I'm Rutuja! I use what people tell me and what the data shows to help teams make better product decisions.
                            </h4>
                            <div className=" py-5 lg:py-10 grid grid-cols-3 gap-2 md:gap-4 items-center">
                                <img src="./about_mesh.svg" alt="Image showing an overlap of three differently colored squares." className="mx-auto" />
                                <div className="col-span-2">
                                    <ul className="font-mono">
                                        <li className="flex py-1 items-center text-forest-dark med-text-14"><span aria-hidden="true" className="bg-forest-dark w-2.5 h-2.5 mr-2" />People</li>
                                        <li className="flex py-1 items-center text-wine-accent med-text-14"><span aria-hidden="true" className="bg-wine-accent w-2.5 h-2.5 mr-2" />Data</li>
                                        <li className="flex py-1 items-center text-forest-gray med-text-14"><span aria-hidden="true" className="bg-sage-medium w-2.5 h-2.5 mr-2" />Product Decisions</li>
                                    </ul>
                                    <p className="italic text-wine-accent my-5 med-text-18">
                                        I firmly believe you can never truly understand why something is happening, or what would make it work better, until you talk to the people who face the problem or use the product.
                                    </p>
                                </div>
                            </div>
                            <p className="text-forest-dark med-text-16">I started my career as a Business Analyst at a startup, then moved into Decision Analytics Consulting at ZS. After ZS, I did my Master's at Carnegie Mellon, and now I'm a Design Research Intern at Privoce. Consulting has taught me to back up every claim, because clients question anything that isn't backed up. In research, that means every finding goes back to something a participant actually said.</p>
                            <p className="py-4 text-forest-dark med-text-16">Having worked at startups, I'm used to owning research end to end on my own, from talking to people to making sense of what they said. My analytics background helps me every day and lets me find patterns quickly, whether the data is qualitative or quantitative.</p>                            
                        </div>

                        {/* Hobbies rows */}
                        <div className="grid grid-rows-3 px-4 md:px-8 lg:px-12 xl:px-16">
                            <div className="flex flex-col border-b border-b-sage-medium">
                                <p className="text-wine-accent uppercase font-mono med-text-14">Looking for</p>
                                <p className="pt-4 text-forest-dark med-text-16">UX Researcher roles at the entry to mid level. Remote, SF Bay Area, or Phoenix.</p>
                                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="py-4 med-text-16 font-mono uppercase text-wine-accent hover:font-bold w-fit">
                                    Resume<span className="sr-only"> (PDF, opens in new tab)</span>
                                </a>
                                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="med-text-16 font-mono uppercase text-wine-accent hover:font-bold w-fit">
                                    LinkedIn<span className="sr-only"> (opens in new tab)</span>
                                </a>
                            </div>
                            <div className="flex row-span-2 flex-col mt-5 py-2.5">
                                <p className="font-mono text-wine-accent med-text-14">Outside work</p>
                                <p className="pt-4 text-forest-dark med-text-16">I love traveling (20+ countries so far), painting, and birding! Hummingbirds are my new favorite, because they are the cutest of course, and I love watching them as they keep visiting my patio while I sip my early morning coffee.</p>
                                <ul className="grid grid-cols-3 px-2 py-2 my-2 lg:px-5 gap-5 lg:my-4 lg:py-4">
                                    <li><img src="/painting.webp" height={96} width={80} alt="Photo of a wall painting with the painter" className="relative transition-transform duration-200 hover:z-10 hover:scale-250 motion-reduce:transition-none motion-reduce:hover:scale-100" /></li>
                                    <li><img src="/skydiving.webp" height={96} width={80} alt="Photo of me skydiving" className="relative transition-transform duration-200 hover:z-10 hover:scale-250 motion-reduce:transition-none motion-reduce:hover:scale-100"/></li>
                                    <li><img src="/bald_eagle.webp" height={96} width={80} alt="Photo of bald eagle" className="relative transition-transform duration-200 hover:z-10 hover:scale-250 motion-reduce:transition-none motion-reduce:hover:scale-100"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* How it connects
                        TODO: Complete this
                     */}
                    <div className="py-2.5 grid grid-cols-4">
                        <h4 className="text-forest-dark med-text-28 col-span-4 font-semibold pb-3 lg:pb-6">How it connects</h4>
                        {
                            timeline.map((item) => (
                                <div key={item.org} className="flex flex-col pr-4 lg:pr-6">
                                    <div aria-hidden="true" className="flex items-center">
                                        <span className="bg-wine-accent h-2.5 w-2.5" />{/* square marker size: from Figma */}
                                        <span className="flex-1 bg-wine-accent w-full h-1/4" />{/* line thickness: from Figma */}
                                    </div>
                                    <p className="pt-2.5 text-wine-accent font-mono med-text-14">{item.years}</p>
                                    <p className="pt-2.5 text-forest-dark med-text-18 font-semibold">{item.org}</p>
                                    <p className="pt-2.5 text-forest-dark med-text-16">{item.role}</p>
                                    <p className="pt-2.5 text-forest-gray med-text-12 font-mono uppercase">What it taught me</p>
                                    <p className="pt-2.5 text-slate-dark med-text-16">{item.lesson}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About