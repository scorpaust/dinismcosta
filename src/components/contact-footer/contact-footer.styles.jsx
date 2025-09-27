import styled, { css } from "styled-components";

export const ContactFooterContainer = styled.footer`
  background-color: #0f172a;
  color: #f8fafc;
  padding: 3rem 1.5rem 2rem;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2.5rem 1.25rem 1.75rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1.5rem;
  }
`;

export const FooterTitle = styled.h2`
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  font-weight: 700;
  text-align: center;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const ContactForm = styled.form`
  width: min(720px, 100%);
  display: grid;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const FieldControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FieldLabel = styled.label`
  font-weight: 600;
`;

const sharedInputStyles = css`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid rgba(226, 232, 240, 0.5);
  background-color: #1e293b;
  color: inherit;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #38bdf8;
    box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.35);
  }

  &::placeholder {
    color: rgba(226, 232, 240, 0.75);
  }
`;

export const InputControl = styled.input`
  ${sharedInputStyles}
`;

export const SelectControl = styled.select`
  ${sharedInputStyles}
  min-height: 150px;
`;

export const TextAreaControl = styled.textarea`
  ${sharedInputStyles}
  resize: vertical;
  min-height: 160px;
`;

export const MessageCounter = styled.span`
  align-self: flex-end;
  font-size: 0.85rem;
  color: rgba(226, 232, 240, 0.75);
`;

export const SubmitButton = styled.button`
  justify-self: flex-start;
  background: linear-gradient(135deg, #38bdf8, #0ea5e9);
  color: #0f172a;
  border: none;
  border-radius: 999px;
  padding: 0.85rem 2.5rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(0.35);
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    justify-self: stretch;
    width: 100%;
  }
`;

export const FeedbackMessage = styled.p`
  margin: 0;
  font-weight: 500;
  text-align: left;

  ${({ status }) =>
    status === "error"
      ? css`
          color: #fca5a5;
        `
      : css`
          color: #a7f3d0;
        `};
`;

export const CopyRightNotice = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(226, 232, 240, 0.8);
`;
