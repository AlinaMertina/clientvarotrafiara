import React from 'react';
import { Link } from 'react-router-dom';
import './../css/styles.css';
import Firstheader from '../components/accueil/Firstheader';
import FiltreAccuille from './FiltreAccuille';
import Presentation from './Presentation';
function Contente1() {
    return (
        <div className='c1_background'>
                <FiltreAccuille></FiltreAccuille>
        </div>
    );
}
export default Contente1;