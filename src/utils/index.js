export const makeSlug = (text) => {
    return text?.toLowerCase()?.split(' ')?.join('-');
}