import ExploringEndlessWorlds from "./projects/ExploringEndlessWorlds";
import VRBeyondTheOrdinary from "./projects/VRBeyondTheOrdinary";
import VRVsChronicPain from "./projects/VRVsChronicPain";
import FeelTheBeat from "./projects/FeelTheBeat";
import MasterYourEmotions from "./projects/MasterYourEmotions";
import ProjectPlayground from "./projects/ProjectPlayground";

const ProjectDetails = ({ project }: { project: string }) => {
    const projectComponents: { [key: string]: JSX.Element } = {
        "exploring-endless-worlds": <ExploringEndlessWorlds />,
        "vr-beyond-the-ordinary": <VRBeyondTheOrdinary />,
        "vr-vs-chronic-pain": <VRVsChronicPain />,
        "feel-the-beat": <FeelTheBeat />,
        "master-your-emotions": <MasterYourEmotions />,
        "project-playground": <ProjectPlayground />,
    };

    return projectComponents[project] || <p>Project not found.</p>;
};

export default ProjectDetails;
