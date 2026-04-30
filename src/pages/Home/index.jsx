import { useState } from 'react'
import './style.css'
import { Route , Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'Exercicios' from './Exercicios/pages' 


function Home () {
    return (
        <>
        <Header>
            <h1>Avaliação</h1>
            <Routes>
                <Route path='./Exercicios' >
                
                
                <Link to='/'> {Home} 
                <button>exercicio8</button>
                </Link>

                </Route>
            </Routes>

        </Footer>
           

        </>

    )

}
export default Home