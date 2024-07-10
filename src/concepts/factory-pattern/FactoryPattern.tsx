import React from 'react'
import DateFilter from './utils/DateFilter'
import CategoryFilter from './utils/CategoryFilter'
import NoFilter from './utils/NoFilter'

interface IFilter {
    type: string
}

// version 1

const createFilter = (filter: IFilter) => {
    switch (filter.type) {
        case "dates":
            return <DateFilter />
        case "category":
            return <CategoryFilter />
        default:
            return <NoFilter />
    }
}

function App({ filter }: { filter: IFilter }) {
    return createFilter(filter)
}


// version 2

const filterFactories = {
    "dates": <DateFilter />,
    "category": <CategoryFilter />,
}

type tt = keyof typeof filterFactories;

const FactoryPattern = ({ filter }: { filter: IFilter }) => {
    return filterFactories[filter.type as tt] ?? <NoFilter />
}

export default FactoryPattern
