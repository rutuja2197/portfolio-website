import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"
import ProgressBar from "../Components/ProgressBar"

const term_bars = [
    {
        title: "Payment Info",
        value: 17,
        total: 23,
    },
    {
        title: "Search History",
        value: 19,
        total: 27,
    },
    {
        title: "Gameplay Content",
        value: 33,
        total: 47,
    },
    {
        title: "Coarse Location",
        value: 32,
        total: 47,
    },
    {
        title: "Purchase History",
        value: 32,
        total: 47,
    },
    {
        title: "Analytics",
        value: 13,
        total: 19,
    },
    {
        title: "User ID",
        value: 16,
        total: 25,
    },
]

function Test() {
    return (
        <section id='04_test' className="bg-forest-light">
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 4" title="Test" />
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader 
                        header="Testing The Rewrites"
                        title="A follow-up survey with 47 participants"
                        texts={[
                            "Rewriting a definition is the easy part. Knowing whether it's clearer is harder. So I asked people who weren't in our interviews to compare my rewrites with Apple's originals."
                        ]}
                    />
                    <div className="flex flex-col gap-2.5">
                        <p className="text-wine-accent med-text-16 font-mono uppercase">Why a survey</p>
                        <p className="text-forest-dark med-text-28 font-semibold">This time, I needed to measure, not explore</p>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-dark text-12 font-mono uppercase">The question changed</p>
                                <p className="text-slate-dark med-text-16">Now the question was whether my version was clearer than Apple’s. Answering that meant seeing how many people made the same choice, so a survey let me reach 47 people, about three times the interviews.</p>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-dark text-12 font-mono uppercase">Closer to the real thing</p>
                                <p className="text-slate-dark med-text-16">It also matched the App Store: no one there to explain, so the definitions had to work on their own. The trade-off was losing the “why” behind each pick.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">How the survey worked</p>
                            <p className="text-forest-dark med-text-28 font-semibold">A survey in two parts</p>
                            <p className="text-slate-dark med-text-16">Surveys work best when they’re quick and keep cognitive load low. Multiple choice is easy to answer. Open text questions take more effort, and people either lose interest or type anything just to move on. So the main test was a simple choice between two definitions. But I still wanted to test my rewrites the same way we tested Apple’s, so I kept a small version of the guessing task too.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-wine-accent text-12 font-mono uppercase">Part A</p>
                                <p className="text-forest-dark med-text-18 font-bold">Guess the term</p>
                                <p className="text-slate-dark med-text-16">Same task as the interviews. People read one of my rewritten definitions and typed the term it described, with no options given. To keep it light, each person saw only 2 of 4 terms, picked at random. <em>Does the new wording bring the right term to mind?</em></p>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-wine-accent text-12 font-mono uppercase">Part B</p>
                                <p className="text-forest-dark med-text-18 font-bold">Pick the clearer definition</p>
                                <p className="text-slate-dark med-text-16">People saw Apple's definition and mine side by side, without knowing which was which, and picked the one that was clearer. The order was randomized, so neither version always showed up first. Everyone saw the terms they hadn't guessed in Part A.</p>
                            </div>
                        </div>
                        <p className="text-forest-dark med-text-14 italic">Why 3 terms were left out: I left 3 terms out of Part A because guessing couldn't tell me much about them. Purchase History was already guessed by 10 of 15 people in the interviews, so there wasn't much room to improve. Nobody guessed Coarse Location or Gameplay Content exactly. "Coarse" just isn't a word people use (that's why I suggested renaming it Approximate Location in Phase 3). And Gameplay Content felt a bit niche, since it mostly makes sense to people who play games. So all 3 went to Part B instead.</p>
                        <p className="text-slate-dark med-text-16">This time, I didn’t screen for iPhone users. The question was whether the words made sense, and you don’t need an iPhone to read a definition.</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Result 01</p>
                            <p className="text-forest-dark med-text-28 font-semibold">People picked my rewrites 69% of the time</p>
                            <p className="text-slate-dark med-text-16">
                                In Part B, 47 people compared Apple’s definitions with mine, one term at a time. Everyone compared the same 3 terms: Gameplay Content, Coarse Location, and Purchase History. Each person also compared the 2 terms from Part A that they hadn’t been asked to guess. They didn’t know which version was which. They just picked the one that was clearer.
                            </p>
                        </div>
                        <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                            <p className="text-wine-accent text-12 font-mono uppercase">% Who picked my rewrite, per term</p>
                            <p className="text-slate-dark med-text-16">
                                If my rewrites were no better than Apple’s, it would be a coin flip. Each version would get picked about half the time. Instead, people picked mine 69% of the time on average, across all 7 terms. And every single term leaned my way. Even the weakest one, User ID, was picked 64% of the time.
                            </p>
                            <div className="flex flex-col items-center gap-4 lg:gap-6 py-2.5">
                                {term_bars.map((bar, i) => (
                                    <ProgressBar key={"AS_TEST_bar_" + i} {...bar} />
                                ))}
                                <p className="text-wine-accent font-mono text-12">50% = coin flip</p>
                            </div>
                            <p className="text-slate-dark med-text-16">
                                Not every term was seen by the same number of people, so some bars are less precise than others. For Analytics, with 19 people, one person changing their pick moves the bar by about 5 points. So the gaps between bars don’t mean much. What matters is that every bar sits above the 50% line.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-gray text-12 font-mono uppercase">Term by term check</p>
                                <p className="text-slate-dark med-text-16">
                                    I also checked each of these 7 terms on its own. For 4 of them, the result was statistically significant, meaning it was unlikely to be chance: Gameplay Content, Coarse Location, Purchase History, and Payment Info. Coarse Location being on that list meant a lot to me. (That’s the term people stayed confused about in the interviews, even after we told them the answer.)
                                </p>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-gray text-12 font-mono uppercase">One honest caveat</p>
                                <p className="text-slate-dark med-text-16">
                                    Checking 7 terms separately raises the odds that at least one passes just by chance. To account for that, I raised the bar each term had to clear (using the Holm correction). With that stricter bar, none of the above 4 terms passed. So this isn’t proof. But all 7 terms leaning my way is a pretty consistent signal.
                                </p>
                            </div>
                        </div>
                        <p className="text-forest-dark med-text-14 italic">Binomial test against 50%, per term. Significant at p &lt; .05: Gameplay Content (p = .008), Coarse Location (p = .019), Purchase History (p = .019), Payment Info (p = .035). None remained significant after Holm correction.</p>
                    </div>

                    <div className="flex flex-col gap-3 lg:gap-6 py-3 lg:py-5">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-wine-accent med-text-16 font-mono uppercase">Result 02</p>
                            <p className="text-forest-dark med-text-28 font-semibold">Part A didn't give a clear answer</p>
                            <p className="text-slate-dark med-text-16">
                                In Part A, people read my rewritten definitions and typed the term they thought each one described. It was the same task as the interviews, just with my wording instead of Apple’s. So I compared the two. How many people guessed the exact term with Apple’s definition, and how many with mine?
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-6">
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-gray text-12 font-mono uppercase">What Moved</p>
                                <p className="text-slate-dark med-text-16">
                                    For 3 of the 4 terms, more people got it exactly right with my version. Payment Info was the exception, dipping slightly. Exact matching is a strict bar, though. A lot of people got close, like “username” for User ID. So I also tried counting close answers as correct. With that, all 4 terms went up. But in both cases, none of the changes were big enough to rule out chance.
                                </p>
                            </div>
                            <div className="flex flex-col bg-white rounded-xl gap-2 lg:gap-4 p-3 lg:p-5">
                                <p className="text-forest-gray text-12 font-mono uppercase">Why it was hard</p>
                                <p className="text-slate-dark med-text-16">
                                    Fisher’s exact test works with small samples, but small samples can only catch large changes. Each term only got 20 to 27 guesses, and the interview group was fixed at 15 people. So the honest result is no detectable difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Test