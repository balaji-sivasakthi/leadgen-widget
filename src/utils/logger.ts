export class Logger {
  static e(tag: string, message: any) {
    console.error(`[${tag}]`, message);
  }
  static d(tag: string, message: any) {
    console.log(`[${tag}]`, message);
  }
}
