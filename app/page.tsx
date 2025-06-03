export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-green-50 text-gray-800">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Second Chance Plants</h1>
        <p className="text-lg mb-6">
          We rescue plants and trees destined for the trash and give them a second chance to thrive.
          Through donation partnerships, education, and beautification projects, we’re growing a greener future — one plant at a time.
        </p>
        <a
          href="#"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
