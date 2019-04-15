import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <article className="content">
                <h1>Employee List</h1>
                {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button
                            onClick={() => this.props.deleteEmployee(employee.id)}> Delete</button>
                    </div>
                )
            }
            </article>
        );
    }
}