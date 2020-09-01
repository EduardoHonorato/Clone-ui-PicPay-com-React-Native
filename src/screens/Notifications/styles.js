import styled from 'styled-components/native'

export const Wrapper = styled.SafeAreaView`
background:#fff;
flex:1
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
height:60px;
padding:20px 25px;
background:#f1f1f1;

`;

export const TitleHeader = styled.View`
flex-direction:row;
align-items:center;
justify-content:center;
`;

export const TextHeader = styled.Text`
color:#000;
font-size:16px;
text-align:center;
font-weight:500;
`;

export const Config = styled.TouchableOpacity`
flex-direction:row;
justify-content:flex-end;
margin-top:-20px;
`;


export const TextConfig = styled.Text`
color:#00ac4a;
font-size:16px;
font-weight:500;

`;

export const NotificationsContainer = styled.View`
`;

export const NotifyContent = styled.TouchableOpacity`
borderBottomWidth:1px;
borderBottomColor: #E2DFDE;
padding:10px 0px 8px 25px;

`;

export const NotifyTitle = styled.Text`

`;

export const NotifyHour = styled.Text`
margin-top:5px;
color:#ccc;
font-size:11px;
`;
