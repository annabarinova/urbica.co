import styled from 'styled-components';

const Content = styled.div`
  width: 33%;
  
  @media (max-width: 1200px) {
    width: 50%;
    padding-bottom: 50px;
  }
  
  @media (max-width: 850px) {
    width: 100%;
    padding-bottom: 50px;
  }
`;

export default Content;
