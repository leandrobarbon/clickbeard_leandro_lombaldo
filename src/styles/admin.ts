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
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: flex-start;
    gap: 40px;

    & select {
        width: fit-content;
        height:37px;
        background: #F9F9F9;
        border-radius: 10px;
        text-align: center;
        padding: 0 22px;
    }

    & .form-control {
        width: 160px !important;
        height:37px;
        background: #F9F9F9;
        border-radius: 10px;
        text-align: center;
        padding: 0 22px;
    }
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
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #FFF;
            text-transform: capitalize;
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
    box-shadow: 10px 5px 5px #00000026;


    & > button {
        
    }

    @media(max-width: 600px) {
        width: 430px;
        padding: 50px;
    }

    @media(max-width: 500px) {
        width: 335px;
        padding: 50px 30px;
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