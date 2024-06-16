import { useState } from "react";
import cn from "classnames"

import { useDashboardContext } from "@/context/dashboardContext";
import CloseIcon from '@mui/icons-material/Close';
import styles from "@/styles/Popup.module.scss";

const Popup = ({ product, setItemToEdit }: any) => {
  const { apiData, setApiData } = useDashboardContext()

  const [category, setCategory] = useState<string>(product.category)
  const [price, setPrice] = useState<number>(product.price)
  const [quantity, setQuantity] = useState<number>(product.quantity)
  const [value, setValue] = useState<number>(product.value)

  const handleCategoryChange = (val: string) => {
    setCategory(val);
  }

  const handlePriceChange = (val: number) => {
    setPrice(val);
  }

  const handleValueChange = (val: number) => {
    setQuantity(val)
  }

  const handleQuantityChange = (val: number) => {
    setValue(val)
  }

  const handleSaveClick = () => {
    let temp = apiData?.filter((prod: any) => {
      return prod.name !== product.name
    })

    setApiData([...temp, {
      name: product.name,
      price: `$${price}`,
      quantity: quantity,
      value: `$${value}`,
      category: category,
    }])

    setItemToEdit(null)
  }

  return (
    <div className={cn(styles.popup_backdrop)}>
      <div className={cn(styles.popup_container)}>
        <div onClick={() => setItemToEdit(null)} className={styles.close_button}>
          <CloseIcon fontSize="small" />
        </div>
        <div className={cn(styles.popup_header)}>
          Edit Product
        </div>
        <div className={styles.popup_product}>
          {product.name}
        </div>

        <div className={styles.product_details}>
          <div className={styles.product_detail}>
            <div className={styles.product_detail_header}>
              Category
            </div>
            <input
              type="text"
              placeholder={product.category}
              onChange={(e: any) => { handleCategoryChange(e.target.value) }}
              className={styles.product_detail_value}
            />
          </div>
          <div className={styles.product_detail}>
            <div className={styles.product_detail_header}>
              Price
            </div>
            <input
              type="number"
              placeholder={product.price}
              onChange={(e: any) => { handlePriceChange(e.target.value) }}
              className={styles.product_detail_value}
            />
          </div>
          <div className={styles.product_detail}>
            <div className={styles.product_detail_header}>
              Quantity
            </div>
            <input
              type="number"
              placeholder={product.quantity}
              onChange={(e: any) => { handleQuantityChange(e.target.value) }}
              className={styles.product_detail_value}
            />
          </div>
          <div className={styles.product_detail}>
            <div className={styles.product_detail_header}>
              Value
            </div>
            <input
              type="number"
              placeholder={product.value}
              onChange={(e: any) => { handleValueChange(e.target.value) }}
              className={styles.product_detail_value}
            />
          </div>
        </div>
        <div className={styles.buttons_container}>
          <div onClick={() => setItemToEdit(null)} className={styles.cancel_button}>
            Cancel
          </div>
          <div
            onClick={handleSaveClick}
            className={cn(styles.save_button, {
              [styles.disabled]: false,
            })}>
            Save
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup