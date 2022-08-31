import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0 120px;
    margin: 0 auto;
    max-width: 1920px;

    @media(max-width: 1199px) {
        gap: 50px;
    }

    @media(max-width: 1024px) {
        height: auto;
        flex-direction: column;
        margin: 0 0 30px;
    }

    @media(max-width: 1024px) {
        height: auto;
        flex-direction: column;
        margin: 0 0 30px;
    }

    @media(max-width: 699px) {
        padding: 0 40px;
    }

    @media(max-width: 530px) {
        padding: 0 20px;
    }
`;

export const Slogan = styled.h1`
    font-family: 'Noto Serif HK', serif;
    font-style: normal;
    font-weight: 700;
    font-size: 100px;
    line-height: 124px;

    color: #E04D01;

    @media(max-width: 1365px) {
        font-size: 80px;
        line-height: 104px;
    }

    @media(max-width: 1199px) {
        font-size: 60px;
        line-height: 80px;
    }
    
    @media(max-width: 1024px) {
        text-align: center;
    }
    
    @media(max-width: 600px) {
        font-size: 40px;
        line-height: 60px;
    }
`;
