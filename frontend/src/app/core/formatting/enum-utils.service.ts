import { Injectable } from '@angular/core';
import { IsActive } from '@app/core/enum/is-active.enum';
import { LanguageType } from '@app/core/enum/language-type.enum';
import { RoleType } from '@app/core/enum/role-type.enum';
import { BaseEnumUtilsService } from '@common/base/base-enum-utils.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppEnumUtils extends BaseEnumUtilsService {
	constructor(private language: TranslateService) { super(); }

	public toRoleTypeString(value: RoleType): string {
		switch (value) {
			case RoleType.Admin: return this.language.instant('APP.TYPES.APP-ROLE.ADMIN');
			case RoleType.User: return this.language.instant('APP.TYPES.APP-ROLE.USER');
			case RoleType.DatasetAdmin: return this.language.instant('APP.TYPES.APP-ROLE.DATASET-ADMIN');
			case RoleType.DatasetViewer: return this.language.instant('APP.TYPES.APP-ROLE.DATASET-VIEWER');
			case RoleType.AccessAdmin: return this.language.instant('APP.TYPES.APP-ROLE.ACCESS-ADMIN');
			case RoleType.AccessViewer: return this.language.instant('APP.TYPES.APP-ROLE.ACCESS-VIEWER');
			default: return '';
		}
	}

	public toIsActiveString(value: IsActive): string {
		switch (value) {
			case IsActive.Active: return this.language.instant('APP.TYPES.IS-ACTIVE.ACTIVE');
			case IsActive.Inactive: return this.language.instant('APP.TYPES.IS-ACTIVE.INACTIVE');
			default: return '';
		}
	}

	public toLanguageTypeString(value: LanguageType): string {
		switch (value) {
			case LanguageType.English: return this.language.instant('APP.TYPES.LANGUAGE-TYPE.ENGLISH');
			case LanguageType.Greek: return this.language.instant('APP.TYPES.LANGUAGE-TYPE.GREEK');
			default: return '';
		}
	}
}
