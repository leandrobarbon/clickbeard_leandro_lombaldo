import { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { GetServerSideProps } from 'next';

import { createBarberService } from '../services/createBarberService'
import { getAllBarbersService } from '../services/getAllBarbersService'
import { addSuccessNotification } from '../components/Alert';

import { User } from '../models/user';

import { parseCookies } from 'nookies'
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
import { Loading } from 'components/Loading';

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
    const [isLoading, setIsLoading] = useState(false);
    const [barbers, setBarbers] = useState<User[]>([])
    const [formRegisteredBarber, setFormRegisteredBarber] = useState({
        name: '',
        email: 'barber@barber.com',
        age: '',
    })

    const [formSpeciality, setFormSpeciality] = useState({
        corte_maquina: 'corte maquina',
        corte_tesoura: 'corte tesoura',
        barba: 'barba',
        sobrancelha: 'sobrancelha'
    })

    const [specialties, setSpecialties] = useState<string[]>([]);

    const [barber, setBarber] = useState(Hours);
    const [barberSelected, setBarberSelected] = useState({})

    const handleSelectBarberSchedule = (event: ChangeEvent<HTMLSelectElement>) => {
        setBarberSelected(event)
    }

    const handleCheckSpeciality = (event: ChangeEvent) => {
        event.preventDefault();
    }



    const handleCreateBarber = async (event: FormEvent) => {
        event.preventDefault();

        const response = await createBarberService({ email: formRegisteredBarber.email, name: formRegisteredBarber.name, password: '', age: Number(formRegisteredBarber.age), isAdmin: false, isClient: false, isEmployer: true, specialty: specialties })



        addSuccessNotification('Barber created!')

    }

    useEffect(() => {
        if (whichRoute) {
            setRouteScheduleBarber(true)
        } else {
            setRouteScheduleBarber(false)
        }
    }, [whichRoute])


    useEffect(() => {
        const loadBarbers = async () => {
            const response = await getAllBarbersService();

            console.log('response', response.data)
            setBarbers(response.data)
        };

        loadBarbers()
    }, []);

    console.log(barbers)

    return (
        <>
            <Navbar page='admin' setWhichRoute={setWhichRoute} />
            <Container>
                {!routeScheduleBarber ? (
                    <ContainerAgenda>
                        <GroupButtonAgenda>
                            <select name="" id="" onChange={(e) => handleSelectBarberSchedule((e.target as any).value)}>
                                {barbers.filter(barber => barber.isEmployer).map(barber => <option value={barber.name}>{barber.name}</option>)}
                            </select>
                            <Datetime locale="pr-br" inputProps={inputProps} />
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
                    <ContainerCadastroBarbeiro onSubmit={handleCreateBarber}>
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
                                    onChange={({ target }) => {
                                        setSpecialties([...specialties, target.value])
                                    }}
                                />
                                CORTE COM MÁQUINA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="corte-tesoura"
                                    value={formSpeciality.corte_tesoura}
                                    onChange={({ target }) => {
                                        setSpecialties([...specialties, target.value])
                                    }}
                                />
                                CORTE COM TESOURA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="barba"
                                    value={formSpeciality.barba}
                                    onChange={({ target }) => {
                                        setSpecialties([...specialties, target.value])
                                    }}
                                />
                                BARBA
                            </CheckBoxEspecialidade>
                            <CheckBoxEspecialidade>
                                <input
                                    type="checkbox"
                                    name="sobrancelha"
                                    value={formSpeciality.sobrancelha}
                                    onChange={({ target }) => {
                                        setSpecialties([...specialties, target.value])
                                    }}
                                />
                                SOBRANCELHA
                            </CheckBoxEspecialidade>
                        </GroupCheckBox>
                        <button>{isLoading ? <Loading /> : 'CADASTRAR'}</button>
                    </ContainerCadastroBarbeiro>
                )}
            </Container>
        </>
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

    const parsedUser = JSON.parse(user)?.user;

    if (!parsedUser.isAdmin) {
        return {
            props: {},
            redirect: '/home'
        }
    }

    return {
        props: {}
    }
}