import { ContentSection, Dialog } from '../../common';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useHomeValue } from '../HomeProvider';

const StyledAgeWarning = styled.div`
  font-size: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const StyledAgeWarningChoice = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;

const StyledAgeWarningButton = styled.button`
  display: flex;
  gap: 8px;

  background: var(--focus-color);
  color: var(--text-color);

  border-radius: var(--border-radius);
  padding: 8px;

  transition: background 0.2s;

  &:hover {
    background: var(--primary);
  }

  &:enabled {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const AgeWarning = () => {
  const [ageCheckConfirm, setAgeCheckConfirm] = useHomeValue('ageCheckConfirm');

  return (
    <Dialog
      open={!ageCheckConfirm}
      onOpenChange={setAgeCheckConfirm}
      closable={false}
      title={'Age Warning'}
      barrierColor='var(--section-background)'
      content={
        <StyledAgeWarning>
          <ContentSection style={{ margin: 0 }}>
            <p>
              This app is meant for adults only, and should not be used by
              anyone under the age of 18.
            </p>
            <StyledAgeWarningChoice>
              <StyledAgeWarningButton
                onClick={() => {
                  window.location.href = 'https://www.google.com';
                }}
              >
                <p>I am not 18</p>
                <FontAwesomeIcon icon={faBan} />
              </StyledAgeWarningButton>
              <StyledAgeWarningButton onClick={() => setAgeCheckConfirm(true)}>
                <p>I am 18 or older</p>
                <FontAwesomeIcon icon={faCheck} />
              </StyledAgeWarningButton>
            </StyledAgeWarningChoice>
          </ContentSection>
        </StyledAgeWarning>
      }
    >
      <div style={{ display: 'none' }} />
    </Dialog>
  );
};
