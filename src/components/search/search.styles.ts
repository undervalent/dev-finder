import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.9rem;
  width: 100%;
  background: ${({ theme }) => theme.contentBackground};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 1.5rem;
  margin: 3.6rem 0 2.4rem 0;
  padding: 1rem 1rem 1rem 3.2rem;
  gap: 2.4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.text};
  background: none !important;
  padding: 0 1rem;

  &:focus,
  &:active {
    background: none !important;
  }
`;

export const SearchButton = styled.button`
  background-color: #0079ff !important;
  border-radius: 1rem;
  width: 10.6rem;
  height: 5rem;
  color: #fff !important;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 700;
  min-width: 10.6rem;
`;

export const ErrorMessage = styled.span`
  color: #f74646;
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 700;
  width: 16.2rem;
`;
