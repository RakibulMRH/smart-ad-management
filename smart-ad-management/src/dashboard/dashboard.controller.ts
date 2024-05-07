import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { User } from '../users/entities/user.entity';
import { ForbiddenException } from '@nestjs/common';
import { ReqUser } from '../decorators/req-user.decorator';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get('user/:userId')
    async getUserDetails(@Param('userId') userId: string, @ReqUser() user: User): Promise<User> {
        if (user.id !== Number(userId)) {
            throw new ForbiddenException('You are not authorized to access this resource');
        }
        return this.dashboardService.getUserDetails(Number(userId));
    }

    @Get('subscription/:userId')
    async getSubscriptionDetails(@Param('userId') userId: string, @ReqUser() user: User) {
        if (user.id !== Number(userId)) {
            throw new ForbiddenException('You are not authorized to access this resource');
        }
        return this.dashboardService.getSubscriptionDetails(Number(userId));
    }

    @Get('feedback/:userId')
    async getFeedbackForUser(@Param('userId') userId: string, @ReqUser() user: User) {
        if (user.id !== Number(userId)) {
            throw new ForbiddenException('You are not authorized to access this resource');
        }
        return this.dashboardService.getFeedbackForUser(Number(userId));
    }

    @Get('consultations/:userId')
    async getConsultationsForUser(@Param('userId') userId: string, @ReqUser() user: User) {
        if (user.id !== Number(userId)) {
            throw new ForbiddenException('You are not authorized to access this resource');
        }
        return this.dashboardService.getConsultationsForUser(Number(userId));
    }

    @Get('consultation-slots/:userId')
    async getConsultationSlotsForUser(@Param('userId') userId: string, @ReqUser() user: User) {
        if (user.id !== Number(userId)) {
            throw new ForbiddenException('You are not authorized to access this resource');
        }
        return this.dashboardService.getConsultationSlotsForUser(Number(userId));
    }
}