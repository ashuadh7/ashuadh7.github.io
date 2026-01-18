export interface Project {
  id: string;
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
    title: 'Exploring Endless Worlds in VR',
    shortDescription: 'An immersive VR experience that generates infinite procedural worlds for exploration and discovery.',
    image: './projects/exploring-endless-worlds/thumbnail.jpg',
    tags: ['VR', 'Procedural Generation', 'Unity'],
    year: '2024',
    fullDescription: 'This project explores how procedural generation can create infinite, unique virtual environments that users can explore in VR. The system generates diverse landscapes, ecosystems, and points of interest on-the-fly, creating a sense of endless discovery.',
    objective: 'To investigate how procedural content generation affects user engagement and sense of presence in virtual reality environments.',
    methodology: [
      'Developed a procedural generation algorithm for creating diverse terrains and biomes',
      'Implemented VR locomotion techniques optimized for long-distance exploration',
      'Conducted user studies with 30 participants to measure engagement and presence',
      'Analyzed qualitative feedback on the exploration experience'
    ],
    results: [
      'Users reported 40% higher engagement compared to pre-designed environments',
      'Presence scores increased significantly with procedural variety',
      'Participants explored an average of 2.5x more area than in control conditions',
      'Positive feedback on the sense of discovery and surprise'
    ],
    technologies: ['Unity', 'C#', 'SteamVR', 'Perlin Noise', 'Meta Quest 2']
  },
  {
    id: 'vr-beyond-ordinary',
    title: 'VR Beyond the Ordinary',
    shortDescription: 'Pushing the boundaries of what\'s possible in VR through experimental interaction techniques.',
    image: './projects/vr-beyond-ordinary/thumbnail.jpg',
    tags: ['VR', 'Experimental Design', 'Novel Interactions'],
    year: '2024',
    fullDescription: 'An experimental VR project that challenges conventional interaction paradigms by introducing novel mechanics based on gaze, gesture, and environmental manipulation. This project serves as a testbed for innovative VR interaction concepts.',
    objective: 'To explore and evaluate unconventional interaction techniques that go beyond traditional controller-based VR interfaces.',
    methodology: [
      'Designed 10 experimental interaction techniques combining gaze, gesture, and haptics',
      'Created a sandbox VR environment for testing each technique',
      'Conducted comparative studies measuring efficiency and user preference',
      'Iteratively refined techniques based on user feedback'
    ],
    results: [
      'Three interaction techniques showed significant improvement over traditional methods',
      'Eye-tracking combined with gesture reduced selection time by 35%',
      'Users expressed interest in context-aware interaction switching',
      'Published findings at IEEE VR 2024'
    ],
    technologies: ['Unreal Engine', 'C++', 'Eye Tracking', 'Leap Motion', 'HTC Vive Pro Eye']
  },
  {
    id: 'vr-chronic-pain',
    title: 'VR vs Chronic Pain',
    shortDescription: 'Using virtual reality as a therapeutic tool for managing chronic pain through immersive distraction therapy.',
    image: './projects/vr-chronic-pain/thumbnail.jpg',
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
    title: 'Feel the Beat in VR',
    shortDescription: 'A rhythm-based VR experience that combines music visualization with full-body interaction.',
    image: './projects/feel-the-beat/thumbnail.jpg',
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
    title: 'Master Your Emotions in VR',
    shortDescription: 'A VR application for emotional regulation training using biofeedback and guided scenarios.',
    image: './projects/master-your-emotions/thumbnail.jpg',
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
    title: 'Project Playground',
    shortDescription: 'An experimental sandbox for prototyping and testing new HCI concepts rapidly.',
    image: './projects/project-playground/thumbnail.jpg',
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
