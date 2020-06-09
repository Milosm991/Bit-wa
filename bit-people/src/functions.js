export const hideEmail = (email) => {
    const array = email.split('@')
    array[0] = array[0].slice(0, 3) + '...' + array[0].slice(-3)

    return array.join('@')

}

// export const changeIcon = () => {
//     const list = document.querySelector('.Header__icons_list')
//     const grid = document.querySelector('.Header__icons_grid')

//     return (
//         grid.addEventListener('click', () => {
//             grid.display.style = 'none'
//             list.display.style = 'block'
//         })
//     )

