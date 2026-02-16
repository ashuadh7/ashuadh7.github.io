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
    id: 'vr-chronic-pain',
    path: '/projects/vr-chronic-pain',
    title: 'VR vs Chronic Pain',
    shortDescription: 'Using virtual reality as a therapeutic tool for managing chronic pain through immersive distraction therapy.',
    image: '/projects/vr-chronic-pain/thumbnail.jpg',
    tags: ['VR', 'Healthcare', 'Pain Management'],
    year: '2023',
    fullDescription: 'A therapeutic VR application designed to help patients manage chronic pain through immersive nature environments and guided mindfulness exercises. The project explores how presence and immersion can affect pain perception.',
    objective: 'To develop and evaluate a VR-based intervention for chronic pain management that can be used as a complementary therapy.',
    methodology: [
      'Collaborated with pain management specialists and psychologists',
      'Designed calming nature environments based on therapeutic principles',
      'Integrated guided breathing exercises and mindfulness practices',
      'Conducted clinical trials with 45 chronic pain patients over 8 weeks'
    ],
    results: [
      'Patients reported 28% reduction in pain intensity during VR sessions',
      'Improved mood and reduced anxiety in 82% of participants',
      'Effects persisted for 2-3 hours after VR session completion',
      'Positive feedback from both patients and healthcare providers'
    ],
    technologies: ['Unity', 'Biofeedback Sensors', 'Meta Quest 2', 'Spatial Audio']
  },
  {
    id: 'feel-beat-vr',
    path: '/projects/feel-the-beat',
    title: 'Feel the Beat in VR',
    shortDescription: 'A rhythm-based VR experience that combines music visualization with full-body interaction.',
    image: '/projects/feel-the-beat/thumbnail.jpg',
    tags: ['VR', 'Music', 'Audio-Visual', 'Gaming'],
    year: '2023',
    fullDescription: 'An immersive rhythm game where players interact with music through physical movements in VR. The project investigates how multi-sensory feedback enhances rhythm perception and musical engagement.',
    objective: 'To explore the potential of VR for creating more engaging and physically active musical experiences.',
    methodology: [
      'Developed real-time audio analysis system for music visualization',
      'Created procedural animation systems responding to musical features',
      'Implemented full-body tracking for natural movement interaction',
      'Tested with 50 participants of varying musical backgrounds'
    ],
    results: [
      'Participants showed improved rhythm accuracy compared to traditional games',
      'High engagement and motivation for repeated play sessions',
      'Physical activity levels comparable to moderate exercise',
      'Musicians and non-musicians equally enjoyed the experience'
    ],
    technologies: ['Unity', 'FMOD', 'Full-Body Tracking', 'Particle Systems', 'Valve Index']
  },
  {
    id: 'master-emotions-vr',
    path: '/projects/master-your-emotions',
    title: 'Master Your Emotions in VR',
    shortDescription: 'A VR application for emotional regulation training using biofeedback and guided scenarios.',
    image: '/projects/master-your-emotions/thumbnail.jpg',
    tags: ['VR', 'Mental Health', 'Biofeedback', 'Training'],
    year: '2022',
    fullDescription: 'A therapeutic VR system that teaches emotional regulation skills through interactive scenarios with real-time biofeedback. The application adapts to users\' physiological responses and guides them through evidence-based techniques.',
    objective: 'To create an accessible, engaging platform for learning and practicing emotional regulation strategies.',
    methodology: [
      'Integrated heart rate and galvanic skin response sensors',
      'Designed progressive difficulty scenarios triggering different emotions',
      'Implemented adaptive feedback based on physiological data',
      'Validated with clinical psychologists and 60 test users'
    ],
    results: [
      'Users demonstrated improved emotional awareness after 4 weeks',
      'Self-reported stress levels decreased by 32%',
      'Skills transfer observed in daily life situations',
      'Promising results for anxiety and stress management applications'
    ],
    technologies: ['Unity', 'Heart Rate Monitors', 'GSR Sensors', 'C#', 'Meta Quest 2']
  },
  {
    id: 'project-playground',
    path: '/projects/project-playground',
    title: 'Project Playground',
    shortDescription: 'An experimental sandbox for prototyping and testing new HCI concepts rapidly.',
    image: '/projects/project-playground/thumbnail.jpg',
    tags: ['Prototyping', 'HCI', 'Experimental', 'Research'],
    year: '2022-Present',
    fullDescription: 'A flexible development environment and methodology for rapid prototyping of HCI concepts. This meta-project serves as an incubator for new ideas and a platform for quick experimentation.',
    objective: 'To establish an efficient workflow for exploring and validating novel HCI concepts before committing to full-scale development.',
    methodology: [
      'Created modular framework supporting multiple interaction modalities',
      'Established rapid prototyping process from concept to testable demo',
      'Built library of reusable components and interaction patterns',
      'Conducted quick validation studies with small user groups'
    ],
    results: [
      'Reduced prototyping time from weeks to days',
      'Generated over 20 concept prototypes in one year',
      '5 concepts advanced to full research projects',
      'Framework adopted by other lab members'
    ],
    technologies: ['Unity', 'React', 'Node.js', 'WebXR', 'Various Sensors']
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export const projectPathById: Record<string, string> = Object.fromEntries(
  projects.map((project) => [project.id, project.path]),
);
