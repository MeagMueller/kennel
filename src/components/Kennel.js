// import React, { Component } from 'react'
// import EmployeeList from "./employee/EmployeeList"
// import Animals from "./animals/Animals"
// import LocationList from "./locations/Locations"

import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Kennel.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}


// All of this information has been moved to ApplicationViews.js - this becomes container component

// export default class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//                 <LocationList />
//                 <EmployeeList />
                
//             </div>
//         );
//     }

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */

    

    // employeesFromAPI = [
    //     { id: 1, name: "Jessica Younker" },
    //     { id: 2, name: "Jordan Nelson" },
    //     { id: 3, name: "Zoe LeBlanc" },
    //     { id: 4, name: "Blaise Roberts" }
    // ]

    // // This will eventually get pulled from the API
    // locationsFromAPI = [
    //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
    //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    // ]

    // animalsFromAPI = [
    //     { id: 1, name: "Doggle", breed: "Husky"},
    //     { id: 2, name: "Puppo", breed: "Mix"},
    //     { id: 3, name: "Lord Fluffington the 3rd", breed: "Cavalier King Charles"},
    //     { id: 4, name: "Woofer", breed: "Samoyed"},
    //     { id: 5, name: "Subwoofer", breed: "Shiba Inu"}
    // ]

    // state = {
    //     employees: this.employeesFromAPI,
    //     locations: this.locationsFromAPI,
    //     animals: this.animalsFromAPI
    // }

    // render() {
    //     return (
    //         <article className="kennel">
    //             <LocationList locations={this.state.locations} />
    //             <EmployeeList employees={this.state.employees} />
    //             <Animals animals={this.state.animals} />
    //         </article>
    //     )
    // }

