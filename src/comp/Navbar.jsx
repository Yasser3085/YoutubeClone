import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineYoutube } from 'react-icons/ai';

const Navbar = () => {
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure();
  const { isOpen: isSignInOpen, onOpen: onSignInOpen, onClose: onSignInClose } = useDisclosure();

  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLoggedInUsername(storedUsername);
    }
  }, []);

  const handleSignUpSubmit = () => {
    // Perform sign-up logic with username and password
    console.log(`Sign Up - Username: ${signUpUsername}, Password: ${signUpPassword}`);
    localStorage.setItem('username', signUpUsername);
    setLoggedInUsername(signUpUsername);
    onSignUpClose();
  };

  const handleSignInSubmit = () => {
    // Perform sign-in logic with username and password
    console.log(`Sign In - Username: ${signInUsername}, Password: ${signInPassword}`);
    localStorage.setItem('username', signInUsername);
    setLoggedInUsername(signInUsername);
    onSignInClose();
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLoggedInUsername('');
  };

  return (
    <Box bg="gray.800" boxShadow="md" align="center" justify="space-between" maxW="1400px" mx="auto" py={4}> 
      <Flex className='container' align="center" justify="space-between"  mx="auto" >
        <Box  display="flex" justifyContent="center" alignItems="center">
          <img style={{height:'100px' , width:'100px'}} src="https://static.vecteezy.com/system/resources/previews/018/930/572/original/youtube-logo-youtube-icon-transparent-free-png.png" alt="" />
          <Heading  size="lg" color="white">
            YouTube
          </Heading>
        </Box>

        <InputGroup w="40%">
          <Input disabled placeholder="Search" />
          <InputRightElement>
            <Button
              size="sm"
              variant="ghost"
              colorScheme="gray"
              borderRadius="0"
              _focus={{ boxShadow: 'none' }}
              
            >
              <FiSearch />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex>
          {loggedInUsername ? (
            <>
              <Button variant="ghost" colorScheme="white" mr={2} onClick={handleLogout}>
                Logout
              </Button>
              <Button variant="ghost" colorScheme="white" disabled>
                Welcome, {loggedInUsername}
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" colorScheme="white" mr={2} onClick={onSignInOpen}>
                Sign In
              </Button>
              <Button variant="ghost" colorScheme="white" onClick={onSignUpOpen}>
                Sign Up
              </Button>
            </>
          )}
        </Flex>

        {/* Sign Up Modal */}
        <Modal isOpen={isSignUpOpen} onClose={onSignUpClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Username"
                value={signUpUsername}
                onChange={(e) => setSignUpUsername(e.target.value)}
                mb={2}
              />
              <Input
                placeholder="Password"
                type="password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                mb={4}
              />
              <Button colorScheme="blue" onClick={handleSignUpSubmit}>
                Submit
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>

        {/* Sign In Modal */}
        <Modal isOpen={isSignInOpen} onClose={onSignInClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sign In</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Username"
                value={signInUsername}
                onChange={(e) => setSignInUsername(e.target.value)}
                mb={2}
              />
              <Input
                placeholder="Password"
                type="password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
                mb={4}
              />
              <Button colorScheme="blue" onClick={handleSignInSubmit}>
                Submit
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};

export default Navbar;
