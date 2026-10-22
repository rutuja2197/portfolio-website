import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

function Understand() {
    return (
        <section id='01_understand'>
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 1" title="Understand"/>
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader
                        header="what vocespace is"
                        title="Privoce’s video collaboration platform, built around your own space."
                        texts={[
                            "VoceSpace is Privoce’s video collaboration platform. When you sign up, you get your own space, a single home base for all your calls. Instead of a new link for every meeting, your space has rooms inside it, like a meeting room or a coffee break room, and the people you invite can move between them.",
                            "On a call, everyone can use a shared browser together, open websites, and share files. There’s also an AI work log that keeps track of what you worked on. And since it’s open source, you can host it on your own servers and keep your data with you.",
                        ]}
                    />
                    <div className="flex flex-col items-center gap-4">
                        <img src="/vocespace_screen.webp" alt="Screenshot of the Vocespace app" className="w-md md:w-xl lg:w-3xl"/>
                        <p className="text-slate-dark med-text-14 font-mono max-w-225 text-center">My space in VoceSpace, with rooms people can move between. The right side panel has options like the Shared Browser and File upload.</p>
                    </div>
                    <div className="bg-sage-light grid grid-cols-2 items-center p-6 lg:p-10 gap-8 lg:gap-12">
                        <div className="flex flex-col gap-4 lg:gap-6">
                            <p className="font-mono text-wine-accent ned-text-16 uppercase">The gap</p>
                            <p className="font-bold text-forest-dark med-text-18">Nobody had asked freelancers yet</p>
                        </div>
                        <div className="flex med-text-16 text-slate-dark flex-col gap-3 lg:gap-6">
                            <p>VoceSpace was planning to target freelancers and consultants. But no research had been done to check whether its features solved problems they actually had. That’s what I was brought in to find out.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col bg-sage-light rounded-2xl p-6 lg:p-10 gap-3 lg:gap-5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">How I ran the study</p>
                            <p className="text-forest-dark med-text-18 font-bold">11 virtual interviews with freelancers</p>
                            <p className="text-slate-dark med-text-16">(I aimed for 10, but one more said yes, and I wasn’t going to turn that down.)</p>
                            <p className="text-slate-dark med-text-16">I wrote an interview guide with 18 questions across five sections: warm-up, current tools and workflow, pain points, post-call workflow, and wrap-up. Each interview ran about 35 minutes on average.</p>
                            <p className="text-slate-dark med-text-14 border-t-[0.5px] border-t-forest-gray py-5">Recruiting was honestly the hardest part. There was no compensation, and some people said no for exactly that reason. I reached out through LinkedIn, professional groups I’m part of, and freelancer sites like Fiverr. Participants ranged from a UX designer with 10 years of independent work to a consultant who bridges product and engineering teams.</p>
                        </div>
                        <div className="section-dark flex flex-col rounded-2xl gap-3 lg:gap-5 p-6 lg:p-10">
                            <p className="text-sage-light med-text-16 font-mono uppercase">Why semi-structured interviews</p>
                            <p className="med-text-18 font-bold">I needed to see how people work, and hear what they’d change</p>
                            <p className="med-text-16">Semi-structured interviews let people walk me through how they actually run calls, often by sharing their screens. They also left room for open-ended questions, like <em><b>“If you could change one thing about the way you collaborate with clients today, what would it be?”</b></em></p>
                            <p className="med-text-16 border-t-[0.5px] border-t-sage-light py-5">I thought about focus groups, but they wouldn’t let each person show their own workflow. And in a group, people tend to go along with whoever speaks first. I wanted each person’s own experience, with room to follow up on it. Further, finding one time that worked for 11 busy freelancers, with no incentive to offer, would also have been hard.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Understand