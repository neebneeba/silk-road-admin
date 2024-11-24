import { FC } from "react";

// Components
import { Input, Stack, Textarea } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "@/components/ui/file-upload";
import { HiUpload } from "react-icons/hi";

const InsertCategoryDialog: FC = () => {
  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button width={"min-content"} variant="subtle">
          Нэмэх
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ангилал нэмэх</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack>
            <Input variant={"subtle"} placeholder="Нэр" />
            <Textarea variant={"subtle"} placeholder="Тайлбар" />
            <FileUploadRoot>
              <FileUploadTrigger asChild>
                <Button variant="outline" size="sm">
                  <HiUpload /> Дүрс
                </Button>
              </FileUploadTrigger>
              <FileUploadList />
            </FileUploadRoot>
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Цуцлах</Button>
          </DialogActionTrigger>
          <Button>Хадгалах</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default InsertCategoryDialog;
