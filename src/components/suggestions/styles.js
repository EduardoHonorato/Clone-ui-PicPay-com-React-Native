import styled from 'styled-components/native'


export const Container = styled.ScrollView.attrs(()=>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems:'center',
        paddingLeft:16,
    },
}))`
background: #f1f1f1;
height:130px;
`;


export const Option = styled.TouchableOpacity`
width:80px;
margin-right:16px;
align-items:center;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
color:#000;
font-weight:bold;
margin-top:8px;
font-size:14px;
`;