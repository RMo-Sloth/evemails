export interface Mail{
  readonly index: number;
  readonly account: number;
  readonly labels: number[];
  readonly sender: number;
  readonly recipients: number[];
  readonly subject: string;
  readonly body?: string;
  readonly timestamp: Date;
  readonly isRead: boolean;
}
