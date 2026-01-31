import express from "express";
import { supabase } from "../config/supabase.js";
import { rateLimiter } from "../middlewares/rateLimiter.js";

const router = express.Router();

router.post("/add", rateLimiter, async (req, res) => {
  const { name, registration_number, allowed_passengers, rate_per_km, owner_id } = req.body;

  const { data, error } = await supabase
    .from("vehicles")
    .insert([{ name, registration_number, allowed_passengers, rate_per_km, owner_id }]);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Vehicle created", data });
});

export default router;