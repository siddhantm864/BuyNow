  import axios from "axios";

  const BASE_URL="http://localhost:5000/api/"
  const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzhlM2Q4ZTZkNzM2ZjBkYzJiNWIwMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTY2OTUwNywiZXhwIjoxNjgxOTI4NzA3fQ.t5VLvuFVsAUjVTup9kDJ0_H_cozWNp75HhbtH8R1T94"

  export const publicRequest=axios.create({
    baseURL:BASE_URL
  })

  export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
  })