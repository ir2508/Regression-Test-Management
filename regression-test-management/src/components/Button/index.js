import './Button.css'

const Button = (props) => {
    return (
        <>
            <button className='button' onClick={
                () => {
                    if(props.buttonAction === "remove") {
                        props.onRemoveScenario(props.scenarioIdToRemove)
                    }
                }
            }>
                {props.children}
            </button>
        </>

    )
}

export default Button