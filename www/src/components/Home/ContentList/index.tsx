import React from "react";
import ContentItem, {ContentItemProp} from "../ContentItem";
import axios from "axios";

export default class ContentList extends React.Component {
    state = {
        code:0,
        data: []
    }

    componentDidMount = async () => {
        try {
            const response = await axios.get('http://juejin.sparrowzoo.com/article/published');  //请求地址加上api1
            this.setState(response.data)
        } catch (error) {

        }
    }

    render() {
        const contentItems = this.state.data;
        return (
            <div className="grid grid-rows-1 flex-1 bg-[#fff]">
                {contentItems.map(item => (
                    <ContentItem item={item}/>
                ))}
            </div>
        );
    }
}