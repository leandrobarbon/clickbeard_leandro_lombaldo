import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`;

export const ContainerScheduling = styled.section`
    width: 80%;
    height: auto;
    background: #2A2550;
    border-radius: 10px;    

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    gap: 20px;

    & .form-control,
    & select {
        width: 100%;
        height:37px;
        background: #F9F9F9;
        border-radius: 10px;
        text-align: center;
    }

    & button {
        background: rgba(255, 119, 0, 0.7);
        border-radius: 10px;
        color: #FFFFFF;
        height: 37px;
        width: 100%;
        border: none;
        outline: none;

        &:hover {
            background: rgba(255, 119, 0)
        }
    }
`;

export const ContainerHistoricScheduled = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20%;
    margin-bottom: 70px;

    @media(max-width: 1600px) {
        gap: 10%;
    }
`;

export const TableInfo = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 689px;
    overflow: auto;
    background: #2A2550;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 26px;

    & .table {
        width: 100%;
        overflow-x: auto;
        
        
        &::-webkit-scrollbar {
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        
        ::-webkit-scrollbar-thumb {
            background: #251D3A; 
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #251D3ACC; 
        }


        & table {
            width: 100%;

            th,td {
                text-align: center;
                min-width: 100px;
                border-top: 1px solid #251D3A33;
                padding: 12px 0 4px;
            }
            
            & th {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 700;
                font-size: 10px;
                line-height: 12px;

                color: rgba(255, 119, 0, 0.7);
            }

            & td {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 15px;

                color: #FFFFFF;
            } 

            & td:last-child {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
        }
    }

    @media(max-width: 450px) {
        width: 90%;
    }

    @media(max-width: 400px) {
        width: 80%;
    }
`;

export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #FFFFFF;
    margin: 34px 0;
`;

export const Message = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: #ffffff47;
    text-align: center;
`;