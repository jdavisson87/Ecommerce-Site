import React from 'react';
import {
  EmailAddress,
  GitHubLink,
  AboutSection,
  InfoHeaders,
  AboutText,
} from './contact.styled';

const Contact = () => (
  <div>
    <AboutSection>
      <h2>About The Project</h2>
      <AboutText>
        This is a project that I created while learning from the "Complete React
        Developer 2020(w/ Redux, Hooks, and GraphQL)" taught by Andrei Neagoie
        and Yihua Zhang. This is a React application that uses Redux, Firebase
        and is hosted on Heroku. This application also uses Stripe to process
        user payments. Redux is used to handle the global state, while hooks are
        used to maintain the local state within the components.
      </AboutText>
    </AboutSection>
    <h2>Contact Information</h2>
    <InfoHeaders>Email Address</InfoHeaders>
    <EmailAddress href="mailto:jdavisson87@gmail.com">
      JDavisson87@gmail.com
    </EmailAddress>
    <InfoHeaders>GitHub</InfoHeaders>
    <GitHubLink href="https://github.com/jdavisson87">
      JDavisson87 GitHub Repo
    </GitHubLink>
  </div>
);

export default Contact;
