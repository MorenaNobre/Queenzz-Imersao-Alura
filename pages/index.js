import styled from "styled-components";
import db from "../db.json";
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from "../src/components/QuizLogo";

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  padding-top: 82px;
  margin: auto 8%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 500px;
  width: 100%;
  max-width: 1080px; */
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The Royal Queens</h1>
          </Widget.Header>
          <Widget.Content>
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
      <GitHubCorner projectUrl="https://github.com/MorenaNobre"/>
    </QuizBackground>
  );
}
