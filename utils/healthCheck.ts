export class HealthCheck {
    private static instance: HealthCheck;
    private status: Map<string, boolean> = new Map();

    private constructor() {}

    static getInstance(): HealthCheck {
        if (!HealthCheck.instance) {
            HealthCheck.instance = new HealthCheck();
        }
        return HealthCheck.instance;
    }

    setStatus(component: string, isHealthy: boolean) {
        this.status.set(component, isHealthy);
    }

    isHealthy(): boolean {
        return Array.from(this.status.values()).every(status => status);
    }

    getStatus(): Record<string, boolean> {
        return Object.fromEntries(this.status);
    }
}
