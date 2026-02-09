import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDto } from '../users/dto/user-response.dto';
import jwtConfig from 'src/config/jwt.config';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly jwtService: JwtService,
        @Inject(jwtConfig.KEY)
        private readonly jwtConfiguration: ConfigType<typeof jwtConfig>
    ) {}

    async signIn(user: UserResponseDto): Promise<string> {
        const payload = { 
            id: user.id, 
            name: user.name,
            email: user.email,
            role: user.role
        };

        const jwtOptions = { 
            audience: this.jwtConfiguration.audience, 
            issuer: this.jwtConfiguration.issuer,
            secret: this.jwtConfiguration.secret,
            expiresIn: this.jwtConfiguration.accessTokenTtl
        };

        const access_token = await this.jwtService.signAsync(payload, jwtOptions);
        return access_token;
    }

    async logout() {
        return { message: 'Logged out successfully' };
    }
}
