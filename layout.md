Sequelize Models: Users, Boards, Lists, Cards

Boards belong to 1 Owner(User) (1 to many)
Lists belong to 1 Boards (1 to 1) //With through table to map lists to User(Owner)
Cards belong to 1 Lists (1 to many)
Cards belong to multiple Users (many to many)
Users(Members) belong to multiple Boards (many to many)
(Refer to Mimir's Market)
