import { statusLabel, type Status } from "@/lib/architecture";

export function StatusChip({ status, label }: { status: Status; label?: string }) {
  return <span className={`st st-${status}`}>{label ?? statusLabel[status]}</span>;
}

export function StatusLegend() {
  return (
    <ul className="legend" aria-label="What the status labels mean">
      <li>
        <StatusChip status="built" /> works and is tested
      </li>
      <li>
        <StatusChip status="progress" /> being built now
      </li>
      <li>
        <StatusChip status="planned" /> designed, not yet built
      </li>
    </ul>
  );
}
