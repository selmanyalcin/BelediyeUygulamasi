import { database } from "../Functions/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { app } from "../Functions/FirebaseConfig";
import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
const dbref = ref(database);
const auth = getAuth(app);

export const signUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email + "@gmail.com", password);
  await set(ref(database, "Users/" + email), {
    name: name,
    about: "Add a description about yourself...",
    Twitter: "",
    Instagram: "",
    Discord: "",
    Website: "",
    FollowerCount: 0,
    rate: "0",
  });
};

export const uploadCommunityDetails = async (
  name,
  twitterlink,
  iglink,
  discordlink,
  websiteurl,
  creator,
  id
) => {
  await set(ref(database, "Community/" + id), {
    name: name,
    TW: twitterlink,
    IG: iglink,
    discord: discordlink,
    Website: websiteurl,
    creator: creator,
  })
    .then(() => {
      console.log("done");
    })
    .catch((e) => {
      alert(e);
    });
};

export const getComunityId = () => {
  get(child(dbref, "Community/")).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val().CommunityCount);
      return snapshot.val().CommunityCount;
    }
  });
};

export const uploadPost = async (
  name,
  description,
  tags,
  creator,
  id,
  communityName
) => {
  await set(ref(database, "Posts/" + id), {
    name: name,
    description: description,
    tags: tags,
    likeCount: 0,
    commentCount: 0,
    creator: creator,
    id: id,
    communityName: communityName,
  })
    .then(async () => {
      console.log("done");
      await set(ref(database, "Community/" + communityName + "/Posts/" + id), {
        name: name,
        description: description,
        tags: tags,
        likeCount: 0,
        commentCount: 0,
        creator: creator,
        id: id,
        communityName: communityName,
      }).then(async () => {
        console.log("done");
        await set(ref(database, "Users/" + creator + "/Posts/" + id), {
          name: name,
          description: description,
          tags: tags,
          likeCount: 0,
          commentCount: 0,
          creator: creator,
          id: id,
          communityName: communityName,
        }).then(() => {
          console.log("Usera da kaydedildi");
        });
      });
    })
    .catch((e) => {
      alert(e);
    });
};

export const updataProfileData = async (
  name,
  email,
  about,
  rate,
  TwitterLink,
  Ig,
  dc,
  url
) => {
  await update(ref(database, "Users/" + email), {
    name: name,
    about: about,
    rate: rate,
    Twitter: TwitterLink,
    Instagram: Ig,
    Discord: dc,
    Website: url,
    FollowerCount: 0,
  });
};

////Yorum yapma

export const makeCommment = async (
  id,
  commentText,
  commentor,
  commentorPhoto,
  commentCount,
  communityName,
  postCreator
) => {
  const commentId = String(parseInt(Math.random() * 1000000));
  await set(ref(database, "Posts/" + id + "/Comments/" + commentId), {
    comment: commentText,
    creator: commentor,
    creatorPhoto: commentorPhoto,
  }).then(async () => {
    await update(ref(database, "Posts/" + id), {
      commentCount: commentCount + 1,
    }).then(async () => {
      await update(
        ref(database, "Community/" + communityName + "/Posts/" + id),
        {
          commentCount: commentCount + 1,
        }
      ).then(async () => {
        await update(ref(database, "Users/" + postCreator + "/Posts/" + id), {
          commentCount: commentCount + 1,
        });
      });
    });
  });
};

///Teklif Yaratma

export const createOffer = async (
  id,
  companyName,
  offerName,
  location,
  salary
) => {
  await set(ref(database, "Offers/" + id), {
    companyName: companyName,
    offerName: offerName,
    location: location,
    salary: salary,
    id: id,
  });
};

///Teklif Gönderme

export const sendOffer = async (
  id,
  companyName,
  offerName,
  location,
  salary,
  worker
) => {
  await set(ref(database, "Users/" + worker + "/Offers/" + id), {
    companyName: companyName,
    offerName: offerName,
    location: location,
    salary: salary,
    id: id,
  });
};

///Özel İçerik

export const createPremiumWork = async (
  name,
  description,
  tags,
  creator,
  id
) => {
  await set(ref(database, "Users/" + creator + "/PremiumWorks/" + id), {
    name: name,
    description: description,
    tags: tags,
    likeCount: 0,
    commentCount: 0,
    creator: creator,
    id: id,
  });
};

////Beğeni

const likeFirst = async (id, liker, likeCount, postOwner, postCommunity) => {
  await set(ref(database, "Posts/" + id + "/Likes/" + liker), {
    liker: liker,
  }).then(async () => {
    console.log("Beğeni yapıldı");
    await update(ref(database, "Posts/" + id), {
      likeCount: likeCount + 1,
    }).then(async () => {
      console.log("post tamam");
      await update(ref(database, "Users/" + postOwner + "/Posts/" + id), {
        likeCount: likeCount + 1,
      }).then(async () => {
        console.log("user tamam");
        await update(
          ref(database, "Community/" + postCommunity + "/Posts/" + id),
          {
            likeCount: likeCount + 1,
          }
        ).then(() => {
          console.log("community tamam");
          window.location.reload();
        });
      });
    });
  });
};

const likeRemove = async (id, liker, likeCount, postOwner, postCommunity) => {
  await remove(ref(database, "Posts/" + id + "/Likes/" + liker), {
    liker: liker,
  }).then(async () => {
    console.log("Beğeni kalktı");
    await update(ref(database, "Posts/" + id), {
      likeCount: likeCount - 1,
    }).then(async () => {
      await update(ref(database, "Users/" + postOwner + "/Posts/" + id), {
        likeCount: likeCount - 1,
      }).then(async () => {
        console.log("user tamam");
        await update(
          ref(database, "Community/" + postCommunity + "/Posts/" + id),
          {
            likeCount: likeCount - 1,
          }
        ).then(() => {
          console.log("community tamam");
          window.location.reload();
        });
      });
    });
  });
};

export const like = async (id, liker, postOwner, postCommunity) => {
  let likeCount;
  get(child(dbref, "Posts/" + id))
    .then((snapshot) => {
      likeCount = snapshot.val().likeCount;
      console.log("likeCountbeenisayısı", likeCount);
    })
    .then(async () => {
      get(child(dbref, "Posts/" + id + "/Likes/" + liker)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("beğeni kaldırılacak", snapshot.val().CommunityCount);
          likeRemove(id, liker, likeCount, postOwner, postCommunity);
        } else {
          console.log("ilk defa beğeniliyor");
          likeFirst(id, liker, likeCount, postOwner, postCommunity);
        }
      });
    });
};

///Takip etme

const followRemove = async (followedAccount, follower, FollowerCount) => {
  await remove(
    ref(database, "Users/" + followedAccount + "/Followers/" + follower),
    {
      follower: follower,
    }
  ).then(async () => {
    await update(ref(database, "Users/" + followedAccount), {
      FollowerCount: FollowerCount - 1,
    }).then(async () => {
      console.log("follow tamam");
      window.location.reload();
    });
  });
};

const followFirst = async (followedAccount, follower, FollowerCount) => {
  await set(
    ref(database, "Users/" + followedAccount + "/Followers/" + follower),
    {
      follower: follower,
    }
  ).then(async () => {
    await update(ref(database, "Users/" + followedAccount), {
      FollowerCount: FollowerCount + 1,
    }).then(() => {
      console.log("follow tamam");
      window.location.reload();
    });
  });
};

export const followAccount = async (followedAccount, follower) => {
  let followerCount;
  get(child(dbref, "Users/" + followedAccount))
    .then((snapshot) => {
      followerCount = snapshot.val().FollowerCount;
      console.log("follower count", followerCount);
    })
    .then(async () => {
      get(
        child(dbref, "Users/" + followedAccount + "/Followers/" + follower)
      ).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("beğeni kaldırılacak", snapshot.val().CommunityCount);
          followRemove(followedAccount, follower, followerCount);
        } else {
          console.log("ilk defa beğeniliyor");
          followFirst(followedAccount, follower, followerCount);
        }
      });
    });
};

//Subscribe

const subscribeRemove = async (followedAccount, follower) => {
  await remove(
    ref(database, "Users/" + followedAccount + "/Subscribers/" + follower),
    {
      follower: follower,
    }
  ).then(async () => {
    console.log("kaldırıldı abonelik");
    window.location.reload();
  });
};

const subscribeFirst = async (followedAccount, follower) => {
  await set(
    ref(database, "Users/" + followedAccount + "/Subscribers/" + follower),
    {
      follower: follower,
    }
  ).then(async () => {
    console.log("abone olundu");
    window.location.reload();
  });
};

export const subscribeAccount = async (followedAccount, follower) => {
  let followerCount;
  get(child(dbref, "Users/" + followedAccount))
    .then((snapshot) => {
      followerCount = snapshot.val().FollowerCount;
      console.log("follower count", followerCount);
    })
    .then(async () => {
      get(
        child(dbref, "Users/" + followedAccount + "/Subscribers/" + follower)
      ).then((snapshot) => {
        if (snapshot.exists()) {
          console.log("beğeni kaldırılacak", snapshot.val().CommunityCount);
          subscribeRemove(followedAccount, follower);
        } else {
          console.log("ilk defa beğeniliyor");
          subscribeFirst(followedAccount, follower);
        }
      });
    });
};
