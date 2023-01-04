import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique
} from 'sequelize-typescript'
import type { UserData } from 'user'

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user',
})
class User extends Model<UserData> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number

  //practicumId
  @AllowNull(false)
  @Unique
  @Column({
    type: DataType.INTEGER,
    field: 'p_id'
  })
  pId: number

  @Column({
    type: DataType.STRING,
    field: 'display_name'
  })
  displayName: string

  @Column({
    type: DataType.STRING,
  })
  login: string

  @Column({
    type: DataType.STRING,
  })
  avatar: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  email: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  phone: string
}

export default User
