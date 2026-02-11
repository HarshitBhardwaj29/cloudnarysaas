"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="text-xl font-bold">MediaTool ⚡</h1>
        <div className="flex gap-4">
          <Link href="/sign-in" className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Sign In
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Simple Tools for Creators ⚡
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-gray-300 max-w-xl"
        >
          Resize videos and upload social photos easily — fast, clean and online.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/sign-up" className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
            Get Started Free
          </Link>
        </motion.div>
      </section>

      {/* Feature 1 - Video Resizer */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 transition-transform duration-300 hover:scale-105 hover:text-white">
  🎥 Video Resizer
</h2>
          <p className="text-gray-300 mb-4">
            Resize your videos for Instagram, YouTube, and Shorts in one click.  
            No watermark. No quality loss.
          </p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Resize for reels & shorts</li>
            <li>✔ Fast cloud processing</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10"
        >
          <Image
            src="/video-tool.png"
            alt="Video Resizer Preview"
            width={600}
            height={400}
            className="rounded-xl w-full"
          />
        </motion.div>
      </section>

      {/* Feature 2 - Social Photo Uploader */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 rounded-2xl p-4 border border-white/10 md:order-1"
        >
          <Image
            src="/photo-tool.png"
            alt="Photo Uploader Preview"
            width={600}
            height={400}
            className="rounded-xl w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">🖼️ Social Photo Uploader</h2>
          <p className="text-gray-300 mb-4">
            Upload and resize photos perfectly for Instagram, WhatsApp & Twitter.
          </p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Auto crop for social media</li>
            <li>✔ Preview before upload</li>
          </ul>
        </motion.div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MediaTool — Built for creators 🚀
      </footer>
    </div>
  );
}
