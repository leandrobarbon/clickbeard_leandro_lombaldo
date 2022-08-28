import styled from "styled-components";

export const Container = styled.form`
    width: 612px;
    height: 706px;

    background: #2A2550;
    border-radius: 10px;
    padding: 0 87px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

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

export const InputText = styled.label`
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

    & button {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;
        background: transparent;
        border: none;
        float: right;
        margin-top: 10px;
    }
`;

export const Footer = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;

    & span {
        color: #FF7700;
        cursor: pointer;
    }
`;