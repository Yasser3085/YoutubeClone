import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Text, Input , Flex } from '@chakra-ui/react';


const Sidebar = ({ onVideoSelect }) => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPopularVideos = async () => {
      try {
        const apiKey = 'AIzaSyBMt7PXThwoIFa_0f72bU0fejnphCPrQ7k';

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${apiKey}`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching popular videos:', error);
      }
    };

    fetchPopularVideos();
  }, []);

  const handleVideoTitleClick = (video) => {
    onVideoSelect(
      video,
      video.snippet.title,
      video.snippet.channelTitle,
      video.statistics.viewCount
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box width="300px" background="gray.900" p={4}>
      <Heading size="md">Popular Videos</Heading>

      <Input
        placeholder="Search videos"
        value={searchQuery}
        onChange={handleSearchChange}
        mt={4}
      />

<div style={{margin:'20px 10px'}} ><a  href="https://www.linkedin.com/in/yasser-alreshoodi-63038920b/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.youthemployment.org.uk/dev/wp-content/uploads/2015/01/linkedin-career-advice.png"
                alt=""
                height={'200px'}
              />
            </a></div>
            

         
    

      {filteredVideos.map((video) => (
        <Box
          key={video.id}
          position="relative"
          pb="30%"
          overflow="hidden"
          mt={1}
        >
          <iframe
            width="100%"
            height="auto"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
            
          ></iframe>
          <Text
            fontWeight="bold"
            mt={2}
            onClick={() => handleVideoTitleClick(video)}
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
          >
            {video.snippet.title}
          </Text>
          <Text>{video.snippet.channelTitle}</Text>
          <Text>{video.statistics.viewCount} views</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
