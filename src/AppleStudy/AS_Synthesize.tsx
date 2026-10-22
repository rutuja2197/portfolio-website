import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

const start_steps = [
    {
        header: "Listen and log",
        body: "I listened to every interview and logged anything that stood out in a simple table, with a few keywords.",
    },
    {
        header: "Find patterns",
        body: "I went back and looked for patterns across participants, without a pre-decided list (essentially, inductive coding).",
    },
    {
        header: "Build the codebook",
        body: "Those patterns became my codes. Tricky, because the definitions were so different, like analytics is technical, but User ID isn't. It took a few rounds before it held together.",
    },
    {
        header: "Check it together",
        body: "A teammate used my codebook to code the interviews again. We talked through where we agreed & disagreed, then grouped the codes into themes together.",
    }
]

function Synthesize() {
    return (
        <section id='02_synthesize' className="bg-forest-light">
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 2" title="Synthesize"/>
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader 
                        header="Making sense of data"
                        title="15 interviews and a blank codebook"
                        texts={[
                            "This was my first research project. I had 15 interviews to code and no codebook to start from, so honestly, I was a bit overwhelmed initially. Then I remembered what design thinking taught me (just start and iterate), and so I just started."
                        ]}
                    />
                    <div className="grid grid-cols-4 gap-4 lg:gap-8 justify-between lg:px-14">
                        {start_steps.map((step, i) => (
                            <div key={step.header} className="flex flex-col gap-4 p-5 bg-white rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono">{String(i + 1).padStart(2, '0')}</p>
                                <p className="text-forest-dark med-text-18 font-bold">{step.header}</p>
                                <p className="text-slate-dark med-text-16">{step.body}</p>
                            </div>
                        ))}
                    </div>

                    {/* Finding 1 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-2 lg:py-5">
                        {/* Header */}
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <p className="text-wine-accent font-mono uppercase med-text-16" >Finding 01</p>
                            <p className="med-text-28 text-forest-dark font-semibold">Examples made the definitions click</p>
                        </div>

                        {/* Body */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-2xl p-5">
                                <p className="text-wine-accent font-mono uppercase text-12">Where examples helped</p>
                                <p className="py-4 med-text-16 text-slate-dark">Generally, people understood a definition much more easily when it had examples.</p>
                                <div className="grid grid-cols-2 gap-6 text-12 border-b border-b-forest-gray font-mono uppercase item-center p-2">
                                    <p><b>Term</b> &amp; Definition</p>
                                    <p>What people said</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 border-b-[0.5px] border-b-forest-gray item-center p-4">
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">Payment Info</p>
                                        <p className="text-slate-dark">Such as form of payment, payment card number, or bank account number.</p>
                                    </div>
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">9/15</p>
                                        <p className="text-slate-dark">said "card number" helped them land on the term</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6 border-b-[0.5px] border-b-forest-gray item-center p-4">
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">Gameplay Content</p>
                                        <p className="text-slate-dark">Such as saved games, multiplayer matching or gameplay logic, or user-generated content in-game.</p>
                                    </div>
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">10/15</p>
                                        <p className="text-slate-dark">pointed to “saved games”</p>
                                    </div>
                                </div>
                                <p className="med-text-16 text-slate-dark pt-4">For definitions without examples, participants said adding some would help.</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-2xl p-5">
                                <p className="text-wine-accent font-mono uppercase text-12">Where examples caused confusion</p>
                                <p className="py-4 med-text-16 text-slate-dark"><b>Sensitive Info</b> is almost all examples, including race and gender identity.</p>
                                <div className="grid grid-cols-2 gap-6 text-12 border-b border-b-forest-gray font-mono uppercase item-center p-2">
                                    <p><b>Term</b> &amp; Definition</p>
                                    <p>What people said</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 border-b-[0.5px] border-b-forest-gray item-center p-4">
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">Sensitive Info</p>
                                        <p className="text-slate-dark">Sensitive information such as racial or ethnic data, sexual orientation, pregnancy or childbirth information, disability, religious or philosophical beliefs, trade union membership, political opinion, genetic information, or biometric data.</p>
                                    </div>
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">5/5</p>
                                        <p className="text-slate-dark">who looked it up wanted it split into separate terms</p>
                                    </div>
                                </div>
                                <p className="med-text-16 text-slate-dark pt-4">And a few participants didn't think some of those counted as sensitive at all.</p>
                            </div>
                        </div>

                        {/* Lesson learned */}
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So the lesson</p>
                            <p className="med-text-16 ">Not more examples, but the right ones: <em>familiar, everyday, and only as many as needed.</em> This is something I stuck to when I rewrote the definitions.</p>
                        </div>
                    </div>

                    {/* Finding 2 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-2 lg:py-5">
                        {/* Header */}
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <p className="text-wine-accent font-mono uppercase med-text-16" >Finding 02</p>
                            <p className="med-text-28 text-forest-dark font-semibold">Some definitions were written for developers</p>
                            <p className="med-text-16 text-slate-dark">Some definitions read like they were meant for the people building apps, not the people downloading them.</p>
                        </div>

                        {/* Body */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-2xl p-5">
                                <p className="text-wine-accent text-12 font-mono uppercase">Term &mdash; Coarse Location</p>
                                <p className="text-slate-dark med-text-16 rounded-3xl p-5 border-[0.5px] border-slate-dark my-4">…with lower resolution than a latitude and longitude with three or more decimal places.</p>
                                <div className="grid grid-cols-2 gap-3 lg:gap-6 border-b-[0.5px] border-b-forest-gray p-2">
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">10/15</p>
                                        <p className="text-slate-dark">got close to the term. No one guessed it exactly</p>
                                    </div>
                                    <div className="flex flex-col med-text-16">
                                        <p className="text-forest-dark font-bold">9/15</p>
                                        <p className="text-slate-dark">still found it confusing after we told them the answer</p>
                                    </div>
                                </div>
                                <p className="text-slate-dark med-text-16 italic my-4">"It's not a point location. Is it? Just like a circle that I'm in? I don't know."</p>
                                <p className="text-slate-dark med-text-16 italic">"If I was a layperson, what does 3 or more decimal [points]… have to do with me?"</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-2xl p-5">
                                <p className="text-wine-accent text-12 font-mono uppercase">Term &mdash; Payment Info</p>
                                <p className="text-slate-dark med-text-16 rounded-3xl p-5 border-[0.5px] border-slate-dark my-4">…and you as the developer never have access to the payment information, it is not collected and does not need to be disclosed.</p>
                                <div className="flex flex-col med-text-16 border-b-[0.5px] border-b-slate-dark p-2">
                                    <p className="text-forest-dark font-bold">7/15</p>
                                    <p className="text-slate-dark">found this developer note the most confusing part</p>
                                </div>
                                <p className="text-slate-dark med-text-16 italic my-4">"I was reading this as myself, not typically developing anything."</p>
                            </div>
                        </div>

                        {/* Lesson learned */}
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So the lesson</p>
                            <p className="med-text-16 ">The definitions should be written for the <em>person downloading the app</em>.</p>
                        </div>
                    </div>

                    {/* Finding 3 */}
                    <div className="flex flex-col gap-3 md:gap-6 pt-2 md:pt-5">
                        {/* Header */}
                        <div className="flex flex-col gap-1 lg:gap-3">
                            <p className="text-wine-accent font-mono uppercase med-text-16" >Finding 03</p>
                            <p className="med-text-28 text-forest-dark font-semibold">Some defintions weren't built like definitions</p>
                        </div>

                        {/* Body */}
                        <div className="flex flex-col bg-white rounded-2xl p-5">
                                <p className="text-wine-accent text-12 font-mono uppercase">Term &mdash; User ID</p>
                                <p className="text-slate-dark med-text-16 rounded-3xl p-5 border-[0.5px] border-slate-dark my-4 underline-offset-4">
                                    <u>Such as</u><sup>01</sup> screen name, handle, account ID, assigned user ID, customer number, or <u>other user- or account-level ID</u><sup>02</sup> that can be used to identify a particular user or account.
                                </p>
                                <div className="grid grid-cols-2 gap-4 lg:gap-8 p-2">
                                    <div className="flex flex-col med-text-16 gap-3">
                                        <div className="flex flex-row items-baseline gap-2">
                                            <p className="text-wine-accent font-mono text-12">01</p>
                                            <p className="text-forest-dark font-bold">Starts with "Such as"</p>
                                        </div>
                                        <p className="text-slate-dark">3 of the 7 definitions we tested start this way. They read like a list with no sentence before it. 3 participants said that made them feel unfinished.</p>
                                    </div>
                                    <div className="flex flex-col med-text-16 gap-3">
                                        <div className="flex flex-row items-baseline gap-2">
                                            <p className="text-wine-accent font-mono text-12">02</p>
                                            <p className="text-forest-dark font-bold">Ends with a catch-all</p>
                                        </div>
                                        <p className="text-slate-dark">Like "or other user- or account-level ID." That leaves people guessing what else counts.</p>
                                    </div>
                                </div>
                        </div>

                        {/* Lesson learned */}
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So the lesson</p>
                            <p className="med-text-16">A definition should first say what something is. Then the examples can do their job.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Synthesize