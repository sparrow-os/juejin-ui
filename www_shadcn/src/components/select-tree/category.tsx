import React, {useEffect, useState} from "react";
import {
    TreeSelect,
    TreeSelectChangeEvent,
    TreeSelectPassThroughOptions,
    TreeSelectPassThroughTransitionType,
} from 'primereact/treeselect';
import {TreeNode} from 'primereact/treenode';
import {NodeService} from "@/components/select-tree/data-service";
import {PrimeReactProvider, PrimeReactPTOptions} from "primereact/api";
import classNames from "classnames";
import {
    TreeContext,
    TreePassThroughMethodOptions,
    TreePassThroughOptions
} from "primereact/tree";

const TRANSITIONS: TreeSelectPassThroughTransitionType = {
    timeout: 200,
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
type TreePassThroughMethodOptionsWithLeaf = Omit<TreePassThroughMethodOptions, "context"> & {
    context: TreeContext & {
        isLeaf: boolean;
    }
}
const treeSelectPassThroughOptions: TreeSelectPassThroughOptions = {
    root: ({props}: { props: any }) => ({
        className: classNames('inline-flex cursor-pointer select-none',
            'bg-white  dark:bg-gray-900 border border-solid border-gray-300 h-[32px] dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
            'w-full',
            {
                'opacity-60 select-none cursor-default': props?.disabled
            })
    }),
    header:{className:"hidden border border-solid border-red-950"},
    labelContainer: {
        className: classNames('overflow-hidden flex flex-auto cursor-pointer')
    },
    label: {
        className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'px-4 py-1 transition duration-200')
    },
    trigger: {
        className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg')
    },
    panel: {
        className: classNames('bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
    },
    wrapper: {
        className: classNames('max-h-[200px] overflow-auto', 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
    },
    transition: TRANSITIONS.overlay
}

const treePassThroughOptions: TreePassThroughOptions = {
    root: {
        className: classNames('max-w-[30rem] md:w-full', 'pointer-events-auto border border-solid border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 p-1 rounded-md')
    },

    container: {className: 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg'},
    node: {className: 'p-0 outline-none'},
    content: ({context, props}: TreePassThroughMethodOptions) => ({
        className: classNames(
            'flex items-center',
            'rounded-lg transition-shadow duration-200 p-1',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            {'bg-blue-50 text-blue-600': context.selected},
            {'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple'}
        )
    }),
    toggler: ({context}: TreePassThroughMethodOptionsWithLeaf) => ({
        className: classNames(
            'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
            'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
            'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            {
                'text-gray-500 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-800 dark:hover:text-white/80': !context.selected,
                'text-blue-600 hover:bg-white/30': context.selected
            },
            {
                invisible: context.isLeaf
            }
        )
    }),
    subgroup: {
        className: classNames('m-0 list-none', 'p-0 pl-4')
    },
    header: {className:"border border-solid border-red-900"},
    input: {
        className: classNames(
            'm-0 p-1 text-base w-full pr-7',
            'font-sans text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
        )
    },

}

const Tailwind: PrimeReactPTOptions = {
    treeselect: treeSelectPassThroughOptions,
    tree: treePassThroughOptions
}


export default function CategoryTree() {
    const [nodes, setNodes] = useState<TreeNode[]>();
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>("");

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);


    function onNodeClick(event: TreeSelectChangeEvent) {
        setSelectedNodeKey(event.value);
    }

    return (
        <PrimeReactProvider value={{unstyled: true, pt: Tailwind}}>
            <TreeSelect  value={selectedNodeKey}
                        options={nodes}
                        onChange={onNodeClick}
                        data-pr-classname="border-secondary-lighter"
                        className=""
                        placeholder="请选择类别"></TreeSelect>
        </PrimeReactProvider>
    );
}
