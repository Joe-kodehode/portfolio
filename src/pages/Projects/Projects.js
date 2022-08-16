import projectsList from "./../../components/projectsList.json";

export default function Projects() {
  return (
    <>
      {projectsList.map((project) => (
        <div key={project.id}>
          {project.name}
          {<br />}
          <img
            src={`https://github.com/Joe-kodehode/portfolio/blob/main/src/images/${project.img}?raw=true`}
            alt=""
          />
          {<br />}
          {project.description}

          {/* {console.log(project)} */}
        </div>
      ))}
    </>
  );
}
