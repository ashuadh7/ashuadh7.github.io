const Publications = () => {
    const highlightName = (authors: string) => {
        return authors.replace(/Adhikari, A\./g, "<b>Adhikari, A.</b>");
    };

    const peerReviewedJournals = [
        {
            title: "Leaning-based interfaces improve simultaneous locomotion and object interaction in VR compared to the handheld controller.",
            authors: "Hashemian, A.M., Adhikari, A., Aguilar, I.A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
            journal: "IEEE Transactions on Visualization and Computer Graphics, 30(8), 4665-4682 (2024).",
            link:"https://doi.org/10.1109/TVCG.2023.3275111",
        },
        {
            title: "Integrating continuous and teleporting VR locomotion into a seamless ‘hyperjump’ paradigm.",
            authors: "Adhikari, A., Zielasko, D., Aguilar, I., Bretin, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
            journal: "IEEE Transactions on Visualization and Computer Graphics, 29(12), 5265-5281 (2022).",
            link: "https://doi.org/10.1109/TVCG.2022.3207157",
        },
        {
            title: "Lean to fly: Leaning-based embodied flying can improve performance and user experience in 3D navigation.",
            authors: "Adhikari, A., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., von der Heyde, M., & Riecke, B.E.",
            journal: "Frontiers in Virtual Reality, 2, 730334 (2021).",
            link: "https://doi.org/10.3389/frvir.2021.730334",
        },
        {
            title: "Leaning-based interfaces improve ground-based VR locomotion in reach-the-target, follow-the-path, and racing tasks.",
            authors: "Hashemian, A.M., Adhikari, A., Kruij, E., von der Heyde, M., & Riecke, B.E.",
            journal: "IEEE Transactions on Visualization and Computer Graphics, 29(3), 1748-1768 (2021).",
            link: "https://doi.org/10.1109/TVCG.2021.3131422",
        },
        {
            title: "HeadJoystick: Improving flying in VR using a novel leaning-based interface.",
            authors: "Hashemian, A.M., Lotfaliei, M., Adhikari, A., Kruij, E., & Riecke, B.E.",
            journal: "IEEE Transactions on Visualization and Computer Graphics, 28(4), 1792-1809 (2020).",
            link: "https://doi.org/10.1109/TVCG.2020.3025084",
        }
    ];

    const otherPublications = [
        {
            title: "'I Call Upon a Friend': Virtual Reality-Based Supports for Cognitive Reappraisal Identified through Co-designing with Adolescents.",
            authors: "Kitson, A., Antle, A.N., Kenny, S., Adhikari, A., Karthik, K., Cimensel, A., & Chan, M.",
            journal: "Proceedings of CHI 2024, ACM, Article 691, 1–18.",
            link: "https://doi.org/10.1145/3613904.3642723",
        },
        {
            title: "Awedyssey: Design tensions in eliciting self-transcendent emotions in virtual reality to support mental well-being and connection.",
            authors: "Miller, N., Stepanova, E.R., Desnoyers-Stewart, J., Adhikari, A., Kitson, A., et al.",
            journal: "Proceedings of the 2023 ACM Designing Interactive Systems Conference, 189-211.",
            link: "https://doi.org/10.1145/3563657.3595998",
        },
        {
            title: "FeetBack: Augmenting robotic telepresence with haptic feedback on the feet.",
            authors: "Jones, B., Maiero, J., Mogharrab, A., Aguilar, I.A., Adhikari, A., Riecke, B.E., Kruij, E., Neustaedter, C., & Lindeman, R.W.",
            journal: "Proceedings of ICMI 2020, 194–203.",
            link:"https://doi.org/10.1145/3382507.3418820",
        }
    ];

    const presentations = [
        {
            title: "Awedyssey [Curated Mixed Reality Exhibition].",
            authors: "Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., Adhikari, A., Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.",
            event: "Cosmic Nights: Humans in Space, H.R. MacMillan Space Centre, November 23, 2023.",
            link: "https://events.sfu.ca/event/37966-cosmic-nights-humans-in-space"
        },
        {
            title: "HyperJumping in Virtual Vancouver: Combating motion sickness by merging teleporting and continuous VR locomotion in an embodied hands-free VR flying paradigm.",
            authors: "Riecke, B. E., Clement, D., Adhikari, A., Quesnel, D., Zielasko, D., & von der Heyde, M.",
            journal: "ACM SIGGRAPH 2022 Immersive Pavilion (pp. 1-2).",
            link: "https://doi.org/10.1145/3532834.3536211"
        },
        {
            title: "Embodied VR flying improves spatial orientation while reducing cybersickness.",
            authors: "Adhikari, A., Riecke, B.E., Hashemian, A.M., Nguyen-Vo, T., Kruij, E., & von der Heyde, M.",
            event: "Talk presented at ICSC 2021, Rome, Italy.",
            link: "https://www.youtube.com/watch?v=FbmE4SEISWU",
        },
        {
            title: "HyperJump: Merging Teleporting and Continuous VR Locomotion into One Paradigm.",
            authors: "Riecke, B.E., Adhikari, A., Zielasko, D., Bretin, A., von der Heyde, M., and Kruij, E.",
            event: "Talk presented at ICSC 2021, Rome, Italy.",
            link: "https://www.youtube.com/watch?v=hRqkqup40bI",
        },
        {
            title: "Integrating Continuous and Teleporting VR Locomotion into a Seamless 'HyperJump' Paradigm.",
            authors: "Adhikari, A., Zielasko, D., Bretin, A., von der Heyde, M., Kruij, E., & Riecke, B.E.",
            event: "IEEE VR 2021 Workshop, 370–372.",
            link: "https://doi.org/10.1109/VRW52623.2021.00074",
        },
        {
            title: "Simultaneous Locomotion and Interaction in VR: Walking > Leaning > Controller.",
            authors: "Riecke, B.E., Hashemian, A.M., Adhikari, A., Aguilar, I., Kruijff, E., & von der Heyde, M.",
            event: "ICSC 2021: 8th International Conference on Spatial Cognition, Rome, Italy.",
            link: "https://www.youtube.com/watch?v=jzoaBAd6gPY"
        },
        {
            title: "SIRIUS [Curated & peer-reviewed Virtual Reality Exhibition]",
            authors: "Miller, N., Desnoyers-Stewart, J., Stepanova, E. R., Adhikari, A., Riecke, B. E., Pennefather, P. P., Kitson, A., & Quesnel, D.",
            event: "V-Unframed 2021, Vancouver, Canada.",
            link: "https://www.alliancefrancaise.ca/v-unframed/en/the-artworks-2021/sirius/",
        }
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications & Presentations</h2>

            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Peer-Reviewed Journals</h3>
            <ul className="space-y-4 mb-6">
                {peerReviewedJournals.map((pub, index) => (
                    <li key={index} className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold">{pub.title}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: highlightName(pub.authors) }}></p>
                        <p className="text-gray-500">{pub.journal}</p>
                        {pub.link && (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Publication
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Other Peer-Reviewed Publications</h3>
            <ul className="space-y-4 mb-6">
                {otherPublications.map((pub, index) => (
                    <li key={index} className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold">{pub.title}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: highlightName(pub.authors) }}></p>
                        <p className="text-gray-500">{pub.journal}</p>
                        {pub.link && (
                            <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Publication
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Exhibitions, Presentations, and Posters</h3>
            <ul className="space-y-4">
                {presentations.map((pres, index) => (
                    <li key={index} className="border-l-4 border-gray-400 pl-4">
                        <h4 className="font-semibold">{pres.title}</h4>
                        <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: highlightName(pres.authors) }}></p>
                        <p className="text-gray-500">{pres.event}</p>
                        {pres.link && (
                            <a href={pres.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {pres.link.includes("youtube.com") ? "Watch Presentation" :
                                    pres.link.includes("doi.org") ? "View Abstract" :
                                        "More Details"}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;