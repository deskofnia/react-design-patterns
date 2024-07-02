import React from 'react'

type IProps = { name?: string, description: string }

const withHigherOrderComponent = (Component: any) => {
    return (props: IProps) => {
        const name = "Dv";
        return (
            <Component  {...props} name={name} />
        )
    }
}

// component to display data
const AvatarComponent = (props: { name: string, description: string }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="rounded-full bg-red p-4">
                {props.name}
            </div>
            <div>
                <p>I am a {props.description}.</p>
            </div>
        </div>
    )
}

// wrap the component with HOC
const SampleHOC = withHigherOrderComponent(AvatarComponent);

const HigherOrderComponentPattern = () => {
    return (
        <div>
            <SampleHOC description="Frontend Engineer" />
        </div>
    )
}

export default HigherOrderComponentPattern
