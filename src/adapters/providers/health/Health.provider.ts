import { IHealthProvider } from "../../../application/modules/health/providerContracts/IHealth.provider";

export class HealthProvider implements IHealthProvider {
  async get(date: string): Promise<string> {
    return Promise.resolve(`<div><h2>NodeTskeleton online at ${date}</h2></div>`);
  }
}
