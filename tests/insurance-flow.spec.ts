import { test, expect } from "@playwright/test";

test("Customer can open the Uitvaartverzekering product page on DELA", async ({
  page,
}) => {
  // Step 1: Go to the main insurance page
  await page.goto("https://www.dela.nl/verzekeringen");

  // Step 2: Click the correct button using a flexible text locator
  await page.locator("text=Ga naar de uitvaartverzekering").click();

  // Step 3: Wait for the new page to load by checking the URL
  await expect(page).toHaveURL(/.*uitvaartverzekering/);

  // Step 4: Check that the first heading that contains 'uitvaartverzekering' is visible
  await expect(
    page.getByRole("heading", { name: /uitvaartverzekering/i }).first()
  ).toBeVisible();
});
