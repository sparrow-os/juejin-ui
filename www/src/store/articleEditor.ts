// https://tiven.cn/p/fb3cbc64/
//https://docs.pmnd.rs/zustand/guides/typescript

import create from "zustand";

interface ArticleForm {
    title: string;
    category: number;
    tagIds: number[];
    coverImage: string;
    abstracts: string;
    content: string;
    open: boolean;
    setCategory: (category: number) => void;
    setContent: (content: string) => void;
    setAbstract: (abstracts: string) => void;
    setTitle: (title: string) => void;
    setCoverImage: (imageCover: string) => void;
    setTagIds: (tagIds: number[]) => void;
    openDialog: () => void;
    closeDialog: () => void;
}

export const useArticleForm = create<ArticleForm>()((set, get) => (
    {
        title: '',
        category: -1,
        tagIds: [],
        coverImage: '',
        abstracts: '',
        content: '',
        open: false,
        setCategory: (c: number) => set((state) => ({category: c})),
        setCoverImage: (img: string) => set((state) => ({coverImage: img})),
        setContent: (c: string) => set((state) => ({content: c})),
        setAbstract: (a: string) => set((state) => ({abstracts: a})),
        setTagIds: (t: number[]) => set((state) => {
            return {...state, tagIds: t}
        }),
        setTitle: (t: string) => set((state) => ({title: t})),
        openDialog: () => set((state) => ({open: true})),
        closeDialog: () => set((state) => ({open: false})),
    }));
