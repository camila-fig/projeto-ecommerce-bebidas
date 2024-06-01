import './form-input.scss'

export function FormInput( { label, ...otherProps}) {
    return (
        <div className='form-input-container'>
            <label>{label}</label>
            <input className='form-input-props' {...otherProps}/>
        </div>
    )
}