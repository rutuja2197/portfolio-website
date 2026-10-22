const tools = ["Qualtrics", "Miro", "Figma", "Claude Design", "Google Workspace", "Prolific"]
const learning = ["A/B Testing", "UX Metrics", "Tree Testing"]
const buckets = [
    {
        header: "User Research",
        skills: [
            "Study planning and discussion guides",
            "Participant recruitment and screening",
            "Semi-structured interviews",
            "Customer observation and feedback",
            "Inductive coding and thematic analysis",
            "Affinity mapping",
            "Findings to product recommendations",
        ],
        used: "Carnegie Mellon Apple study, Privoce Freelancer study, Envirofoods"
    },
    {
        header: "Surveys and Evaluation",
        skills: [
            "Survey design",
            "Comprehension tasks",
            "Usability testing",
            "Preference testing",
            "Rewriting content based on findings",
            "Survey analysis",
        ],
        used: "Carnegie Mellon Apple study, Carnegie Mellon course projects"
    },
    {
        header: "Data Analytics",
        skills: [
            "Statistical analysis",
            "Segmentation",
            "SQL, Python, and R",
            "Excel, Tableau, and Power BI",
            "Presenting findings to stakeholders"
        ],
        used: "ZS Associates, Envirofoods, Carnegie Mellon capstone"
    },
    {
        header: "Working with AI",
        skills: [
            "AI-assisted synthesis",
            "AI-assisted affinity mapping",
            "Checking AI output against transcripts",
            "Prompt design for large-scale data classification",
        ],
        used: "Carnegie Mellon capstone, Privoce Freelancer study"
    },
]

function Skills() {
    return (
        <section id="skills" className="w-full section-dark">
            <div className="py-16 lg:py-20 global-side-padding">
                <h2 className="med-text-36 font-bold border-b border-b-sage-medium">Skills</h2>

                <div className="grid grid-cols-3">
                    <div className="row-span-2 flex flex-col gap-4 py-6">
                        <p className="font-mono med-text-14 uppercase text-sage-medium">Tools</p>
                        <ul className="marker:text-sage-medium list-disc med-text-16 list-inside">
                            {tools.map((tool) => (
                                <li className="p-2" key={tool}>{tool}</li>
                            ))}
                        </ul>
                        <p className="font-mono med-text-14 uppercase text-sage-medium pt-4">Currently Learning</p>
                        <ul className="marker:text-sage-medium list-disc med-text-16 list-inside">
                            {learning.map((item) => (
                                <li className="p-2" key={item}>{item}</li>
                            ))}
                        </ul>
                        <p className="font-mono text-sage-medium text-12">Through the Interaction Design Foundation Courses, 2026</p>
                    </div>

                    {buckets.map((bucket, i) => (
                        <div key={bucket.header} className={`flex flex-col gap-2 mx-8 ${i < 2 ? 'py-10 border-b border-b-sage-medium' : 'pt-10'}`}>
                            <p className="med-text-18">{bucket.header}</p>
                            <ul className="marker:text-sage-medium med-text-16 list-disc list-inside">
                                {bucket.skills.map((skill) => (
                                    <li className="p-1" key={skill}>{skill}</li>
                                ))}
                            </ul>
                            <p className="mt-2 font-mono text-sage-medium med-text-12 uppercase">Used in</p>
                            <p className="med-text-14">{bucket.used}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills