"use client";

import { useState } from "react";
import {
  Building2,
  UserRound,
  Bell,
  Palette,
  ShieldCheck,
  Save,
  Moon,
  Sun,
  Check,
} from "lucide-react";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Tab =
  | "Organization"
  | "Profile"
  | "Notifications"
  | "Appearance"
  | "Security";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("Organization");

  const [notifications, setNotifications] = useState({
    email: true,
    system: true,
    reports: false,
  });

  const [appearance, setAppearance] = useState("Light");

  const [organization, setOrganization] = useState({
    name: "PeoplePulse Technologies",
    email: "admin@peoplepulse.com",
    industry: "Information Technology",
    size: "100-500 Employees",
    address: "Bengaluru, Karnataka, India",
  });

  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@peoplepulse.com",
    role: "Administrator",
    department: "Human Resources",
  });

  const tabs = [
    { name: "Organization" as Tab, icon: Building2 },
    { name: "Profile" as Tab, icon: UserRound },
    { name: "Notifications" as Tab, icon: Bell },
    { name: "Appearance" as Tab, icon: Palette },
    { name: "Security" as Tab, icon: ShieldCheck },
  ];

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    alert("Settings saved successfully in this demo!");
  };

  const inputClass =
    "w-full rounded-xl border border-[#E9E5F0] bg-white px-4 py-3 text-sm text-[#27233A] outline-none transition focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10";

  const labelClass = "mb-2 block text-sm font-semibold text-[#39334B]";

  const renderToggle = (
    title: string,
    description: string,
    checked: boolean,
    onChange: () => void,
  ) => (
    <div className="flex items-center justify-between gap-4 border-b border-[#F0EDF5] py-5 last:border-0">
      <div>
        <h3 className="text-sm font-semibold text-[#302A40]">{title}</h3>
        <p className="mt-1 text-xs text-[#817A91]">{description}</p>
      </div>

      <button
        type="button"
        onClick={onChange}
        aria-label={`Toggle ${title}`}
        aria-pressed={checked}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? "bg-[#7C3AED]" : "bg-[#D8D3E0]"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-all ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#F8F7FC]">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          title="Settings"
          description="Manage your organization preferences and account settings."
        />

        <main className="flex-1 space-y-6 p-5 md:p-8 bg-[#f7f8f4]">
          {/* Page Heading */}
          <div>
            <h1 className="text-2xl font-bold text-[#27233A]">Settings</h1>
            <p className="mt-1 text-sm text-[#817A91]">
              Customize your PeoplePulse workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Settings Sidebar */}
            <div className="h-fit rounded-2xl border border-[#E9E5F0] bg-white p-3 shadow-sm lg:col-span-3">
              <p className="px-3 py-3 text-xs font-bold uppercase tracking-wider text-[#A09AAA]">
                General Settings
              </p>

              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.name;

                  return (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                        isActive
                          ? "bg-[#EDE9FE] text-[#6D28D9]"
                          : "text-[#716B80] hover:bg-[#F8F7FC] hover:text-[#6D28D9]"
                      }`}
                    >
                      <Icon size={18} />
                      {tab.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Settings Content */}
            <div className="rounded-2xl border border-[#E9E5F0] bg-white p-5 shadow-sm md:p-7 lg:col-span-9">
              {/* Organization */}
              {activeTab === "Organization" && (
                <div>
                  <div className="mb-7 border-b border-[#F0EDF5] pb-5">
                    <h2 className="text-lg font-bold text-[#27233A]">
                      Organization Details
                    </h2>
                    <p className="mt-1 text-sm text-[#817A91]">
                      Manage your company information.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Company Name</label>
                      <input
                        className={inputClass}
                        value={organization.name}
                        onChange={(e) =>
                          setOrganization({
                            ...organization,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Company Email</label>
                      <input
                        className={inputClass}
                        value={organization.email}
                        onChange={(e) =>
                          setOrganization({
                            ...organization,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Industry</label>
                      <select
                        className={inputClass}
                        value={organization.industry}
                        onChange={(e) =>
                          setOrganization({
                            ...organization,
                            industry: e.target.value,
                          })
                        }
                      >
                        <option>Information Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>Education</option>
                        <option>Manufacturing</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Company Size</label>
                      <select
                        className={inputClass}
                        value={organization.size}
                        onChange={(e) =>
                          setOrganization({
                            ...organization,
                            size: e.target.value,
                          })
                        }
                      >
                        <option>1-50 Employees</option>
                        <option>50-100 Employees</option>
                        <option>100-500 Employees</option>
                        <option>500-1000 Employees</option>
                        <option>1000+ Employees</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className={labelClass}>Office Address</label>
                      <input
                        className={inputClass}
                        value={organization.address}
                        onChange={(e) =>
                          setOrganization({
                            ...organization,
                            address: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Profile */}
              {activeTab === "Profile" && (
                <div>
                  <div className="mb-7 border-b border-[#F0EDF5] pb-5">
                    <h2 className="text-lg font-bold text-[#27233A]">
                      Profile Information
                    </h2>
                    <p className="mt-1 text-sm text-[#817A91]">
                      Manage your personal account details.
                    </p>
                  </div>

                  <div className="mb-7 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EDE9FE] text-xl font-bold text-[#6D28D9]">
                      AU
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#27233A]">
                        {profile.name}
                      </h3>
                      <p className="text-sm text-[#817A91]">{profile.role}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        className={inputClass}
                        value={profile.name}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        className={inputClass}
                        value={profile.email}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Role</label>
                      <input
                        className={inputClass}
                        value={profile.role}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            role: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Department</label>
                      <input
                        className={inputClass}
                        value={profile.department}
                        onChange={(e) =>
                          setProfile({
                            ...profile,
                            department: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === "Notifications" && (
                <div>
                  <div className="mb-5 border-b border-[#F0EDF5] pb-5">
                    <h2 className="text-lg font-bold text-[#27233A]">
                      Notification Preferences
                    </h2>
                    <p className="mt-1 text-sm text-[#817A91]">
                      Choose which notifications you want to receive.
                    </p>
                  </div>

                  {renderToggle(
                    "Email Notifications",
                    "Receive updates and alerts through email.",
                    notifications.email,
                    () => toggleNotification("email"),
                  )}

                  {renderToggle(
                    "System Notifications",
                    "Receive notifications inside PeoplePulse.",
                    notifications.system,
                    () => toggleNotification("system"),
                  )}

                  {renderToggle(
                    "Weekly Reports",
                    "Receive a weekly summary of HR activities.",
                    notifications.reports,
                    () => toggleNotification("reports"),
                  )}
                </div>
              )}

              {/* Appearance */}
              {activeTab === "Appearance" && (
                <div>
                  <div className="mb-7 border-b border-[#F0EDF5] pb-5">
                    <h2 className="text-lg font-bold text-[#27233A]">
                      Appearance
                    </h2>
                    <p className="mt-1 text-sm text-[#817A91]">
                      Choose your preferred display mode.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {[
                      { name: "Light", icon: Sun },
                      { name: "Dark", icon: Moon },
                    ].map((item) => {
                      const Icon = item.icon;
                      const selected = appearance === item.name;

                      return (
                        <button
                          key={item.name}
                          onClick={() => setAppearance(item.name)}
                          className={`rounded-2xl border-2 p-5 text-left transition ${
                            selected
                              ? "border-[#7C3AED] bg-[#F5F3FF]"
                              : "border-[#E9E5F0] hover:border-[#C4B5FD]"
                          }`}
                        >
                          <div className="mb-5 flex items-center justify-between">
                            <div className="rounded-xl bg-[#EDE9FE] p-3 text-[#6D28D9]">
                              <Icon size={22} />
                            </div>

                            {selected && (
                              <span className="rounded-full bg-[#7C3AED] p-1 text-white">
                                <Check size={14} />
                              </span>
                            )}
                          </div>

                          <h3 className="font-semibold text-[#27233A]">
                            {item.name} Mode
                          </h3>
                          <p className="mt-1 text-xs text-[#817A91]">
                            {item.name === "Light"
                              ? "Clean and bright interface."
                              : "A darker interface for low-light environments."}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  <p className="mt-5 rounded-xl bg-[#F8F7FC] p-4 text-xs text-[#817A91]">
                    Appearance selection is currently a UI demo. It does not
                    apply a global theme to the entire application.
                  </p>
                </div>
              )}

              {/* Security */}
              {activeTab === "Security" && (
                <div>
                  <div className="mb-7 border-b border-[#F0EDF5] pb-5">
                    <h2 className="text-lg font-bold text-[#27233A]">
                      Security Settings
                    </h2>
                    <p className="mt-1 text-sm text-[#817A91]">
                      Manage your account password.
                    </p>
                  </div>

                  <div className="max-w-lg space-y-5">
                    <div>
                      <label className={labelClass}>Current Password</label>
                      <input
                        type="password"
                        placeholder="Enter current password"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className={inputClass}
                      />
                    </div>

                    <div className="rounded-xl bg-[#F5F3FF] p-4 text-sm text-[#6D28D9]">
                      <ShieldCheck size={18} className="mb-2" />
                      Use a strong password with at least 8 characters.
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="mt-8 flex justify-end border-t border-[#F0EDF5] pt-6">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 rounded-xl bg-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6D28D9] active:scale-95"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
