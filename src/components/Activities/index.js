import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import {Container,
        Header,
        Title,
        Card,
        CardHeader,
        Avatar,
        Description,
        Bold,
        CardBody,
        Username,
        CardFooter,
        Details,
        Value,
        Divider,
        DateLabel,
        Actions,
        Option,
        OptionLabel,    
    } from './styles'
import avatar from '../../Images/avatar.png'


export default function Activities(){
    return(
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            
            <Card>
                <CardHeader>
                    <Avatar source={avatar}/>
                    <Description>
                        <Bold>Você</Bold> Pagou a <Bold>@EduardoHonorato</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <Username>Eduardo Honorato</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 138,00</Value>
                        <Divider/>
                        <Feather name="lock" color="#fff" size={14}/>
                        <DateLabel>há 3 dias</DateLabel>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff"/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    )
}