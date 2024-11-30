export default function layout({
  children,
  recentPosts,
}: {
  children: React.ReactNode;
  recentPosts: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main>
        {children}
        {recentPosts}
      </main>
    </div>
  );
}
