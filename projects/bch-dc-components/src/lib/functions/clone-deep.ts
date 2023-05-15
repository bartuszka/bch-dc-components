// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cloneDeep(value: any): any {
  return JSON.parse(JSON.stringify(value));
}
