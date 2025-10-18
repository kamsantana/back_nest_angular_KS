import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
<<<<<<< HEAD
            secretOrKey: 'MI_CODIGO_SECRETO',
        });
    }
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    } 
=======
            secretOrKey: "MI_CODIGO_SECRETO"
        })
    }

    async validate(payload: any) {
        return {email: payload.email, id: payload.id}
    }
>>>>>>> 05d7e95f278df52d41d2f44427b0d5c03e1ff5c4
}