type ResearchQProps = {
    questions: string[]
}

function ResearchQ({ questions }: ResearchQProps) {
    return(
        <div className="flex flex-col bg-white rounded-2xl p-2.5">
            <div className="flex flex-row px-5 pt-5 items-center gap-4">
                <span aria-hidden className="bg-wine-accent w-2 h-2"/>
                <p className="font-mono text-wine-accent uppercase text-12">Research Questions</p>
            </div>

            <div>   
                {questions.map((ques, i) => (
                    <div key={"ques"+i}className={`flex flex-row items-start p-4 gap-4 ${i != questions.length - 1 ? "border-b border-b-forest-gray" : ""}`}>
                        <p className="font-mono px-2 lg:px-5 text-12">{String(i + 1).padStart(2, '0')}</p>
                        <p className="text-slate-dark med-text-16">{ques}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResearchQ