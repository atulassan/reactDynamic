import React from "react";
import SyntheticEventsExample from "./events/SyntheticEvents";
import EventBubblingExample from "./events/EventBubbling";
import EventDelegationExample from "./events/EventDelegation";

export default function Events() {
  return (
    <div className="p-6 space-y-12 animate-fadeIn bg-gray-50 rounded">
      <h1 className="text-4xl font-bold text-center">🔹 React Events</h1>

      {/* Synthetic Events */}
      <section>
        <SyntheticEventsExample />
      </section>

      {/* Event Bubbling */}
      <section>
        <EventBubblingExample />
      </section>

      {/* Event Delegation */}
      <section>
        <EventDelegationExample />
      </section>
    </div>
  );
}
