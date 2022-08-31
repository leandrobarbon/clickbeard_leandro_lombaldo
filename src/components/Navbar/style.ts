import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 70px;

    background: #2A2550;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    position: relative;
`;

export const ContainerAdminTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 72px;

    button {
        border: 0;
    }

    @media(max-width: 600px) {
        gap: 0;
    }
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
    transition: all 0.2s ease-in-out;


    &:hover {
        color: rgba(255, 119, 0, 0.7);
    }

    @media(max-width: 1100px) {
        &.isRouteWidth {
            display: none;
        }
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
    transition: all 0.2s ease-in-out;

    @media(max-width: 1100px) {
        &.isWidthAjust {
            margin-right: 0px;
        }
    }

    @media(max-width: 600px) {
        font-size: 14px;
        line-height: 17px;
        margin-right: 50px;
    }
`;

export const ContainerUserLogout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;

    & > svg {
        display: none;
    }

    @media(max-width: 1000px) {
        & > svg {
            display: block;
            cursor: pointer;
        }
    }

    @media(max-width: 600px) {
        gap: 10px;
    }
`;

export const ButtonLogout = styled.button`
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

    @media(max-width: 1100px) {
        &.isButtonWidth {
            display: none;
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

    @media(max-width: 1100px) {
        &.isUserWidth {
            display: none;
        }
    }

    @media(max-width: 600px) {

        & .nomeUsuario{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 80px;
        }

        & svg {
            width: 30px;
        }
    }
`;

export const ContainerTransparent = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: #ffffff00;
    left: 0;
    top: 0;
    display: none;
    z-index: 9;

    &.open {
        display: block;
    }
`;

export const ModalMenuMobile = styled.div`
    position: absolute;
    background: #2b274c;
    border-radius: 10px;
    top: 64px;
    right: 10px;
    box-shadow: 10px 5px 5px #00000026;
    width: fit-content;
    height: auto;
    display: none;
    flex-direction: column;
    gap: 50px;
    padding: 30px 50px;
    z-index: 2;

    &.open {
        display: flex;
    }
`;

export const IconBurguer = styled.div`
    display: none;
    background-image: url('./assets/icons/icon_burguer.svg');
    background-repeat: no-repeat;
    width: 23px;
    height: 16px;
    cursor: pointer;
    z-index: 2;

    @media(max-width: 1100px) {
        display: block;
    }
`;

export const ExchageDashboard = styled.div`
    background-image: url('./assets/icons/ExchageDashboard.svg');
    background-repeat: no-repeat;
    width: 24px;
    height: 18px;
    cursor: pointer;
    z-index: 2;
`;