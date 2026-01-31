import express from "express";
import { supabase } from "../config/supabase.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { customer_id, vehicle_id, passengers, distance_km, location } = req.body;

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.isAvailable)
    return res.status(400).json({ message: "Vehicle not available" });

  if (passengers > vehicle.allowed_passengers)
    return res.status(400).json({ message: "Passenger limit exceeded" });

  const { data, error } = await supabase.from("trips").insert([{
    customer_id,
    vehicle_id,
    passengers,
    distance_km,
    location
  }]);

  await supabase.from("vehicles")
    .update({ isAvailable: false })
    .eq("id", vehicle_id);

  if (error) return res.status(400).json({ error: error.message });

  res.json({ message: "Trip created", data });
});

export default router;