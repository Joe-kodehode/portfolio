import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import HeroTitle from "../components/HeroTitle";

const StyledAbout = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-family: "inter", sans-serif;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
`;

const StyledSection = styled.section`
  margin-bottom: 12px;
`;

const Title = styled.h2`
  color: cornflowerblue;
  margin-bottom: 12px;
`;

export default function About() {
  return (
    <>
      <HeroTitle />
      <ContentContainer>
        <StyledAbout>
          <StyledSection>
            <Title>Hi!</Title>

            <p>I'm Joe, 34 years old web dev.</p>

            <p>
              At the beginning of 2022 I began learning front-end and soon
              joined “Kodehode”, a full-stack course with 6-months of theory
              focused on the MERN stack, followed by a 6-month apprenticeship.
            </p>
          </StyledSection>
          <StyledSection>
            <Title>History</Title>
            <p>
              I’ve always loved gaming, animals and I feel my most alive while
              being creative! In 2013 I moved from England to Norway and started
              working in a large toy store, a career I held up until the end of
              2021. I was often praised for my communication skills as well as
              my will to improve the workplace and was duly appointed
              assistant-manager. The position was rewarding, however I’ve always
              had an aspiration for a career in programming. In my free time I
              developed skills in video (premier pro) and image editing
              (photoshop) in order to boost my store's social media presence,
              these new found skills in tech inspired me to take the leap and
              pursue that programming career path I always desired.
            </p>
          </StyledSection>
          <StyledSection>
            <Title>Future</Title>
            <p>
              With my wealth of real-world interpersonal experience and recently
              gained programming skills, I'm very excited for what my future
              holds and all the awesome things I’ll create!
            </p>
          </StyledSection>
        </StyledAbout>
      </ContentContainer>
    </>
  );
}
