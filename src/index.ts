import * as express from "express"
import { Request, Response } from "express"
import Person from "@/person"
import { serve, setup } from "swagger-ui-express"
import { swaggerDocument } from "@/swagger"
const app = express()
app.use(express.json())
app.use("/api-docs", serve, setup(swaggerDocument))
app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayHello())
})

app.listen(3000, () => console.log("listening on port 3000!"))
