
-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 11:42 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `authenticate_task`
--

-- --------------------------------------------------------

--
-- Table structure for table `Contacts`
--

CREATE TABLE `Contacts` (
  `id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_phone_number` varchar(255) NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Contacts`
--

INSERT INTO `Contacts` (`id`, `user_id`, `contact_name`, `contact_phone_number`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'friend 1', '9444395237', '', ''),
(2, 1, 'friend 2', '9444395238', '', ''),
(3, 2, 'friend 3', '9444395228', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `Spams`
--

CREATE TABLE `Spams` (
  `id` int(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `spam_score` varchar(255) NOT NULL,
  `spam_reasons` longtext DEFAULT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Spams`
--

INSERT INTO `Spams` (`id`, `phone_number`, `spam_score`, `spam_reasons`, `createdAt`, `updatedAt`) VALUES
(1, '987651901', '2', 'WyJ0ZXN0IiwidGVzdCJd', '2024-04-26 17:51:20', '2024-04-26 18:26:14'),
(2, '1234567890', '2', 'WyJ0ZXN0IiwidGVzdCJd', '2024-04-26 18:49:36', '2024-04-26 18:49:42'),
(11, '9786371559', '12', 'WyJTY2FtIFBlb3BsZSIsIkxvYW4gQ2FsbHMiLCJMb2FuIENhbGxzIl0=', '2024-04-26 21:12:41', '2024-04-26 21:15:07'),
(12, '9786371571', '2', 'WyJMb2FuIENhbGxzIiwiU2NhbSBQZW9wbGUiXQ==', '2024-04-26 21:19:00', '2024-04-26 21:19:11');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` longtext NOT NULL,
  `createdAt` varchar(255) NOT NULL,
  `updatedAt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `phone_number`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(6, 'test1', '1234567890', 'jana77@gmail.com', '$2b$10$hr9u7uqaPIvRtoA.ZxOLDeOZUHLraD/PhjrNEaTYEHqGnnLaklyCS', '2024-04-25 17:27:04', '2024-04-25 17:27:04'),
(7, 'auth', '1234567870', 'jana77@gmail.com', '$2b$10$s9B4Kn.OUCquNxGCWrZQ4eOKlGn8xir51xI1eweWljX9GINPtKNuC', '2024-04-25 17:27:32', '2024-04-25 17:27:32'),
(9, 'video_record', '9786374657', 'jana77@gmail.com', '$2b$10$sTjgEgRJ5smm5JTE58J7/uII1ywYSGlozv2godfZWl5M4tMlQdwL6', '2024-04-26 20:57:51', '2024-04-26 20:57:51'),
(10, 'video_record1', '9786374659', 'jana77@gmail.com', '$2b$10$Jyv/jH0E3fgkvldP.uEgxuKbM3Py7rJJafb1dU7sE5zOtCW94y4l6', '2024-04-26 21:10:15', '2024-04-26 21:10:15'),
(11, 'video_record2', '9786371559', 'jana77@gmail.com', '$2b$10$KuwhU64.BQcoiTFkAPQpo.auXKjS5xVrNLMFaihVWPrOwHN8GO7kK', '2024-04-26 21:10:30', '2024-04-26 21:10:30'),
(12, 'video_record3', '9786371570', 'jana77@gmail.com', '$2b$10$s5wIfMeYPC7HcQMXgOTcDubAZ1VhVlsRAXGE8JWmBo5jNxTaajl4e', '2024-04-26 21:17:03', '2024-04-26 21:17:03'),
(13, 'video_record4', '9786371571', 'jana77@gmail.com', '$2b$10$SN5vEm4PD2jK/oXDqt6MGOw4ukc/ppZPJQ9Cx2/c9N9oajAPUFQSK', '2024-04-26 21:17:17', '2024-04-26 21:17:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Contacts`
--
ALTER TABLE `Contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Spams`
--
ALTER TABLE `Spams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Contacts`
--
ALTER TABLE `Contacts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Spams`
--
ALTER TABLE `Spams`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
