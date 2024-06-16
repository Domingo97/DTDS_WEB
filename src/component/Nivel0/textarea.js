import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Textars = () => {
    const [explpro, setExplpro] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica para enviar los datos del formulario
    };

    return (
        <div style={{ marginTop: '100px', width: '150px', marginLeft: '-520px' }}>
            <label style={{ width: '1000px'}}>Explicacion del problema:</label> <br />
            <textarea style={{width: '1000px', height:'200px'}}
                type="text"
                value={explpro}
                onChange={(e) => setExplpro(e.target.value)}
                placeholder="Exponga su problema"
            />
        </div>

    );
};

export default Textars;