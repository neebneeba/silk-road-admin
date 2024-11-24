import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

// Components
import { Image, Text, Center, Box } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

const Avatar: FC = () => {
  const { username, profile_picture } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <div className="flex space-x-2 my-auto">
      <Center direction={"row"} gap={2}>
        <Box
          borderColor={"gray.300"}
          borderRadius={"full"}
          borderWidth={1}
          height={"32px"}
          width={"32px"}
        >
          {profile_picture ? (
            <Image src={profile_picture} />
          ) : (
            <Center height={"100%"} width={"100%"}>
              <LuUser size={24} color="white" />
            </Center>
          )}
        </Box>
        <Text color={"white"}>{username}</Text>
      </Center>
    </div>
  );
};

export default Avatar;
