import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizBackground from "../src/components/QuizBackground";
import QuizLogo from "../src/components/QuizLogo";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 92px;
  margin: auto 8%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Widget.Background>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Content>
              <h1>The Royal Queens</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae laborum ratione porro aperiam dolorem earum ullam
                doloremque facilis eius voluptate eos beatae, reprehenderit unde
                iste quis quo sit quisquam esse.
              </p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>The Royal Queens</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae laborum ratione porro aperiam dolorem earum ullam
                doloremque facilis eius voluptate eos beatae, reprehenderit unde
                iste quis quo sit quisquam esse.
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </Widget.Background>
      <GitHubCorner projectUrl="https://github.com/MorenaNobre" />
    </QuizBackground>
  );
}
