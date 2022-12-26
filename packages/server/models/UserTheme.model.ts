import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  timestamps: false,
  paranoid: true,
  tableName: 'user_theme',
})
class UserTheme extends Model<UserTheme> {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  override id: number

  @AllowNull(false)
  @Column(DataType.STRING)
  theme: string

  @Column(DataType.STRING)
  device: string

  // @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId: number
}

export default UserTheme
