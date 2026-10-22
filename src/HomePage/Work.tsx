import Card from "../Components/Card"

const case_studies = [
    {
        href: "/work/apple-privacy-label",
        tags: ["Semi-structured interviews", "Surveys", "Codebook development"],
        title: "Effectiveness of Apple's Privacy Labels",
        quote: ["It's not a point location, is it?", "Just like a circle that I'm in?", "I don't know."],
        participant: "Participant 4 on “coarse location”",
        summary: "Do people understand definitions of Apple's privacy labels? Well, not really. Simple ideas were buried in wording that most people could not get past.",
        capacity: "UX Researcher, Carnegie Mellon University",
    },
    {
        href: "/work/vocespace",
        tags: ["Semi structured interviews", "Affinity Mapping", "Recruiting"],
        title: "Exploring Product-Market Fit for VoceSpace",
        quote: ["It would just be sort of awkward", "if you saw a file...", "about you."],
        participant: "Participant 5 on “screen sharing during calls”",
        summary: "Do freelancers' needs fit what VoceSpace offers? That's what we thought at first, which is why they were the target customers. But we found something else in the end.",
        capacity: "Design Research Intern, Privoce",
    },
]

function Work() {
    return (
        <section id="work" aria-label="work" className="section-dark w-full">
            <div className="grid grid-cols-2 my-16 lg:my-18 xl:my-20 items-center global-side-padding">
                <h2 className="col-span-2 pb-2 font-bold med-text-36 border-b border-b-sage-medium">Case Studies</h2>
                <div className="col-span-2 py-13">
                <div className="grid grid-cols-2 gap-y-8 gap-x-16 px-4 justify-items-center">
                    <Card key={1} {...case_studies[0]} />
                    <Card key={2} {...case_studies[1]} />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Work