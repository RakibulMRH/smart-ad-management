// app.module.ts
import { Module } from '@nestjs/common';
// ... other imports

// Remove the DashboardModule import
// import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    // ... other modules
    // Remove the DashboardModule from the imports array
    // DashboardModule,
  ],
  // ... other module configurations
})
export class AppModule {}