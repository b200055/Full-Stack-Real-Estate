import express from 'express';
import {bookVisit, cancelBookings, createUser, getAllFavorites, getallBookings, toFav} from "../controllers/userCntrl.js";
import jwtCheck from '../config/auth0Config.js';

const router = express.Router()

router.post("/register",jwtCheck,createUser);

router.post("/bookVisit/:id",bookVisit)

router.post("/allBookings", getallBookings)

router.post("/removeBookings/:id",cancelBookings)

router.post("/toFav/:rid",toFav)

router.post("/allFav",getAllFavorites)

export {router as userRoute}