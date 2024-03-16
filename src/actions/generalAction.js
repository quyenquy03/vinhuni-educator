'use server'

import { revalidateTag } from "next/cache";

const createTrainingCourse = async (value) => {
    const res = await fetch('https://65e720dc53d564627a8e0375.mockapi.io/api/TrainingCourse', {
        method: 'POST',
        body : JSON.stringify(value),
        headers: {
            "Content-Type" : "application/json"
        }
    });
    revalidateTag('fetch-training-course');
    return await res.json();
}

const updateTrainingCourse = async (id, value) => {
    const res = await fetch(`https://65e720dc53d564627a8e0375.mockapi.io/api/TrainingCourse/${id}`, {
        method: 'PUT',
        body : JSON.stringify(value),
        headers: {
            "Content-Type" : "application/json"
        }
    });
    revalidateTag('fetch-training-course');
    return await res.json();
}

const getTrainingCourseById = async (id) => {
    const res = await fetch(`https://65e720dc53d564627a8e0375.mockapi.io/api/TrainingCourse/${id}`, {
        method: 'GET'
    });
    return await res.json();
}
const deleteTrainingCourse = async (id) => {
    const res = await fetch(`https://65e720dc53d564627a8e0375.mockapi.io/api/TrainingCourse/${id}`, {
        method: 'DELETE'
    });
    revalidateTag('fetch-training-course');
    return await res.json();
}

export {
    createTrainingCourse,
    getTrainingCourseById,
    updateTrainingCourse,
    deleteTrainingCourse
}