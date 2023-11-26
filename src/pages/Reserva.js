import { InlineWidget } from "react-calendly";
export default function Reserva() {
    return (
        <div className="AppClass">
            {/*<h className="HeaderClass">  <p> Reserva en construcción...</p> </h>*/}
            <InlineWidget url="https://calendly.com/annavehi" />
        </div>
    )
}