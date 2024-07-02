import React from 'react'

const P = (props: any) => {
    const { color, size, children, ...rest } = props;
    return (
        <p style={{ color, fontSize: size }} {...rest}>
            {children}
        </p>
    );
}

const PropCombination = () => {
    const paragraphProps = {
        color: "red",
        size: "20px",
        lineHeight: "22px",
    };

    return (
        <P {...paragraphProps}>This is a P</P>
    )
}

export default PropCombination
