const data = [
    {
        title: 'Meats',
        items: ['Fish', 'Chicken', 'Pork', 'Beef']
    },
    {
        title: 'Soaps and Shampoos',
        items: ['Head and Shoulders', 'safeguard', 'dove', 'rejoice']
    },
    {
        title: 'Vegetables',
        items: ['Carrots', 'Petchay', 'Talong', 'Sitaw']
    },
    {
        title: 'Canned goods',
        items: ['corned beef', 'sardines', 'spam', 'beef loaf']
    },
]

const body = document.querySelector('body')
body.style.cssText = 'display: grid; width: 600px; grid-template-columns: 1fr 1fr; gap: 30px;'

for (let i = 0; i < data.length; i++) {
    const box = document.createElement('div')

    // create and add title
    const h2 = document.createElement('h2')
    h2.innerText = data[i].title
    box.appendChild(h2)
    
    // for each item
    for (let j = 0; j < data[i].items.length; j++) {
        // create checkbox
        const cbox = document.createElement('input')
        cbox.type = 'checkbox'
        cbox.name = data[i].title
        cbox.value = data[i].items[j]
        cbox.id = data[i].items[j]

        // create label
        const label = document.createElement('label')
        label.htmlFor = data[i].items[j]
        label.innerText = data[i].items[j]

        box.appendChild(cbox)
        box.appendChild(label)
        box.appendChild(document.createElement('br'))
    }
    
    box.style.cssText = 'border: 1px solid black; padding: 0 1em 1em;'
    body.appendChild(box)
}