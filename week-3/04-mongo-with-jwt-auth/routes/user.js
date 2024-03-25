const {User, Course} = require("../db/index")
const {JSON_SECRET} = require("../config")
const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken")
const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    await User.create({
        username:username,
        password:password
    })

    res.json({
        msg:'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement User signup logic
    const username = req.body.username
    const password = req.body.password

    const response = await User.find({
        username:username,
        password:password
    })

    if (!response) {
        res.status(411).json({
            msg: "User does not exist!"
        })
    }

    const token = jwt.sign({
        username, 
    }, JSON_SECRET )
    res.json({
        token: token
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find()
    res.json({
        Courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    console.log(courseId);
    const username = req.username

    await User.updateOne({
        username: username,
    },{
        "$push": {
            purchasedCourses: courseId
        }
    })
    
    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    
    // find if user exists
    const response = await User.findOne({
        username: req.headers.username
    })

    // find the courses assigned to the user
    const courses = await Course.find({
        _id: {
            "$in" : response.purchasedCourses
        }
    })

    res.json({
        courses: courses
    })
});

module.exports = router