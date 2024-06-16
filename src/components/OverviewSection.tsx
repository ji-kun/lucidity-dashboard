import { useEffect, useState } from "react";
import cn from "classnames"

import { useDashboardContext } from "@/context/dashboardContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CategoryIcon from '@mui/icons-material/Category';

import styles from '@/styles/Overview.module.scss'

const OverviewSection = () => {
  const [categories, setCategories] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const {
    apiData
  } = useDashboardContext();

  const cardItems = [
    {
      icon: <ShoppingCartIcon />,
      title: 'Total products',
      value: apiData?.length | 0,
    },
    {
      icon: <CurrencyExchangeIcon />,
      title: 'Total store values',
      value: totalValue,
    },
    {
      icon: <RemoveShoppingCartIcon />,
      title: 'Out of stock',
      value: apiData?.filter((item: any) => {
        return item.quantity <= 0
      }).length
    },
    {
      icon: <CategoryIcon />,
      title: 'No of Category',
      value: categories,
    },
  ]

  const getPrice = (value: string, quantity: number) => {
    return Number(value.slice(1)) * quantity
  }

  const countDistinctCategories = (key: string) => {
    const uniqueValues = new Set(apiData?.map((item: any) => item[key]));
    return uniqueValues.size;
  };

  useEffect(() => {
    apiData?.forEach((item: any) => {
      setTotalValue((prev) => prev + getPrice(item.price, item.quantity))
    })

    setCategories(countDistinctCategories('category'))
  }, [apiData])

  return (
    <div className={cn(styles.overview)}>
      <div className={cn(styles.overview_header)}>
        Inventory Stats
      </div>
      <div className={cn(styles.overview_card_container)}>
        <div className={cn(styles.overview_card_container)}>
          {
            cardItems.map((item) => {
              return (
                <div key={item.title} className={styles.overview_card}>
                  {item.icon}
                  <div className={styles.overview_card_data}>
                    <div className={styles.overview_card_header}>
                      {item.title}
                    </div>
                    <div className={styles.overview_card_value}>
                      {item.value}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OverviewSection