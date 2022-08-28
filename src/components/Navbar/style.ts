import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 70px;

    background: #2A2550;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`;

export const ContainerAdminTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 72px;
`;

export const ButtonRoute = styled.button`
    border: none;
    background: transparent;
    outline: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FF7700;
    text-transform: uppercase;

    &:hover {
        color: rgba(255, 119, 0, 0.7);
    }
`;

export const Title = styled.h1`
    font-family: 'Noto Serif HK', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;

    color: #E04D01;
    margin-right: 99px;
`;

export const ContainerUserLogout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;

    & button {
        border: none;
        background: transparent;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #FFFFFF;

        &:hover {
            color: #FFFFFF80;
        }
    }
`;

export const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11px;

    & .nomeUsuario {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #E04D01;
    }
`;