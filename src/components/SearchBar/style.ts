import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;

export const SearchBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;

  h2 {
    font-size: 1.125rem;
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;

    color: ${(props) => props.theme['base-span']};
  }
`;