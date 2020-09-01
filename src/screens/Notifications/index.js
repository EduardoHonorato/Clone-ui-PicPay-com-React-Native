import React from 'react'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { 
    Wrapper, 
    Container,
    Header,
    TitleHeader,
    TextHeader,
    Config,
    TextConfig,
    NotificationsContainer,
    NotifyContent,
    NotifyTitle,
    NotifyHour,
} from './styles'

const NotifyItems = [
    {
        key: String(Math.random()),
        title: 'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
        hour: 'Ontem às 17:32',
    },
    {
        key: String(Math.random()),
        title: 'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
        hour: 'Ontem às 17:32',
    },
    {
        key: String(Math.random()),
        title: 'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
        hour: 'Ontem às 17:32',
    },
    {
        key: String(Math.random()),
        title: 'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
        hour: 'Ontem às 17:32',
    },
    {
        key: String(Math.random()),
        title: 'Identificamos um novo acesso à sua conta. Toque aqui para saber mais.',
        hour: 'Ontem às 17:32',
    },
]
export default function Notifications(){
    return (
        <>
        <Wrapper>
        <Container>
            <Header>
                <TitleHeader>
                    <TextHeader>Notificações</TextHeader>
                </TitleHeader>
                <Config>
                    <TextConfig>Configurar</TextConfig>
                </Config>
            </Header>

            <NotificationsContainer>
                {NotifyItems.map((item)=>(
                    <NotifyContent key={item.key}>
                        <NotifyTitle>{item.title}</NotifyTitle>
                        <NotifyHour>{item.hour}</NotifyHour>
                    </NotifyContent>
                ))}
            </NotificationsContainer>
        </Container>
        </Wrapper>
        </>
        
    )
}