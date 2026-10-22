const images = [
    "/profile.webp",
    "/about_mesh.svg",
    "/painting.webp",
    "/skydiving.webp",
    "/bald_eagle.webp",
    "/apple_screen.webp",
    "/vocespace.webp",
    "/vocespace_screen.webp",
    "/VS_Synthesize.webp"
]

export function prefetchImages() {
    images.forEach((src) => {
        const img = new Image()
        img.src = src
    })
}
