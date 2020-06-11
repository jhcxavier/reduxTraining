import * as types from "./actionTypes";

export const createCourse = (course) => {
  return { type: types.CREATE_COURSE, course };
};
