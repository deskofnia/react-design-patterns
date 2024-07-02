import React from 'react'
import { useGetCharacterList } from '../hooks/characterList';
import CharacterList from '../components/CharacterList';

const ComponentCompositionWithHooks = () => {

    const { characters, isLoading, error } = useGetCharacterList();

    return (
        <CharacterList loading={isLoading} error={error} characters={characters} />
    );
}

export default ComponentCompositionWithHooks
