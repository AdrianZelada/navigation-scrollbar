export abstract class AbstractSectionComponent {
  abstract next(data?: any): void;
  abstract back(): void;
  abstract getData(): void;
}
