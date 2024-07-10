import React from "react"
import { IChildren } from "../../../interface/commonInterface"

export const Card = ({ children }: IChildren) => {
    return React.Children.map(children, (child: any) => {
        return React.cloneElement(child);
    })
}

Card.Img = function CardImg({ props }: any) {
    return (
        <img  {...props} alt="gallary" />
    )
}

Card.Body = function CardBody({ children }: IChildren) {
    return React.Children.map(children, (child: any) => {
        return React.cloneElement(child);
    })
}

Card.Title = function CardTitle({ children }: IChildren) {
    return <p>{children}</p>
}

Card.Text = function CardText({ children }: IChildren) {
    return <p>{children}</p>
}

export function Button({ props, children }: any) {
    return <button {...props}>{children}</button>
}