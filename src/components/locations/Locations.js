import React, { Component } from 'react'
import "./locations.css"

export default class Location extends Component {
    render() {
        return (
            <article className="content">
                {/* <section>
                    <h4>Nashville South Location</h4>
                    <h5>500 Doggo Lane</h5>
                </section>
                <section>
                   <h4>Nashville East Location</h4>
                    <h5>500 Good Boy Blvd.</h5> 
                </section> */}

                <section>
                    {
                        this.props.locations.map(location => 
                            <article>
                                {location.name + " "}
                                {location.address}
                            </article>
                        )
                    }
                </section>
                
            </article>
        );
    }

}