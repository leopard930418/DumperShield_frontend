
import { immediateToast } from "izitoast-react";
import {
    EventEmitter
} from "events";

class NotificationConfig extends EventEmitter {


    info(message) {
        immediateToast("info", {
            message: message,
            timeout: 5000,
            position: 'topRight'
        });
    }

    error(message) {
        immediateToast("error", {
            message: message,
            timeout: 5000,
            position: 'topRight'
        });
    }

    warning(message) {
        immediateToast("warning", {
            message: message,
            timeout: 5000,
            position: 'topRight'
        });
    }

    success(message) {
        immediateToast("success", {
            message: message,
            timeout: 5000,
            position: 'topRight'
        });
    }

    // handleActions(action) {
    //     switch (action.type) { }
    // }

}


const notificationConfig = new NotificationConfig();
export default notificationConfig;