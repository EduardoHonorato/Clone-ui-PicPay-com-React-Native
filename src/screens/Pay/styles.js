import styled from 'styled-components/native'

export const Container = styled.ScrollView``;

export const Wrapper = styled.SafeAreaView`
background:#fff;
flex:1
`;

export const Header = styled.View`
height:50px;
padding:0 16px;
flex-direction:row;
align-items:center;
`;

export const SearchBar = styled.View`
flex-direction:row;
align-items:center;
width:85%;
height:35px;
background:#f1f1f1;
border-radius:20px;
margin-left:15px;
padding:5px;
`;

export const LabelSearch = styled.Text`
color:#666;
`;

export const TabsContainer = styled.View`
flex-direction:row;
align-items:center;
justify-content:space-between;
height:45px;
background:#fff;
borderBottomWidth:1;
borderBottomColor: #f3f3f3
`;

export const TabsItem = styled.TouchableOpacity`
margin-top:-18px;
`;

export const TabsItemActive = styled.TouchableOpacity`
borderBottomWidth:5;
borderBottomColor: #08a64f
padding:5px;
margin-top:-15px;

`;


export const TabLabel = styled.Text`
padding:30px;
font-size:16px;
color:#666;
font-weight:500;

`;

export const Bold = styled.Text`
font-weight:bold;
`;


export const Services = styled.ScrollView`
flex:1;
margin-top:25px;
`;

export const ServiceContainer = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:10px;
`;


export const ServiceImage = styled.View`
`;
export const ServiceText = styled.View`
margin-right:50px;
width:70%;
`;
export const ServiceIcon = styled.View`
margin-left:-50px;
`;

export const Img = styled.Image`

`;

export const ServiceTitle = styled.Text`
color:#000;
font-size:14px;
text-align:left;
font-weight:bold;

`;

export const ServiceDescription = styled.Text`
color:#000;
font-size:12px;
`;

export const Label = styled.Text`
color:#000;
font-size:18px;
padding:0 15px;
font-weight:500;
padding-bottom:20px;
`;

export const LabelContatcs = styled.Text`
color:#000;
font-size:18px;
padding:0 15px;
font-weight:500;
padding-bottom:20px;
margin-top:20px;
`;

export const Divider = styled.View`
borderBottomWidth:0.5;
borderBottomColor: #ccc
`;



export const Contacts = styled.View`
flex:1;
`;

export const ContactsContainer = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:10px;

`;

export const ContactsInfo = styled.View`
margin-right:50px;
width:70%;
`;

export const Username = styled.Text`
color:#000;
font-size:14px;
text-align:left;
font-weight:bold;
`;

export const Name = styled.Text`
color:#000;
font-size:12px;
text-align:left;
`;

export const ContactIcon = styled.View`
margin-left:-50px;

`;

export const ImgContact = styled.Image`
width:70px;`;
