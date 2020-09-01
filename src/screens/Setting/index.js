import React, {useState} from 'react'
import { FontAwesome } from '@expo/vector-icons'
import avatar from '../../Images/avatar-edu.png';

import { 
    Wrapper, 
    Container,
    Header,
    TitleHeader,
    TextHeader,
    Help,
    HelpText,
    UserInfoProfile,
    Img,
    Username,
    NameInfo,
    ViewProfileContainer,
    VierProfileText,
    ImageContainer,
    InfosContainer,
    MenuItems,
    LabelMyAccount,
    ContentMenu,
    TitleMenu,
    InfoMenu,
    IconMenu,
    ButtonMenu,
    LabelTitle,
    MenuItemsSair,
    TitleMenuSair,
    InfoVersion,
} from './styles'
import { Switch } from 'react-native-gesture-handler';

export default function Settings(){
    const [useTouchID, setUseTouchID] = useState(false);
    function handleToggleUseTouchID(){
        setUseTouchID((prevState)=> !prevState);
    }
    return (
        <>
        <Wrapper>
        <Container>
            <Header>
                <TitleHeader>
                    <TextHeader>Ajustes</TextHeader>
                </TitleHeader>
                <Help>
                    <HelpText>Ajuda</HelpText>
                </Help>
            </Header>

            <UserInfoProfile colors={['#fff', '#f3f3f3']}>
                <InfosContainer>

                    <Img source={avatar} resizeMode="contain"/>

                    <Username>@dudu.honorato</Username>
                    <NameInfo>Eduardo Honorato Alves de Souza</NameInfo>

                    <ViewProfileContainer>
                        <VierProfileText>Ver meu perfil</VierProfileText>
                        <FontAwesome name="angle-right" size={16} color="#52e78c" style={{marginLeft:10}}/>
                    </ViewProfileContainer>
                    <LabelMyAccount>Minha Conta</LabelMyAccount>
                </InfosContainer>
                
            </UserInfoProfile>

            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Meu PicPay</TitleMenu>
                        <InfoMenu>@dudu.honorato</InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Meu número</TitleMenu>
                        <InfoMenu>(**) ****-6938</InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Meu e-mail</TitleMenu>
                        <InfoMenu>e****k@l**ve.com</InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Dados pessoais</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Conta bancária</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Taxas e limites</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Meus endereços</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Meus Favoritos</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Atualizar Cadastro</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>Promoções</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                
                    <ButtonMenu>
                        <TitleMenu>Usar código promocional</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Convide seus amigos</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>Minhas assinaturas</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Ver minhas assinaturas</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>PicPay Pro</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Parcelamento sem acréscimo</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>

                    <ButtonMenu>
                        <TitleMenu>Deixar de ser PicPay Pro</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>Para o meu negócio</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Para estabelecimentos</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>Configurações</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Usar Touch ID para pagar</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><Switch value={useTouchID} onValueChange={handleToggleUseTouchID}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Alterar senha</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Privacidade</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Notificações</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Contas Vinculadas</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <LabelTitle>Geral</LabelTitle>
            <MenuItems> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenu>Seja um Beta Tester</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Precisa de ajuda?</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Sobre o PicPay</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                    <ButtonMenu>
                        <TitleMenu>Desativar minha conta</TitleMenu>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItems>

            <MenuItemsSair> 
                <ContentMenu>
                    <ButtonMenu>
                        <TitleMenuSair>Sair da conta</TitleMenuSair>
                        <InfoMenu></InfoMenu>
                        <IconMenu><FontAwesome name="angle-right" size={16} color="#ccc" style={{marginLeft:10}}/></IconMenu>
                    </ButtonMenu>
                </ContentMenu>
            </MenuItemsSair>

            <InfoVersion>10.19.17</InfoVersion>
        </Container>
        </Wrapper>
        </>
        
    )
}