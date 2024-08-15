'use client'
import React from "react";
import COUNTRIES from "./countries";
import {WithContext as ReactTags, SEPARATORS, KEYS} from "@/components/ui/tags";
import "./styles.scss";
import {Tag} from "@/components/ui/tags/components/SingleTag";

const suggestions = COUNTRIES.map((country) => {
    return {
        id: country,
        text: country,
        className: "",
    };
});

const Tags = () => {
    const [tags, setTags] = React.useState<Array<Tag>>([
        {id: "India", text: "India", className: ""},
        {id: "Vietnam", text: "Vietnam", className: ""},
        {id: "Turkey", text: "Turkey", className: ""},
    ]);

    const handleDelete = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const onTagUpdate = (index: number, newTag: Tag) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1, newTag);
        setTags(updatedTags);
    };

    const handleAddition = (tag: Tag) => {
        setTags((prevTags) => {
            return [...prevTags, tag];
        });
    };

    const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = (index: number) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const onClearAll = () => {
        setTags([]);
    };

    return (
            <div>
                <ReactTags
                    labelField={"text"}
                    tags={tags}
                    inputFieldPosition="top"
                    suggestions={suggestions}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    onTagUpdate={onTagUpdate}
                    editable
                    clearAll
                    onClearAll={onClearAll}
                    maxTags={7}
                    allowAdditionFromPaste
                />
            </div>
    );
};
export default Tags;
