import { EMAIL, LINKEDIN, RESUME_URL } from './links'

function Footer() {
    return (
        <footer className="section-dark">
            <div 
                className="grid grid-flow-row grid-rows-3 grid-cols-2 global-side-padding py-5 lg:py-6.5 xl:py-7.5  w-full items-center"
            >
                <p className="font-bold col-span-2 med-text-18 ">Let's Connect!</p>
                <div className="flex justify-between col-span-2 mb-8">
                    <a href={ EMAIL } className="font-mono med-text-16 underline uppercase hover:font-bold">{EMAIL.replace('mailto:', '')}<span className='sr-only'> (Email, opens in a new tab)</span></a>
                    <ul className='grid grid-flow-col gap-x-8 grid-cols-2 font-mono med-text-14'>
                        <li className='hover:font-bold'><a href={ LINKEDIN } target="_blank" rel="noopener noreferrer">LinkedIn<span className='sr-only'> (URL, opens in a new tab)</span></a></li>
                        <li className='hover:font-bold'><a href={ RESUME_URL } target="_blank" rel="noopener noreferrer">Resume<span className='sr-only'> (PDF, opens in a new tab)</span></a></li>
                    </ul>
                </div>
                <div className='py-4 col-span-2 border-t border-t-sage-medium text-white med-text-14'>
                    <p>&copy; 2026 Rutuja Deshpande</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer