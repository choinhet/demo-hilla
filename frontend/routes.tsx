import MainView from 'Frontend/views/MainView.js';
import {createBrowserRouter, IndexRouteObject, NonIndexRouteObject} from 'react-router-dom';

export type MenuProps = Readonly<{
    icon?: string;
    title?: string;
}>;

export type ViewMeta = Readonly<{ handle?: MenuProps }>;

type Override<T, E> = Omit<T, keyof E> & E;

export type IndexViewRouteObject = Override<IndexRouteObject, ViewMeta>;
export type NonIndexViewRouteObject = Override<
    Override<NonIndexRouteObject, ViewMeta>,
    {
        children?: ViewRouteObject[];
    }
>;
export type ViewRouteObject = IndexViewRouteObject | NonIndexViewRouteObject;

export const routes: readonly ViewRouteObject[] = [
    {
        path: '/',
        element: <MainView/>,
    },
];

const router = createBrowserRouter([...routes]);
export default router;
