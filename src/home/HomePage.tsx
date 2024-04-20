import styled from 'styled-components';
import {
  HomeTitle,
  WallTalkerAd,
  ReleaseNotes,
  AgeWarning,
  Introduction,
  Instructions,
  VersionDisplay,
  StartButton,
} from './components';
import { SettingsSection } from '../settings';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0;
  padding: 16px;

  & > * {
    max-width: 960px;
    width: 100%;
  }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <HomeTitle />
      <AgeWarning />
      <Introduction />
      <SettingsSection />
      <WallTalkerAd />
      <ReleaseNotes />
      <VersionDisplay />
      <Instructions />
      <StartButton />
    </StyledHomePage>
  );
};