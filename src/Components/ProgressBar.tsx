type BarProps = {
    title: string,
    value: number,
    total: number,
}

function ProgressBar({ title, value, total } : BarProps) {
    const percent = total > 0 ? Math.round((value / total) * 100) : 0
    
    return (
        <div className="flex flex-row gap-6 lg:gap-12 w-full px-8 md:px-12 lg:px-16 items-center">
            <p className="text-forest-dark font-bold med-text-16 w-1/9">{title}</p>
            <div aria-hidden="true" className="relative h-6 lg:h-8 w-2/3 max-w-2/3">{/* bar height: from Figma */}
                <div className="h-full rounded-lg bg-forest-light overflow-hidden">
                    <div className="h-full rounded-lg bg-forest-dark" style={{ width: `${percent}%` }} />
                </div>
                {/* Halfway mark */}
                <span className="absolute left-1/2 -translate-x-1/2 -top-1 -bottom-1 w-0.5 bg-wine-accent" />{/* mark size: from Figma */}
            </div>
            <div className="flex flex-col">
                <p className="text-forest-dark med-text-16 font-bold">{percent}%</p>
                <p className="text-forest-gray med-text-14 font-bold">({value} of {total})</p>
            </div>
        </div>
    )
}

export default ProgressBar