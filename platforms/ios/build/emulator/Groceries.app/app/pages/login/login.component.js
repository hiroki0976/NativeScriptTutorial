"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "my.test.account@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA6A7" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild("email"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "email", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0NBQStCO0FBQy9CLHNDQUF5RTtBQUN6RSwrQ0FBOEM7QUFDOUMsK0RBQTZEO0FBQzdELDBDQUF5QztBQUN6QywrQkFBOEI7QUFFOUIsbURBQXFEO0FBU3JELElBQWEsY0FBYztJQWF2Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCLEVBQVUsSUFBVTtRQUFwRSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTnhGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBT2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGtDQUFrQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBaEJELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDakQsQ0FBQztJQWVELCtCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFB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eyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgc2V0SGludENvbG9yIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2hpbnQtdXRpbFwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwicmVzOi8vYmdfbG9naW5cIjtcbiAgICB9XG5cbiAgICB1c2VyOiBVc2VyO1xuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJlbWFpbFwiKSBlbWFpbDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwibXkudGVzdC5hY2NvdW50QG5hdGl2ZXNjcmlwdC5vcmdcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXIuaXNWYWxpZEVtYWlsKCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9saXN0XCJdKSxcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBzaWduVXAoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICB0b2dnbGVEaXNwbGF5KCkge1xuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgICAgIHRoaXMuc2V0VGV4dEZpZWxkQ29sb3JzKCk7XG4gICAgICAgIGxldCBjb250YWluZXIgPSA8Vmlldz50aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBjb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuaXNMb2dnaW5nSW4gPyBuZXcgQ29sb3IoXCJ3aGl0ZVwiKSA6IG5ldyBDb2xvcihcIiMzMDEyMTdcIiksXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRUZXh0RmllbGRDb2xvcnMoKSB7XG4gICAgICAgIGxldCBlbWFpbFRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5lbWFpbC5uYXRpdmVFbGVtZW50O1xuICAgICAgICBsZXQgcGFzc3dvcmRUZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMucGFzc3dvcmQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBsZXQgbWFpblRleHRDb2xvciA9IG5ldyBDb2xvcih0aGlzLmlzTG9nZ2luZ0luID8gXCJibGFja1wiIDogXCIjQzRBRkI0XCIpO1xuICAgICAgICBlbWFpbFRleHRGaWVsZC5jb2xvciA9IG1haW5UZXh0Q29sb3I7XG4gICAgICAgIHBhc3N3b3JkVGV4dEZpZWxkLmNvbG9yID0gbWFpblRleHRDb2xvcjtcblxuICAgICAgICBsZXQgaGludENvbG9yID0gbmV3IENvbG9yKHRoaXMuaXNMb2dnaW5nSW4gPyBcIiNBQ0E2QTdcIiA6IFwiI0M0QUZCNFwiKTtcbiAgICAgICAgc2V0SGludENvbG9yKHsgdmlldzogZW1haWxUZXh0RmllbGQsIGNvbG9yOiBoaW50Q29sb3IgfSk7XG4gICAgICAgIHNldEhpbnRDb2xvcih7IHZpZXc6IHBhc3N3b3JkVGV4dEZpZWxkLCBjb2xvcjogaGludENvbG9yIH0pO1xuICAgIH1cblxufVxuIl19