import ProjectsCard from "../../components/ProjectsCard";
import MainContainer from "../../components/MainContainer/MainContainer";
import { useEffect } from "react";

export default function Projects({ setTheme }) {
  useEffect(() => {
    setTheme({ bg: "#2339FF" });
  }, []);

  return (
    <>
      <MainContainer>
        <ProjectsCard />
      </MainContainer>
    </>
  );
}
