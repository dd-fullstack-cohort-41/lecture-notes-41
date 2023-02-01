// instagram post includes:
// picture
// caption
// username

let picture = 'some url for image'
let caption = 'awesome post'
let username = 'awesome user'

let post = {
  picture: picture,
  caption: caption,
  username: username
}

let post2 = {
  picture: 'some url for another pic',
  caption: 'another awesome post',
  username: 'user2'
}

let posts = [
  post,
  post2
]

console.log(posts)

posts.push({
  picture: 'image for 3rd post',
  caption: 'awesome 3rd post',
  username: 'user number 3'
})

console.log(posts)

let displayPost = (post) => {
  console.log(post.username + ' says ' + post.caption + ' about ' + post.picture)
}

// displayPost({
//   picture: 'image for 3rd post',
//   caption: 'awesome 3rd post',
//   username: 'user number 3'
// })

posts.forEach(displayPost)