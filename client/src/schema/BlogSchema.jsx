 import * as Yup from 'yup'
 
 //Blog schema for validation
 export const BlogSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  body: Yup.string(),
  author: Yup.string(),
  date: Yup.string(),
});