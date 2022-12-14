import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies'
import Datetime from 'react-datetime';
import 'moment/locale/pt-br';
import "react-datetime/css/react-datetime.css";
import { Navbar } from 'components/Navbar';
import { Cancelar, Reagendar } from 'Icons';
import {
    Container,
    ContainerScheduling,
    ContainerHistoricScheduled,
    TableInfo,
    Title,
    Message
} from '../styles/homeCliente';


export default function HomeCliente() {
    const [dados, setDados] = useState(true)

    useEffect(() => {
        setDados(true)
    }, [])

    let inputProps = {
        placeholder: '00/00/0000',
    };

    return (
        <Container>
            <Navbar page='home' />
            <ContainerScheduling>
                <select name="" id="">
                    <option value="">Escolha horário</option>
                </select>
                <select name="" id="">
                    <option value="">Selecione especialidade</option>
                </select>
                <Datetime locale="pr-br" inputProps={inputProps} />
                <select name="" id="">
                    <option value="">Selecione o barbeiro</option>
                </select>
                <button>Agendar</button>
            </ContainerScheduling>
            <ContainerHistoricScheduled>
                <TableInfo>
                    <Title>AGENDADO</Title>
                    {!dados ? (
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Horário</th>
                                        <th>Barbeiro</th>
                                        <th>Especialidade</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>27/08/2022</td>
                                        <td>15:20</td>
                                        <td>Mario dante</td>
                                        <td>Sobrancelha</td>
                                        <td>
                                            <Reagendar />
                                            <Cancelar />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <Message>Não tem agendamento</Message>
                    )}
                </TableInfo>
                <TableInfo>
                    <Title>HISTÓRICO DE AGENDAMENTO</Title>
                    {dados ? (
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Horário</th>
                                        <th>Barbeiro</th>
                                        <th>Especialidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>27/08/2022</td>
                                        <td>15:20</td>
                                        <td>Mario dante</td>
                                        <td>Sobrancelha</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <Message>Não tem histórico de agendamento</Message>
                    )}
                </TableInfo>
            </ContainerHistoricScheduled>
        </Container>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['nextauth-user']: user } = parseCookies(context);



    if (!user) {
        return {
            props: {},
            redirect: '/'
        }
    }

    const parsedUser = JSON.parse(user).user;

    return {
        props: {}
    }
}