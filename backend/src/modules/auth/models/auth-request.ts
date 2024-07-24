import { Request } from 'express';
import { Member } from 'src/modules/member/entities/Member';


export interface AuthRequest extends Request {
  user: Member
}