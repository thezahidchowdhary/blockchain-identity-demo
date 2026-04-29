export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl mb-6 font-bold">
        Blockchain Identity System
      </h1>

      <a
        href="/register"
        className="bg-purple-600 px-6 py-3 rounded hover:bg-purple-700"
      >
        Go to Register Page
      </a>
    </div>
  );
}