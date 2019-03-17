import slugify from "slugify"

const mySlugify = title =>
  `/blog/${slugify(title, {
    remove: /[?]/g,
    lower: true,
  })}`

export default mySlugify
