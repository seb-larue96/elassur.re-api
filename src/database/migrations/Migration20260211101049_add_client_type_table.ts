import { Migration } from '@mikro-orm/migrations';

export class Migration20260211101049_add_client_type_table extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table \`client_type\` (\`id\` int unsigned not null auto_increment primary key, \`name\` varchar(255) not null, \`status\` varchar(255) not null) default character set utf8mb4 engine = InnoDB;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists \`client_type\`;`);
  }

}
