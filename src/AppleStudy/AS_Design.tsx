import CaseSectionTitle from "../Components/CaseSectionTitle"
import DarkHeader from "../Components/DarkHeader"

const design_defs = [
    {
        title: "Search History",
        apple_def: "Information about searches performed in the app.",
        rewrite: "History of the searches performed in the app.",
        reason: [
            "Only 6 of 15 guessed Search History. “Information” was the word people found most confusing. It's so broad it could mean anything, so I removed it.",
            "5 participants also said the definition should just say “history”. Without it, people had to fill in the gap themselves. So I put it in."
        ],
    },
    {
        title: "Coarse Location",
        apple_def: "Information that describes your location with lower resolution than a latitude and longitude with three or more decimal places, such as from Approximate Location Services.",
        rewrite: "Information that tells an app approximately where you are located, like standing anywhere within a city block, without the app knowing exactly where you are in that block.",
        reason: [
            "“Lower resolution” was the phrase people found most confusing, so I removed it. But “approximate” helped people get close to the term, so I kept it.",
            "Decimal places and “Approximate Location Services” meant little to participants. Even after we told them the answer, 9 of 15 still found the definition confusing. So I swapped both for an example you can picture: standing anywhere within a city block.",
            "Further, no one guessed “Coarse Location,” but 10 of 15 got close, with guesses like “approximate location.” So I'd rename the term to Approximate Location.",
        ],
    },
    {
        title: "Payment Info",
        apple_def: "Such as form of payment, payment card number, or bank account number. If your app uses a payment service, the payment information is entered outside your app, and you as the developer never have access to the payment information, it is not collected and does not need to be disclosed.",
        rewrite: "Information about how you pay, like your payment method, card number, or bank account number. If the app uses another payment service, like Apple Pay or PayPal, this information goes straight to that service, and the app does not collect it.",
        reason: [
            "The original starts with “Such as,” so it reads like a list with nothing before it. I opened with what the information actually is, then gave the examples. I kept “card number,” since 9 participants said “card” helped them land on the term.",
            "The second part was written for developers, and 7 participants found it the most confusing. But the information itself is useful to users: if you pay through another service, the app never gets your card details. So instead of cutting it, I rewrote it from the user's side.",
        ],
    },
    {
        title: "Gameplay Content",
        apple_def: "Such as saved games, multiplayer matching or gameplay logic, or user-generated content in-game.",
        rewrite: "Information generated while you play a game, like your saved game progress, who you're matched with in a multiplayer game, and things you create in the game.",
        reason: [
            "No one guessed Gameplay Content exactly. The definition is just a list starting with “Such as,” with no sentence saying what the list is about. So I added the part: information generated while you play a game.",
            "Some examples were jargon too. “User-generated content” and “gameplay logic” tripped people up. I rewrote the examples in plain words, like “who you're matched with” and “things you create in the game.” I kept “saved game” because 10 participants said it helped.",
        ],
    },
    {
        title: "Purchase History",
        apple_def: "An account's or individual's purchases or purchase tendencies.",
        rewrite: "Information about the history of your purchases, along with patterns drawn from it, like what you tend to buy or how often.",
        reason: [
            "Purchase History was the easiest term, with 10 of 15 guessing it right. But the definition never actually says “history.” People got there by filling in the gap themselves, similar to Search History.",
            "“Tendencies” split people up. 10 found it helpful, but 4 couldn't connect it to their purchases. So I kept the idea and explained it in plain words: patterns like what you tend to buy or how often."
        ],
    },
    {
        title: "User ID",
        apple_def: "Such as screen name, handle, account ID, assigned user ID, customer number, probabilistic identifier, or other user- or account-level ID that can be used to identify you or your account.",
        rewrite: "An ID that tells an app who you are as a user, like a handle or a customer number, or a profile built from your device and how you use the app. It can point to your account, or to the individual user when more than one person shares that account.",
        reason: [
            "Only 1 of 15 guessed User ID. 12 said the definition led them to “account ID” instead. That's because it mixes account-level and user-level IDs as if they're the same thing, and never says why there are two. So I split them: an ID can point to your account, or to you specifically when more than one person shares that account.",
            "“Probabilistic identifier” also confused 5 participants. I explained it in plain words: a profile built from your device and how you use the app.",
        ],
    },
    {
        title: "Analytics",
        apple_def: "Using data to evaluate your behavior, including to understand the effectiveness of existing product features, plan new features, or measure audience size or characteristics.",
        rewrite: "An analysis of how you use the app, like which features you use. These insights show patterns in how people use the app, guide what features get built next, and tell the app company how many people use the app and what those users are like.",
        reason: [
            "No one guessed Analytics, and 5 people guessed “cookies” instead. Part of the problem is that Analytics isn't like the other terms. The others describe what data is collected. Analytics describes why it's collected. So I opened with what it actually is: an analysis of how you use the app.",
            "“Measure audience size or characteristics” confused 3 participants. I rewrote it as how many people use the app and what those users are like.",
        ],
    },
]

function Design() {
    return (
        <section id='03_design'>
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="Phase 3" title="Design"/>
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <DarkHeader
                        header="The Rewrites"
                        title="7 definitions, rewritten from what participants told us"
                        texts={[
                            "Our study was exploratory, so it ended with findings, not design changes. Later, on my own, I rewrote all 7 definitions from the first part of the study as I wanted to fix what confused people in our interviews."
                        ]}
                    />

                    {design_defs.map((defs, i) => (
                        <div key={i} className={`grid grid-cols-[1fr_2fr_2fr] px-6 lg:px-12 gap-2 lg:gap-6 ${i < design_defs.length - 1 ? "border-b-[0.5px] border-b-slate-dark pb-4 lg:pb-8" : ""}`}>
                            <div className="flex flex-col row-span-2 gap-2">
                                <p className="text-wine-accent med-text-14 font-mono">{String(i + 1).padStart(2, '0')}</p>
                                <p className="text-forest-dark font-bold med-text-18">{defs.title}</p>
                            </div>
                            <div className="bg-sage-light rounded-2xl p-5 flex flex-col gap-4">
                                <p className="text-wine-accent text-12 font-mono uppercase">Apple's definition</p>
                                <p className="text-slate-dark med-text-16">{defs.apple_def}</p>
                            </div>
                            <div className="bg-sage-light rounded-2xl p-5 flex flex-col gap-4">
                                <p className="text-wine-accent text-12 font-mono uppercase">My Rewrite</p>
                                <p className="text-slate-dark med-text-16">{defs.rewrite}</p>
                            </div>
                            <div className="col-span-2 flex flex-col gap-2">
                                <p className="text-wine-accent text-12 font-mono uppercase">What I changed and why</p>
                                {defs.reason.map((r, j) => (
                                    <p key={"reason" + i + "_" + j} className="text-slate-dark med-text-16">{r}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Design