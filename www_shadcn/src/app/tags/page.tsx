'use client'
import React from 'react';
import ReactTags from "react-tag-input/types/components/ReactTags";
import {Tag} from "react-tag-input/types/components/SingleTag";

export default function Page() {
    const KEYS = {
        ENTER: [10, 13],
        TAB: 9,
        BACKSPACE: 8,
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        ESCAPE: 27,
        SPACE: 32,
        COMMA: 188,
    };

    const SEPARATORS = {
        ENTER: 'Enter',
        TAB: 'Tab',
        COMMA: ',',
        SPACE: ' ',
        SEMICOLON: ';',
    };
    // With labelField of `name`
    const suggestions: Tag[] = [
        {id: "1", key: "mango", className: "mango"},
        {id: "2", key: "pineapple",className: "mango"},
        {id: "3", key: "orange",className: "mango"},
        {id: "4", key: "pear",className: "mango"}
    ];
    return (
        <ReactTags placeholder="Add tags" labelField="name"
                   allowUnique={true}
                   autocomplete={true}
                   allowAdditionFromPaste={true}
            allowDeleteFromEmptyInput={true}
            allowDragDrop={false}
            suggestions={suggestions}
            separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
            inputFieldPosition="bottom"
            editable
            clearAll
            maxTags={7}></ReactTags>
    );
};


