import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";

type Props = {};

const LearnPage = (props: Props) => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>My Sticky Wrapper</StickyWrapper>
      <FeedWrapper>My Feed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
