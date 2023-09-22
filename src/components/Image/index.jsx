const Image = ({src,className,style,id,alt=""}) => {
    return(
        <img src={src} className={className} alt={alt} style={style} id={id} />
    );
};
export default Image;