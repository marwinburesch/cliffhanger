import React from "react";
import { action } from "@storybook/addon-actions";
import Header from "../src/components/Header";

export default {
  title: "Header"
};

export const Default = () => {
  return <Header title={"cliffhanger"} onClick={action("clicked")} />;
};
