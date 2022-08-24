import {
  StyledProjectsCard,
  StyledImg,
  StyledDescription,
  StyledProjectsTitle,
  StyledIconGrid,
  StyledIcon,
} from "./ProjectsCard.style";
import { projectsList } from "../../const/projectsList";
import githubIcon from "../../images/githubIcon.png";
import liveIcon from "../../images/liveIcon.png";

export default function ProjectsCard() {
  return (
    <>
      {projectsList.map((project, idx) => (
        <StyledProjectsCard key={idx}>
          <a href={project.live}>
            <StyledImg src={project.img} alt="" />
          </a>

          <StyledProjectsTitle>{project.name}</StyledProjectsTitle>
          <StyledDescription>{project.description}</StyledDescription>
          <StyledIconGrid>
            {project.languages.map((icon, idx) => (
              <StyledIcon src={icon} key={idx} />
            ))}

            <a href={project.github}>
              <StyledIcon src={githubIcon} />
            </a>
            <a href={project.live}>
              <StyledIcon src={liveIcon} />
            </a>
          </StyledIconGrid>
        </StyledProjectsCard>
      ))}
    </>
  );
}
