import type { Metadata, NextPage } from "next";
import { ContractData } from "~~/components/example-ui/ContractData";
import { ContractInteraction } from "~~/components/example-ui/ContractInteraction";

export const metadata: Metadata = {
  title: "Example UI",
  description: "Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features.",
  openGraph: {
    title: "Example UI",
    description: "Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features.",
  },
  twitter: {
    title: "Example UI",
    description: "Example UI created with 🏗 Scaffold-ETH 2, showcasing some of its features.",
  },
};

const ExampleUI: NextPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap" rel="stylesheet" />
      <div className="grid lg:grid-cols-2 flex-grow" data-theme="exampleUi">
        <ContractInteraction />
        <ContractData />
      </div>
    </>
  );
};

export default ExampleUI;
