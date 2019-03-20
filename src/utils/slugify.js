const slugify = require("slugify")

const postSlugify = title =>
  `/blog/${slugify(title, {
    remove: /[?]/g,
    lower: true,
  })}`

const journalSlugify = title =>
  `/dziennik/${slugify(title, {
    remove: /[?]/g,
    lower: true,
  })}`

exports.postSlugify = postSlugify
exports.journalSlugify = journalSlugify
