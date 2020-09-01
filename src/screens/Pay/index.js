import React from 'react'

import { MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons'

import {
    ServiceContainer,
    Img,
    ServiceTitle,
    ServiceDescription,
    ServiceText,
    ServiceIcon,
    Wrapper, 
    Container, 
    Header, 
    SearchBar, 
    LabelSearch,
    TabsContainer,
    TabsItem,
    TabLabel,
    Bold,
    TabsItemActive,
    Services,
    Label,
    Divider,
    LabelContatcs,
    Contacts,
    ContactsContainer,
    ContactsInfo,
    Username,
    Name,
    ContactIcon,
    ImgContact
} from './styles.js'

import img01 from '../../Images/01.png';
import img02 from '../../Images/06.png';
import img03 from '../../Images/07.png';
import img04 from '../../Images/12.png';
import avatar from '../../Images/avatar.png';
const items = [
    {
        key: String(Math.random()),
        img: img01,
        title: 'Pagar nas maquininhas',
        description: 'Pague em máquinas Cielo, GetNet e Rede escaneando o QR code na máquina.',
    },
    {
        key: String(Math.random()),
        img: img02,
        title: 'Pagar contas',
        description: 'Pague sua conta de luz, água, boletos bancários e etc.',
    },
    {
        key: String(Math.random()),
        img: img03,
        title: 'Cobrar',
        description: 'Cobre um amigo',
    },
    {
        key: String(Math.random()),
        img: img04,
        title: 'Recarga de celular',
        description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Serco...',
    },
];

const itemsPessoas = [
    {
        key: String(Math.random()),
        img: avatar,
        username: '@Dudu.Honorato',
        name: 'Eduardo Honorato',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@Marcos.Antonio',
        name: 'Marcos Antônio',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@João.Lucas',
        name: 'João Lucas',
    },
    {
        key: String(Math.random()),
        img: avatar,
        username: '@Antônio.Carvalho.Oliveira',
        name: 'Antônio Carvalho Oliveira',
    },
]
export default function Pay(){
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c68e"/> 
                    <SearchBar>
                        <EvilIcons name="search" size={30} color="#333"/> 
                        <LabelSearch>Quem você quer pagar?</LabelSearch>
                    </SearchBar>
                </Header>

                <TabsContainer>
                    <TabsItemActive>
                        <TabLabel><Bold>Principais</Bold></TabLabel>
                    </TabsItemActive>
                    <TabsItem>
                        <TabLabel>Locais</TabLabel>
                    </TabsItem>
                    <TabsItem>
                        <TabLabel>Store</TabLabel>
                    </TabsItem>
                </TabsContainer>

                <Services>
                <Label>SERVIÇOS</Label>
                {items.map((item) =>(
                    <ServiceContainer key={item.key}>
                        <Img source={item.img}/>
                        <ServiceText>
                            <ServiceTitle>{item.title}</ServiceTitle>
                            <ServiceDescription>{item.description}</ServiceDescription>
                        </ServiceText>
                        <ServiceIcon>
                            <Entypo name="dots-three-horizontal" size={24} color="black" />
                        </ServiceIcon>
                    </ServiceContainer>
                ))}
                </Services>

                <Divider/>

                <Contacts>
                <LabelContatcs>CONTATOS</LabelContatcs>
                {itemsPessoas.map((item) =>(
                    <ContactsContainer key={item.key}>
                        <ImgContact source={item.img} resizeMode="contain"/>
                        <ContactsInfo>
                            <Username>{item.username}</Username>
                            <Name>{item.name}</Name>
                        </ContactsInfo>
                        <ContactIcon>
                            <Entypo name="dots-three-horizontal" size={24} color="black" />
                        </ContactIcon>
                    </ContactsContainer>
                    ))}
                </Contacts>
            </Container>
        </Wrapper>
    )
}