import React from "react";
import styled from "styled-components";
import { gold_hex } from '../variables'
import { Route } from 'react-router-dom'
const Wrapper = styled.div`
.wrapper {
    display        : flex;
    justify-content: space-around;
    align-items    : baseline;
    // padding        : 3em 1em 3em 1em;
}

.box {
    display: inline-block;
}

.letter {
    text-align : center;
    // font-size  : 4em;
    font-size: 5rem;
    margin     : 0;
    font-weight: 600;
    color      : #C5B358;
    line-height: 30px;
    font-family: Montserrat Alternates, "Trebuchet MS", Arial, sans-serif;
}
@media screen and (max-width: 576px) {
    .letter {
        font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 800px) {
 .letter {
        font-size: 3.5rem;
    }
  }

@media screen and (max-width: 883px) {
    .letter {
        line-height: 20px;
    }
}

@keyframes bounce {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(0, -20px, 0);
    }
}

.bounce {
    animation                : bounce 0.6s;
    animation-iteration-count:  2;
    animation-direction      : alternate;
}

// @keyframes color-change {
//     from {
//         color: #C5B358;
//     }

//     to {
//         color:#4AAAA5;
//     }
// }

.color-change {
    color    : #C5B358;
    animation: color-change 2s infinite alternate;
}

@keyframes appear {
    0% {
        font-size: 0;
        opacity  : 0;
    }

    50% {
        font-size: 4em;
    }

    100% {
        opacity: 1;
    }
}

.appear {
    animation: appear 3s alternate infinite;
}

@keyframes rotate {
    from {
        opacity  : 0;
        transform: rotate(90deg)
    }

    to {
        transform: rotate(0deg)
    }

    100% {
        opacity: 1;
    }
}

.rotate {
    animation: rotate 3s infinite;
}
`
export default function Logo({ withImage = true, withTitle, ...rest }) {
    return <Route render={({ history }) =>
        <Main onClick={_ => history.push('/') } {...rest}>
            <h1>L<Wrapper>
                <main className="wrapper">
                    <section>
                        <div className="box">
                            <p className="letter bounce"><img className="logo" src={require('../../assets/images/logo.1.png')} alt="" /></p>
                            <p className="letter color-change">ı</p>
                        </div>
                    </section>
                </main>
            </Wrapper>oneus</h1>
        </Main>
    } />

}


const Main = styled.div`
    grid-area: Logo;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: default;
    img {
        width: ${({ width = '1.5rem' }) => width};
        height: ${({ height = 'auto' }) => height};
        margin-top: -20px;
        @media screen and (max-width: 420px) {
            margin-top: -20px;
            width: ${({ width = '1.2rem' }) => width};
        }
        @media only screen 
        and (min-device-width : 768px) 
        and (max-device-width : 1024px)
        and (-webkit-min-device-pixel-ratio: 1){
            margin-top: -70px;
        }
        // filter: drop-shadow(15px 20px 7px lightgrey);
    }
    h1 {
        color: ${gold_hex};
        font-weight: 600;
        // width: ${({ width = '10rem' }) => width};
        height: ${({ height = 'auto' }) => height};
        text-align: center;
        margin : 0px;
        padding: 0px;
        display: flex;
        font-size: 5rem;
        font-family: Montserrat Alternates, "Trebuchet MS", Arial, sans-serif;
        height: 1.3em;
        
    }
    @media screen and (max-width: 800px) {
        h1 {
            font-size: 3.5rem;
        }
      }
`