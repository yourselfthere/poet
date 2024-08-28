import { Button } from "@nextui-org/react";

import React from "react";

const signInPanel = async () => {
  return (
    <div className="flex gap-3">
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-400 to-yellow-500 text-white shadow-lg"
      >
        Log In
      </Button>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-red-600 to-pink-500 text-white shadow-lg"
      >
        Create Account
      </Button>
    </div>
  );
};

export default signInPanel;
