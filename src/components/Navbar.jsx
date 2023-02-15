import React from "react";
import styled from "styled-components";

function Navbar() {
    return (
        <>
            <NavContainer>
                <div className="container">
                    <h1>ALLBEERS</h1>
                    <ul className="items">
                        <li>
                            <a href="">Productos</a>
                        </li>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                        <div className="boton-carrito">
                            <button>CARRITO<p>Productos: 0</p></button>
                        </div>
                    </ul>
                </div>
            </NavContainer>
        </>
    );
}

export default Navbar

const NavContainer = styled.nav`
    *{
        margin: 0;
        padding: 0;
    }

    .container{
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: darkred;

        h1{
            text-align: start;
            margin: auto;
            font-size: 40px;
            font-style: italic;
            color: gold;
        }
        .items{
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            li{
                a{
                    text-decoration: none;
                    color: whitesmoke;
                    font-size: 20px;
                    background-image: linear-gradient(currentColor, currentColor);
                    background-repeat: no-repeat;
                    background-size: 0% 2px;
                    background-position: bottom;
                    transition: 0.3s;
                    transform-origin: center;
                }
                a:hover{
                    background-size: 100% 2px;
                }
            }

            .boton-carrito{
                display: flex;
                flex-direction: row;
                align-items: center;

                button{
                    width: 150px;
                    height: 50px;
                    color: darkred;
                    background-color: whitesmoke;
                }

                button:active{
                    background-color: lightgray;
                }

                p{
                    color: darkred;
                }
            }
        }
    }
`