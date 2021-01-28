import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 26px;
  background: ${({ theme }) => theme.colors.wrong};
  box-shadow: inset 25px -25px 49px #fd716e, inset -25px 25px 49px #fab2b1, 1px -1px 10px #fd716e, -1px 1px 10px #fab2b1;
  /* box-shadow: 5px -5px 10px #fd716e, -5px 5px 10px #fab2b1; */
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

// Widget.Header = styled.header`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 18px 32px;
//   background: ${({ theme }) => theme.colors.wrong};
//   box-shadow: inset 25px -25px 49px #fd716e, inset -25px 25px 49px #fab2b1;

//   * {
//     margin: 0;
//   }
// `;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Background = styled.div`
  position: absolute;
  height: 100%;
  width: 32%;
  bottom: 0;
  background-color: #1c1814;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(0.9rem);
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default Widget;
