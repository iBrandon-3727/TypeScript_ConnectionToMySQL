import { musicModule } from "./music.module";

describe('Music', () => {
  it('should create an instance', () => {
    expect(new musicModule()).toBeTruthy();
  });
});
