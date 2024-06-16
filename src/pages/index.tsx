import { useEffect } from "react";
import cn from "classnames";

import { useDashboardContext } from "@/context/dashboardContext";
import Header from "@/components/Header";
import OverviewSection from "@/components/OverviewSection";
import Table from "@/components/Table";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  const { setApiData } = useDashboardContext()

  useEffect(() => {
    fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory", {
      method: "GET",
    })
      .then((response) => response?.json())
      .then((result) => {
        setApiData(result)
      })
  }, [])



  return (
    <div className={cn(styles.home_container)}>
      <Header />
      <OverviewSection />
      <Table />
    </div>
  );
}
