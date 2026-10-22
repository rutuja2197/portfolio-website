type DarkHeaderProps = {
    header: string,
    title: string,
    texts: string[]
}

function DarkHeader({ header, title, texts }: DarkHeaderProps) {
    return (
        <div className="section-dark grid grid-cols-2 items-center p-6 lg:p-10 gap-8 lg:gap-12">
            <div className="flex flex-col gap-4 lg:gap-6">
                <p className="font-mono text-forest-light ned-text-16 uppercase">{header}</p>
                <p className="font-semibold med-text-28">{title}</p>
            </div>
            <div className="flex med-text-16 flex-col gap-3 lg:gap-6">
                {texts.map((text, i) => (
                    <p key={"header_text_" + i}>{text}</p>
                ))}
            </div>
        </div>
    )
}

export default DarkHeader