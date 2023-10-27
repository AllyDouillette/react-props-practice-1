import { reverse } from './../helpers'

function NameReversed(props) {
    return(
        <>
            <p className="name-reversed">
            Also, {props.name} backwards is {reverse(props.name)}
            </p>
        </>
    )
}

export default NameReversed