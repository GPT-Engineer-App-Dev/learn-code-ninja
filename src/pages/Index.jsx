import { Box, Button, Container, Flex, Heading, HStack, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box as="header" bg="blue.700" color="white" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg">CodeMaster</Heading>
          <HStack spacing={8}>
            <Button variant="link" color="white">Home</Button>
            <Button variant="link" color="white">Courses</Button>
            <Button variant="link" color="white">Testimonials</Button>
            <Button variant="link" color="white">Contact</Button>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Welcome to CodeMaster</Heading>
        <Text fontSize="lg" mb={8}>Learn to code from the best in the industry. Join us and start your journey today!</Text>
        <Button colorScheme="blue" size="lg">Get Started</Button>
      </Box>

      {/* Courses Section */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Our Courses</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={8}>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Heading as="h3" size="md">Web Development</Heading>
            <Text>Learn HTML, CSS, JavaScript, and more to build stunning websites.</Text>
          </VStack>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Heading as="h3" size="md">Data Science</Heading>
            <Text>Master Python, R, and data analysis techniques to become a data scientist.</Text>
          </VStack>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Heading as="h3" size="md">Mobile Development</Heading>
            <Text>Build mobile applications for Android and iOS using modern frameworks.</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" bg="gray.100" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>What Our Students Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} px={8}>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Text fontStyle="italic">"CodeMaster has transformed my career. The courses are top-notch!"</Text>
            <Text fontWeight="bold" mt={4}>- Jane Doe</Text>
          </VStack>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Text fontStyle="italic">"The instructors are very knowledgeable and the community is great."</Text>
            <Text fontWeight="bold" mt={4}>- John Smith</Text>
          </VStack>
          <VStack bg="white" p={8} shadow="md" borderRadius="md">
            <Text fontStyle="italic">"I landed my dream job thanks to CodeMaster's courses."</Text>
            <Text fontWeight="bold" mt={4}>- Sarah Lee</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10}>
        <Flex justify="space-between" align="center" px={8}>
          <Text>&copy; 2023 CodeMaster. All rights reserved.</Text>
          <HStack spacing={4}>
            <FaFacebook size="24px" />
            <FaTwitter size="24px" />
            <FaInstagram size="24px" />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;