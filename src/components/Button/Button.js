import './Button.css'
export default function Button({ text, action }) {
    const actionHandler = (e) => {
        e.preventDefault();
        return action()
    }
    return (
        <div className='button-container'>
            <button onClick={(e) => actionHandler(e)}>
                <span className='focus-border'></span>
                {text}
            </button>
        </div>
    )
}
