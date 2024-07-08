import React from "react"
import { IChildren } from "../../../interface/commonInterface"

export const Modal = ({ children }: IChildren) => {
    return React.Children.map(children, (child: any) => {
        return React.cloneElement(child);
    })
}

const CancelAction = ({ children }: IChildren) => {
    return children;
}

const SaveAction = ({ children }: IChildren) => {
    return children;
}

Modal.CancelAction = CancelAction;
Modal.SaveAction = SaveAction;