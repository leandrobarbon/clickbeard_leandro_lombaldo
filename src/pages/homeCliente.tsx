import { Navbar } from 'components/Navbar';
import { Cancelar, Reagendar } from 'Icons';
import { useState } from 'react';
import {
    Container,
    ContainerScheduling,
    ContainerHistoricScheduled,
    TableInfo,
    Title,
    Message
} from '../styles/homeCliente';


export default function homeCliente() {
    const [dados, setDados] = useState(true)

    return (
        <Container>
            <Navbar page='homeCliente'/>
            <ContainerScheduling>
                <select name="" id="">
                    <option value="">Escolha horário</option>
                </select>
                <select name="" id="">
                    <option value="">Selecione especialidade</option>
                </select>
                <select name="" id="">
                    <option value="">Escolha data</option>
                </select>
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
                        <Aviso>Não tem histórico de agendamento</Aviso>
                    )}
                </TableInfo>
            </ContainerHistoricScheduled>
        </Container>
    )
}