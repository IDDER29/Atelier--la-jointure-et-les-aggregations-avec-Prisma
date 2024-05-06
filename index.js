import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /*
  const user = await prisma.user.create({
    data: {
      name: "achraf",
      email: "achraf@hotmail.com",
      age: 19,
    },
  });*/
  /*
  const post = await prisma.post.create({
    data: {
      title: "first-2 Post",
      authorId: "e4dca60b-37ae-409f-8c1f-8eadfa00c4ed",
      averageReting: 5,
    },
  });
  */
  /*
  const usersWithPosts = await prisma.user.findMany({
    relationLoadStrategy: "join",
    include: {
      writtenPosts: true,
    },
  });

  const post = await prisma.post.findMany({
    include: {
      author: true,
    },
  });*/
  /*
  const user1 = getUserById("e4dca60b-37ae-409f-8c1f-8eadfa00c4ed")
    .then((user1) => {
      // console.log(user1);
    })
    .catch //console.error
    ();

  const getUser = await prisma.user.findMany({
    select: {
      email: true,
      name: true,
    },
  });
  console.log(getUser);*/
  /*
  const user = await prisma.user.findUnique({
    where: {
      id: "ebad8e1d-909e-419c-a9dd-be083d5aa725",
    },
    include: {
      writtenPosts: true,
    },
  });

  console.log(user);
  */
  /*
  const newUser = await prisma.user.create({
    data: {
      name: "yassir",
      email: "yassir123@gmail.com",
      age: 21,
      writtenPosts: {
        create: {
          title: "second-2 Post",
          averageReting: 4.7,
        },
      },
    },
    include: {
      writtenPosts: true,
    },
  });*/
  /*

  const getUserPostsInfo = await prisma.user.findMany({
    select: {
      name: true,
      writtenPosts: {
        select: {
          title: true,
        },
      },
    },
  });
 
  console.log("get post info getUserPostsInfo ", getUserPostsInfo);
  */
  /*
  const getPostInfo = await prisma.post.findUnique({
    where: {
      id: "2b5791f2-4369-41fc-b42d-db3675e42c8f",
    },

    select: {
      title: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  console.log("getPostInfo souad post : ", getPostInfo);
*/
  /*
  const users = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "@gmail.com",
      },
    },
  });
  console.log(users);
  */
  const usersWithPostCount = await prisma.user.findMany({
    include: {
      _count: {
        select: { writtenPosts: true },
      },
    },
  });
  console.log(usersWithPostCount);
}

async function getUserById(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
