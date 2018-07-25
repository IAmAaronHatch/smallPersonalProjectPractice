let characters = [
    {
        id: 0,
        name: "Sora",
        age: 16,
        power: 'Light' 
    },

    {
        id: 1,
        name: 'Riku',
        age: 17,
        power: 'darkness'
    },

    {
        id: 2,
        name: 'Kairi',
        age: 16,
        power: 'light'
    }
]

let id = 3

module.exports = {
    getCharacters: (req, res) => {
        res.status(200).send(characters)
    },

    addCharacters: (req, res) => {
        const { name, age, power } = req.body;
        
        const character = {
            id,
            name,
            age,
            power
        }
        characters.push(character)
        id++
        res.status(200).send(characters)
    },

    updateCharacters: (req, res) => {
        let { id } =req.params
        let { name, age, power } = req.body
        let index = characters.findIndex()
    },

    deleteCharacters: () => {

    }

}