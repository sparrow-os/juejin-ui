'use client'
import React, { useCallback, useRef, useState } from 'react'
import ReactTags from'react-tag-autocomplete'
interface Tag {
    id: number
    name: string
}
export default function Page() {
        const [tags, setTags] = useState<Tag[]>([])
        const [suggestions, setSuggestions] = useState<Tag[]>([
            { id: 1, name: "Apples" },
            { id: 2, name: "Pears" },
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" }
        ])
        const reactTags = useRef<any>()
        const onDelete = useCallback((tagIndex:number) => {
            setTags(tags.filter((_, i) => i !== tagIndex))
        }, [tags])
        const onAddition = useCallback((newTag:any) => {
            let newTags: Tag[] = [...tags, newTag]
            setTags(newTags);
        }, [tags])

        return (
            <ReactTags classNames={{
                root: 'react-tags border border-gray-300 rounded-md',
                rootFocused: 'is-focused border-blue-500 focus:border-blue-500',
                selected: 'react-tags__selected text-gray-700 bg-gray-200 rounded-md px-2 py-1 mr-2 mb-2',
                selectedTag: 'react-tags__selected-tag',
                selectedTagName: 'react-tags__selected-tag-name',
                search: 'react-tags__search',
                searchInput: 'react-tags__search-input',
                suggestions: 'react-tags__suggestions',
                suggestionActive: 'is-active',
                suggestionDisabled: 'is-disabled'
            }}
                ref={reactTags}
                tags={tags}
                suggestions={suggestions}
                onDelete={onDelete}
                onAddition={onAddition}
                       onkeydown={(e:any) => {
                if (e.key === 'Backspace' && reactTags.current.input.value === '') {
                    e.preventDefault()
                    onDelete(tags.length - 1)
                }
            }}
            />
        )
};


