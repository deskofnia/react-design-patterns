import React from "react"
import { IChildren } from "../../../interface/commonInterface"

export const Card = ({ children }: IChildren) => {
    return (
        <div>
            {children}
        </div>
    )
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