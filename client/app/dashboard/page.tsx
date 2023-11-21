/* eslint-disable react/no-unescaped-entities */
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const { userId } = auth();
  console.log(userId);

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);
  console.log(user);

      return (
        <div className="px-8 py-12 sm:py-16 md:px-20">
          {user && (
            <>
              <h1 className="text-3xl font-semibold text-black">
                👋 Hi, {user.firstName || `Stranger`}
              </h1>
            </>
          )}
        </div>
      );
  };

export default Dashboard;
