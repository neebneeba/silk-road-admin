import { FC, useEffect, useState } from "react";
import { Stack, Table, HStack } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

// Utils
import axiosInstance from "@/utils/api";

// Layout
import Layout from "@/layout";
import InsertCategoryDialog from "@/components/InsertCategoryDialog";

interface Category {
  id: number;
  name: string;
  icon: string | null;
  description: string;
  created_at: string;
  updated_at: string;
}

const Category: FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState(1);

  function getTableData(pageNumber: number) {
    axiosInstance
      .get<{
        items: Category[];
        count: number;
      }>("/category", {
        params: {
          limit: "10",
          page: pageNumber - 1,
        },
      })
      .then((response) => {
        setCategories(response.data.items);
        setCount(response.data.count);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    getTableData(page);
  }, [page]);

  return (
    <Layout title="Ангилал">
      <Stack>
        <InsertCategoryDialog />

        <Table.ScrollArea>
          <Table.Root showColumnBorder stickyHeader striped>
            <Table.Header bgColor={"red"}>
              <Table.Row>
                <Table.ColumnHeader>№</Table.ColumnHeader>
                <Table.ColumnHeader>Нэр</Table.ColumnHeader>
                <Table.ColumnHeader>Дүрс</Table.ColumnHeader>
                <Table.ColumnHeader>Тайлбар</Table.ColumnHeader>
                <Table.ColumnHeader></Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {categories.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.icon}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Button
                      variant="surface"
                      paddingX={5}
                      borderColor="green.300"
                      _hover={{
                        bgColor: "green.300",
                      }}
                    >
                      Засах
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>

        <PaginationRoot
          count={count}
          pageSize={10}
          page={page}
          margin={5}
          onPageChange={(details) => setPage(details.page)}
        >
          <HStack wrap="wrap">
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Stack>
    </Layout>
  );
};

export default Category;
