USE LOICHUCAPP
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY(1,1),
    UserName NVARCHAR(50) NOT NULL,
    Password NVARCHAR(50) NOT NULL
);


INSERT INTO Users (UserName, Password)
VALUES ('user1', 'password1');


