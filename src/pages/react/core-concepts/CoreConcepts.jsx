import React from "react";
import PropsState from "./PropsState";
import KeysInLists from "./KeysInLists";
import LiftingStateUp from "./LiftingStateUp";
import Forms from "./Forms";

export default function CoreConcepts() {
  return (
    <div className="p-6 space-y-12 animate-fadeIn bg-gray-50 rounded">
      <h1 className="text-4xl font-bold text-center">🔹 Core Concepts</h1>

      {/* Props & State */}
      <section>
        <PropsState />
      </section>

      {/* Keys in Lists */}
      <section>
        <KeysInLists />
      </section>

      {/* Lifting State Up */}
      <section>
        <LiftingStateUp />
      </section>

      {/* Forms (Controlled & Uncontrolled) */}
      <section>
        <Forms />
      </section>
    </div>
  );
}
