import CaseTable from "../Components/CaseInfoTable"
import ResearchQ from "../Components/ResearchQ"


const case_info = {
    role: "UX Researcher",
    team: "4 Carnegie Mellon University students, under Dr. Lorrie Cranor. Definition rewrites and follow-up survey done solo.",
    timeline: "Jan to May 2025 (Initial study). Sept 2026 (follow-up survey).",
    method: "Semi-structured interviews, Inductive coding, Term-matching & Preference survey",
    outcome: "Rewritten definitions preferred ~70% of the time on average",
}

const research_qs = [
    "When people read Apple's definitions for privacy label terms (like “Browsing History”), how well do they understand what those terms mean?",
    "Which words or phrases in those definitions help people understand, and which get in the way?",
]

function Overview() {
    return (
        <section id='overview' className="bg-forest-light">
            <div className="global-side-padding grid grid-cols-2 gap-12 lg:gap-20 py-16 lg:py-20">
                <div className="flex flex-col gap-6 lg:gap-8">
                    <h1 className="large-text-56 leading-[1.15] font-bold">Do people understand Apple's privacy definitions?</h1>
                    <div className="bg-white flex flex-col gap-5 lg:gap-9 px-4 lg:px-8 py-8 lg:py-12 rounded-2xl">
                        <p className="text-wine-accent med-text-20 italic">Try this yourself:</p>
                        <p className="text-slate-dark med-text-24 font-semibold">Information about the content you have viewed that is not part of the app, such as websites.</p>
                        <p className="text-wine-accent med-text-20 italic">What short term would you use for the above definition?</p>
                    </div>
                    <p className="text-slate-dark med-text-18">What did you come up with? Apple's term for it is "Browsing History". We gave participants this same task, with no options to choose from.</p>
                </div>
                <div className="px-14 md:px-20 lg:px-page flex flex-col items-center">
                    <img src="/apple_screen.webp" alt="Screen shot of Apple privacy definitions" className="max-h-150"/>
                    <p className="text-forest-gray med-text-14 py-2 text-center max-w-75">App Privacy section for Google Maps on the App Store, listing terms like "Browsing History."</p>
                </div>
                <div>
                    <CaseTable {...case_info} />
                </div>
                <div className="px-2.5">
                    <ResearchQ questions={research_qs} />
                </div>
            </div>

        </section>
    )
}

export default Overview