import './button.scss'

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted',
    checkout: 'pgto'
}

export function Button({ children, typeButton, ...otherProps }) {
    return (
        <button
            {...otherProps}
            className={`${BUTTON_TYPE_CLASS[typeButton]}`}>
            {children}
        </button >
    )
}