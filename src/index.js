import './index.css';
import './components/Kennel.css'

import ReactDOM from 'react-dom';
import React from 'react';
import Kennel from "./components/Kennel"
import { BrowserRouter as Router } from "react-router-dom"

// class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//                 <EmployeeList />
//             </div>
//         );
//     }
// }

// class EmployeeList extends Component {
//     render() {
//         return (
//             <article>
//                 <h1>Employee List</h1>
//                 <section>Jessica Younker</section>
//                 <section>Jordan Nelson</section>
//                 <section>Zoe LeBlanc</section>
//                 <section>Blaise Roberts</section>
//             </article>
//         );
//     }
// }

ReactDOM.render(<Router><Kennel /></Router>, document.getElementById('root'));
