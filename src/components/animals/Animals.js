import React, { Component } from 'react'
import dog from './DogIcon.svg'
import './Animals.css'

export default class Animals extends Component {
    render() {
        return (
            <section className="content animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="dogIcon" />
                                {animal.name}
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)} className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
    )
  }
}
