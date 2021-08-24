import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='about'>


                <div className="details">
                    <h2 className="details__heading">A little about myself</h2>
                    <p className="details__paragraph">
                        I was born in hawaii although i grew up in dominican republic then after a few years I came back to the united states,
                        from here i joined the military basically I been in the US Army for about 8 years and then i started my college career.

                        I did college at Platt College and i got an associate's of graphic design and now i'm currently working on web development at Bottega Tech.
                    </p>
                </div>

                <div className="details">
                    <h2 className="details__heading">Why I decided to be a web developer</h2>
                    <p className="details__paragraph">
                        I decided to start about web development due to a class I took from Platt College, it was a simple class and it taught me how to use html and css
                        then after a few years i decided to go on ahead and start web development in which in turn i started the full stack class in Bottega Tech.
                    </p>
                </div>



            </div>
        )
    }
}

export default About;