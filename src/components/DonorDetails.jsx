import React, { useState } from "react";
import { Search, X, Heart } from "lucide-react";

const DonorDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const donations = [
    {
      id: 1,
      campaign: "Flood",
      amount: "$5",
      interval: "Monthly",
      total: "$5046",
      lastDonation: "$50,000",
      status: "Completed",
      action: "Unsubscribe",
    },
    {
      id: 2,
      campaign: "Food Bank",
      amount: "$15",
      interval: "Weekly",
      total: "$100,000",
      lastDonation: "$100,000",
      status: "Completed",
      action: "Unsubscribe",
    },
    {
      id: 3,
      campaign: "Food Bank",
      amount: "$50",
      interval: "Monthly",
      total: "$5,000",
      lastDonation: "$5,000",
      status: "In Progress",
      action: "Cancelled",
    },
    {
      id: 4,
      campaign: "Flood",
      amount: "$25",
      interval: "Monthly",
      total: "$25,000",
      lastDonation: "$25,000",
      status: "In Progress",
      action: "Cancelled",
    },
    {
      id: 5,
      campaign: "Flood",
      amount: "$150",
      interval: "Monthly",
      total: "$15,000",
      lastDonation: "$15,000",
      status: "In Progress",
      action: "Cancelled",
    },
    {
      id: 6,
      campaign: "Food Bank",
      amount: "$75",
      interval: "Weekly",
      total: "$75,000",
      lastDonation: "$75,000",
      status: "Completed",
      action: "Unsubscribe",
    },
  ];

  const filteredDonations = donations.filter((donation) =>
    donation.campaign.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "In Progress":
        return "text-orange-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-500";
      case "In Progress":
        return "bg-orange-500";
      default:
        return "bg-gray-400";
    }
  };

  const getActionButton = (action) => {
    if (action === "Unsubscribe") {
      return (
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-sm transition-colors">
          Unsubscribe
        </button>
      );
    } else {
      return (
        <button className="bg-red-300 text-red-800 px-4 py-1 rounded text-sm cursor-not-allowed">
          Cancelled
        </button>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 p-2 rounded-lg">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <h1 className="text-2xl font-bold text-blue-600">SquareDonations</h1>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b">
        <div className="flex">
          <button className="px-6 py-4 text-gray-900 font-medium border-b-2 border-blue-500 bg-green-50">
            Subscription Donations
          </button>
          <button className="px-6 py-4 text-gray-500 font-medium hover:text-gray-700">
            Account Info
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Manage your subscriptions
        </h2>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Campaign
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Amount
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Interval
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Total
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Last Donation
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredDonations.map((donation) => (
                <tr
                  key={donation.id}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-4 px-4 text-gray-900">
                    {donation.campaign}
                  </td>
                  <td className="py-4 px-4 text-gray-900">{donation.amount}</td>
                  <td className="py-4 px-4 text-gray-900">
                    {donation.interval}
                  </td>
                  <td className="py-4 px-4 text-gray-900">{donation.total}</td>
                  <td className="py-4 px-4 text-gray-900">
                    {donation.lastDonation}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusDot(
                          donation.status
                        )}`}
                      ></div>
                      <span
                        className={`text-sm font-medium ${getStatusColor(
                          donation.status
                        )}`}
                      >
                        {donation.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    {getActionButton(donation.action)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button
            className="flex items-center space-x-1 px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-2 rounded ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <span className="px-3 py-2 text-gray-500">...</span>
            <button className="px-3 py-2 text-gray-700 hover:bg-gray-100">
              99
            </button>
          </div>

          <button
            className="flex items-center space-x-1 px-3 py-2 text-gray-500 hover:text-gray-700"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <span>Next</span>
          </button>
        </div>

        <div className="text-right text-sm text-gray-500 mt-4">
          Showing 1 of 20 results
        </div>
      </div>
    </div>
  );
};

export default DonorDetails;
