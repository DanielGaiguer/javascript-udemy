import styled from 'styled-components';
import * as colors from '../../config/colors';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input{
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus{
      border: 1px solid ${colors.primaryColor};
    }
  }
`;

export const BotaoDelete = styled.button`
  margin-top: 15px;
  display: ${(props) => props.display || 'block'};//Vai setar o display dele de acordo com as props, se nao tiver vai ser block
`;
