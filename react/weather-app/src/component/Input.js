import React from "react"
import PropTypes from "prop-types"


const Input = ({label,onInput,inputRef}) =>{
    return<div className="input-box">
        <spna className="label">{label}</spna>
        <input type="text" onChange={{onInput}} ref={inputRef}/>
    </div>
};


Input.PropTypes ={
    label:PropTypes.string.isRequired,
    onInput:PropTypes.func.isRequired,
    inputRef:PropTypes.object.isRequired
}

export default Input;