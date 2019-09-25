import { prisma } from "./generated/prisma-client";

// A `main` function so that we can use async/await
async function main() {
  // Create a new user called `Alice`
  // const newUser = await prisma.createUser({ name: 'Alice' })
  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
  try {
    await prisma.updateUser({
      where: { id: "5d8aad881c9d4400007971c9" },
      data: { email: "alice@gmail.com", gender: "male", age: 27 }
    });
  } catch (e) {
    console.error(e);
  }

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users();
  console.log(allUsers);
}

main().catch(e => console.error(e));
