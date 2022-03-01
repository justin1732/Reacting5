const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

const setGoal = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
}

const updateGoals = (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`} )
}

const deleteGoal = (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`} )
}

module.exports = {
    getGoals, setGoal, updateGoals, deleteGoal
}