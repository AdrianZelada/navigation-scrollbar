export abstract class AbstractSectionComponent {
  // abstract next(data?: any): void;
  validate(): boolean {
    return true;
  };
  abstract activated(): void;
  abstract inactivated(): void;
  abstract back(): void;
  abstract getData(): void;
}
export interface SectionDirectiveInterface {
  validate(): boolean;
  activated(): void;
  inactivated(): void;
}
