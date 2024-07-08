import React from "react"
import { IChildren } from '../../../interface/commonInterface'

export interface IAlert extends IChildren {
    status: string,
}

export const Alert = ({ status, children }: IAlert) => {
    return (
        <div className={status}>
            {children}
        </div>
    )
}

Alert.Title = function AlertTitle({ children }: IChildren) {
    return (
        <span className="alert-title">{children}</span>
    )
}

Alert.Description = function AlertDescription({ children }: IChildren) {
    return (
        <span className="alert-description">{children}</span>
    )
}


