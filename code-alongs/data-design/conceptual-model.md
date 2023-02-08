## Profile
profileId (pk)
profileActivationToken
profileEmail
profileFullName
profileHash
profilePhone
profileUsername

## Post
postId(Primary Key)
postProfileId(Foreign Key)
postCaption
postDate

## Media
mediaId(Primary Key)
mediaPostId(Foreign Key)
mediaMetaData
mediaUrl

# Follow
followProfileId (Foreign Key)
FollowerProfileId (Foreign Key)
followDate

# Like
likePostId
LikeProfileId

# Message
messageId (primary Key)
messageProfileId(Foreign Key) --person who sent the message
messageReceiverId(Foreign Key) --person receiving the message


Relationships
1 profile can create many posts
1 post can have many media
many profiles can follow many profiles
many profiles can message many profiles
many profiles can like many posts