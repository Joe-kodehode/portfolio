import { StyledProjectsCard, StyledImgContainer } from "./ProjectsCard.style";
import projectsList from "./../../components/projectsList.json";
import { styledImgContainer } from "./ProjectsCard.style";

export default function ProjectsCard() {
  return (
    <>
      {projectsList.map((project) => (
        <StyledProjectsCard key={project.id}>
          {project.name}
          <StyledImgContainer>
            <img
              src={`https://github.com/Joe-kodehode/portfolio/blob/main/src/images/${project.img}?raw=true`}
              alt=""
            />
          </StyledImgContainer>
          {project.description}

          {/* {console.log(project)} */}
        </StyledProjectsCard>
      ))}
    </>
  );
}
