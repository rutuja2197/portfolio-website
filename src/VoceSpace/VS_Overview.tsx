import CaseTable from "../Components/CaseInfoTable"
import ResearchQ from "../Components/ResearchQ"

const case_info = {
    role: "Design Research Intern",
    team: "Solo researcher at Privoce, mentored by Vance MacEwen",
    timeline: "July to September 2026",
    method: "Semi-structured interviews, Interview guide design, Participant recruiting, Affinity mapping",
    outcome: "Recommended shifting the target audience from freelancers to teams and enterprises"
}

const research_qs = [
    "What challenges do freelancers face on client video calls, from screen sharing to the follow-up afterward?",
    "Do VoceSpace's features solve the problems freelancers actually have?"
]

function Overview() {
    return (
        <section id='overview' className="bg-forest-light">
            <div className="global-side-padding py-20">
                <h2 className="font-semibold large-text-56 max-w-200 leading-[1.15]">Do freelancers' needs fit what VoceSpace offers?</h2>
                <div className="grid grid-cols-2 gap-16 lg:gap-25 pt-18">
                    <img decoding="sync" src="/vocespace.webp" alt="Illustration of a screenshot showing a private message" className="max-h-105" />
                    <div className="flex flex-col gap-6 lg:gap-8 py-4 lg:py-8">
                        <p className="med-text-20 text-wine-accent italic">A cautionary tale:</p>
                        <p className="text-slate-dark med-text-18">While I was at a previous job, the freelancer building our website was walking our team through his slides when a text from his girlfriend popped up in the corner of his screen. It was <em>definitely</em> not about the slides, and he closed it in record time. We all pretended we hadn't read it, but of course, we had all read it.</p>
                        <p className="text-slate-dark med-text-18">I've shared one window at a time ever since and it turns out I'm not alone. When I asked freelancers about screen sharing, many had the same rules: hide the apps, close the tabs, and prep the desktop before every call. VoceSpace's shared desktop is one answer to this problem. We thought freelancers would need it most, so I set out to find out if they actually did.</p>
                    </div>
                    <div>
                        <CaseTable {...case_info} />
                    </div>
                    <div className="px-2.5">
                        <ResearchQ questions={research_qs} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview