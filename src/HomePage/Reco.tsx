
const recos = [
    {
        name: "Miha Rosic",
        initials: "MR",
        role: "Client Manager, ZS Associates",
        body: "She combines strong analytical skills with deep theoretical knowledge, which allows her to approach challenges with clarity and deliver well-thought-out solutions. ... She makes time to support her colleagues and ensure the team succeeds together."
    },
    {
        name: "Lily Klucinec",
        initials: "LK",
        role: "UX Researcher, Carnegie Mellon University",
        body: "Rutuja was a responsive and effective team player, helping with conducting interviews to improve mobile app privacy labels through improving definitions of jargon. This work included developing interview scripts and speaking with users directly to understand how users reason about privacy terminology used in visual formats like privacy labels."
    },
    {
        name: "Vance MacEwan",
        initials: "VM",
        role: "Design Lead, Privoce",
        body: "Rutuja was a responsive and effective team player, helping with conducting interviews to improve mobile app privacy labels through improving definitions of jargon. This work included developing interview scripts and speaking with users directly to understand how users reason about privacy terminology used in visual formats like privacy labels."
    }
]

function Reco() {
    return (
        <section id="reco" className="w-full">
            <div className="my-16 lg:my-20 global-side-padding">
                <h2 className="text-forest-dark med-text-36 font-bold border-b border-b-sage-medium">Recommendations</h2>
                <div className="grid grid-cols-3 gap-2 lg:gap-4 py-4 lg:py-6">
                    {recos.map((reco) => (
                        <div key={reco.name} className="px-4">
                            <p className="text-forest-gray med-text-16 py-4">{reco.body}</p>
                            <div className="flex flex-wrap gap-2">
                                <span aria-hidden="true" className="flex shrink-0 justify-center items-center w-8 h-8 lg:w-11 lg:h-11 bg-forest-dark text-forest-light font-bold med-text-16">
                                    {reco.initials}
                                </span>
                                <div className="flex flex-col">
                                    <p className="text-black med-text-16 font-semibold">{reco.name}</p>
                                    <p className="font-mono text-wine-accent med-text-14">{reco.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reco