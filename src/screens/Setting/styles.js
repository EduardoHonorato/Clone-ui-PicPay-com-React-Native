import styled from 'styled-components/native'
import  {LinearGradient} from 'expo-linear-gradient'

export const Wrapper = styled.SafeAreaView`
background:#f1f1f1;
flex:1
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
height:60px;
padding:20px 25px;
background:#fff;

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

export const Help = styled.TouchableOpacity`
flex-direction:row;
justify-content:flex-end;
margin-top:-20px;
`;


export const HelpText = styled.Text`
color:#00ac4a;
font-size:16px;
font-weight:500;

`;

export const UserInfoProfile = styled(LinearGradient)`
height:260px;
flex-direction:row;
align-items:center;
justify-content:center;
`;
export const ImageContainer = styled.View`

`;


export const InfosContainer = styled.View`
margin-top:20px;
`;

export const Img = styled.Image`
width:100px;
height:100px;
margin-top:-25px;
margin-left:70px;
margin-bottom:20px;

`;

export const Username = styled.Text`
font-weight:500;
font-size:25px;
color:#000;
text-align:center;
`;

export const NameInfo = styled.Text`
color:#ccc;
font-size:14px;
margin-top:5px;
`;

export const ViewProfileContainer = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
justify-content:center;
margin-top:10px;
`;

export const VierProfileText = styled.Text`
color:#52e78c;
`;



export const LabelMyAccount = styled.Text`
margin-top:35px;
margin-left:-60px;
color:#999;
text-transform: uppercase;
font-weight:400;
`;

export const MenuItems = styled.View`
background:#fff;
flex:1;
`;


export const ContentMenu = styled.View`
`;

export const ButtonMenu = styled.TouchableOpacity`
flex-direction:row;
align-items:center;
justify-content:space-between;
padding:15px;

borderBottomWidth:1px;
borderBottomColor: #E2DFDE;
`;

export const TitleMenu = styled.Text``;

export const InfoMenu = styled.Text`
margin-left:140px;
color:#ccc;
`;

export const IconMenu = styled.View``;

export const LabelTitle = styled.Text`
margin-top:25px;
margin-left:15px;
color:#999;
text-transform: uppercase;
font-weight:400;
padding-bottom:10px;`;

export const MenuItemsSair = styled.View`
background:#fff;
flex:1;
margin-top:25px;
`;

export const TitleMenuSair = styled.Text`
color:red;
`;

export const InfoVersion = styled.Text`
color:#ccc;
text-align:center;
margin-top:20px;
padding-bottom:30px;
`;