export interface Project {
  id: string;
  path: string;
  title: string;
  shortDescription: string;
  image: string;
  tags: string[];
  year: string;
  fullDescription: string;
  objective: string;
  methodology: string[];
  results: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'exploring-endless-worlds-vr',
    path: '/projects/exploring-endless-worlds',
    title: 'Exploring Endless Worlds in VR',
    shortDescription: 'Embodied VR locomotion research (2018-2024): Leaning-based Interaction and HyperJump.',
    image: '/projects/exploring-endless-worlds/thumbnail.jpg',
    tags: ['VR Locomotion', 'Embodied Interaction', 'HyperJump', 'Cybersickness'],
    year: '2018-2024',
    fullDescription: 'This project investigates two locomotion ideas: leaning-based embodied interaction and HyperJump, a hybrid locomotion technique that combines continuous movement with periodic jumps.',
    objective: 'To improve VR locomotion usability, reduce cybersickness, and support stronger spatial updating/orientation, especially for novice users.',
    methodology: [
      'Designed leaning-based interfaces that use upper-body movement for navigation',
      'Compared leaning-based and controller-based locomotion in controlled studies',
      'Evaluated usability, ease of use, precision, workload, cybersickness, and spatial updating',
      'Developed and tested HyperJump as a hybrid continuous/discrete locomotion approach'
    ],
    results: [
      'Leaning-based interaction improved usability and engagement for many users',
      'Embodied controls supported better comfort and orientation for novice participants',
      'HyperJump enabled faster travel while preserving route following and spatial knowledge',
      'The work produced multiple journal papers, talks, and workshop outputs'
    ],
    technologies: ['Unity', 'C#', 'SteamVR', 'User Studies', 'Embodied Interaction Design']
  },
  {
    id: 'vr-beyond-ordinary',
    path: '/projects/vr-beyond-ordinary',
    title: 'VR Beyond the Ordinary',
    shortDescription: 'Awedyssey: designing transformative VR experiences that support well-being, awe, and connection.',
    image: '/projects/vr-beyond-ordinary/thumbnail.jpg',
    tags: ['VR', 'Mental Well-being', 'Self-Transcendence', 'Awe', 'Space Analog'],
    year: '2021-2023',
    fullDescription: 'Awedyssey explores how VR can elicit self-transcendent emotions such as awe to support mental well-being and connection. The project was developed through a space-analog isolation context and later deployed in public exhibitions.',
    objective: 'To design and evaluate transformative VR experiences that promote relaxation, reflection, and connection in contexts where isolation and sensory monotony are major stressors.',
    methodology: [
      'Grounded design in self-transcendent emotion theory and transformative experience design',
      'Developed and iterated Awedyssey as a VR experience inspired by nature, awe, and the overview effect',
      'Deployed in the SIRIUS long-duration isolation study and curated public exhibition settings',
      'Synthesized cross-context insights around realism, autonomy, vastness, comfort, and user diversity'
    ],
    results: [
      'Produced the DIS 2023 paper on design tensions in eliciting self-transcendent emotions in VR',
      'Exhibited Awedyssey in curated mixed reality and virtual reality exhibition programs',
      'Showed how VR can support feelings of connection to self, humanity, nature, and Earth',
      'Generated practical design guidance for emotionally meaningful VR experiences in high-isolation contexts'
    ],
    technologies: ['Unity', 'VR Experience Design', 'Qualitative Research', 'Exhibition Deployment', 'Space Psychology Context']
  },
  {
    id: 'master-emotions-vr',
    path: '/projects/master-your-emotions',
    title: 'Master Your Emotions in VR',
    shortDescription: 'Two linked studies on emotion regulation in VR for teens and young adults: co-design workshops and VRChat go-along interviews.',
    image: '/projects/master-your-emotions/thumbnail.jpg',
    tags: ['VR', 'Emotion Regulation', 'Adolescents', 'Young Adults', 'Participatory Design'],
    year: '2024-2026',
    fullDescription: 'This project investigates how immersive and social VR can support emotion regulation for teens and young adults. It combines participatory co-design with adolescents and in-situ VRChat research with youth users.',
    objective: 'To identify youth-centered design opportunities for VR-based emotion regulation supports that are practical, safe, and relevant to everyday social contexts.',
    methodology: [
      'Ran three in-person co-design workshops with high-school students (N=69, ages 15-18) across two schools with different socioeconomic contexts',
      'Used workshop activities to explore cognitive reappraisal challenges and generate design ideas for VR supports',
      'Conducted an online survey (N=64) and follow-up go-along interviews in VRChat (N=21) with youth ages 13-24',
      'Analyzed strategies, platform features, and interaction patterns that support or hinder adaptive emotion regulation'
    ],
    results: [
      'Mapped how teens and young adults currently use social VR spaces to regulate emotions',
      'Identified concrete design opportunities for future VR interventions focused on cognitive reappraisal and social support',
      'Produced a CHI 2024 publication from the co-design workshop study',
      'Prepared a DIS 2026 submission from the VRChat go-along interview study'
    ],
    technologies: ['VRChat', 'Meta Quest 2', 'Participatory Co-design', 'Go-Along Interviews', 'Qualitative Analysis']
  },
  {
    id: 'vr-chronic-pain',
    path: '/projects/vr-chronic-pain',
    title: 'VR vs Chronic Pain',
    shortDescription: 'Collaborated with SFU Pain Studies Lab to modernize a mindfulness-based VR intervention for chronic pain.',
    image: '/projects/vr-chronic-pain/thumbnail.jpg',
    tags: ['VR', 'Pain Management', 'Mindfulness', 'Biofeedback'],
    year: '2022',
    fullDescription: 'At SFU\'s Pain Studies Lab (directed by Dr. Diane Gromala), I contributed to the Virtual Meditative Walk project by updating its mindfulness VR experience, modernizing the technical stack, and improving deployment practicality for research use.',
    objective: 'To modernize and extend an evidence-informed VR mindfulness intervention for chronic pain while reducing technical setup barriers in clinical research workflows.',
    methodology: [
      'Updated the VR application to newer Unity and headset/device versions used by the lab',
      'Maintained the rail-based forest mindfulness experience with guided audio meditation content',
      'Created multiple experience variations to reduce repetition across sessions',
      'Integrated Moodmetric ring data capture over Bluetooth as a lower-cost biofeedback workflow'
    ],
    results: [
      'Preserved the core therapeutic flow of the Virtual Meditative Walk while improving system maintainability',
      'Enabled greater session variability without changing the intervention intent',
      'Replaced an expensive GSR setup with a more accessible wearable pathway',
      'Reduced participant startup friction through automated device connection and data retrieval'
    ],
    technologies: ['Unity', 'Bluetooth Integration', 'Moodmetric Ring (now Nuanic)', 'Biofeedback', 'Spatial Audio']
  },
  {
    id: 'feel-beat-vr',
    path: '/projects/feel-the-beat',
    title: 'Feel the Beat in VR',
    shortDescription: 'NDA-constrained R&D consulting for embodied interfaces that map VR object dynamics to generative music.',
    image: '/projects/feel-the-beat/thumbnail.jpg',
    tags: ['VR', 'Generative Music', 'Embodied Interaction', 'Consulting'],
    year: '2020-2025',
    fullDescription: 'As a software consultant with Infusions Systems Ltd., I explored embodied VR interfaces for generative music under NDA constraints, focusing on quantifying virtual object behavior as music control signals.',
    objective: 'To test whether performative body movement and object interaction in VR can be converted into robust numeric features for generative music control.',
    methodology: [
      'Prototyped object-interaction experiments around particles, flexible materials, and soft-body behavior',
      'Derived numeric descriptors from object properties such as spread, reflection, bend, twist, and orientation',
      'Evaluated candidate mappings from interaction features to musical control parameters',
      'Iterated in rapid R&D cycles to compare expressiveness and controllability of each approach'
    ],
    results: [
      'Established multiple proof-of-concept pipelines for quantifying embodied VR interactions',
      'Identified promising feature sets for expressive generative music mapping',
      'Produced NDA-safe demo artifacts that capture core technical directions',
      'Generated implementation insights for future interactive music tooling in immersive media'
    ],
    technologies: ['Unity', 'C#', 'Generative Music Prototyping', 'Particle Systems', 'Soft-Body Simulation', 'Feature Extraction']
  },
  {
    id: 'project-playground',
    path: '/projects/project-playground',
    title: 'Project Playground',
    shortDescription: 'Ongoing and ideation-stage collaborations across XR theatre and human-AI interface research.',
    image: '/projects/project-playground/thumbnail.jpg',
    tags: ['Ongoing Work', 'Ideation', 'XR', 'Human-AI Interaction'],
    year: '2022-Present',
    fullDescription: 'Project Playground captures active collaborations that are still in exploration mode. It is used to test high-risk ideas quickly, validate technical feasibility, and refine research directions before full publication-ready project framing.',
    objective: 'To run fast, evidence-oriented experiments for ongoing collaborations while keeping scope and disclosure appropriate for active and partially constrained projects.',
    methodology: [
      'Frame each collaboration as a compact set of technical/design questions',
      'Prototype candidate interaction models and instrumentation pipelines rapidly',
      'Collect early feasibility signals to select or discard directions',
      'Promote successful tracks into dedicated projects with fuller documentation'
    ],
    results: [
      'Supports active tracks in XR theatre production and AI-assisted design/coding research',
      'Provides NDA-safe and early-stage documentation for in-progress collaborations',
      'Accelerates transition from ideation to concrete research plans',
      'Improves cross-disciplinary coordination with arts, HCI, and software engineering partners'
    ],
    technologies: ['Unity', 'XR Prototyping', 'Figma Make', 'LLM-Assisted Design', 'Human-AI Interface Design']
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export const projectPathById: Record<string, string> = Object.fromEntries(
  projects.map((project) => [project.id, project.path]),
);
