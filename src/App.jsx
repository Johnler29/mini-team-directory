import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Developer",
    department: "Frontend development",
    email: "alex@example.com",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Designer",
    department: "UI/UX design",
    email: "sarah@example.com",
  },
  {
    id: 3,
    name: "Daniel Kim",
    role: "Developer",
    department: "Backend development",
    email: "daniel@example.com",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Manager",
    department: "Project management",
    email: "emily@example.com",
  },
];

export default function App() {
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredMembers =
    selectedRole === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.role === selectedRole);

  return (
    <div className="app">
      <div className="header">
        <h1>Our Team</h1>
        <p className="member-count">{filteredMembers.length} members</p>
      </div>

      <RoleFilter selectedRole={selectedRole} onSelectRole={setSelectedRole} />
      {filteredMembers.length <= 0 ? (
        <p className="empty-state">No members found</p>
      ) : (
        <TeamDirectory teamMembers={filteredMembers} />
      )}
    </div>
  );
}

function TeamDirectory({ teamMembers }) {
  return (
    <div className="team-directory">
      {teamMembers.map((member) => (
        <Team members={member} key={member.id} />
      ))}
    </div>
  );
}

function Team({ members }) {
  return (
    <Card>
      <div className="member-header">
        <p className="member-name">{members.name}</p>
        <Badge role={members.role}></Badge>
      </div>
      <p className="member-department">{members.department}</p>
      <p className="member-email">{members.email}</p>
    </Card>
  );
}

function Card({ children }) {
  return <div className="team-member-card">{children}</div>;
}

function Badge({ role }) {
  return <p className={`badge badge-${role.toLowerCase()}`}>{role}</p>;
}

function RoleFilter({ selectedRole, onSelectRole }) {
  return (
    <div>
      <select
        className="filter-select"
        value={selectedRole}
        onChange={(e) => onSelectRole(e.target.value)}
      >
        <option value="All">All roles</option>
        <option value="Developer">Developer</option>
        <option value="QA">QA</option>
        <option value="Designer">Designer</option>
        <option value="Manager">Manager</option>
      </select>
    </div>
  );
}
