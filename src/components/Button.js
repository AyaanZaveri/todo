import React from 'react'
import * as HeroIcons from '@heroicons/react/outline'
import PropTypes from 'prop-types';

const Button = (props) => {
        const {...icons} = HeroIcons
        const Icon = icons[props.icon]
        let icon;

        if (props.icon) {
            icon = <Icon className={`-ml-1 mr-2 w-5 h-5 dark:text-${ props.color.toLowerCase() }-300 text-${ props.color.toLowerCase() }-500`} />
        }
        
        return (
            <button type="button" className={`focus:ring-${ props.color.toLowerCase() } shadow-sm appearance-none inline-flex cursor-pointer items-center px-${ props.padx } py-${ props.pady } hover:text-${ props.color.toLowerCase() }-500 text-${ props.color.toLowerCase() }-500 active:text-${ props.color.toLowerCase() }-500 text-sm font-medium active:bg-${ props.color.toLowerCase() }-100 bg-${ props.bg.toLowerCase() } hover:bg-${ props.color.toLowerCase() }-50 border focus:border-${ props.color.toLowerCase() }-500 focus:ring ring-${ props.color.toLowerCase() }-300 border-${ props.color.toLowerCase() }-300 rounded-md focus:outline-none transition`}>
                { icon }
                { props.text }
            </button>
        )
    }

Button.defaultProps = {
    text: 'Button',
    color: 'rose',
    padx: '4',
    pady: '2',
    bg: 'white',
}

Button.propTypes = {
    text: PropTypes.string || PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    padx: PropTypes.string,
    pady: PropTypes.string,
}


export default Button