import { useState } from "react";
import cn from "classnames"

import { useDashboardContext } from "@/context/dashboardContext";
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/Table.module.scss'
import Popup from "./Popup";
import TableHeader from "./TableHeader";

const Table = () => {
  const { setApiData, apiData, isAdmin, disabledRows, setDisabledRows } = useDashboardContext()
  const [itemToEdit, setItemToEdit] = useState();

  const handleEdit = (row: any) => {
    setItemToEdit(row)
  }

  const handleDisable = (row: any) => {
    if (disabledRows.includes(row.name)) {
      let temp = disabledRows?.filter((item: any) => {
        return item !== row.name
      })
      setDisabledRows(temp)
    } else {
      setDisabledRows([...disabledRows, row.name])
    }
  }

  const handleDelete = (row: any) => {
    setApiData(apiData?.filter((item: any) => {
      return item !== row
    }))
  }

  return (
    <div className={styles.table}>
      <TableHeader />
      {
        apiData?.map((item: any) => {
          return (
            <div key={item.name} className={cn(styles.table_header, styles.separator, {
              [styles.noEvents]: disabledRows.includes(item.name),
            })}>
              <div className={cn(styles.name)}>
                {item.name}
              </div>
              <div className={cn(styles.category)}>
                {item.category}
              </div>
              <div className={cn(styles.price)}>
                {item.price}
              </div>
              <div className={cn(styles.quantity)}>
                {item.quantity}
              </div>
              <div className={cn(styles.value)}>
                {item.value}
              </div>
              <div className={cn(styles.action, styles.actions_container)}>
                <EditIcon
                  onClick={() => isAdmin ? handleEdit(item) : undefined}
                  fontSize="small"
                  className={cn(styles.icon, {
                    [styles.edit_icon]: isAdmin
                  })} />
                <RemoveRedEyeIcon
                  onClick={() => isAdmin ? handleDisable(item) : undefined}
                  fontSize="small"
                  className={cn(styles.icon, {
                    [styles.visible_icon]: isAdmin
                  })} />
                <DeleteIcon
                  onClick={() => isAdmin ? handleDelete(item) : undefined}
                  fontSize="small"
                  className={cn(styles.icon, {
                    [styles.delete_icon]: isAdmin
                  })} />
              </div>
            </div>
          )
        })
      }
      {
        itemToEdit
          ?
          <Popup product={itemToEdit} setItemToEdit={setItemToEdit} />
          : null
      }
    </div>
  )
}

export default Table