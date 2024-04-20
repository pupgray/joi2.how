import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface SettingsTileProps extends PropsWithChildren {
  label: React.ReactNode;
  grid?: boolean;
}

const StyledSettingsTile = styled.fieldset<{ grid?: boolean }>`
  display: ${props => (props.grid ? 'grid' : 'block')};
  grid-template-columns: auto 1fr auto;

  background: rgba(122, 123, 163, 0.123);

  border: unset;
  border-left: 2px solid #595a77;

  margin: 15px;
  padding: 5px 15px;

  position: relative;
`;

const StyledSettingsLabel = styled.legend`
  width: fit-content;
  padding: 4px 8px;
  background: #595a77;
  color: var(--text-color);
  line-height: 100%;
  font-size: 1rem;
`;

export const SettingsTile: React.FC<SettingsTileProps> = ({
  label,
  children,
  grid,
}) => {
  return (
    <StyledSettingsTile grid={grid}>
      <StyledSettingsLabel>{label}</StyledSettingsLabel>
      {children}
    </StyledSettingsTile>
  );
};