import { EntityRepository } from "@mikro-orm/mysql";
import { InjectRepository } from "@mikro-orm/nestjs";
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "src/application/roles/entities/role.entity";
import { ROLE_RANK } from "src/config/roles.config";
import { ROLES_KEY } from "src/decorators/role.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @InjectRepository(Role)
        private readonly roleRepository: EntityRepository<Role>,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        );

        if (!requiredRoles || requiredRoles.length === 0) return true;

        const userRole = await this.roleRepository.findOne({
            name: user.role,
            status: { $ne: 'D' },
        });

        if (!userRole) return false;

        const userRank = ROLE_RANK[user.role];
        if (!userRank) return false;

        const minRequiredRank = Math.min(
            ...requiredRoles.map(r => ROLE_RANK[r] ?? Infinity),
        );

        return userRank >= minRequiredRank;
    }
}