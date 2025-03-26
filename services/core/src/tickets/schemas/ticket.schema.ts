import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { TicketTypes, TicketStatuses } from 'src/common/enums/tickets.enum';
import { User } from '../../users/schemas/user.schema';

export type TicketDocument = HydratedDocument<Ticket>;

@Schema({ timestamps: true })
export class Ticket {
  @Prop({ required: true, enum: TicketTypes })
  type: TicketTypes;

  @Prop({ required: true })
  reason: string;

  @Prop()
  paymentId: string;

  @Prop({ required: true, enum: TicketStatuses })
  status: TicketStatuses;

  @Prop({ type: Date, default: null })
  closedDate: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: User;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
