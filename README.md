# Plan

1. Use a preliminary method of distance location to narrow down the number of phones that need to "test" against. In this case, Bluetooth.
2. When a phone has established "neighbours" (other phones within 10-15ft), it tells them to prepare for a noise at a specific frequency via Bluetooth. It makes a noise at a specific frequency beyond human-hearing.
   1. It records  the time that it emitted the frequency and sends it to the "neighbours", also via Bluetooth.
3. Having been told to listen out, if they hear the specific frequency, the "neighbours" record the time they heard it.
4. From this, distance can be determined. This is approximately 1m per 3ms delay.

Additional information can improve this estimate:
 - The local temperature
 - The position or orientation of the phones