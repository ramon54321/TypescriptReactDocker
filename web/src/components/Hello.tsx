import * as React from "react";

export interface HelloProps {
    compiler: string
    framework: string
}

export class Hello extends React.Component<{}, {}> {
    log = () => {
        console.log("Clicked")
    }
    render() {
        return <h1 onClick={() => this.log()}>Hello from the other side!</h1>;
    }
}
