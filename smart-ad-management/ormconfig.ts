import { User } from './src/users/entities/user.entity';
import { UserSession } from './src/users/entities/userSession.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Tenant } from './src/users/entities/tenant.enitity';
import { Subscription } from './src/subscription/entities/subscription.entity';
import { SubscriptionPlan } from './src/subscription-plan/entities/subscriptionPlan.entity';
import { Feedback } from './src/feedback/entities/feedback.entity';
import { Reply } from './src/feedback/entities/reply.entity';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mrh',
  entities: [User, UserSession, Tenant, Subscription, SubscriptionPlan, Feedback, Reply],
  synchronize: true,
};

export default config;