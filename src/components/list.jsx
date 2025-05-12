const List = ({content,href , icon}) => {
    return(
        <li className="h-15 md:h-20 text-xl flex items-center gap-3 hover:underline transition-all duration-200">{icon}<a href={href}>{content}</a></li>
    )
}

export default List