export default function truncate (str, length=85) {
    if(!str) return
    if(str.length <= length )    return str
    else return str.substring(0,length).concat('...')
}