import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import MainView from "../../frontend/views/MainLayout";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/MainView">
                <MainView/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;