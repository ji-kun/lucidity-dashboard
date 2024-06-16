import cn from "classnames"

import { useDashboardContext } from "@/context/dashboardContext";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import styles from "@/styles/Header.module.scss"

const Header = () => {
  const { isAdmin, setIsAdmin } = useDashboardContext();

  const handleToggle = (value: boolean) => {
    setIsAdmin(value)
  }

  return (
    <div className={cn(styles.header_container)}>
      <ExitToAppOutlinedIcon className={styles.exit_icon} />
      <div className={cn(styles.switch_container)}>
        <div className={styles.switch_text} onClick={() => handleToggle(false)}>
          user
        </div>
        <div className={styles.toggle_slider}>
          <input
            type="checkbox"
            id="toggle"
            className={styles.input}
            checked={isAdmin}
            onChange={() => handleToggle(!isAdmin)}
          />
          <label htmlFor="toggle" className={styles.slider} />
        </div>

        <div className={styles.switch_text} onClick={() => handleToggle(true)}>
          admin
        </div>
      </div>
    </div>
  )
}

export default Header