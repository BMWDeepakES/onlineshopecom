import React from "react";
import { Button, ToastContainer, toast } from "react-bootstrap";

function ToastContainerComponent() {

    const btnHandle = () => {
        toast("Pass Any message");
    }

    return (
        <div>
            <ToastContainer/>
            <Button color="warning" outline onClick={btnHandle}>

            </Button>
        </div>
    );
}

export default ToastContainerComponent;