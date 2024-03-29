export const classHelper = (restProps) => {
    let otherProps = Object.keys(restProps)
        .filter(it => it != 'class')
        .reduce((agg, key) => {
            agg[key] = restProps[key]
            return agg
        }, {})
    let classes = restProps['class']

    return {classes, otherProps}
}