import { useState } from 'react';
import Sidebar from './Sidebar';
import { Box, Text, Flex, Button, Input, Textarea } from '@chakra-ui/react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

const Main = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleVideoSelect = (video, title, channel, views) => {
    setSelectedVideo({
      video,
      title,
      channel,
      views,
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) {
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) {
      setLiked(false);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Sidebar onVideoSelect={handleVideoSelect} />
      <Box width="70rem" background="gray.600" p={4}>
        {selectedVideo ? (
          <>
            <iframe
              width="100%"
              height="400px"
              src={`https://www.youtube.com/embed/${selectedVideo.video.id}`}
              frameBorder="10"
              allowFullScreen
            ></iframe>
            <Text fontWeight="bold" mt={2}>
              {selectedVideo.title}
            </Text>
            <Text>{selectedVideo.channel}</Text>
            <Text>{selectedVideo.views} views</Text>

            <Flex justifyContent="space-between" mt={4}>
              <Button
                colorScheme={liked ? 'blue' : 'gray'}
                onClick={handleLike}
                variant={liked ? 'solid' : 'outline'}
                leftIcon={<AiFillLike />}
              >
                Like
              </Button>
              <Button
                colorScheme={disliked ? 'blue' : 'gray'}
                onClick={handleDislike}
                variant={disliked ? 'solid' : 'outline'}
                leftIcon={<AiFillDislike />}
              >
                Dislike
              </Button>
            </Flex>

            <Box mt={4}>
              <Text fontWeight="bold">Comments:</Text>
              {comments.map((comment, index) => (
                <Text key={index}>{comment}</Text>
              ))}
              <form onSubmit={handleCommentSubmit}>
                <Input
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Write a comment"
                  mt={2}
                />
                <Button type="submit" mt={2}>
                  Submit
                </Button>
              </form>
            </Box>
          </>
        ) : (
          <Flex w="100%" h="100%" justifyContent="center" alignItems="top">
            <Text fontSize="2xl" textAlign="center">
             Click Video Title
            </Text>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Main;
