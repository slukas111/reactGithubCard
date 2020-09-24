import React, { Component } from "react";


class Card extends Component {
    render() {
        return (
            <div className="github-profile">
                <img src="/images/Github.PNG" alt="Github-card" />
                <div className="info">
                    <div className="name">Name here..</div>
                    <div className="name">Company here..</div>
                </div>

            </div>
        );

    }
}

export default Card;