import express from "express";
const router = express.Router();

// * =======================================================================================//

import {
    getAllCourse,
    getCourse,
    deleteCourse,
    createCourse,
    updateCourse,
    pushStudentToCourse,
    popStudentToCourse
} from "../../controllers/course/courseController.js";

// *=======================================================================================//

router.route("/course").post(createCourse);

// * =======================================================================================//

router.route("/courses/:year/:semester").get(getAllCourse);

// *=======================================================================================//

router.route("/course/:id").get(getCourse);

// *=======================================================================================//

router.route("/course/:id").put(updateCourse)

// *=======================================================================================//

router.route("/add_student_to_course/:id").put(pushStudentToCourse)

// *=======================================================================================//

router.route("/remove_student_from_course/:id").put(popStudentToCourse)

// *=======================================================================================//

router.route("course/:id").delete(deleteCourse);

// *=======================================================================================//

export default router;