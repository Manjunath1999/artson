import React from "react";
import InductionTraining from "../InductionTraining";
import Head from "next/head";
import CommonForm from "../common/CommonForm";
import ToolBoxTalk from "../ToolBoxTalk";
import NearMissReport from "../NearMissReport";

const Home = ({ selectedParent, selectedChildren }) => {
  return selectedParent ? (
    selectedChildren === "Induction Training" ? (
      <InductionTraining
        selectedParent={selectedParent}
        selectedChildren={selectedChildren}
      />
    ) : selectedChildren === "Tool Box Talk" ? (
      <ToolBoxTalk
        selectedParent={selectedParent}
        selectedChildren={selectedChildren}
      />
    ) : selectedChildren === "Near Miss Report" ? (
      <NearMissReport
        selectedParent={selectedParent}
        selectedChildren={selectedChildren}
      />
    ) : (
      <CommonForm
        selectedParent={selectedParent}
        selectedChildren={selectedChildren}
      />
    )
  ) : (
    <>
      <Head>
        <title>DashBoard</title>
      </Head>
    </>
  );
};

export default Home;
