import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dxfzufsJKOf96KXTsezU4Rd5Wd"];

export const isAdmin = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
