import React, { useState } from 'react';
import styled from 'styled-components';

function Header() {

    const [activeState,setActiveState] = useState(false)
        
        function openMenu(){
          setActiveState(true)
        
        }
        
        function closeMenu(){
          setActiveState(false)
        }

  return (
    <Container>
        
        <LogoContainer>
            <BusinessLogo />
            <h1>Logo</h1>
        </LogoContainer>
        
        <Menu>
            

          <a>
            <Icon />
            
            <span>HOME</span>
          </a>

          <a>
            <Info />
            <span>ABOUT US</span>
          </a>

          <a>
            <Service />
            <span>SERVICES</span>
          </a>

          <a>
            <Blogs />
            <span>BLOGS</span>
          </a>
        </Menu>

        
        <CustomMenuContainer>
            <CustomMenu 
                onClick={openMenu}
                show = {activeState}
                style={{opacity: activeState ? 0 : 1}}
            >
            </CustomMenu>
        </CustomMenuContainer>
        
        <BurgerNav
          style={{
            transform: activeState ? 'translateY(0%)' : 'translateY(-100%)'
          }}
        >
            <div>
                <CloseWrapper>
                <CustomClose onClick={closeMenu}/>
                </CloseWrapper>


                <div>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">BLOGS</a></li>
                </div>
                
            </div>
              
            
            
        </BurgerNav>


    
    </Container>
  );
}

export default Header;



const Conatiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    color: white;
    width: 100%;
    align-items: center;
    box-shadow: 5px 10px 10px rgba(0,0,0,0.5);
    
    

`

const LogoContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;
    margin-left: 20px;
    
`

const BusinessLogo = styled(BusinessIcon)`

`

const Menu = styled.div`
    display: flex;
    justify-content: center;
    
    align-items: center;

    
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
  
        img{
          height: 20px;
        }
  
        span{
          font-size: 13px;
          letter-spacing:1.42px;
          position: relative;
  
          &:after{
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
          }
        }
  
        &:hover{
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
        }
      }

      @media(max-width:668px) {
        display: none;
      }
`

const Icon = styled(HomeIcon)`
`

const Info = styled(InfoIcon)`
`

const Service = styled(RssFeedIcon)`
`

const Blogs = styled(BookIcon)`
`
const CustomMenuContainer = styled.div`
    @media(min-width : 668px) {
        display: none;
    }
`
const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    
    margin-right: 20px;
    
    
`

const BurgerNav= styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:hsl(0 , 0%, 100%, 0.1);
    backdrop-filter: blur(4rem);
    // background: #090b13;
    // -webkit-filter: blur(8px);
    // opacity: 0.9;
    width:100%;
    height: 100vh;
    z-index:100;
    list-style: none;
    padding:20px;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease-in;
    font-size:20px;
    
    div{
        margin: 10px 0px;
    }
    li{
      padding: 10px 50px;
      border-bottom: 1px solid rgba(0, 0 , 0, .2);
      
      
      a {
        font-weight: 700;
        color: white;
        transition: transform 0.1s ease-in;
      }

      a:hover{
          font-size: 20px;
          
      }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`