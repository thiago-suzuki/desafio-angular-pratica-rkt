import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { UserAuthService } from "../services/user-auth";
import { inject } from "@angular/core";

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const _userAuthService = inject(UserAuthService)

  const HAS_TOKEN = _userAuthService.getUserToken();
  if(HAS_TOKEN) {
    const newReq = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${HAS_TOKEN}`)
    });

    return next(newReq);
  }

  return next(req);
}
