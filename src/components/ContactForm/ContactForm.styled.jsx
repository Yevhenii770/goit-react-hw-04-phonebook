import styled from '@emotion/styled';

export const Input = styled.input`
  border: 1px solid;
  outline: none;
  height: 30px;
`;

export const Form = styled.form`
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 300px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  padding: 8px;
  min-height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
