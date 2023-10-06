import  {Router} from "express"
import Cookies from "../controllers/cookies/ProfileCookie"
import Login from "../middlewares/Login"

const  router =  Router ()



router.post ("/set-cookie",Login.Add, Cookies.setCookie)

router.post ("/get-cookie", Login.Add, Cookies.getCookie)
router.delete ("/", Login.Add, Cookies.deleteCookie)

export default router