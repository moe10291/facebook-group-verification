export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center max-w-xl px-6">
        <h1 className="text-4xl font-bold mb-4">
          Private Facebook Group Access
        </h1>

        <p className="text-gray-300 mb-8">
          This group is invite-only. You must complete a quick verification
          process before joining.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-medium">
          Start Verification
        </button>

        <p className="text-xs text-gray-500 mt-6">
          Anti-bot protection enabled • Manual approval required
        </p>
      </div>
    </main>
  );
}