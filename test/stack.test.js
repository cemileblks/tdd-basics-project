class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop(value) {
    if (this.top < 0) return undefined;
    const poppedValue = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return poppedValue;
  }
}

describe("My Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push item to top", () => {
    stack.push("🥑");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🥑");
  });

  it("can pop off an item", () => {
    stack.push("🥑");
    const poppedItem = stack.pop();
    expect(poppedItem).toBe("🥑");
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
});
