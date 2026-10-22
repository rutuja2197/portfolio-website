import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

function RouteChange() {
    const { pathname, hash } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (hash) {
            const elem = document.getElementById(hash.slice(1))
            if (elem) elem.scrollIntoView()
            else navigate("/not-found", {replace: true})
            return
        }

        window.scrollTo(0, 0)
        document.querySelector<HTMLElement>('h1')?.focus
    }, [pathname, hash])

    return null
}

export default RouteChange