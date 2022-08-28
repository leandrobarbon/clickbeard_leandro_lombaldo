import styled from "styled-components";

export const Container = styled.section`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContainerAgenda = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 40px;
`;

export const GroupButtonAgenda = styled.div`
    
`;

export const Agenda = styled.div`
    width: 90%;
    height: auto;
    background: #2A2550;
    border-radius: 10px;   
    padding: 50px 30px 30px;

    & table {
        width: 100%;

        & th:first-child, td {
            text-align: start;
        }

        & td {
            border-bottom: 1px solid #251D3A99;
            padding: 15px 0;
        }

        & td:first-child {
            width: 200px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: rgba(255, 119, 0, 0.6);
        }
    } 
`;

export const ContainerCadastroBarbeiro = styled.div`

    background: #2A2550;
    border-radius: 10px;    
    width: 500px;
    height: auto;
    padding: 50px 87px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 80px;


    & > button {
        width: 50%;
        background: rgba(255, 119, 0, 0.7);
        border-radius: 10px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;

        color: #FFFFFF;

        padding: 16px 0;
        border: none;
        outline: none;

        &:hover {
            background: rgba(255, 119, 0);
        }
    }
`;

export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;

    color: #FFFFFF;
`;

export const InputCadastro = styled.label`
    width: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    & input {
        width: 100%;
        height: 60px;
        background: rgba(249, 249, 249, 0.4);
        border-radius: 10px;    
        border: none;
        outline: none;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;

        color: #FFFFFF;
        padding: 0 26px;
        margin-top: 12px;

        &:focus {
            border: 2px solid #FF7700;
        }
    }


`;

export const GroupCheckBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    
`;

export const CheckBoxEspecialidade = styled.label`
    width: 128px;
    display: flex;
    gap: 12px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 20px;

    color: #FFFFFF;

    & input[type="checkbox"]:checked::before {
        transform: scale(1);
    }
    
    & input:checked{
        accent-color: rgba(255, 119, 0, 0.7);;
    }
`;