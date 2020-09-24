import React, { Component } from "react";

const testData = [
    { name: "Diego Fernandes", avatar_url: "https://avatars2.githubusercontent.com/u/2254731?v=4", company: "@Rocketseat " },
    { name: "George Anderson", avatar_url: "https://avatars1.githubusercontent.com/u/621?v=4", company: "BenevolentCode LLC" },
    { name: "Jess Brown", avatar_url: "https://avatars0.githubusercontent.com/u/91473?v=4", company: "Brown Web Design" }
]
const CardList = (props) => (
    <div>
        <Card {...testData[0]} />
        <Card {...testData[1]} />
        <Card {...testData[2]} />
    </div>
);


class Card extends Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} alt="Github-card" />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>

            </div>
        );

    }
}

export default CardList;
