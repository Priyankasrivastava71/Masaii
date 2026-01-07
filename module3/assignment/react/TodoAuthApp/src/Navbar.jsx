import { logoutUser } from "../../services/auth.service";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-bold">Todo Dashboard</h1>

      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-180px">
            <SelectValue placeholder="Filter Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="destructive" onClick={logoutUser}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;