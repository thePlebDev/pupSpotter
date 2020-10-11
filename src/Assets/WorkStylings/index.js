import styled from 'styled-components';

const ContainerList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#3f51b5;
  opacity:0.8;
  border-radius:4px;
`
const Title = styled.div`
  font-size:1.3em;
  font-weight:600;
  color:white;
  letter-spacing:1px;
  padding-left:5px;
`
const Arrow = styled.div`
color:white;
padding-right:5px;
padding-top:5px;
transform-origin:43% 50%;
transition: all 0.3s;
transform:${props=>props.show ?'rotate(180deg)':''};
`
const TitleContainer = styled.div`
display:flex;
justify-content:space-between;
width:100%;
align-items:center
`



export {ContainerList,Title,Arrow,TitleContainer}
