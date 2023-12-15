'use client'
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// 子组件
const ChildComponent = forwardRef((props, ref) => {
    const [childState, setChildState] = React.useState('Hello from child!');

    // 暴露方法给父组件，以便获取子组件内的状态
    useImperativeHandle(ref, () => ({
        getChildState: () => childState,
    }));
    return (
        <div>
            <p>{childState}</p>
            <button onClick={() => setChildState('Updated state')}>Update State</button>
        </div>
    );
});

export default ChildComponent;