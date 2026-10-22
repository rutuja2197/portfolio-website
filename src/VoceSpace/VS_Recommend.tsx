import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

const recos = [
    {
        title: "Sell to organizations, not freelancers",
        findings: "1, 2, 5, 6",
        priority: "High",
        body: "Freelancers don’t pick their call tool, they can’t justify paying for a new one, and VoceSpace’s privacy strengths matter to the organizations that set the rules, not to them. The shared desktop does solve a real problem, since most cleaned up their screen before sharing. But its bigger use, working on the same page live, mostly happens in internal calls and workshops, which points to teams too.",
    },
    {
        title: "Talk to the people who choose the tools",
        findings: "1, 2, 3, 6",
        priority: "High",
        body: "The enterprise direction comes from what freelancers said about their clients. The next step is to confirm it with team leads and IT decision makers. That includes how their teams would actually use the shared desktop, and how much of what they share on calls lives on the web, where the shared desktop can help.",
    },
    {
        title: "Make reliability the first priority",
        findings: "4",
        priority: "High",
        body: "Audio, joining, and connection need to work before any new feature can matter. Established tools get patience that a new one won’t. That means fixing the basics in VoceSpace first, like video blurring and meeting links that don’t work.",
    },
    {
        title: "Show clearly where AI data goes",
        findings: "2, 7",
        priority: "Medium",
        body: "The one privacy worry participants raised themselves was AI, and where their notes and transcripts end up. The AI work log takes screenshots every few minutes, so people will need a plain explanation of where that data goes, and an off switch the client can see.",
    },
    {
        title: "Offer notes people can check and edit",
        findings: "7",
        priority: "Low",
        body: "Almost nobody wanted to rewatch a call. They wanted what was said, and many still trusted their own notes over AI. So instead of leading with recording, VoceSpace should offer a transcript and summary people can check, edit, and turn into the follow-up email they already send after calls.",
    },
]

function Recommend() {
    return (
        <section id='03_recommend'>
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 3" title="Recommend" />
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader
                        header="THE RECOMMENDATIONS"
                        title="5 recommendations, built from what participants spoke about"
                        texts={[
                            "Besides the seven findings above, there were a few more insights that came up less often. Looking at all of them together, I came up with recommendations for what VoceSpace should do next, each with a priority based on its importance for VoceSpace’s direction."
                        ]}
                    />

                    {recos.map((reco, i) => (
                        <div key={"VS_reco_" + i} className={`grid grid-cols-[1fr_2fr_2fr] gap-2 px-6 lg:px-12 ${i > 0 ? "border-t-[0.5px] border-t-forest-gray pt-4 lg:pt-8" : ""}`}>
                            <p className="text-wine-accent med-text-16 font-mono px-5">{String(i + 1).padStart(2, '0')}</p>
                            <div className="flex flex-col gap-2.5">
                                <p className="text-forest-dark med-text-22 font-semibold">{reco.title}</p>
                                <p className="text-slate-dark med-text-14 font-mono">From Findings {reco.findings}</p>
                                <p className={`med-text-16 font-bold font-mono uppercase ${reco.priority == "High" ? "text-wine-accent" : reco.priority == "Medium" ? "text-forest-dark" : "text-sage-medium"}`}>{reco.priority} Priority</p>
                            </div>
                            <p className="text-slate-dark med-text-16">{reco.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recommend