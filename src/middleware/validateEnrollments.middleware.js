const validateEnroll = (req, res, next) => {
    const {student_name, course_id} = req.body;

     if(!student_name || !course_id) {
        return res.status(400).json({error : 'Missing fields'});
    }

    next();
}

export default validateEnroll;