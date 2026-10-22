import { Link } from "react-router"

function NotFound() {
    return(
        <section id="404" className="bg-forest-light flex flex-1 items-center ">
            <div className="global-side-padding flex gap-9 flex-col justify-between">
                <p className="font-mono text-wine-accent uppercase med-text-16">Error 404</p>
                <h1 className="large-text-56 font-bold text-forest-dark">Hmm, nothing here :(</h1>
                <p className="text-slate-dark med-text-22 w-xl">The page you're trying to look up doesn't exist or has moved. Lets get you back on track.</p>
                <div className="flex gap-6">
                    <Link to={"/"} className="font-mono uppercase section-dark w-fit p-5 rounded-2xl hover:bg-slate-dark">Go To Homepage</Link>
                    <Link to={"/#work"} className="font-mono uppercase w-fit border rounded-2xl p-5 hover:bg-sage-light">See my work</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound