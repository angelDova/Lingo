type Props = {
  children: React.ReactNode;
};

export const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="w[368px] sticky bottom-6 hidden self-end lg:block">
      <div className="sticky top-6 flex min-h-[calc(100vh-48px)] flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};
