import * as colors from "./index";

describe("Color tokens", () => {
  it("should export valid color groups and color values", () => {
    Object.entries(colors).forEach(([groupName, group]) => {
      // group name checks
      expect(groupName).toBeDefined();
      expect(typeof groupName).toBe("string");
      expect(groupName.length).toBeGreaterThan(0);

      // group checks
      expect(group).toBeDefined();
      expect(typeof group).toBe("object");

      Object.entries(group as Record<string, string>).forEach(
        ([colorName, value]) => {
          // color name checks
          expect(colorName).toBeDefined();
          expect(typeof colorName).toBe("string");
          expect(colorName.length).toBeGreaterThan(0);

          // color value checks
          expect(value).toBeDefined();
          expect(typeof value).toBe("string");
          expect(value.length).toBeGreaterThan(0);
        }
      );
    });
  });
});
