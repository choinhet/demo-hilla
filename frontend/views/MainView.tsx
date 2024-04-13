import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import React from "react";
import {Button} from "@hilla/react-components/Button";


const MainView = () => {
     return (
        <VerticalLayout theme="spacing padding">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
        </VerticalLayout>
    );
}

export default MainView;