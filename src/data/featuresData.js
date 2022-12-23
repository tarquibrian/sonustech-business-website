import BuildingIcon from "../components/icons/building"
import DefiningIcon from "../components/icons/defining"
import DeploymentIcon from "../components/icons/deployment"
import DesigningIcon from "../components/icons/designing"
import MaintenanceIcon from "../components/icons/maintenance"
import PlanningIcon from "../components/icons/planing"
import TestingIcon from "../components/icons/testing"
export const featuresData = [
  {
    id: 1,
    title: "Planning",
    description:
      "We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.",
    svg: <PlanningIcon />,
  },
  {
    id: 2,
    title: "Designing",
    description:
      "The system and documents are prepared as per the requirement specifications. This helps us define overall system architecture and technology stack.",
    svg: <DesigningIcon />,
  },
  {
    id: 3,
    title: "Defining",
    description:
      "Once the requirement analysis phase is completed, the next step is to define and document software needs.",
    svg: <DefiningIcon />,
  },
  {
    id: 4,
    title: "Building",
    description:
      "Developers start to build the entire system by writing code using the chosen programming language, techniques, and methodologies",
    svg: <BuildingIcon />,
  },
  {
    id: 5,
    title: "Testing",
    description:
      "Evaluating the quality of software with the aim of finding and fixing defects.",
    svg: <TestingIcon />,
  },
  {
    id: 6,
    title: "Deployment",
    description:
      "The final software is released and checked for deployment issues, if any.",
    svg: <DeploymentIcon />,
  },
  {
    id: 7,
    title: "Maintenance",
    description:
      "According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification mentioned in the first phase.",
    svg: <MaintenanceIcon />,
  },
]
