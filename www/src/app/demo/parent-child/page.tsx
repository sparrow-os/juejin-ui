'use client'
import React, { useRef} from 'react';
import ChildComponent from "./Child";

// 父组件
const ParentComponent = () => {
    const childRef = useRef(null);
    const handleButtonClick = () => {
        if (childRef.current) {
            //console.log(childRef.current.getChildState()); // 获取子组件的状态值
        }
    };

    return (
        <div>
            https://segmentfault.com/q/1010000044038544

            要通过 ref 获取到子组件内的状态，需要使用 React.forwardRef() 来转发 ref 到子组件，并且要在子组件里使用useImperativeHandle配置返回的ref对象的内容。
            这样，子组件就可以将 ref 关联到内部的状态，从而使父组件能够获取到该状态。

            <h2> 注意一定要有layout  tsx 否则事件无法运行</h2>
            <ChildComponent ref={childRef} />
            <button onClick={handleButtonClick}>Get Child State</button>
        </div>
    );
};

export default ParentComponent;