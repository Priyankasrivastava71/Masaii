import { supabase } from "../config/supabase.js";

export const createTrip = async (req, res) => {
  const {
    customer_id,
    vehicle_id,
    location,
    distance_km,
    passengers
  } = req.body;

  const { data: vehicle } = await supabase
    .from("vehicles")
    .select("*")
    .eq("id", vehicle_id)
    .single();

  if (!vehicle.isAvailable) {
    return res.status(400).json({ message: "Vehicle not available" });
  }

  if (passengers > vehicle.allowed_passengers) {
    return res.status(400).json({ message: "Passenger limit exceeded" });
  }

  const { data, error } = await supabase
    .from("trips")
    .insert([{
      customer_id,
      vehicle_id,
      location,
      distance_km,
      passengers
    }]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  await supabase
    .from("vehicles")
    .update({ isAvailable: false })
    .eq("id", vehicle_id);

  res.status(201).json({ message: "Trip created", data });
};

export const getTrip = async (req, res) => {
  const { tripId } = req.params;

  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("id", tripId)
    .single();

  if (error) {
    return res.status(404).json({ message: "Trip not found" });
  }

  res.json(data);
};

export const updateTrip = async (req, res) => {
  const { tripId } = req.params;

  const { error } = await supabase
    .from("trips")
    .update(req.body)
    .eq("id", tripId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Trip updated" });
};

export const deleteTrip = async (req, res) => {
  const { tripId } = req.params;

  const { error } = await supabase
    .from("trips")
    .delete()
    .eq("id", tripId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: "Trip deleted" });
};

export const endTrip = async (req, res) => {
  const { tripId } = req.params;

  const { data: trip } = await supabase
    .from("trips")
    .select("*, vehicles(rate_per_km)")
    .eq("id", tripId)
    .single();

  const tripCost = trip.distance_km * trip.vehicles.rate_per_km;

  await supabase
    .from("trips")
    .update({ isCompleted: true, tripCost })
    .eq("id", tripId);

  await supabase
    .from("vehicles")
    .update({ isAvailable: true })
    .eq("id", trip.vehicle_id);

  res.json({ message: "Trip ended", tripCost });
};