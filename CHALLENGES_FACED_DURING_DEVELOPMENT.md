## 🔄 Search Filter Sync Issue Across Tabs

While building the `PatientsTable` component, I wanted the search input to stay in sync across all open browser tabs using the `BroadcastChannel` API. This means if I type something in one tab, the same search and table data should show up in all other tabs too.

### ❌ What Was Going Wrong?

- When I searched for something like `rs` in one tab, it filtered the table correctly.
- But in other tabs, either the input didn’t update or the table data stayed the same.
- If I deleted a letter (like from `rs` to `r`), then no tab was in sync anymore.

### 🧠 Why This Happened

- Every tab had its own local `search` state.
- When one tab sent a message, others received it and updated their `search`, but then **they sent messages again**, causing a loop or mismatch.
- Sometimes messages came in too quickly, so tabs didn't update in time.

### ✅ How I Fixed It

- I used a `isRemoteUpdate` ref to know if the update came from another tab.
- If yes, I just updated the input and stopped there (no need to send the message again).
- If the user typed in the input (not a broadcast), then I sent the message to other tabs.

```tsx
if (!isRemoteUpdate.current) {
  channelRef.current?.postMessage({
    type: FILTER_PATIENTS,
    payload: search,
  });
} else {
  isRemoteUpdate.current = false;
}
```

```tsx
channel.onmessage = (event) => {
  if (event.data.type === FILTER_PATIENTS) {
    isRemoteUpdate.current = true;
    setSearch(event.data.payload);
  }
};
```

### 🎉 Result

Now, search input and table data stay in sync across all tabs. Everything updates instantly and correctly.
