import styled from 'styled-components/native'


export const Container = styled.View`
padding: 0 5px;
`;

export const Header = styled.View`
margin-top:20px;
justify-content:center
`;

export const Title = styled.Text`
color:#000;
font-size:18px;
font-weight:bold;
`;

export const  Card = styled.View`
background:#f1f1f1;
border-radius:8px;
margin-top:10px;
padding:15px;
`;

export const  CardHeader = styled.View`
flex-direction:row;
align-items:center;
`;

export const  Avatar = styled.Image``;

export const  Description = styled.Text`
color:#000;
font-size:14px;
margin-left:15px;
`;

export const  Bold = styled.Text`
font-weight:bold;
`;

export const  CardBody = styled.View`
margin-top:20px;
`;

export const  Username = styled.Text`
color:#000;
font-size:20px;
`;

export const CardFooter = styled.View`
flex-direction:row;
justify-content:space-between;
margin-top:15px;
`;

export const Details = styled.View`
flex-direction:row;
align-items:center;
`;

export const Value = styled.Text`
color:#f75175;
font-size:14px;
font-weight:bold;
`;

export const Divider = styled.View`
width:2px;
height:15px;
background: rgba(255,255,255,0.4);
margin:0 10px;
`;


export const DateLabel = styled.Text`
color:#000;
margin-left:5px;
`;

export const Actions = styled.View`
flex-direction:row;
`;

export const Option = styled.TouchableOpacity`
margin-left:15px;
flex-direction:row;
` ;

export const OptionLabel = styled.Text`
color:#000;
font-size:14px;
margin-left:5px;
`;
