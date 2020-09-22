import styled from 'styled-components'

const Container = styled.div`
  position:fixed;
  width:100%;
  height:100%;
`
const Content = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  width:20%;
  margin:0 auto;
  text-align:center;
  height:30px;
  padding:8px 0;
  border-radius:4px;
  text-transform:uppercase;
  font-weight:500;
  color:white;
  box-shadow: 0 5px 25px 0 rgba(0,0,0,.25);
`

export {Container,Content}
