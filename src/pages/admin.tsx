import { ChangeEvent, useEffect, useState } from 'react';
import Datetime from 'react-datetime';
import 'moment/locale/pt-br';
import "react-datetime/css/react-datetime.css";
import { Navbar } from 'components/Navbar';
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
            name: 'Abreuza',
            speciality: {
                barba: '',
                corte_maquina: '',
                sobrancelha: 'Sobrancelha',
                corte_tesoura: 'Corte Tesoura'
            }
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
            name: 'José',
            speciality: {
                barba: 'Barba',
                corte_maquina: 'Corte Máquina',
                sobrancelha: '',
                corte_tesoura: ''
            }
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
            name: 'Azeite',
            speciality: {
                barba: 'Barba',
                corte_maquina: 'Corte Máquina',
                sobrancelha: '',
                corte_tesoura: ''
            }
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
            name: 'Maria',
            speciality: {
                sobrancelha: 'sobrancelha',
                barba: '',
                corte_maquina: '',
                corte_tesoura: ''
            }
        },
        {
            Hour: '13:00'
        },
        {
            Hour: '13:30',
            name: 'Abreu',
            speciality: {
                sobrancelha: '',
                barba: 'Barba',
                corte_maquina: '',
                corte_tesoura: ''
            }
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

export default function Admin() {
    let inputProps = {
        placeholder: '00/00/0000',
    };

    const [routeScheduleBarber, setRouteScheduleBarber] = useState(false);
    const [whichRoute, setWhichRoute] = useState(false)

    const [formRegisteredBarber, setFormRegisteredBarber] = useState({
        name: '',
        age: '',
    })

    const [formSpeciality, setFormSpeciality] = useState({
        corte_maquina: '',
        corte_tesoura: '',
        barba: '',
        sobrancelha: ''
    })

    const [barber, setBarber] = useState(Hours);
    const [barberSelected, setBarberSelected] = useState({})

    const handleSelectBarberSchedule = (event: ChangeEvent<HTMLSelectElement>) => {
        setBarberSelected(event)
    }

    const handleCheckSpeciality = (event: ChangeEvent) => {
        event.preventDefault();
    }

    useEffect(() => {
        if (whichRoute) {
            setRouteScheduleBarber(true)
        } else {
            setRouteScheduleBarber(false)
        }
    }, [whichRoute])

    return (
        <>
            <Navbar page='admin' setWhichRoute={setWhichRoute}/>
            <Container>
                {!routeScheduleBarber ? (
                    <ContainerAgenda>
                        <GroupButtonAgenda>
                            <select name="" id="" onChange={(e) => handleSelectBarberSchedule((e.target as any).value)}>
                                <option value="">Selecione o barbeiro</option>
                                <option value="carlos">Carlos</option>
                                <option value="batista">Batista</option>
                            </select>
                            <Datetime locale="pr-br" inputProps={ inputProps }/>
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
                                    {barberSelected != null ? (
                                        <>
                                            {barber.batista.map(hora => {
                                                return (
                                                    <tr key={hora.Hour}>
                                                        <td id={hora.Hour}>{hora.Hour}</td>
                                                        <td> 
                                                            {hora.name ? `Client - ${hora.name}` : ''} 
                                                            <br />
                                                            {
                                                            hora.speciality?.barba || 
                                                            hora.speciality?.corte_maquina ||
                                                            hora.speciality?.corte_tesoura ||
                                                            hora.speciality?.sobrancelha ? 'Especiality' : ''
                                                            }
                                                            {hora.speciality?.barba ? ` - ${hora.speciality?.barba}` : ''}
                                                            {hora.speciality?.corte_maquina ? ` - ${hora.speciality?.corte_maquina}` : ''}
                                                            {hora.speciality?.corte_tesoura ? ` - ${hora.speciality?.corte_tesoura}` : ''}
                                                            {hora.speciality?.sobrancelha ? ` - ${hora.speciality?.sobrancelha}` : ''}
                                                        </td>
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
                            <input
                                type="text"
                                value={formRegisteredBarber.name}
                                onChange={({ target }) => {
                                    setFormRegisteredBarber({ ...formRegisteredBarber, name: target.value })
                                }}
                            />
                        </InputCadastro>
                        <InputCadastro>
                            IDADE
                            <input
                                type="text"
                                value={formRegisteredBarber.age}
                                onChange={({ target }) => {
                                    setFormRegisteredBarber({ ...formRegisteredBarber, age: target.value })
                                }}
                            />
                        </InputCadastro>
                        <GroupCheckBox>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="corte-maquina"
                                    value={formSpeciality.corte_maquina}
                                    onChange={handleCheckSpeciality}
                                />
                                CORTE COM MÁQUINA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="corte-tesoura"
                                    value={formSpeciality.corte_tesoura}
                                    onChange={handleCheckSpeciality}
                                />
                                CORTE COM TESOURA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="barba"
                                    value={formSpeciality.barba}
                                    onChange={({ target }) => {
                                        setFormSpeciality({ ...formSpeciality, barba: target.value })
                                    }}
                                />
                                BARBA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="sobrancelha"
                                    value={formSpeciality.sobrancelha}
                                    onChange={handleCheckSpeciality}
                                />
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