import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

function Understand() {
    return (
        <section id='01_understand'>
            <div className="global-side-padding py-16 lg:py-20">
                <CaseSectionTitle phase="Phase 1" title="Understand" />
                <div className="flex flex-col gap-4 lg:gap-8 py-4 lg:py-8">
                    <DarkHeader 
                        header="Why privacy labels exist"
                        title="Most of us have never read an app's privacy policy."
                        texts={[
                            "It is long, lawyer-y, and honestly, nobody has the time to read it. To make it easier, Apple added privacy labels to each app's App Store page. They're a short summary of what data an app collects and how it uses it, like the nutrition label on a food product.",
                            "The idea of a privacy nutrition label came from Dr. Lorrie Cranor's research (that's why I was super excited to work under her, since she pioneered the idea). Apple's labels came years later and work the same way."
                        ]}
                    />
                    <div className="flex flex-row gap-4 md:gap-8">
                        <div className="bg-sage-light rounded-2xl p-6 lg:p-10 flex flex-col gap-2 lg:gap-5">
                            <p className="font-mono uppercase text-wine-accent med-text-16">The Gap</p>
                            <p className="font-bold med-text-18 text-forest-dark">Nobody had studied the words in the definitions.</p>
                            <p className="text-slate-dark med-text-16">Earlier studies had looked at the labels themselves, like confusing designs and unclear phrases. One even noticed that people stayed confused after reading the definitions.</p>
                            <p className="text-slate-dark med-text-16">But no one had asked why. Which words in the definitions were tripping people up? </p>
                        </div>
                        <div className="bg-sage-light rounded-2xl p-6 lg:p-10 flex flex-col gap-2 lg:gap-5">
                            <p className="font-mono uppercase text-wine-accent med-text-16">How we ran the study</p>
                            <p className="text-forest-dark med-text-18 font-bold">15 in-person interviews with iPhone users from Carnegie Mellon</p>
                            <div className="border-b border-b-forest-gray pb-5 flex flex-row gap-10 lg:gap-15">
                                <div className="flex flex-col gap-2.5">
                                    <p className="med-text-16 font-semibold text-forest-dark">Part 1. Guess the term</p>
                                    <p className="med-text-16 text-slate-dark">7 definitions shown, one at a time. Participants guessed each term, no options given. <em>What does the wording alone bring to mind?</em></p>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <p className="med-text-16 font-semibold text-forest-dark">Part 2. Look it up</p>
                                    <p className="med-text-16 text-slate-dark">10 terms shown. Participants picked the ones they'd look up for definitions, then told us if those actually helped.</p>
                                </div>
                            </div>
                            <p className="med-text-14 text-slate-dark">To recruit, we sent a flyer through department mailing lists and asked people to spread the word. Everyone who signed up filled out a short screener on Qualtrics. Instead of asking "Do you own an iPhone?", we asked which Apple devices they used. That way, people couldn't tell what answer would get them into the study.</p>
                        </div>

                    </div>
                    <div className="flex-1 grid grid-cols-2 section-dark items-center p-6 lg:p-10 gap-8 lg:gap-12">
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <p className="font-mono text-forest-light ned-text-16 uppercase">Why semi-structured interviews</p>
                            <p className="font-bold med-text-18 ">When you're studying how people read definitions, the “why did you think of that word” moment is everything</p>
                        </div>
                        <p className="med-text-16">We were asking people to explain how they understood language. In a survey, people answer in a few words or skip the question, with no way to follow up. Semi-structured interviews let us go off script when something was worth exploring. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Understand