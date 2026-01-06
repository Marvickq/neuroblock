export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-slate-200">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900">
            NeuroBlock Rehab
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Secure Stroke Recovery Verification Platform
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Doctor Email"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
          >
            Login as Doctor
          </button>
        </form>

        {/* Signup */}
        <div className="text-center mt-4 text-sm text-slate-600">
          New clinician?{" "}
          <span className="text-sky-600 font-medium cursor-pointer hover:underline">
            Request Access
          </span>
        </div>

        {/* Footer */}
        <p className="text-xs text-center text-slate-400 mt-6">
          HIPAA-aware • Blockchain-verified • Azure-powered
        </p>
      </div>
    </main>
  );
}
