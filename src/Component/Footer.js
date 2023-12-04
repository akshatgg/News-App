import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto flex justify-between">
        <div class="w-1/4">
            <h3 class="text-lg font-bold mb-4">About Us</h3>
            <p>Learn more about our news website and our team.</p>
            <a href="/about" class="text-blue-500 hover:underline">Read more</a>
        </div>

        <div class="w-1/4">
            <h3 class="text-lg font-bold mb-4">Categories</h3>
            <ul>
                <li><a href="/politics" class="text-blue-500 hover:underline">Politics</a></li>
                <li><a href="/technology" class="text-blue-500 hover:underline">Technology</a></li>
                <li><a href="/entertainment" class="text-blue-500 hover:underline">Entertainment</a></li>
                <li><a href="/sports" class="text-blue-500 hover:underline">Sports</a></li>
            </ul>
        </div>

        <div class="w-1/4">
            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
            <p>Have questions? Reach out to us!</p>
            <a href="/contact" class="text-blue-500 hover:underline">Contact form</a>
        </div>
    </div>

    <div class="text-center mt-8">
        <p>&copy; 2023 Your News Website. All rights reserved.</p>
    </div>
</footer>

    </div>
  )
}

export default Footer
