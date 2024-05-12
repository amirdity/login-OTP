"use client";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";
function DarkMode() {
  return (
    <div>
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={isDarkMode}
        onChange={setDarkMode}
        size={120}
      />
    </div>
  );
}
export default DarkMode;