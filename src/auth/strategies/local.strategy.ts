import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authSerervice: AuthService) {
        super({
            usernameField: 'email',
        })
    }

    validate(email: string, password: string) {
        return this.authSerervice.validateUser(email, password);
    }
}