import {PrimeReactProvider} from "primereact/api";
import App from "@/components/src/App";

export default function Page() {


    return (
        <div>
            <PrimeReactProvider>
                <App />
            </PrimeReactProvider>
        </div>
    )
};