import {
  StyledProjectsCard,
  StyledImg,
  StyledDescription,
  StyledProjectsTitle,
  StyledIconGrid,
  StyledIcon,
} from "./ProjectsCard.style";
import { projectsList } from "../../const/projectsList";

export default function ProjectsCard() {
  return (
    <>
      {projectsList.map((project, idx) => (
        <StyledProjectsCard key={idx}>
          <StyledImg src={project.img} alt="" />

          <StyledProjectsTitle>{project.name}</StyledProjectsTitle>
          <StyledDescription>{project.description}</StyledDescription>
          <StyledIconGrid>
            {project.languages.map((icon, idx) => (
              <StyledIcon src={icon} key={idx} />
            ))}
          </StyledIconGrid>
          {project.github}
          {project.live}
        </StyledProjectsCard>
      ))}
    </>
  );
}
