import {VerticalLayout} from "@hilla/react-components/VerticalLayout";
import React, {useCallback} from "react";
import {Button, ButtonElement} from "@hilla/react-components/Button";
import {Notification} from "@hilla/react-components/Notification";

export default function MainView() {
    const onButtonClick = useCallback((event: React.MouseEvent<ButtonElement, MouseEvent>) => {
        const buttonName = event.currentTarget.textContent
        Notification.show(`${buttonName} clicked!`, {
            position: 'middle',
            duration: 1000,
            theme: 'success',
        })
    }, []);

    return (
        <VerticalLayout
            theme="spacing padding"
            className="height-4xl"
            style={{ justifyContent: 'center' }}
        >
            <Button onClick={onButtonClick}>Button 1</Button>
            <Button onClick={onButtonClick}>Button 2</Button>
            <Button onClick={onButtonClick}>Button 3</Button>
        </VerticalLayout>
    );
}
