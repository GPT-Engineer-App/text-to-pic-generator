import { useState } from "react";
import { Container, VStack, Input, Button, Image, Text, Box, Spinner } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [query, setQuery] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("Index component rendered");

  const handleSearch = () => {
    if (query.trim() === "") return;
    setLoading(true);
    // Simulate an API call to fetch the image URL
    setTimeout(() => {
      setImageUrl(`https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE3MTYzNDA2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080`);
      setLoading(false);
    }, 1000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Text to Image Generator</Text>
        <Box display="flex" width="100%">
          <Input placeholder="Enter a description..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <Button leftIcon={<FaSearch />} onClick={handleSearch} ml={2}>
            Search
          </Button>
        </Box>
        {loading ? <Spinner size="xl" /> : imageUrl && <Image src={imageUrl} alt={query} boxSize="400px" objectFit="cover" />}
      </VStack>
    </Container>
  );
};

export default Index;
