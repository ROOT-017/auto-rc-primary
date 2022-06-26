-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 25, 2022 at 10:50 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `PRIMARY_SCHOOL_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Marks`
--

CREATE TABLE `Marks` (
  `Sub_ID` int(15) NOT NULL,
  `Teach_ID` int(15) NOT NULL,
  `Marks` int(3) NOT NULL,
  `STD_ID` int(11) NOT NULL,
  `Sub_Title` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Marks`
--

INSERT INTO `Marks` (`Sub_ID`, `Teach_ID`, `Marks`, `STD_ID`, `Sub_Title`) VALUES
(1, 1, 18, 1, ''),
(1, 1, 15, 2, ''),
(1, 1, 16, 4, ''),
(2, 1, 17, 1, ''),
(2, 1, 10, 4, ''),
(4, 1, 10, 1, ''),
(4, 1, 16, 3, ''),
(5, 2, 15, 1, ''),
(5, 2, 15, 2, ''),
(5, 2, 15, 3, '');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `STD_ID` int(15) NOT NULL,
  `STD_Name` varchar(25) NOT NULL,
  `STD_Password` varchar(25) NOT NULL,
  `STD_Mail` varchar(25) NOT NULL,
  `STD_Class` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`STD_ID`, `STD_Name`, `STD_Password`, `STD_Mail`, `STD_Class`) VALUES
(1, 'TERENCE', '123456', 'terence@gmail', 5),
(2, 'NGWEN', '123456', 'ngwen@gmail.com', 5),
(3, 'John Doe', 'aaa123', 'johndoe@gmail', 5),
(4, 'Lil Rock', 'aaaaa', 'lilrock@hotmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `Subject`
--

CREATE TABLE `Subject` (
  `SUb_ID` int(15) NOT NULL,
  `Sub_Title` varchar(25) NOT NULL,
  `Teach_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Subject`
--

INSERT INTO `Subject` (`SUb_ID`, `Sub_Title`, `Teach_ID`) VALUES
(1, 'Maths', 1),
(2, 'ICT', 1),
(3, 'ENG', 1),
(4, 'Moral Education', 1),
(5, 'French', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Teacher`
--

CREATE TABLE `Teacher` (
  `Teach_ID` int(15) NOT NULL,
  `Teach_Name` varchar(25) NOT NULL,
  `Teach_email` varchar(25) NOT NULL,
  `Teach_Password` varchar(25) NOT NULL,
  `Teach_Class` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Teacher`
--

INSERT INTO `Teacher` (`Teach_ID`, `Teach_Name`, `Teach_email`, `Teach_Password`, `Teach_Class`) VALUES
(1, 'Tambe', 'tambe@gmail.com', 'aaaaa', 5),
(2, 'Juan', 'juan@gmail.com', 'juan123', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Marks`
--
ALTER TABLE `Marks`
  ADD PRIMARY KEY (`Sub_ID`,`STD_ID`),
  ADD KEY `STD_ID` (`STD_ID`),
  ADD KEY `Marks_ibfk_2` (`Teach_ID`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`STD_ID`);

--
-- Indexes for table `Subject`
--
ALTER TABLE `Subject`
  ADD PRIMARY KEY (`SUb_ID`),
  ADD KEY `Teach_ID` (`Teach_ID`);

--
-- Indexes for table `Teacher`
--
ALTER TABLE `Teacher`
  ADD PRIMARY KEY (`Teach_ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Marks`
--
ALTER TABLE `Marks`
  ADD CONSTRAINT `Marks_ibfk_1` FOREIGN KEY (`STD_ID`) REFERENCES `student` (`STD_ID`),
  ADD CONSTRAINT `Marks_ibfk_2` FOREIGN KEY (`Teach_ID`) REFERENCES `Teacher` (`Teach_ID`),
  ADD CONSTRAINT `Marks_ibfk_3` FOREIGN KEY (`Sub_ID`) REFERENCES `Subject` (`SUb_ID`);

--
-- Constraints for table `Subject`
--
ALTER TABLE `Subject`
  ADD CONSTRAINT `Subject_ibfk_1` FOREIGN KEY (`Teach_ID`) REFERENCES `Teacher` (`Teach_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
