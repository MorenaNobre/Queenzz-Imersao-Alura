/* eslint-disable no-console */
/* eslint-disable func-names */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 92px;
  margin: auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Widget.Background>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Content>
              <form
                onSubmit={function (infosDoEvento) {
                  infosDoEvento.preventDefault();
                  router.push(`/quiz?name=${name}`);
                  console.log('fazendo submissão pelo react');
                  // router manda para próxima página
                }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    console.log(infosDoEvento.value);
                    // State
                    // name = infosDoEvento.target.value;
                    setName(infosDoEvento.target.value);
                  }}
                  placeholder="Your Drag name here!"
                />
                <button type="submit" disabled={name.length === 0}>
                  May the best woman Win!
                  {name}
                </button>
              </form>
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
