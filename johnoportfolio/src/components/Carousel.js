import React from "react";

import LookNCook from "../images/LookNCook.png";
import ProPic from "../images/ProPic.JPG";
import PyramidScheme from "../images/PyramidScheme.PNG";

import Card from "../components/Card.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Look-N-Cook",
          subTitle: "Senior Project in progess",
          imgSrc: LookNCook,
          link: "https://look-n-cook.firebaseapp.com",
          selected: false
        },
        {
          id: 1,
          title: "My Github",
          subTitle: "My projects big and small",
          imgSrc: ProPic,
          link: "https://github.com/JohnO135",
          selected: false
        },
        {
          id: 2,
          title: "My hobbies",
          subTitle: "Check out my crew",
          imgSrc: PyramidScheme,
          link: "https://www.youtube.com/watch?v=4yCOhjTD9-4",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-lg-center">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
