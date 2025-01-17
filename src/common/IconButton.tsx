import styled from 'styled-components';
import { Tooltip } from './Tooltip';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  onClick?: () => void;
  tooltip?: string;
}

export const StyledIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  color: var(--color-text);
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};

  border-radius: var(--border-radius);
  padding: 4px;

  font-size: var(--icon-size);

  height: 32px;
  width: 32px;

  transition: background 0.2s;

  &:hover {
    background: var(--focus-color);
  }

  &:enabled {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  tooltip,
  disabled,
  ...rest
}) => {
  return (
    <Tooltip content={tooltip}>
      <StyledIconButton
        aria-label={tooltip}
        disabled={disabled || onClick == null}
        onClick={!disabled ? onClick : undefined}
        {...rest}
      >
        {icon}
      </StyledIconButton>
    </Tooltip>
  );
};
