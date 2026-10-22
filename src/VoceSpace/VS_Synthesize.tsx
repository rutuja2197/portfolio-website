import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

const start_steps = [
    {
        header: "Break it down",
        body: "I went through every transcript and pulled out each idea onto its own sticky, written as subject, verb, object.",
    },
    {
        header: "Group it",
        body: "I affinity mapped about 440 stickies into themes. Honestly, it was overwhelming at first, but placing the last sticky was very satisfying.",
    },
    {
        header: "Find the insight",
        body: "I turned each cluster into an insight, paired it with an opportunity for VoceSpace, and listed which participants backed it up.",
    },
    {
        header: "Prioritize",
        body: "I set up a prioritization table and dot vote so the team could decide what to act on next.",
    }
]

function Synthesize() {
    return (
        <section id='02_synthesize' className="bg-forest-light">
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 2" title="Synthesize" />
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader
                        header="MAKING SENSE OF DATA"
                        title="11 interviews and about 440 stickies"
                        texts={[
                            "Our study was exploratory, so it ended with findings, not design changes. Later, on my own, I rewrote all 7 definitions from the first part of the study as I wanted to fix what confused people in our interviews."
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
                    <div className="flex flex-col items-center gap-4">
                        <img src="/VS_Synthesize.webp" alt="Screenshot of the Vocespace app" className="w-md md:w-xl lg:w-3xl"/>
                        <p className="text-slate-dark med-text-14 font-mono max-w-225 text-center">
                            About 440 stickies grouped into themes (left), turned into ranked insights (top right), and next steps for the team (bottom right). Each sticky holds a single point from an interview. I wrote them all in a separate frame first, then sorted them into the themes you see here.
                        </p>
                    </div>

                    {/* Finding 1 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 01</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Whoever hires them picks the platform</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 font-bold">7/11</p>
                                    <p className="text-slate-dark med-text-16">used the tool the client or agency set.</p>
                                </div>
                                <p className="text-slate-dark med-text-16">Freelancers used whatever tool the client or agency set, even when they had a favorite of their own. And it didn’t stop at video calls. They also adapted to the client’s project tracker, chat, and file storage.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“If I am working as a freelancer, I use Google Meet… free and [easy] to use. When working for teams or for [agencies], usually we use… Zoom.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 8</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“For the most part, the experience has been like one platform per client.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">A freelancer can’t bring VoceSpace to a client. Whoever hires them has to choose it.</p>
                        </div>
                    </div>

                    {/* Finding 2 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 02</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Privacy is the client’s call</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <p className="text-slate-dark med-text-16">Privacy wasn’t something freelancers chose a video tool for. The work belongs to the client, so the client decides how private it needs to be. Nobody questioned whether Meet, Zoom, or Teams were private enough. The one worry that was their own was AI, and where their notes and transcripts end up.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“Since they’re the ones picking the platform… ultimately they’re the ones responsible for that.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 10</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“I do worry about where those notes are actually going because they’re probably training some future model.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 5</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">Self-hosting and data control matter to the organizations that set the rules, not to the freelancers following them.</p>
                        </div>
                    </div>

                    {/* Finding 3 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 03</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Screen sharing means hiding things, and losing faces</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <div className="grid grid-cols-2 gap-5 lg:gap-9 pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <div className="flex flex-col">
                                        <p className="text-forest-dark med-text-16 font-bold">10/11</p>
                                        <p className="text-slate-dark med-text-16">prepped their screen before sharing, closing tabs or sharing one window.</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-forest-dark med-text-16 font-bold">6/11</p>
                                        <p className="text-slate-dark med-text-16">lost sight of the client’s face while sharing.</p>
                                    </div>
                                </div>
                                <p className="text-slate-dark med-text-16">The worry wasn’t hackers. It was a client seeing something they shouldn’t, like another client’s work or a messy desktop. Once sharing started, they built workarounds like a second monitor or a careful window setup.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“I had like another client’s tab visible, and so it’s not like they could see the actual work for the other client, but they could see that I was working on the other client, which is not desirable.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 6</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“The screen with my video is always my main screen on my laptop because that’s the one with my camera, so that I’m looking at you.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 10</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">The shared desktop helps, but only with what’s on the web. Anything on someone’s own computer still has to be screen-shared, so the cleanup habit won’t go away entirely.</p>
                        </div>
                    </div>

                    {/* Finding 4 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 04</p>
                            <p className="text-forest-dark med-text-28 font-semibold">If it doesn’t just work, nothing else matters</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <p className="text-slate-dark med-text-16">Technical glitches didn’t come up for most participants. Some did mention audio, connection, or video issues, but treated them as part of the routine and kept using Meet and Zoom, the tools most participants already used. </p>
                                <p className="text-slate-dark med-text-16">A new tool doesn’t get that patience. One participant loved Butter, especially its soundboard, but stopped using it because it wasn’t reliable.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“Fun features are worthless if the tool doesn’t load.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 1</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“There’s just always something like that going on. It’s this like baseline level of annoying.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 5</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">This is where the shared desktop fits best. Everyone sees the same page, nothing else is exposed, and faces stay visible.</p>
                        </div>
                    </div>

                    {/* Finding 5 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 05</p>
                            <p className="text-forest-dark med-text-28 font-semibold">When freelancers do choose, free wins</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 font-bold">7/11</p>
                                    <p className="text-slate-dark med-text-16">picked tools that were free and already built into their calendar.</p>
                                </div>
                                <p className="text-slate-dark med-text-16">Every tool comes out of their own pocket, so they skip paid plans, even for a tool they’d rather use.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“I use Google Meet most of the time purely because it’s free. I think if I could choose anything, I would pick Zoom. Zoom is actually surprisingly expensive.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 5</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“I try to keep my own tech stack pretty narrow, just because I have to carry all those costs myself.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 6</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">A new tool has to beat something free and already set up. That’s a hard sell to someone paying out of pocket.</p>
                        </div>
                    </div>

                    {/* Finding 6 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 06</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Client calls are presentations, not working sessions</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 font-bold">5/11</p>
                                    <p className="text-slate-dark med-text-16">had calls where one person shared and the client watched.</p>
                                </div>
                                <p className="text-slate-dark med-text-16">The real work happened before or after the call. Working on something together live mostly came up in workshops and internal team calls.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“We’re never working on anything side by side. I am always presenting information.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 9</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">The shared desktop fits working sessions, and those happen inside teams more than with clients.</p>
                        </div>
                    </div>

                    {/* Finding 7 */}
                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Finding 07</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Notes matter more than recordings</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they do</p>
                                <div className="grid grid-cols-2 gap-5 lg:gap-9  pb-4 border-b-[0.5px] border-b-forest-gray">
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 font-bold">8/11</p>
                                    <p className="text-slate-dark med-text-16">rarely or never recorded their calls</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 font-bold">9/11</p>
                                    <p className="text-slate-dark med-text-16">took their own notes, by hand or typed.</p>
                                </div>
                                </div>
                                <p className="text-slate-dark med-text-16">Almost nobody wanted to watch a call again. They just needed what was said, so they transcribed in the background instead. Even so, most still took their own notes, and some didn’t trust AI to get it right, because it misses how people actually talk. After the call, some turned their notes into a follow-up email with to-dos and next steps, which became the record both sides agreed on.</p>
                            </div>
                            <div className="flex flex-col bg-white p-5 gap-4 rounded-2xl">
                                <p className="text-wine-accent text-12 font-mono uppercase">What they said</p>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“Because I’m transcribing it the way people are saying it, I think AIs have tended to get confused.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 7</p>
                                </div>
                                <div className="flex flex-col pb-4 border-b-[0.5px] border-b-forest-gray">
                                    <p className="text-forest-dark med-text-16 italic">“There’s something about your hand doing it with your brain”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 1</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-forest-dark med-text-16 italic">“I don’t want to take up all of my memory space with videos that I’m never gonna watch again.”</p>
                                    <p className="text-slate-dark med-text-16">&ndash; Participant 6</p>
                                </div>
                            </div>
                        </div>
                        <div className="section-dark flex flex-row py-5 px-8 lg:px-10 items-center gap-16 lg:gap-25">
                            <p className="med-text-16 font-mono uppercase shrink-0">So for Vocespace</p>
                            <p className="med-text-16 ">Recording calls won’t win freelancers over. What they want is what was said, in a form they can check and edit themselves, not an AI’s version of it.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Synthesize