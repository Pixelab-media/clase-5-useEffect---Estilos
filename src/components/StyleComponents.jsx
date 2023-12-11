import style from "styled-components"

function StyleComponents() {

    //tengo todo en un solo componente, html, css, JS
    // le puedo pasar variables
    //le puedo pasar funciones
    // le puedo pasar props
    //podemos hacer condicionales
    //todo lo que se nos ocurra de JS

    let colorFondo = "gray"
    const tiempoTransicion = (tiempo) => `all ${tiempo} ease-out`

    const NuevoH1 = style.h1`
    background-color: ${colorFondo};
    font-size: ${(props) => props.font};
    transition: ${tiempoTransicion("2s")};
    &:hover{
        color: white
    }
    `


    return (
        <>
            <NuevoH1 font="40px" >Css Style Components</NuevoH1>
            <NuevoH1 font="20px" >Css Style Components</NuevoH1>
        </>

            
    )


}

export default StyleComponents