import React from 'react'
import classes from "./Layout.module.css"

const Layout = (props) => {
  return (
    <div className={classes.container}>{props.children}</div>
  )
}

export default Layout