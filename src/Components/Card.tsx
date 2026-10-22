import { Link } from "react-router"

type CardProps = {
    href: string
    tags: string[]
    title: string
    quote: string[]
    participant: string
    summary: string
    capacity: string
}

function Card({ href, quote, participant, title, summary, capacity, tags }: CardProps) {
    return(
        <article className="card-lift w-full bg-sage-light surface-card relative rounded-3xl md:row-span-2 md:grid md:grid-rows-subgrid">
            <figure className="text-forest-dark px-8 pt-9">
                {/* TODO: Reduce height */}
                <blockquote>
                    <p  className="med-text-28">
                        <span key={quote[0]} className="block">&ldquo;{quote[0]}</span>
                        <span key={quote[1]} className="block">{quote[1]}</span>
                        <span key={quote[2]} className="block font-bold">{quote[2]}&rdquo;</span>
                    </p>
                </blockquote>
                <figcaption className="font-mono text-wine-accent med-text-16 pt-4 md:pt-8 lg:pt-12 uppercase">&mdash; {participant}</figcaption>
            </figure>

            <div className="flex flex-col py-6 bg-white px-8 rounded-b-3xl">
                <h4 className="py-2 med-text-22 font-semibold">
                    <Link to={href} className="after:absolute after:inset-0 focus-visible:outline-none">
                        {title}
                    </Link>
                </h4>
                <p className="text-slate-dark pb-6 med-text-18">{summary}</p>
                <div className="border-t border-t-sage-medium pt-6 text-forest-gray font-mono med-text-14">
                    <p>{capacity}</p>
                    <ul className="flex flex-wrap pt-2">
                        {tags.map((tag, i) => (
                            <li key={tag}>
                                {i > 0 && <span aria-hidden="true" className="mx-2">&middot;</span>}
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Card