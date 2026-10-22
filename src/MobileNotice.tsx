import { useEffect, useRef } from "react"

const query = "(max-width: 48rem) and (pointer: coarse)"

function MobileNotice() {
    const dialog = useRef<HTMLDialogElement>(null)
    const accepted = useRef(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        const open = () => {
            if (media.matches && !accepted.current && !dialog.current?.open)
                dialog.current?.showModal()
        }
        open()
        media.addEventListener("change", open)
        return () => media.removeEventListener("change", open)
    }, [])

    return (
        <dialog ref={dialog} aria-labelledby="mobile-notice-heading" className="m-auto bg-forest-light max-w-85 rounded-2xl p-5 backdrop:bg-forest-gray/70 open:flex flex-col gap-4">
            <h2 id="mobile-notice-heading" className="font-mono uppercase text-wine-accent text-14">Heads Up!</h2>
            <p className="text-slate-dark text-16">I'm still polishing the mobile version. Everything works here, but it looks best on a laptop or tablet :)</p>
            <button type="button" onClick={() => {accepted.current = true; dialog.current?.close()}} className="cursor-pointer rounded-2xl w-full bg-forest-dark text-forest-light py-2 font-mono uppercase">
                Got It
            </button>
        </dialog>
    )
}

export default MobileNotice