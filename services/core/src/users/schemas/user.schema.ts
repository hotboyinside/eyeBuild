import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop()
  companyEmail: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  fullName?: string;

  @Prop()
  companyName?: string;

  @Prop({ required: true, enum: Role })
  role: Role;

  @Prop({ default: false })
  isBanned?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (error) {
    next(error);
  }
});
