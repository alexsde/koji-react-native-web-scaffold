import * as React from "react";
import Koji from 'koji-tools';
import HomeComponent from './components/HomeComponent/HomeComponent';

export default class App extends React.Component {
    public componentDidMount() {
        Koji.on('change', () => {
            this.forceUpdate();
        });
    }

    public render(): JSX.Element{
        return (
            <HomeComponent></HomeComponent>
        );
    }
}
