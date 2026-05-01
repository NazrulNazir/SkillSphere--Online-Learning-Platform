// export const getCourse = async ()=> {
//     const res = await fetch('../data/courses.json');
//     const data = await res.json();
//     return data;
// }

import courses from '../data/courses.json';
export const getCourse = ()=> {
    return courses;
}