import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
export declare class TodasExpepciones implements ExceptionFilter {
    private readonly logger;
    catch(exception: any, host: ArgumentsHost): void;
}
