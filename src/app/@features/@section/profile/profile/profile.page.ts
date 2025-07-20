import { Component, inject    } from '@angular/core';
import { ProfileService       } from 'nv@services/profile.service';

@Component({
  selector    : 'page-profile',
  templateUrl : 'profile.page.html',
  styleUrl    : 'profile.page.scss'
})
export class ProfilePage {

    private $dataService  = inject(ProfileService);

  //   logout() {
  //   // Example logic: clear token or session
  //   localStorage.removeItem('auth_token'); // or whatever you use
  //   // Then navigate to login page or home
  //   this.router.navigate(['/login']); // or whatever your login route is
  // }

}
