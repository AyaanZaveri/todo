import React from 'react'
import { useState } from 'react';
import * as HeroIcons from '@heroicons/react/outline'
import PropTypes from 'prop-types';

const Input = (props) => {

    const [text, setText] = useState('')

    return (
        <div className='flex justify-center'>
        <input onChange={(e) => setText(e.target.value)} placeholder={ props.placeholder } class={`focus:ring-${ props.color.toLowerCase() } w-${props.width} text-gray-500 shadow-sm appearance-none inline-flex items-center px-${ props.padx } py-${ props.pady } text: hover:text-gray-500 focus:text-gray-500 hover:bg-slate-50 active:text-gray-500 text-sm font-normal active:bg-${ props.color.toLowerCase() }-100 bg-white border focus:border-${ props.color.toLowerCase() }-500 focus:ring ring-${ props.color.toLowerCase() }-300 rounded-md focus:outline-none transition`} />
        </div>
    )
}

Input.defaultProps = {
    //text: 'Input',
    color: 'rose',
    padx: '3',
    pady: '2',
}

Input.propTypes = {
    //text: PropTypes.string || PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    padx: PropTypes.string,
    pady: PropTypes.string,
    placeholder: PropTypes.string || PropTypes.number,
    width: PropTypes.string,
}

export const text = '';

export default Input