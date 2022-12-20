import React from 'react';
import styled from 'styled-components';

const TextSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const Logo = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 800;
  font-size: 55px;
  padding: 0px 10px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;

const Slogan = styled.h4`
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
  padding: 0px 10px;
`;

const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;

  @media (max-width: 800px) {
    max-width: 50%;
  }
  @media (max-width: 600px) {
    max-width: 80%;
  }
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  color: #27b927;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #27b927;
  }
`;

const MadeBy = styled.h5`
  color: #fff;
  position: fixed;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

const TextSection = () => {
  return (
    <TextSectionContainer>
      <Logo>Global Warming</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <Paragraph>
        You can help us cool off our world and have it go back to it's best
        state ever by donating to help fix our only world and our beloved EARTH!
        Be cool and let the earth be cool. Let the ice burgs to live. Globe is
        warming and will set to fire. Stop polluting, it will cost extra.
      </Paragraph>
      <DonateButton>Donate</DonateButton>
      <MadeBy>
        Made with &#10084; by{' '}
        <u>
          <a
            href="https://github.com/Ayomidemi"
            target="_blank"
            style={{ cursor: 'pointer', color: 'white' }}
          >
            Pease Adeniji
          </a>
        </u>
      </MadeBy>
    </TextSectionContainer>
  );
};

export default TextSection;
