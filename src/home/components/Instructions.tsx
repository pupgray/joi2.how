import styled from 'styled-components';
import { ContentSection } from '../../common';

const StyledRulesTitle = styled.h2`
  padding: 4px 16px;
`;

export const Instructions = () => {
  return (
    <ContentSection>
      <StyledRulesTitle>Rules</StyledRulesTitle>
      <ul>
        <li>Only focus on the porn on screen.</li>
        <li>
          Keep your strokes to the pace of the circle in the center of the
          screen.
        </li>
        <li>Watch out for events announced on the right side.</li>
      </ul>
    </ContentSection>
  );
};
