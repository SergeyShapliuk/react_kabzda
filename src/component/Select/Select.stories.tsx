import React, {ChangeEvent, useState} from "react";
import Select from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: "Select",
    component: Select

}


export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <>
        < Select
            onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},]}
        />
    </>
}
export const WithOutValue = () => {
    const [value, setValue] = useState(null)
    return <>
    <Select onChange={setValue}
            value={value}
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moscow"},
                {value: "3", title: "Kiev"},

            ]}/>
    </>
}

export const GetValueOfControlledSelect = () => {
    let [value, setValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    return <div>
        <select value={value} onChange={onChange}>
            <option value={0}>none</option>
            <option value={1}>Minsk</option>
            <option value={2}>Moscow</option>
            <option value={3}>Kiev</option>
        </select>
    </div>
};