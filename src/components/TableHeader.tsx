import cn from "classnames"

import styles from '@/styles/Table.module.scss'

const TableHeader = () => {
  return (
    <div className={styles.table_header}>
      <div className={cn(styles.name)}>
        <div className={cn(styles.header_tablet)}>
          Name
        </div>
      </div>
      <div className={cn(styles.category)}>
        <div className={cn(styles.header_tablet)}>
          Category
        </div>
      </div>
      <div className={cn(styles.price)}>
        <div className={cn(styles.header_tablet)}>
          Price
        </div>
      </div>
      <div className={cn(styles.quantity)}>
        <div className={cn(styles.header_tablet)}>
          Quantity
        </div>
      </div>
      <div className={cn(styles.value)}>
        <div className={cn(styles.header_tablet)}>
          Value
        </div>
      </div>
      <div className={cn(styles.action)}>
        <div className={cn(styles.header_tablet)}>
          Action
        </div>
      </div>
    </div>
  )
}

export default TableHeader