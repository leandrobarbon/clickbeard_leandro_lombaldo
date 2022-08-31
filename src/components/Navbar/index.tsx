import { NoPhotoUser } from 'Icons';
import { useState } from 'react';

import {
    Container,
    ContainerAdminTitle,
    Title,
    ContainerUserLogout,
    User,
    ButtonRoute,
    ModalMenuMobile,
    ButtonLogout,
    IconBurguer,
    ContainerTransparent
} from './style';

interface navbarProps {
    page: string;
    setWhichRoute: boolean;
}

export function Navbar({ page, setWhichRoute }: navbarProps) {
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenBurguerMenu = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        if (!openMenu) {
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }

    return (
        <Container>
            <ContainerAdminTitle>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <Title className={`${page === 'admin' ? 'isWidthAjust' : ''}`}>BARBER SHOP</Title>

                {/* Quando na /admin ele ativa mostrando navegação da ageenda e cadastro de barbeiro */}
                {page === 'admin' ? (
                    <>
                        {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                        <ButtonRoute className={`${page === 'admin' ? 'isRouteWidth' : ''}`} onClick={() => setWhichRoute(false)}>Agenda</ButtonRoute>
                        <ButtonRoute className={`${page === 'admin' ? 'isRouteWidth' : ''}`} onClick={() => setWhichRoute(true)}>Cadastrar barbeiro</ButtonRoute>
                    </>
                ) : (
                    <></>
                )}
            </ContainerAdminTitle>
            <ContainerUserLogout>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <User className={`${page === 'admin' ? 'isUserWidth' : ''}`}>
                    <NoPhotoUser />
                    <p className="nomeUsuario">Leandro Lombaldo</p>
                </User>
                {/* classname com verificação se está o width está 1100px para sumir ou mostrar */}
                <ButtonLogout className={`${page === 'admin' ? 'isButtonWidth' : ''}`}>Sair</ButtonLogout>

                {page === 'admin' ? (
                    <>
                        <IconBurguer onClick={handleOpenBurguerMenu} />
                    
                        <ContainerTransparent className={`${openMenu ? 'open' : ''}`} onClick={handleOpenBurguerMenu}>
                            <ModalMenuMobile className={`${openMenu ? 'open' : ''}`}>
                                <User>
                                    <NoPhotoUser />
                                    <p className="nomeUsuario">Leandro Lombaldo</p>
                                </User>
                                <ButtonRoute onClick={() => setWhichRoute(false)}>Agenda</ButtonRoute>
                                <ButtonRoute onClick={() => setWhichRoute(true)}>Cadastrar barbeiro</ButtonRoute>
                                <ButtonLogout >Sair</ButtonLogout>
                            </ModalMenuMobile>
                        </ContainerTransparent>
                    </>
                ) : (
                    <></>
                )}
            </ContainerUserLogout>
        </Container>
    )
}