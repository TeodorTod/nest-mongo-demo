import { ArgumentMetadata, BadGatewayException, PipeTransform } from "@nestjs/common";

export class ParseIdPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata): number {
        const val = parseInt(value, 10)
        if (isNaN(val)) {
            throw new BadGatewayException("id must be a number")
        }
        if (val <= 0) {
            throw new BadGatewayException("id must be positive")
        }
        return val;
    }
}