type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="h-full pl-[256px]">
      <div className="h-full bg-red-500">{children}</div>
    </div>
  );
};

export default MainLayout;
