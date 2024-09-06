'use client'
import React from "react";
import COUNTRIES from "./countries";
import {WithContext as ReactTags, SEPARATORS, KEYS} from "@/components/ui/tags";
import "./styles.scss";
import {Tag} from "@/components/ui/tags/components/SingleTag";
import {UseFormSetValue} from "react-hook-form/dist/types/form";
import {FormData} from "@/schema/play-ground";


const suggestions = COUNTRIES.map((country) => {
    return {
        id: country,
        text: country,
        className: "",
    };
});

const Tags = (setValue:UseFormSetValue<FormData>) => {
    const [tags, setTags] = React.useState<Array<Tag>>([
    ]);

    const handleDelete = (index: number) => {
        const newTags=tags.filter((_, i) => i !== index);
        setTags(newTags);
        setValue("tags", newTags.join(","));
    };

    const onTagUpdate = (index: number, newTag: Tag) => {
        const updatedTags = [...tags];
        updatedTags.splice(index, 1, newTag);
        setTags(updatedTags);
        setValue("tags", updatedTags.join(","));
    };

    const handleAddition = (tag: Tag) => {
        const newTags = [...tags, tag];
        setTags(newTags);
        setValue("tags", newTags.join(","));
    };

    const handleDrag = (tag: Tag, currPos: number, newPos: number) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        // re-render
        setTags(newTags);
        setValue("tags", newTags.join(","));
    };

    const handleTagClick = (index: number) => {
        console.log("The tag at index " + index + " was clicked");
    };

    const onClearAll = () => {
        setTags([]);
    };
    return (

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
                    maxTags={7}
                    onClearAll={onClearAll}
                    allowAdditionFromPaste
                />
    );
};
export default Tags;
