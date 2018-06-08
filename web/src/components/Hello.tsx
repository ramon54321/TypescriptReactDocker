import * as React from "react";

export interface HelloProps {
    compiler: string
    framework: string
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<{}, {}> {
    log = () => {
        console.log("Clicked")
    }
    render() {
        return <h1 onClick={() => this.log()}>Hello from the other side!</h1>;
    }
}
