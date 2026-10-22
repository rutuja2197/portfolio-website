
type TableProps = {
    role: string,
    team: string,
    timeline: string,
    method: string,
    outcome: string
}

function CaseTable( props: TableProps ) {
    return (
        <table className="table-auto border-collapse">
            <tbody>
                <tr className=" border-y border-y-forest-gray">
                    <td className="med-text-14 font-mono uppercase text-wine-accent pr-4 lg:pr-8">Role</td>
                    <td className="med-text-16 text-forest-dark py-2 lg:py-4">{props.role}</td>
                </tr>
                <tr className=" border-y border-y-forest-gray">
                    <td className="med-text-14 font-mono uppercase text-wine-accent pr-4 lg:pr-8">Team</td>
                    <td className="med-text-16 text-forest-dark py-2 lg:py-4">{props.team}</td>
                </tr>
                <tr className=" border-y border-y-forest-gray">
                    <td className="med-text-14 font-mono uppercase text-wine-accent pr-4 lg:pr-8">Timeline</td>
                    <td className="med-text-16 text-forest-dark py-2 lg:py-4">{props.timeline}</td>
                </tr>
                <tr className=" border-y border-y-forest-gray">
                    <td className="med-text-14 font-mono uppercase text-wine-accent pr-4 lg:pr-8">Method</td>
                    <td className="med-text-16 text-forest-dark py-2 lg:py-4">{props.method}</td>
                </tr>
                <tr className=" border-y border-y-forest-gray">
                    <td className="med-text-14 font-mono uppercase text-wine-accent pr-4 lg:pr-8">Outcome</td>
                    <td className="med-text-16 text-forest-dark py-2 lg:py-4">{props.outcome}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CaseTable