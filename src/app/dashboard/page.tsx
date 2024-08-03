import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Management Dashboard</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/add-recipe" className="text-indigo-600">
              Add Recipe
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="text-indigo-600">
              Recipe List
            </Link>
          </li>
        </ul>
      </nav>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default DashboardPage;
