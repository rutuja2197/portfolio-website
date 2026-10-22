type SectionTitleProps = {
    phase: string,
    title: string,
}

function CaseSectionTitle({ phase, title }: SectionTitleProps) {
    return (
        <div className="flex flex-row border-b border-b-wine-accent items-baseline pb-6">
            <h3 className="text-wine-accent uppercase font-mono med-text-16">{phase}</h3>
            <h2 className="text-wine-accent px-2 med-text-28 font-semibold">{title}</h2>
        </div>
    )
}

export default CaseSectionTitle