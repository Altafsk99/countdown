# Countdown

Simple countdown utility to get remaining days, hours, minutes, and seconds till a target date.

## Installation

```bash
npm install countdown


import { getRemainingDDHHMMSS } from "countdown";

const result = getRemainingDDHHMMSS("2025-05-01T00:00:00Z");

console.log(result);
// Output:
// { days: 364, hours: 8, minutes: 22, seconds: 10 }