import { Migration } from '@mikro-orm/migrations';

export class Migration20260209065423_init extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`role\` (\`id\` int unsigned not null auto_increment primary key, \`name\` varchar(255) not null, \`status\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);

    this.addSql(`create table \`user\` (\`id\` int unsigned not null auto_increment primary key, \`name\` varchar(255) not null, \`email\` varchar(255) not null, \`password\` varchar(255) not null, \`role_id\` int unsigned not null, \`status\` varchar(255) not null, \`is_active\` tinyint(1) not null default true, \`created_at\` datetime not null, \`updated_at\` datetime null) default character set utf8mb4 engine = InnoDB;`);
    this.addSql(`alter table \`user\` add index \`user_role_id_index\`(\`role_id\`);`);

    this.addSql(`alter table \`user\` add constraint \`user_role_id_foreign\` foreign key (\`role_id\`) references \`role\` (\`id\`) on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table \`user\` drop foreign key \`user_role_id_foreign\`;`);

    this.addSql(`drop table if exists \`role\`;`);

    this.addSql(`drop table if exists \`user\`;`);
  }

}
