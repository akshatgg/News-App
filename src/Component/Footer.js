import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8 relative top-[100%] w-full">
    <div className="container mx-auto flex justify-between">
        <div className="w-1/4">
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>Learn more about our news website and our team.</p>
            <a href="/about" className="text-blue-500 hover:underline">Read more</a>
        </div>

        <div className="w-1/4">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul>
                <li><a href="/politics" className="text-blue-500 hover:underline">Politics</a></li>
                <li><a href="/technology" className="text-blue-500 hover:underline">Technology</a></li>
                <li><a href="/entertainment" className="text-blue-500 hover:underline">Entertainment</a></li>
                <li><a href="/sports" className="text-blue-500 hover:underline">Sports</a></li>
            </ul>
        </div>

        <div className="w-1/4">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Have questions? Reach out to us!</p>
            <a href="/contact" className="text-blue-500 hover:underline">Contact form</a>
        </div>
    </div>

    <div className="text-center mt-8">
        <p>&copy; 2023 Your News Website. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Footer
