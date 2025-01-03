import { ErrorHandler } from '../utils/errorHandler';
import { HealthCheck } from '../utils/healthCheck';

export class MonitoringService {
    private healthCheck = HealthCheck.getInstance();
    private checkInterval: NodeJS.Timeout | null = null;

    start(intervalMs: number = 5000) {
        this.checkInterval = setInterval(() => {
            this.runHealthChecks();
        }, intervalMs);
    }

    stop() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
        }
    }

    private async runHealthChecks() {
        try {
            // Add your specific health checks here
            const systemStatus = this.healthCheck.getStatus();
            console.log('System Status:', systemStatus);
            
            if (!this.healthCheck.isHealthy()) {
                console.warn('System is not fully healthy!');
            }
        } catch (error) {
            ErrorHandler.handleError(error as Error, 'HealthCheck');
        }
    }
}
