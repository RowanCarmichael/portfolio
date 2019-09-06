import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '../assets/icons/LinkedInIcon';
import AnimateInView from '../components/animation/AnimateInView';
import GitHubIcon from '../assets/icons/GitHubIcon';
import ResumeIcon from '../assets/icons/ResumeIcon';
import EmailIcon from '../assets/icons/EmailIcon';
// @ts-ignore
import Resume from '../assets/files/RowanCarmichaelResume.pdf';

const ContactContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5vh 5vw;
  box-sizing: border-box;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

type TContactLinksProps = {
  size: number;
}

const Link = styled.a<TContactLinksProps>`
  margin: ${props => 0.2 * props.size}px;
  transition: transform 150ms;

  :hover {
    transform: scale(1.25);
  }
`;

export const ContactLinks: React.FC<TContactLinksProps> = ({ size }) => (
  <FlexBox>
    <Link size={size} href="http://www.github.com/RowanCarmichael" rel="noopener noreferrer" target="_blank">
      <AnimateInView from={{ transform: 'scale(0)' }} delay={100}>
        <GitHubIcon fill="orangered" width={size} height={size} />
      </AnimateInView>
    </Link>
    <Link size={size} href="mailto:carmichaelr@hotmail.co.uk" rel="noopener noreferrer" target="_top">
      <AnimateInView from={{ transform: 'scale(0)' }} delay={200}>
        <EmailIcon fill="orangered" width={size} height={size} />
      </AnimateInView>
    </Link>
    <Link size={size} href="http://www.linkedin.com/in/rowan-carmichael/" rel="noopener noreferrer" target="_blank">
      <AnimateInView from={{ transform: 'scale(0)' }} delay={300}>
        <LinkedInIcon fill="orangered" width={size} height={size} />
      </AnimateInView>
    </Link>
    <Link size={size} href={Resume} rel="noopener noreferrer" download>
      <AnimateInView from={{ transform: 'scale(0)' }} delay={400}>
        <ResumeIcon fill="orangered" width={size} height={size} />
      </AnimateInView>
    </Link>
  </FlexBox>
);

const Contact: React.FC = () => (
  <ContactContainer>
    <header>
      <h3>How to <i>find</i> me</h3>
    </header>
    <ContactLinks size={200} />
  </ContactContainer>
);

export default Contact;