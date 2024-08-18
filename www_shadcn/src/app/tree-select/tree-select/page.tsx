'use client'
import React, {useEffect, useState} from "react";
import {TreeSelect, TreeSelectChangeEvent} from 'primereact/treeselect';
import {TreeNode} from 'primereact/treenode';
import {NodeService} from "@/app/tree-select/tailwindcss-tree-select/service/NodeService";
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>();
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>("");

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);


    function onNodeClick(event: TreeSelectChangeEvent) {
        setSelectedNodeKey(event.value);
    }

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)}
                        className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
