# Test info

- Name: Customer can open the Uitvaartverzekering product page on DELA
- Location: /Users/simonwong/Documents/Coding Practice/playwright-insurance-test/tests/insurance-flow.spec.ts:3:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('text=Ga naar de uitvaartverzekering')

    at /Users/simonwong/Documents/Coding Practice/playwright-insurance-test/tests/insurance-flow.spec.ts:10:61
```

# Page snapshot

```yaml
- main:
  - heading "Icon for www.dela.nlwww.dela.nl" [level=1]:
    - img "Icon for www.dela.nl"
    - text: www.dela.nl
  - paragraph: Verify you are human by completing the action below.
  - text: www.dela.nl needs to review the security of your connection before proceeding.
- contentinfo:
  - text: "Ray ID:"
  - code: 942a3b738837fe96
  - text: Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
```

# Test source

```ts
   1 | import { test, expect } from "@playwright/test";
   2 |
   3 | test("Customer can open the Uitvaartverzekering product page on DELA", async ({
   4 |   page,
   5 | }) => {
   6 |   // Step 1: Go to the main insurance page
   7 |   await page.goto("https://www.dela.nl/verzekeringen");
   8 |
   9 |   // Step 2: Click the correct button using a flexible text locator
> 10 |   await page.locator("text=Ga naar de uitvaartverzekering").click();
     |                                                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  11 |
  12 |   // Step 3: Wait for the new page to load by checking the URL
  13 |   await expect(page).toHaveURL(/.*uitvaartverzekering/);
  14 |
  15 |   // Step 4: Check that the first heading that contains 'uitvaartverzekering' is visible
  16 |   await expect(
  17 |     page.getByRole("heading", { name: /uitvaartverzekering/i }).first()
  18 |   ).toBeVisible();
  19 | });
  20 |
```