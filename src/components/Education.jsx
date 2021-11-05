import React from 'react'
import { EstiloH2 } from '../styles/H2styled'
import { Container } from './EducationContainer'

const Education = () => {
  return (
    <div>
      
      <div>
        <EstiloH2 name="Education">Estudios</EstiloH2>
        <Container>
            <div className="Education-item">
                <h1>UNAL - <span>2021</span>
                <p>Engineering student</p>
                </h1>
            </div>
        </Container>  
    </div>

    </div>
  )
}

export default Education
