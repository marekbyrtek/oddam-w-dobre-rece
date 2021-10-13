import React, { useContext } from "react";
import { Tab, ListGroup } from "react-bootstrap";
import { ListContext } from "./HomeWhoWeHelp";

const WhoWeHelpSwitch = () => {
    const {  setApiList } = useContext(ListContext)
    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <ListGroup horizontal>
                <ListGroup.Item as="button" onClick={() => setApiList("foundations")} action href="#link1">
                    Fundacjom
                </ListGroup.Item>
                <ListGroup.Item as="button" onClick={() => setApiList("organizations")} action href="#link2">
                    Organizacjom pozarządowym
                </ListGroup.Item>
                <ListGroup.Item as="button" onClick={() => setApiList("local")} action href="#link3">
                    Lokalnym zbiórkom
                </ListGroup.Item>
            </ListGroup>
        </Tab.Container>
    )
}

export default WhoWeHelpSwitch;
