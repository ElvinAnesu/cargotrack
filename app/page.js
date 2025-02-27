import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center">
          <Image
            src="/logo.png" // You'll need to add your logo
            alt="Hesu Logistics"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-blue-600">Hesu Tracking</span>
        </div>
        <div className="space-x-4">
          <Link 
            href="/login" 
            className="px-4 py-2 text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-time Container Tracking Solution
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Track your shipments in real-time, manage your containers, and stay updated 
              with instant notifications about your cargo's journey.
            </p>
            <div className="space-x-4">
              <Link 
                href="/login" 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 inline-block"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/shipping-illustration.svg" // You'll need to add this illustration
              alt="Shipping Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose Hesu Tracking?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Updates",
                description: "Get instant notifications and track your shipments in real-time",
                icon: "🔔"
              },
              {
                title: "Easy Management",
                description: "Manage all your shipments from a single dashboard",
                icon: "📊"
              },
              {
                title: "Detailed Analytics",
                description: "Access comprehensive reports and cost analysis",
                icon: "📈"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Hesu</h3>
              <p className="text-gray-600">Your trusted partner in container tracking and logistics management.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Email: contact@hesu.com</li>
                <li>Phone: +1 234 567 890</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add your social media icons/links here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
