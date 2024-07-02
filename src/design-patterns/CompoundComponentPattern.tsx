import React, { createContext, useContext, useState } from 'react'

const ToggleContext = createContext<{ on: boolean, toggle: () => void }>({})

const Toggle = ({ children }: any) => {
    const [on, setOn] = useState(false);
    const toggle = () => setOn(!on);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

Toggle.On = function ToggleOn({ children }: any) {
    const { on } = useContext(ToggleContext);
    return on ? children : null;
};

Toggle.Off = function ToggleOff({ children }: any) {
    const { on } = useContext(ToggleContext);
    return on ? null : children;
};

Toggle.Button = function ToggleButton(props: any) {
    const { on, toggle } = useContext(ToggleContext);
    return <button onClick={toggle} {...props} />;
};


export const CompoundComponentPattern = () => {
    return (
        <Toggle>
            <Toggle.On>The button is on</Toggle.On>
            <Toggle.Off>The button is off</Toggle.Off>
            <Toggle.Button>Toggle</Toggle.Button>
        </Toggle>
    )
}



// -------------example two--------------

// parent component

const Toggle = ({ children }: any) => {
    const [isOn, setIsOn] = useState(false)

    const toggle = () => {
        setIsOn((prevIsOn) => !prevIsOn);
    }

    // clone the children and pass the toggle function and state to them
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { isOn, toggle });
        }
        return child;
    });

    return <div>{childrenWithProps}</div>
}


// child component for the toggle button
const ToggleButton = ({ isOn, toggle }) => {
    return (
        <button onClick={toggle}>
            {isOn ? "Turn Off" : "Turn On"}
        </button>
    )
}

// child component for the toggle status
const ToggleStatus = ({ isOn }) => {
    return <p>The toggle is {isOn ? "on" : "off"}.</p>
}

// Main component where you use the compound components
const App = () => {
    return (
        <Toggle>
            <ToggleStatus />
            <ToggleButton />
        </Toggle>
    );
};

export default App;