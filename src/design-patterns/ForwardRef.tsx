import React, { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react'


const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<{}>>((props, ref) => (
    <input {...props} type="text" ref={ref} />
));

const ForwardRef = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, []);

    return <CustomInput ref={inputRef} />;
}

export default ForwardRef
