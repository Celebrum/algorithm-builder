export class ErrorHandler {
    static handleError(error: Error, context?: string) {
        console.error(`Error${context ? ` in ${context}` : ''}: ${error.message}`);
        console.error('Stack trace:', error.stack);
        // Add your error reporting service here if needed
    }

    static wrapAsync<T>(fn: (...args: any[]) => Promise<T>) {
        return async (...args: any[]): Promise<T> => {
            try {
                return await fn(...args);
            } catch (error) {
                ErrorHandler.handleError(error as Error);
                throw error;
            }
        };
    }
}
