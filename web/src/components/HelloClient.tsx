import * as React from "react"
import { hydrate } from "react-dom"
import { Hello } from "./Hello"

hydrate(<Hello />, document.getElementById("app"))