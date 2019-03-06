-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.3.13-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mydb
CREATE DATABASE IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mydb`;

-- Dumping structure for table mydb.connections
CREATE TABLE IF NOT EXISTS `connections` (
  `isbn` varchar(255) DEFAULT NULL,
  `imdbID` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table mydb.connections: ~13 rows (approximately)
/*!40000 ALTER TABLE `connections` DISABLE KEYS */;
REPLACE INTO `connections` (`isbn`, `imdbID`) VALUES
	('0393012492', 'tt0095016'),
	('9780099303015', 'tt0120783'),
	('0787124648', 'tt0083944'),
	('0312870019', 'tt0096438'),
	('0553171526', 'tt0093058'),
	('9780307454447', 'tt0377092'),
	('1429596406', 'tt0469494'),
	('0553566156', 'tt0107614'),
	('1592408214', 'tt1981677'),
	('0743564235', 'tt0840361'),
	('9780582430099', 'tt0112697'),
	('9780743267489', 'tt1010048'),
	('9780899667348', 'tt0084787');
/*!40000 ALTER TABLE `connections` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
