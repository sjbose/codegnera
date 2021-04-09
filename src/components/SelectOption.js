import React from 'react';
import chroma from 'chroma-js';

import { colourOptions } from '../data/reactSelectOptions';
import { ReactSelect } from '../styles/ContactFormCTA.elemets'


const colourStyles = {
    control: styles => ({
        ...styles, backgroundColor: 'white',
        font: `normal 400 1em/ 1.2 'Poppins', sans-serif`,

    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? null
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : null,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor:
                    !isDisabled && (isSelected ? data.color : color.alpha(0.3).css()),


            },


        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
            padding: '10px 18px',
            font: `normal 400 1em/ 1.2 'Poppins', sans-serif`,
            borderRadius: '999px'
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};
const SelectOption = () => {
    return (
        <ReactSelect
            closeMenuOnSelect={false}
            defaultValue={[colourOptions[0]]}
            isMulti
            options={colourOptions}
            styles={colourStyles}
            o

        />
    )
}

export default SelectOption
