import React from "react";
import ContentItem from "../ContentItem";
import httpClient from "../../../utils/HttpClient";
import toast, {Toaster} from "react-hot-toast";

export default class ContentList extends React.Component {
    state = {
        data: []
    }
    _Mounted=false;
    componentDidMount = async () => {
        if (!this._Mounted) {
            this._Mounted=true;
            try {
                const response = await httpClient.get('/recommend');
                this.setState({data:response});
            } catch (error) {
                debugger;
                toast.error("error");
            }
        }
    }

    render() {
        const contentItems = this.state.data;
        return (
            <div className="grid grid-rows-1 flex-1 bg-[#fff]">
                <Toaster
                    position="top-center"
                    reverseOrder={true}
                />
                {contentItems.map(item => (
                    <ContentItem item={item}/>
                ))}
            </div>


        );
    }
}