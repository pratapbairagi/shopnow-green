

const Input = ({css, fun, name, defaultValue, id, classname, type, placeholder, multi = false}) => {
    return (
        <>
            <input style={css} multiple={multi} type={type} className={classname} placeholder={placeholder} defaultValue={defaultValue} name={name} onChange={(e)=>fun(e)} id={id} />
        </>
    )
}

export default Input