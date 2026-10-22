import StickyNav from "../Components/StickyNav"
import Overview from "./AS_Overview"
import Understand from "./AS_Understand"
import Synthesize from "./AS_Synthesize"
import Design from "./AS_Design"
import Test from "./AS_Test"
import Reflections from "../Components/Reflections"

const scroll_link = [
    '#overview',
    '#01_understand',
    '#02_synthesize',
    '#03_design',
    '#04_test',
    '#reflections'
]

const reflects = {
    study: "ApplePL",
    page_bg: "bg-white",
    r_show: [
        "People clearly preferred my rewrites. Across all 7 terms, they picked mine 69% of the time, and every term leaned my way.",
        "But liking a definition isn’t the same as understanding it. In Part A, more people named the term exactly right with my version for 3 of the 4 terms, and all 4 went up when I counted close answers. None of those changes were big enough to rule out chance.",
    ],
    r_claim: [
        "I can say people liked my versions more. I can’t yet claim they understood them better. I also don’t know why they preferred them. A few short follow-up interviews could answer that.",
    ],
    diff: [
        {
            topic: "re-written definition for Coarse Location",
            reason: "I used a city block to show how rough Coarse Location is. It helps if you live in a US city. But many cities, like the ones in Asia, aren't laid out in blocks, so the comparison doesn't land. I'd look for a distance people anywhere can picture.",
        },
        {
            topic: "Term choice",
            reason: "I'd pick terms that matter to more people. We included Gameplay Content in the interviews, but it only relates to people who play games on their phone. Terms like Location or ID apply to almost everyone, so every participant would have something to connect them to.",
        },
        {
            topic: "design of Part A in survey",
            reason: "Part A might have worked better as an interview task. The point was for people to come up with the term on their own, so it had to stay open ended. I even showed a practice example first. But in a survey, people don't want to think too much. Some even answered \"NA\" or \"what does this mean.\" In an interview, someone can stop and work through it out loud.",
        },
        {
            topic: "Recruiting",
            reason: "I’d recruit beyond Apple users for the interviews too. All 15 participants were students with iPhones, but anyone could have read these definitions and told us what they understood.",
        },
    ],
    thinking: [
        {
            title: "Participant A",
            thought: ["One bought a sticker printer that needed an app. They checked its privacy label, saw how much data it wanted, and didn’t download it."],
        },
        {
            title: "Participant B",
            thought: ["Another said she’d like to know what an app collects, but it wouldn’t change her decision."],
        },
    ],
    final_st: "So even if these definitions get better, and people finally understand what Coarse Location means, will they act on it? That question goes beyond definitions, and maybe it’s the one worth focusing on next."
}

function AppleHome() {
    return (
        <section>
            <StickyNav links={scroll_link} />
            <Overview />
            <Understand />
            <Synthesize />
            <Design />
            <Test />
            <Reflections {...reflects} />
        </section>
    )
}

export default AppleHome