

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/common/DataTable";
import { toast } from "sonner";
import { Edit, Trash2 } from "lucide-react";

// Import the reusable confirmation
import { confirmSwal } from "@/lib/ConfirmSwal";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    userName: "",
    mobileNo: "",
    password: "",
  });

  const [users, setUsers] = useState([
    {
      id: 1,
      userName: "john_doe",
      password: "********",
      mobile: "9876543210",
      registerOn: "2024-01-15",
      status: "Active",
    },
    {
      id: 2,
      userName: "jane_smith",
      password: "********",
      mobile: "9876543211",
      registerOn: "2024-01-20",
      status: "Inactive",
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      userName: formData.userName,
      mobile: formData.mobileNo,
      password: "********",
      registerOn: new Date().toISOString().slice(0, 10),
      status: "Active",
    };

    setUsers((prev) => [...prev, newUser]);
    toast.success("User registered successfully!");

    setFormData({ userName: "", mobileNo: "", password: "" });
  };

  // ---------------------------
  // Toggle Status
  // ---------------------------
  const toggleStatus = async (row: any) => {
    const action = row.status === "Active" ? "Deactivate" : "Activate";
    const confirmed = await confirmSwal({
      title: `${action} User?`,
      text: `Are you sure you want to ${action.toLowerCase()} ${row.userName}?`,
      confirmText: action,
    });

    if (!confirmed) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === row.id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u
      )
    );

    toast.success(`${row.userName} ${action}d successfully!`);
  };

  // ---------------------------
  // Delete User
  // ---------------------------
  const onDelete = async (row: any) => {
    const confirmed = await confirmSwal({
      title: "Delete User?",
      text: `This will permanently delete ${row.userName}.`,
      confirmText: "Delete",
      icon: "warning",
    });

    if (!confirmed) return;

    setUsers((prev) => prev.filter((u) => u.id !== row.id));
    toast.success(`${row.userName} deleted successfully!`);
  };

  const onEdit = (row: any) => {
    toast.info(`Edit user: ${row.userName}`);
  };

  // ---------------------------
  // Table Config
  // ---------------------------
  const columns = [
    { header: "User Name", accessor: "userName" },
    { header: "Password", accessor: "password" },
    { header: "Mobile", accessor: "mobile" },
    { header: "Register On", accessor: "registerOn" },
    {
      header: "Status",
      accessor: "status",
      cell: (value: string) => (
        <span
          className={
            value === "Active"
              ? "text-green-600 font-semibold"
              : "text-red-600 font-semibold"
          }
        >
          {value}
        </span>
      ),
    },
  ];

  const customActions = (row: any) => (
    <div className="flex items-center gap-2">
      <Button
        variant="default"
        size="icon"
        className="bg-blue-600 text-white hover:bg-blue-700 rounded-full"
        onClick={() => onEdit(row)}
      >
        <Edit size={18} />
      </Button>

      <Button
        variant="default"
        size="icon"
        className="bg-red-600 text-white hover:bg-red-700 rounded-full"
        onClick={() => onDelete(row)}
      >
        <Trash2 size={18} />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={
          row.status === "Active"
            ? "border-red-600 text-red-600 hover:bg-red-50"
            : "border-green-600 text-green-600 hover:bg-green-50"
        }
        onClick={() => toggleStatus(row)}
      >
        {row.status === "Active" ? "Deactivate" : "Activate"}
      </Button>
    </div>
  );

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="userName">User Name *</Label>
                <Input
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNo">Mobile Number *</Label>
                <Input
                  id="mobileNo"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  type="tel"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter password"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <DataTable
        title="Users Report"
        columns={columns}
        data={users}
        customActions={customActions}
      />
    </div>
  );
};

export default UserRegister;
