import React,{ useState,useRef } from 'react';
import styled from 'styled-components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import WorkSuggestionForm from '../WorkSuggestionForm';
import WorkListItem from '../WorkListItem';

const ContainerList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#3f51b5;
  opacity:0.8;
  border-radius:4px;
`


const data =[
  {
  words:'hurry up and add leader boards, that would make everything so much better'
},
{
words:'suggestionTwo'
},
{
words:'suggestionThree'
}
]
const Title = styled.div`
  font-size:1.3em;
  font-weight:600;
  color:white;
  letter-spacing:1px;
  padding-left:5px;
`
const Display = styled.div`
  transition: max-height 0.2s ease-out;
  max-height:${props=>props.clicked ? props.height + "px": '0'};
  overflow:hidden
`
const Arrow = styled.div`
color:white;
padding-right:5px;
padding-top:5px;
transform-origin:43% 50%;
transition: all 0.3s;
transform:${props=>props.show ?'rotate(180deg)':''};

`



const WorkSuggestion =()=>{
  const [show,setShow] = useState(false)
  const [scrollHeight,setScrollHeight] = useState('')
  const node = useRef(null)

  const handleClick =()=>{
    setShow(!show)
    setScrollHeight(node.current.scrollHeight)
    console.log(scrollHeight)
  }

  return(
    <ContainerList data-testid="container">
      <div style={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center'}} onClick={()=>{handleClick() }}>
        <Title>ADD</Title>
        <Arrow show={show}>
          <ArrowUpwardIcon />
        </Arrow>
      </div>
        <Display clicked={show} ref={node} height={scrollHeight} >
            {
              data.map((item,index)=>{
                return<WorkListItem key={index} data-testid="items" items={item.words}/>
              })
            }

            <WorkSuggestionForm/>
        </Display>
    </ContainerList>
  )
}

export default WorkSuggestion
