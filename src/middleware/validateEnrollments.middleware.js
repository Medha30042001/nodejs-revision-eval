const validateEnroll = (req, res, next) => {
    const {student_name, course_id} = req.body;

     if(!student_name || !course_id) {
        return 'Missing fields';
    }
    return null;

    next();
}

export default validateEnroll;