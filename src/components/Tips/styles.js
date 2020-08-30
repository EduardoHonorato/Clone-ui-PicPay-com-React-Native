import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs(()=>({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        alignItems:'center',
        padding:5,
    },
}))`
margin-top:20px;
`;

export const Option = styled.TouchableOpacity`
    background: ${({bgColor}) => bgColor};
    width:150px;
    height:185px;
    border-radius:8px;
    padding:15px;
    margin-right:16px;
    justify-content:space-between;
    margin-top:-5px;
    
`;

export const Title = styled.Text`
color:white;
font-size:16px;
font-weight:bold;
`;

export const Img = styled.Image`
align-self:center;`;
