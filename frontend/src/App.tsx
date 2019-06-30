import * as React from "react";
import Koji from 'koji-tools';
import HomePage from './pages/HomePage/HomePage';

export default class App extends React.Component {
    public componentDidMount() {
        Koji.on('change', () => {
            this.forceUpdate();
        });
    }

    public render(): JSX.Element{
        return (
            <HomePage></HomePage>
        );
    }
}
