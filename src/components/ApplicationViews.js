import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/Animals'
import LocationList from './locations/Locations'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


export default class ApplicationViews extends Component {

// Moved to JSON file
    // employeesFromAPI = [
    //     { id: 1, name: "Jessica Younker" },
    //     { id: 2, name: "Jordan Nelson" },
    //     { id: 3, name: "Zoe LeBlanc" },
    //     { id: 4, name: "Blaise Roberts" }
    // ]

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

    // owners = [
    //     { id: 1, name: "Brunhilde Spellman", phoneNumber: "622-651-6578"},
    //     { id: 2, name: "Allegedly Beverly", phoneNumber: "555-555-5555"},
    //     { id: 3, name: "Damnit Kevin", phoneNumber: "985-656-9742"},
    //     { id: 4, name: "D a v e", phoneNumber: "985-336-6522"}
    // ]

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees"))
            .then(r => r.json())
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations"))
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners"))
            .then(r => r.json())
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then (e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then (e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }

    // deleteFunction = (id, resource) => {
    //     return fetch('http://localhost:5002/${resource}/${id}', {
    //         method: "DELETE"
    //     })
    //     .then(e => e.json())
    //     .then(() => fetch(`http://localhost:5002/${resource}`))
    //     .then(e => e.json())
    //     .then(r => this.setState({
    //         [resource]: r 
    //     }))
    // }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}