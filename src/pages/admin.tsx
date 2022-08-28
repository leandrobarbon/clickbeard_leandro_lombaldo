import { Navbar } from 'components/Navbar';
import { ChangeEvent, useEffect, useState } from 'react';
import {
    Container,
    ContainerAgenda,
    GroupButtonAgenda,
    Agenda,
    ContainerCadastroBarbeiro,
    Title,
    InputCadastro,
    GroupCheckBox,
    CheckBoxEspecialidade
} from '../styles/admin';

const Hours = {
    'carlos': [
        {
            Hour: '08:00'
        },
        {
            Hour: '08:30'
        },
        {
            Hour: '09:00'
        },
        {
            Hour: '09:30'
        },
        {
            Hour: '10:00'
        },
        {
            Hour: '10:30'
        },
        {
            Hour: '11:00'
        },
        {
            Hour: '11:30'
        },
        {
            Hour: '12:00'
        },
        {
            Hour: '12:30',
            name: 'MARIA'
        },
        {
            Hour: '13:00'
        },
        {
            Hour: '13:30'
        },
        {
            Hour: '14:00'
        },
        {
            Hour: '14:30'
        },
        {
            Hour: '15:00',
            name: 'José'
        },
        {
            Hour: '15:30'
        },
        {
            Hour: '16:00'
        },
        {
            Hour: '16:30'
        },
        {
            Hour: '17:00'
        },
        {
            Hour: '17:30'
        },
        {
            Hour: '18:00'
        },
    ],
    'batista': [
        {
            Hour: '08:00'
        },
        {
            Hour: '08:30'
        },
        {
            Hour: '09:00',
            name: 'Azeite'
        },
        {
            Hour: '09:30'
        },
        {
            Hour: '10:00'
        },
        {
            Hour: '10:30'
        },
        {
            Hour: '11:00'
        },
        {
            Hour: '11:30'
        },
        {
            Hour: '12:00'
        },
        {
            Hour: '12:30',
            name: 'MARIA'
        },
        {
            Hour: '13:00'
        },
        {
            Hour: '13:30',
            name: 'Abreu'
        },
        {
            Hour: '14:00'
        },
        {
            Hour: '14:30'
        },
        {
            Hour: '15:00',
        },
        {
            Hour: '15:30'
        },
        {
            Hour: '16:00'
        },
        {
            Hour: '16:30'
        },
        {
            Hour: '17:00'
        },
        {
            Hour: '17:30'
        },
        {
            Hour: '18:00'
        },
    ],
}

interface routeIdProps {
    id: string;
}


export default function Admin({id}: routeIdProps) {
    const [routeScheduleBarber, setRouteScheduleBarber] = useState(false);
    const [qualRota, setWhichRoute] = useState(id)

    const [barber, setBarber] = useState(Hours);
    const [barberSelected, setBarberSelected] = useState({})

    const handleSelectBarberSchedule = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event)

        setBarberSelected(event)
    }

    useEffect(() => {
        if (qualRota === "cadastBarber") {
            setRouteScheduleBarber(true)
        } else {
            setRouteScheduleBarber(false)
        }
    }, [qualRota])

    return (
        <>
            <Navbar page='admin' setWhichRoute={setWhichRoute} />
            <Container>
                {!routeScheduleBarber ? (
                    <ContainerAgenda>
                        <GroupButtonAgenda>
                            <select name="" id="" onChange={(e) => handleSelectBarberSchedule((e.target as any).value)}>
                                <option value="">Selecione o barbeiro</option>
                                <option value="carlos">Carlos</option>
                                <option value="batista">Batista</option>
                            </select>
                            <select name="" id="">
                                <option value="">Selecione a data</option>
                            </select>
                        </GroupButtonAgenda>
                        <Agenda>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {barberSelected != {} ? (
                                        <>
                                            {barber.batista.map(hora => {
                                                return (
                                                    <tr key={hora.Hour}>
                                                        <td id={hora.Hour}>{hora.Hour}</td>
                                                        <td>{hora.name}</td>
                                                    </tr>
                                                )
                                            })}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </tbody>
                            </table>
                        </Agenda>
                    </ContainerAgenda>
                ) : (
                    <ContainerCadastroBarbeiro>
                        <Title>Cadastro Barber</Title>
                        <InputCadastro>
                            NOME
                            <input type="text" />
                        </InputCadastro>
                        <InputCadastro>
                            IDADE
                            <input type="text" />
                        </InputCadastro>
                        <GroupCheckBox>
                            <CheckBoxEspecialidade>
                                <input type="checkbox" name="" id="" />
                                CORTE COM MÁQUINA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input type="checkbox" name="" id="" />
                                CORTE COM TESOURA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input type="checkbox" name="" id="" />
                                BARBA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input type="checkbox" name="" id="" />
                                SOBRANCELHA
                            </CheckBoxEspecialidade>
                        </GroupCheckBox>
                        <button>CADASTRAR</button>
                    </ContainerCadastroBarbeiro>
                )}
            </Container>
        </>
    )
}