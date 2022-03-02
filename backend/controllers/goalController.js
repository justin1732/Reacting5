const asyncHandler = request ('express-async-handler')


const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goals'})
})

const updateGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`} )
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`} )
})

module.exports = {
    getGoals, setGoal, updateGoals, deleteGoal
}