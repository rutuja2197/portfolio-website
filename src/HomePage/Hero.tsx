function Hero() {
    return (
        <section id="home" aria-labelledby="hero-heading" className="bg-forest-light w-full">
            <div className="grid md:grid-cols-2 gap-4 grid-rows-1 global-side-padding items-center">
                {/* image section */}
                <div className="flex justify-center py-28 lg:py-page xl:py-37">
                    <div className="photo-offset aspect-square w-full max-w-75 rounded-3xl overflow-hidden">
                        <img 
                            src="/profile.webp"
                            alt="Portrait of Rutuja Deshpande"
                            width={300}
                            height={300}
                            className="h-full w-full object-cover scale-125"
                            decoding="sync"
                        />
                    </div>
                </div>

                {/* Name section */}
                <div className="px-4 flex flex-col gap-1">
                    <h1 id="hero-heading" className="text-forest-dark large-text-56 font-bold">
                        Rutuja Deshpande
                    </h1>
                    <p className="text-wine-accent font-mono med-text-18">User Researcher</p>
                    <p className="text-forest-dark med-text-22">Analytics consulting taught me how decisions get made. Research is how I make sure they get made well.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero