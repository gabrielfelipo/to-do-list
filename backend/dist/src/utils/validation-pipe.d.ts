import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';
export declare class ZodValidationPipe implements PipeTransform {
    private schema;
    constructor(schema: ZodSchema<any>);
    transform(value: any, _metadata: ArgumentMetadata): any;
}
