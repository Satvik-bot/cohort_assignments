const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken')
const {JSON_SECRET} = require('../config')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username:username,
        password:password
    })

    res.status(200).json({
        msg:'Admin created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const response = await Admin.find({
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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const decsription = req.body.decsription
    const imageLink = req.body.imageLink
    const price = req.body.price

    const createCourse = await Course.create({
        title: title,
        decsription: decsription,
        price: price,
        imageLink: imageLink
    })

    res.status(200).send({
        msg: 'Course created successully',
        courseId: createCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        Courses:response
    })
});

module.exports = router;