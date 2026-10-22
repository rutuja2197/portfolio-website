import StickyNav from "../Components/StickyNav"
import Overview from "./VS_Overview"
import Recommend from "./VS_Recommend"
import Reflections from "../Components/Reflections"
import Synthesize from "./VS_Synthesize"
import Understand from "./VS_Understand"

const scroll_link = [
    '#overview',
    '#01_understand',
    '#02_synthesize',
    '#03_recommend',
    '#reflections',
]

const reflects = {
    study: "Vocespace",
    page_bg: "bg-forest-light",
    r_show: [
        "Freelancers aren’t the right first market for VoceSpace. They don’t pick their call tool, they won’t pay for a new one, and privacy is their client’s call, not theirs. They care more about calls working without glitches, and about taking their own notes."
    ],
    r_claim: [
        "I can say freelancers are a weak fit. I can’t yet claim organizations want VoceSpace, because everything I know about them came through freelancers. And since I never showed VoceSpace to participants, whether its features actually land is still untested."
    ],
    diff: [
        {
            topic: "Recruiting",
            reason: "I should have planned for recruiting to take longer. A few people said they’d join if it were paid, so finding participants without compensation took time. The upside is that everyone who did talk to me wanted to, so their answers were genuine.",
        },
        {
            topic: "Showing the product",
            reason: "I kept VoceSpace out of the interviews so people would describe how they actually work, without any bias. But I could have spent the last five minutes walking them through it, and asked about the one feature that matched something they’d told me. Like for someone who only shares their screen to present, that might have been the shared desktop.",
        },
        {
            topic: "Asking about AI directly",
            reason: "People use AI in so much of their work now, from drafting to note-taking, that I should have asked about it directly. It came up on its own in the early interviews, so I started asking about it in the later ones. Having it in the guide from the start would have been better, especially since VoceSpace has an AI work log.",
        },
    ],
    thinking: [
        {
            title: "What if you knew your work was seen?",
            thought: ["Three participants sent work to clients before calls, but had no idea whether it was ever opened, or which parts got attention. What if shared work worked like a Loom video? You’d see who viewed it, and the client could leave a quick comment right on the slide or section they were reacting to."],
        },
        {
            title: "What if a community was built in?",
            thought: [
                "Freelancers already find each other online. One participant chats with other freelancers in a Slack community during her free time. But these groups take digging to find. ",
                "Meanwhile, participants had real questions about what rates to charge and what timelines are realistic to give a client. What if a call platform had a community and a shared wiki built in, where freelancers could find those answers?"
            ]
        },
    ],
    final_st: "These didn’t come up enough to count as findings, but I keep coming back to them. So much of a freelancer’s work happens before and after a call, and right now no call tool really helps with that part."
}
function VoceSpace() {
    return (
        <section>
            <StickyNav links={scroll_link} />
            <Overview />
            <Understand />
            <Synthesize />
            <Recommend />
            <Reflections {...reflects} />
        </section>
    )
}

export default VoceSpace