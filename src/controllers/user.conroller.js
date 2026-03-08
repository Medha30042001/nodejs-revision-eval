import supabase from '../config/supabase.config.js';

export const getCourses = async (req, res) => {
    try {
        const {data, error} = await supabase
            .from('courses')
            .select();

        res.status(200).json({
            message : 'Courses fetched',
            data
        })
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const enrollStudent = async (req, res) => {
    try {
        const {data, error} = await supabase
            .from('enrollments')
            .insert({student_name, course_id})
            .select();

        res.status(201).json({
            message : 'Student enrolled',
            data
        })

    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

export const getStudentEnrollById = async (req, res) => {
    try {
        const {id} = req.params;

        const {data, error} = await supabase
            .from('enrollments')
            .select('student_name')
            .eq('course_id', id);

        res.status(200).json({
            message : 'All students enrolled in the course fetched',
            data
        })
    } catch (error) {
        res.status(500).json({error : error.message});
    }
}

