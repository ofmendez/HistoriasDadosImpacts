


export function RandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function ñ(el) {
    switch (el.charAt(0)) {
        case "#":  return document.querySelector(el)
        case ".":  return document.querySelectorAll(el)
        default:   return document.getElementsByTagName(el)
    }
}