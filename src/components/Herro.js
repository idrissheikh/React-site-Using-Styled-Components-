import React from 'react'
import styled from 'styled-components';
import BgImg from '../assets/bg-image.png'



const Section = styled.section`
    background-image: url(${BgImg});
    height:750px;
    size:100%;
    display: block;
    background-repeat:no-repeat;
    background-size:contain;
`

const Content = styled.div`
    width: 100%;
    height: 100px;
`
const Left = styled.div`
padding-top:140px;
padding-left:200px;
`
const Title = styled.p`
font-size:50px;
color:#04050a;

`
const Desc = styled.p`
font-size:28px;
width:450px;
font-width:400;
color:#9ea8ac;
margin-top:58px;
`
const Button = styled.a`
display:flex;
justify-content:center;
align-items: center;
border-radius:25px;
width: 300px;
height:70px;
line-height:70px;
font-size:60px;
text-align:center;
color: #fff;
cursor:poiter;
background:linear-gradient(90deg, #0546d6,#3f89fc);
text-decoration:none;
box-shadow:0 15px 14px rgb(0 39 196 /19%)
`




const Herro = () => {
  return (
    <Section>
        <Content>
            <Left>
            <Title>
             Get 2 free stocks<br/> value 500 kr

            </Title>   
            <Desc>
                Tfgh jkjhgf dtygui hojh uyg trdtf yguhi.
                you can find us on <span>facebook google linkdin </span>{''}and more!
            </Desc>

            <Button href="idris.com" 
                    target='_blank'> 
                    <span>
                        trykk her
                    </span>

            </Button>

                

            </Left>
        </Content>
    </Section>
  )
}

export default Herro;