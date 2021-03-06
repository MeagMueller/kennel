import React, { Component } from 'react'


export default class OwnersList extends Component {
    render() {
        return (
            <article className="content">
                <h1>Owners List</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name + ": "}
                            {owner.phoneNumber}
                            <button
                                    onClick={() => this.props.deleteOwners(owner.id)} >Delete</button>
                        </div>)
                }
            </article>
        )
    }
}