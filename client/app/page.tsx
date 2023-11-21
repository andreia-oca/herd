import { auth, currentUser }  from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();
  console.log("User", user);
  console.log("Id", userId);

  return (
    <>
    { user && (
       <div>
       <h1 className='text-2xl font-bold mb-5'>Welcome</h1>
       <p className='mb-5'>
         You ain&apos;t a lonely wolf anymore! You are now part of the Herd!
       </p>
     </div>
    )}
    </>
  );
}
