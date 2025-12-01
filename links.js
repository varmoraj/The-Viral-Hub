// links.js - Video Data Configuration for The Viral Hub

const videoData = {
    trending: [
        {
            id: "trending-1",
            title: "Latest Blockbuster Movie Official Trailer",
            category: "Movie Trailers",
            views: "2.1M views",
            image: "images/image1.jpg", // Upload image1.jpg to images folder
            link: "https://terabox.com/s/1abc123def456", // Replace with actual Terabox link
            cloudService: "Terabox"
        },
        {
            id: "trending-2",
            title: "Top Viral Moments of The Week",
            category: "Entertainment",
            views: "850K views",
            image: "images/image2.jpg", // Upload image2.jpg to images folder
            link: "https://drive.google.com/file/d/1xyz789/view", // Replace with actual Google Drive link
            cloudService: "Google Drive"
        },
        {
            id: "trending-3",
            title: "Chart-Topping Music Video Release",
            category: "Music",
            views: "5.4M views",
            image: "images/image3.jpg", // Upload image3.jpg to images folder
            link: "https://mega.nz/file/abc123#xyz456", // Replace with actual Mega link
            cloudService: "Mega"
        },
        {
            id: "trending-4",
            title: "Ultimate Sports Highlights Compilation",
            category: "Sports",
            views: "1.8M views",
            image: "images/image4.jpg", // Upload image4.jpg to images folder
            link: "https://terabox.com/s/2def456ghi789", // Replace with actual Terabox link
            cloudService: "Terabox"
        }
    ],
    
    recent: [
        {
            id: "recent-1",
            title: "Comedy Special Preview - New Release",
            category: "Comedy",
            views: "320K views",
            image: "images/image5.jpg", // Upload image5.jpg to images folder
            link: "https://drive.google.com/file/d/2abc456/view", // Replace with actual link
            cloudService: "Google Drive"
        },
        {
            id: "recent-2",
            title: "Educational Science Series Episode 5",
            category: "Education",
            views: "150K views",
            image: "images/image6.jpg", // Upload image6.jpg to images folder
            link: "https://mega.nz/file/def456#uvw789", // Replace with actual link
            cloudService: "Mega"
        },
        {
            id: "recent-3",
            title: "Gaming Tournament Highlights - Finals",
            category: "Gaming",
            views: "950K views",
            image: "images/image7.jpg", // Upload image7.jpg to images folder
            link: "https://terabox.com/s/3ghi789jkl012", // Replace with actual link
            cloudService: "Terabox"
        },
        {
            id: "recent-4",
            title: "Lifestyle Vlog - Travel Adventure Series",
            category: "Lifestyle",
            views: "420K views",
            image: "images/image8.jpg", // Upload image8.jpg to images folder
            link: "https://drive.google.com/file/d/3xyz012/view", // Replace with actual link
            cloudService: "Google Drive"
        }
    ]
};

// Function to get video by ID
function getVideoById(videoId) {
    // Check trending videos
    for (let video of videoData.trending) {
        if (video.id === videoId) return video;
    }
    
    // Check recent videos
    for (let video of videoData.recent) {
        if (video.id === videoId) return video;
    }
    
    return null;
}

// Function to open video link
function openVideoLink(videoId) {
    const video = getVideoById(videoId);
    
    if (!video) {
        alert('Video not found!');
        return;
    }
    
    // Confirm before redirecting
    const confirmMessage = `Redirecting to ${video.cloudService} to watch:\n"${video.title}"\n\nClick OK to continue.`;
    
    if (confirm(confirmMessage)) {
        // Open in new tab
        window.open(video.link, '_blank');
        
        // Optional: Track click (for analytics)
        console.log(`Video clicked: ${videoId} - ${video.title}`);
    }
}

// Function to load videos dynamically
function loadVideos() {
    // This function will be called from index.html
    // to populate the video grid with actual data
    console.log('Video data loaded successfully!');
    
    // You can call this function to initialize videos
    // Example: populateVideoGrid('trending', 'trendingVideoGrid');
}
