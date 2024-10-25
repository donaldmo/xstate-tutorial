import { createMachine } from "xstate";

export const myMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAtADZ0AT0FDkaEMXLVadAHTZ2ACSwA3MACdIjFm07c+iACwAmMYgAcARkWmAnM8cB2IQAYPjgMzefUuiylDT0ihSaOnpIzKwcXDwx-AgArKYOjua2dn7W5qamHj5WCLaFil6Vpj7WduY1UlJAA */
    initial: "notHovered",
    states: {
        notHovered: {
            on: {
                MOUSEOVER: {
                    target: 'hovered'
                }
            }
        },
        hovered: {
            on: {
                MOUSEOUT: {
                    target: 'notHovered'
                }
            }
        }
    }
})