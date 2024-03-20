import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { Loader } from "lucide-react";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className,
      )}
    >
      <Link href={"/learn"}>
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src={"/mascot.svg"} alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem href="/learn" label="Learn" iconSrc="/learn.svg" />
        <SidebarItem
          href="/Leaderboard"
          label="leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem href="/Quests" label="quests" iconSrc="/quests.svg" />
        <SidebarItem href="/Shop" label="shop" iconSrc="/shop.svg" />
        <div className="flex items-center justify-center pt-20">
          <Image
            src={
              "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWxtazVhMGsxOGlzcG96emV4MGdkcnhxdHE4djRocnZ4b2YyZ2sxbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/GT6tO2NRljURjm7wSV/giphy.gif"
            }
            height={300}
            width={300}
            alt="learning gif"
          />
        </div>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
