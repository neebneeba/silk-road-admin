import { FC } from "react";

// Layout
import Layout from "@/layout";

// Components
import { Box, Stack } from "@chakra-ui/react";

const Product: FC = () => {
  return (
    <Layout title="Бүтээгдэхүүн">
      <Stack>
        <Box>This is product</Box>
      </Stack>
    </Layout>
  );
};

export default Product;
