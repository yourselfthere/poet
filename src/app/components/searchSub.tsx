import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Input,
  Button,
} from "@nextui-org/react";

import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const searchSub = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-amber-100 to-orange-300 text-white border-t-1 flex items-center">
      <Card className="w-[400px] h-[224px] bg-gradient-to-tr from-pink-100 to-orange-200  shadow-lg mx-auto">
        <CardHeader className="flex gap-3">
          <Image alt=" logo" height={40} src="/images/logo.jpg" width={40} />
          <div className="flex flex-col">
            <div className="flex  gap-10">
              <p className="text-md">People's Poetry Heaven </p>
              <Button className=" h-[34px] text-[14px] bg-gradient-to-tr from-red-600 to-pink-500 text-white shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col place-content-end">
          <div className="flex gap-2 items-center">
            <Input
              label={"Search Poets"}
              radius="lg"
              size="sm"
              className="h-[34px] w-[366px] "
              classNames={{
                label: [
                  "text-[black] dark:text-white/90 pl-[6px] text-[14px] font-sora ",
                ],
                input: [
                  "bg-transparent",
                  "text-[#62C3C6] dark:text-white/90",
                  "placeholder:text-[#62C3C6] dark:placeholder:text-white/60",
                  "p-[30px_0px_0px_0px]",
                  "h-[34px]",
                ],
                innerWrapper: "bg-transparent  ",

                inputWrapper: [
                  "bg-gradient-to-tr from-pink-300 to-yellow-200 text-white",
                  "dark:bg-default/60",

                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "dark:group-data-[focus=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              endContent={
                <MagnifyingGlassIcon className="w-6 ml-8 text-black " />
              }
            />
          </div>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default searchSub;
