const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { default: mongoose, mongo } = require("mongoose");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username: username,
        password: password,
    })
    res.status(200).json({
        msg:'Admin created successfully'
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
        courses: response
    })
});

module.exports = router;