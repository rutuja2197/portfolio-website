import { Link } from "react-router"
import CaseSectionTitle from "./CaseSectionTitle"
type ReflectionProps = {
    study: string,
    page_bg: string,
    r_show: string[],
    r_claim: string[],
    diff: {
            topic: string,
            reason: string,
    }[],
    thinking: {
            title: string,
            thought: string[],
    }[],
    final_st: string
}
function Reflections(props: ReflectionProps) {
    return (
        <section id='reflections' className={props.page_bg}>
            <div className="global-side-padding py-20">
                <CaseSectionTitle phase="" title="Reflections and Takeaways"/>
                <div className="flex flex-col gap-4 lg:gap-8 pt-4 lg:pt-8">
                    <div className="flex flex-col">
                        <p className="text-wine-accent med-text-16 font-mono uppercase">The Results</p>
                        <p className="text-forest-dark med-text-28 font-semibold">What the results show, and what they don't</p>
                        <div className="grid grid-cols-2 gap-6 py-6">
                            <div className="bg-sage-light rounded-xl flex flex-col gap-4 p-5">
                                <p className="text-forest-gray text-12 font-mono uppercase">What the results show</p>
                                {props.r_show.map((statement, i) => (
                                    <p key={props.study + '_results_show_' + i} className="med-text-16 text-slate-dark">{statement}</p>
                                ))}
                            </div>
                            <div className="bg-forest-dark text-forest-light rounded-xl flex flex-col gap-4 p-5">
                                <p className="text-12 font-mono uppercase">What I can claim</p>
                                {props.r_claim.map((claim, i) => (
                                    <p key={props.study + '_claim_' + i} className="med-text-16">{claim}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-wine-accent med-text-16 font-mono uppercase">Looking Back</p>
                        <p className="text-forest-dark med-text-28 font-semibold">What I'd do differently</p>
                        <div className="flex bg-white flex-col border-[0.5px] justify-start border-slate-dark rounded-2xl px-12 py-6 my-6">

                            {props.diff.map((item, i) => (
                                <div key={props.study + "_diff_" + i} className={`grid grid-cols-[minmax(0,2.5rem)_2fr_10fr] gap-6 p-4 items-start ${i > 0 ? "border-t-[0.5px] border-t-slate-dark" : ""}`}>
                                    <p className="text-wine-accent text-12 font-mono uppercase px-2 ">{String(i + 1).padStart(2, '0')}</p>
                                    <p className="text-slate-dark text-12 font-mono uppercase">{item.topic}</p>
                                    <p className="text-slate-dark med-text-16">{item.reason}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-wine-accent med-text-16 font-mono uppercase">Still Open</p>
                        <p className="text-forest-dark med-text-28 font-semibold">What I keep thinking about</p>
                        <div className="grid grid-cols-2 gap-6 rounded-2xl py-6">
                            {props.thinking.map((thoughts, i) => (

                                <div key={props.study + "_thoughts_" + i} className="flex flex-col gap-4 p-5 bg-sage-light rounded-xl">
                                    <p className="text-forest-gray text-12 font-mono uppercase">{thoughts.title}</p>
                                    {thoughts.thought.map((body, k) => (
                                        <p key={props.study + '_thoughts_body_' + k} className="text-slate-dark med-text-16">{body}</p>
                                    ))}
                                </div>
                            ))}
                            <div className="col-span-2 section-dark p-6 lg:p-12">
                                <p className="med-text-24 font-semibold">{props.final_st}</p>
                            </div>
                        </div>
                    </div>
                    <Link to={"/#work"} className="font-mono uppercase w-fit border rounded-2xl py-2 px-4 hover:bg-sage-light">Back to home</Link>
                </div>
            </div>
        </section>
    )
}

export default Reflections