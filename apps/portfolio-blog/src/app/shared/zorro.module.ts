import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [NzButtonModule, NzLayoutModule, NzBreadCrumbModule, NzMenuModule],
  exports: [NzButtonModule, NzLayoutModule, NzBreadCrumbModule, NzMenuModule],
  providers: [],
  bootstrap: [],
})
export class ZorroModule {}
