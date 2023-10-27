/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.4.13-MariaDB : Database - myfirst_dev
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`myfirst_dev` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `myfirst_dev`;

/*Table structure for table `admin_permissions` */

DROP TABLE IF EXISTS `admin_permissions`;

CREATE TABLE `admin_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `action_parameters` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`action_parameters`)),
  `subject` varchar(255) DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`properties`)),
  `conditions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`conditions`)),
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_permissions_created_by_id_fk` (`created_by_id`),
  KEY `admin_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `admin_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `admin_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=146 DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin_permissions` */

insert  into `admin_permissions`(`id`,`action`,`action_parameters`,`subject`,`properties`,`conditions`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'plugin::upload.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.106000','2023-10-26 16:06:12.106000',NULL,NULL),
(2,'plugin::upload.configure-view','{}',NULL,'{}','[]','2023-10-26 16:06:12.113000','2023-10-26 16:06:12.113000',NULL,NULL),
(3,'plugin::upload.assets.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.118000','2023-10-26 16:06:12.118000',NULL,NULL),
(4,'plugin::upload.assets.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.123000','2023-10-26 16:06:12.123000',NULL,NULL),
(5,'plugin::upload.assets.download','{}',NULL,'{}','[]','2023-10-26 16:06:12.128000','2023-10-26 16:06:12.128000',NULL,NULL),
(6,'plugin::upload.assets.copy-link','{}',NULL,'{}','[]','2023-10-26 16:06:12.132000','2023-10-26 16:06:12.132000',NULL,NULL),
(7,'plugin::upload.read','{}',NULL,'{}','[\"admin::is-creator\"]','2023-10-26 16:06:12.139000','2023-10-26 16:06:12.139000',NULL,NULL),
(8,'plugin::upload.configure-view','{}',NULL,'{}','[]','2023-10-26 16:06:12.143000','2023-10-26 16:06:12.143000',NULL,NULL),
(9,'plugin::upload.assets.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.148000','2023-10-26 16:06:12.148000',NULL,NULL),
(10,'plugin::upload.assets.update','{}',NULL,'{}','[\"admin::is-creator\"]','2023-10-26 16:06:12.154000','2023-10-26 16:06:12.154000',NULL,NULL),
(11,'plugin::upload.assets.download','{}',NULL,'{}','[]','2023-10-26 16:06:12.158000','2023-10-26 16:06:12.158000',NULL,NULL),
(12,'plugin::upload.assets.copy-link','{}',NULL,'{}','[]','2023-10-26 16:06:12.163000','2023-10-26 16:06:12.163000',NULL,NULL),
(13,'plugin::content-manager.explorer.create','{}','plugin::users-permissions.user','{\"fields\":[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]}','[]','2023-10-26 16:06:12.317000','2023-10-26 16:06:12.317000',NULL,NULL),
(14,'plugin::content-manager.explorer.read','{}','plugin::users-permissions.user','{\"fields\":[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]}','[]','2023-10-26 16:06:12.331000','2023-10-26 16:06:12.331000',NULL,NULL),
(15,'plugin::content-manager.explorer.update','{}','plugin::users-permissions.user','{\"fields\":[\"username\",\"email\",\"provider\",\"password\",\"resetPasswordToken\",\"confirmationToken\",\"confirmed\",\"blocked\",\"role\"]}','[]','2023-10-26 16:06:12.337000','2023-10-26 16:06:12.337000',NULL,NULL),
(16,'plugin::content-manager.explorer.delete','{}','plugin::users-permissions.user','{}','[]','2023-10-26 16:06:12.342000','2023-10-26 16:06:12.342000',NULL,NULL),
(17,'plugin::content-manager.single-types.configure-view','{}',NULL,'{}','[]','2023-10-26 16:06:12.347000','2023-10-26 16:06:12.347000',NULL,NULL),
(18,'plugin::content-manager.collection-types.configure-view','{}',NULL,'{}','[]','2023-10-26 16:06:12.351000','2023-10-26 16:06:12.351000',NULL,NULL),
(19,'plugin::content-manager.components.configure-layout','{}',NULL,'{}','[]','2023-10-26 16:06:12.358000','2023-10-26 16:06:12.358000',NULL,NULL),
(20,'plugin::content-type-builder.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.363000','2023-10-26 16:06:12.363000',NULL,NULL),
(21,'plugin::email.settings.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.369000','2023-10-26 16:06:12.369000',NULL,NULL),
(22,'plugin::upload.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.377000','2023-10-26 16:06:12.377000',NULL,NULL),
(23,'plugin::upload.assets.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.382000','2023-10-26 16:06:12.382000',NULL,NULL),
(24,'plugin::upload.assets.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.388000','2023-10-26 16:06:12.388000',NULL,NULL),
(25,'plugin::upload.assets.download','{}',NULL,'{}','[]','2023-10-26 16:06:12.393000','2023-10-26 16:06:12.393000',NULL,NULL),
(26,'plugin::upload.assets.copy-link','{}',NULL,'{}','[]','2023-10-26 16:06:12.398000','2023-10-26 16:06:12.398000',NULL,NULL),
(27,'plugin::upload.configure-view','{}',NULL,'{}','[]','2023-10-26 16:06:12.403000','2023-10-26 16:06:12.403000',NULL,NULL),
(28,'plugin::upload.settings.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.409000','2023-10-26 16:06:12.409000',NULL,NULL),
(29,'plugin::i18n.locale.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.414000','2023-10-26 16:06:12.414000',NULL,NULL),
(30,'plugin::i18n.locale.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.420000','2023-10-26 16:06:12.420000',NULL,NULL),
(31,'plugin::i18n.locale.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.425000','2023-10-26 16:06:12.425000',NULL,NULL),
(32,'plugin::i18n.locale.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.430000','2023-10-26 16:06:12.430000',NULL,NULL),
(33,'plugin::users-permissions.roles.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.435000','2023-10-26 16:06:12.435000',NULL,NULL),
(34,'plugin::users-permissions.roles.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.441000','2023-10-26 16:06:12.441000',NULL,NULL),
(35,'plugin::users-permissions.roles.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.447000','2023-10-26 16:06:12.447000',NULL,NULL),
(36,'plugin::users-permissions.roles.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.452000','2023-10-26 16:06:12.452000',NULL,NULL),
(37,'plugin::users-permissions.providers.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.459000','2023-10-26 16:06:12.459000',NULL,NULL),
(38,'plugin::users-permissions.providers.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.464000','2023-10-26 16:06:12.464000',NULL,NULL),
(39,'plugin::users-permissions.email-templates.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.470000','2023-10-26 16:06:12.470000',NULL,NULL),
(40,'plugin::users-permissions.email-templates.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.475000','2023-10-26 16:06:12.475000',NULL,NULL),
(41,'plugin::users-permissions.advanced-settings.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.480000','2023-10-26 16:06:12.480000',NULL,NULL),
(42,'plugin::users-permissions.advanced-settings.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.485000','2023-10-26 16:06:12.485000',NULL,NULL),
(43,'admin::marketplace.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.490000','2023-10-26 16:06:12.490000',NULL,NULL),
(44,'admin::webhooks.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.494000','2023-10-26 16:06:12.494000',NULL,NULL),
(45,'admin::webhooks.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.499000','2023-10-26 16:06:12.499000',NULL,NULL),
(46,'admin::webhooks.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.503000','2023-10-26 16:06:12.503000',NULL,NULL),
(47,'admin::webhooks.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.508000','2023-10-26 16:06:12.508000',NULL,NULL),
(48,'admin::users.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.513000','2023-10-26 16:06:12.513000',NULL,NULL),
(49,'admin::users.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.517000','2023-10-26 16:06:12.517000',NULL,NULL),
(50,'admin::users.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.521000','2023-10-26 16:06:12.521000',NULL,NULL),
(51,'admin::users.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.525000','2023-10-26 16:06:12.525000',NULL,NULL),
(52,'admin::roles.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.530000','2023-10-26 16:06:12.530000',NULL,NULL),
(53,'admin::roles.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.535000','2023-10-26 16:06:12.535000',NULL,NULL),
(54,'admin::roles.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.539000','2023-10-26 16:06:12.539000',NULL,NULL),
(55,'admin::roles.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.548000','2023-10-26 16:06:12.548000',NULL,NULL),
(56,'admin::api-tokens.access','{}',NULL,'{}','[]','2023-10-26 16:06:12.553000','2023-10-26 16:06:12.553000',NULL,NULL),
(57,'admin::api-tokens.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.558000','2023-10-26 16:06:12.558000',NULL,NULL),
(58,'admin::api-tokens.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.564000','2023-10-26 16:06:12.564000',NULL,NULL),
(59,'admin::api-tokens.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.568000','2023-10-26 16:06:12.568000',NULL,NULL),
(60,'admin::api-tokens.regenerate','{}',NULL,'{}','[]','2023-10-26 16:06:12.574000','2023-10-26 16:06:12.574000',NULL,NULL),
(61,'admin::api-tokens.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.579000','2023-10-26 16:06:12.579000',NULL,NULL),
(62,'admin::project-settings.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.583000','2023-10-26 16:06:12.583000',NULL,NULL),
(63,'admin::project-settings.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.653000','2023-10-26 16:06:12.653000',NULL,NULL),
(64,'admin::transfer.tokens.access','{}',NULL,'{}','[]','2023-10-26 16:06:12.659000','2023-10-26 16:06:12.659000',NULL,NULL),
(65,'admin::transfer.tokens.create','{}',NULL,'{}','[]','2023-10-26 16:06:12.664000','2023-10-26 16:06:12.664000',NULL,NULL),
(66,'admin::transfer.tokens.read','{}',NULL,'{}','[]','2023-10-26 16:06:12.669000','2023-10-26 16:06:12.669000',NULL,NULL),
(67,'admin::transfer.tokens.update','{}',NULL,'{}','[]','2023-10-26 16:06:12.674000','2023-10-26 16:06:12.674000',NULL,NULL),
(68,'admin::transfer.tokens.regenerate','{}',NULL,'{}','[]','2023-10-26 16:06:12.679000','2023-10-26 16:06:12.679000',NULL,NULL),
(69,'admin::transfer.tokens.delete','{}',NULL,'{}','[]','2023-10-26 16:06:12.684000','2023-10-26 16:06:12.684000',NULL,NULL),
(136,'plugin::content-manager.explorer.create','{}','api::post.post','{\"fields\":[\"title\",\"cover\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.785000','2023-10-27 15:44:09.785000',NULL,NULL),
(137,'plugin::content-manager.explorer.read','{}','api::post.post','{\"fields\":[\"title\",\"cover\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.792000','2023-10-27 15:44:09.792000',NULL,NULL),
(138,'plugin::content-manager.explorer.update','{}','api::post.post','{\"fields\":[\"title\",\"cover\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.798000','2023-10-27 15:44:09.798000',NULL,NULL),
(139,'plugin::content-manager.explorer.delete','{}','api::post.post','{\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.804000','2023-10-27 15:44:09.804000',NULL,NULL),
(140,'plugin::content-manager.explorer.publish','{}','api::post.post','{\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.809000','2023-10-27 15:44:09.809000',NULL,NULL),
(141,'plugin::content-manager.explorer.create','{}','api::landing-page.landing-page','{\"fields\":[\"page_title\",\"page_desc\",\"heroes_section.title\",\"heroes_section.image\",\"heroes_section.desc\",\"heroes_section.link\",\"heroes_section.link_text\",\"heroes_section.mobile_image\",\"blogs_section.title\",\"blogs_section.image\",\"blogs_section.date\",\"blogs_section.link\",\"products_section.title\",\"products_section.image\",\"products_section.desc\",\"products_section.link\",\"products_section.link_text\",\"products_section.mobile_image\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.814000','2023-10-27 15:44:09.814000',NULL,NULL),
(142,'plugin::content-manager.explorer.read','{}','api::landing-page.landing-page','{\"fields\":[\"page_title\",\"page_desc\",\"heroes_section.title\",\"heroes_section.image\",\"heroes_section.desc\",\"heroes_section.link\",\"heroes_section.link_text\",\"heroes_section.mobile_image\",\"blogs_section.title\",\"blogs_section.image\",\"blogs_section.date\",\"blogs_section.link\",\"products_section.title\",\"products_section.image\",\"products_section.desc\",\"products_section.link\",\"products_section.link_text\",\"products_section.mobile_image\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.820000','2023-10-27 15:44:09.820000',NULL,NULL),
(143,'plugin::content-manager.explorer.update','{}','api::landing-page.landing-page','{\"fields\":[\"page_title\",\"page_desc\",\"heroes_section.title\",\"heroes_section.image\",\"heroes_section.desc\",\"heroes_section.link\",\"heroes_section.link_text\",\"heroes_section.mobile_image\",\"blogs_section.title\",\"blogs_section.image\",\"blogs_section.date\",\"blogs_section.link\",\"products_section.title\",\"products_section.image\",\"products_section.desc\",\"products_section.link\",\"products_section.link_text\",\"products_section.mobile_image\"],\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.825000','2023-10-27 15:44:09.825000',NULL,NULL),
(144,'plugin::content-manager.explorer.delete','{}','api::landing-page.landing-page','{\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.830000','2023-10-27 15:44:09.830000',NULL,NULL),
(145,'plugin::content-manager.explorer.publish','{}','api::landing-page.landing-page','{\"locales\":[\"en\",\"zh-Hans-SG\",\"zh\"]}','[]','2023-10-27 15:44:09.839000','2023-10-27 15:44:09.839000',NULL,NULL);

/*Table structure for table `admin_permissions_role_links` */

DROP TABLE IF EXISTS `admin_permissions_role_links`;

CREATE TABLE `admin_permissions_role_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `permission_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_permissions_role_links_unique` (`permission_id`,`role_id`),
  KEY `admin_permissions_role_links_fk` (`permission_id`),
  KEY `admin_permissions_role_links_inv_fk` (`role_id`),
  KEY `admin_permissions_role_links_order_inv_fk` (`permission_order`),
  CONSTRAINT `admin_permissions_role_links_fk` FOREIGN KEY (`permission_id`) REFERENCES `admin_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `admin_permissions_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=166 DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin_permissions_role_links` */

insert  into `admin_permissions_role_links`(`id`,`permission_id`,`role_id`,`permission_order`) values 
(1,1,2,1),
(2,2,2,2),
(3,3,2,3),
(4,4,2,4),
(5,5,2,5),
(6,6,2,6),
(7,7,3,1),
(8,8,3,2),
(9,9,3,3),
(10,10,3,4),
(11,11,3,5),
(12,12,3,6),
(13,13,1,1),
(14,14,1,2),
(15,15,1,3),
(16,16,1,4),
(17,17,1,5),
(18,18,1,6),
(19,19,1,7),
(20,20,1,8),
(21,21,1,9),
(22,22,1,10),
(23,23,1,11),
(24,24,1,12),
(25,25,1,13),
(26,26,1,14),
(27,27,1,15),
(28,28,1,16),
(29,29,1,17),
(30,30,1,18),
(31,31,1,19),
(32,32,1,20),
(33,33,1,21),
(34,34,1,22),
(35,35,1,23),
(36,36,1,24),
(37,37,1,25),
(38,38,1,26),
(39,39,1,27),
(40,40,1,28),
(41,41,1,29),
(42,42,1,30),
(43,43,1,31),
(44,44,1,32),
(45,45,1,33),
(46,46,1,34),
(47,47,1,35),
(48,48,1,36),
(49,49,1,37),
(50,50,1,38),
(51,51,1,39),
(52,52,1,40),
(53,53,1,41),
(54,54,1,42),
(55,55,1,43),
(56,56,1,44),
(57,57,1,45),
(58,58,1,46),
(59,59,1,47),
(60,60,1,48),
(61,61,1,49),
(62,62,1,50),
(63,63,1,51),
(64,64,1,52),
(65,65,1,53),
(66,66,1,54),
(67,67,1,55),
(68,68,1,56),
(69,69,1,57),
(156,136,1,58),
(157,137,1,59),
(158,138,1,60),
(159,139,1,61),
(160,140,1,62),
(161,141,1,63),
(162,142,1,64),
(163,143,1,65),
(164,144,1,66),
(165,145,1,67);

/*Table structure for table `admin_roles` */

DROP TABLE IF EXISTS `admin_roles`;

CREATE TABLE `admin_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_roles_created_by_id_fk` (`created_by_id`),
  KEY `admin_roles_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `admin_roles_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `admin_roles_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin_roles` */

insert  into `admin_roles`(`id`,`name`,`code`,`description`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'Super Admin','strapi-super-admin','Super Admins can access and manage all features and settings.','2023-10-26 16:06:12.090000','2023-10-26 16:06:12.090000',NULL,NULL),
(2,'Editor','strapi-editor','Editors can manage and publish contents including those of other users.','2023-10-26 16:06:12.097000','2023-10-26 16:06:12.097000',NULL,NULL),
(3,'Author','strapi-author','Authors can manage the content they have created.','2023-10-26 16:06:12.102000','2023-10-26 16:06:12.102000',NULL,NULL);

/*Table structure for table `admin_users` */

DROP TABLE IF EXISTS `admin_users`;

CREATE TABLE `admin_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `registration_token` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `prefered_language` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `admin_users_created_by_id_fk` (`created_by_id`),
  KEY `admin_users_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `admin_users_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `admin_users_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin_users` */

insert  into `admin_users`(`id`,`firstname`,`lastname`,`username`,`email`,`password`,`reset_password_token`,`registration_token`,`is_active`,`blocked`,`prefered_language`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'AAA','AAA',NULL,'aaa@aaa.com','$2a$10$ovYgeZntEjW2c5nGmRPCrusGzNLEPYnaGtjKsFdseArB7IGPfeTeO',NULL,NULL,1,0,NULL,'2023-10-26 16:07:47.797000','2023-10-26 16:07:47.797000',NULL,NULL);

/*Table structure for table `admin_users_roles_links` */

DROP TABLE IF EXISTS `admin_users_roles_links`;

CREATE TABLE `admin_users_roles_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `role_order` double unsigned DEFAULT NULL,
  `user_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_users_roles_links_unique` (`user_id`,`role_id`),
  KEY `admin_users_roles_links_fk` (`user_id`),
  KEY `admin_users_roles_links_inv_fk` (`role_id`),
  KEY `admin_users_roles_links_order_fk` (`role_order`),
  KEY `admin_users_roles_links_order_inv_fk` (`user_order`),
  CONSTRAINT `admin_users_roles_links_fk` FOREIGN KEY (`user_id`) REFERENCES `admin_users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `admin_users_roles_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `admin_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

/*Data for the table `admin_users_roles_links` */

insert  into `admin_users_roles_links`(`id`,`user_id`,`role_id`,`role_order`,`user_order`) values 
(1,1,1,1,1);

/*Table structure for table `components_components_blog_components` */

DROP TABLE IF EXISTS `components_components_blog_components`;

CREATE TABLE `components_components_blog_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` longtext DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

/*Data for the table `components_components_blog_components` */

insert  into `components_components_blog_components`(`id`,`title`,`date`,`link`) values 
(7,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(8,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(9,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(10,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(11,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(12,'Celebrating the Joy of Childhood:\nThe Origin and Significance of Childre...','September 27, 2023','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(19,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(20,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(21,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(22,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(23,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(24,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(25,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(26,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(27,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(28,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(29,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/'),
(30,'庆祝童年的欢乐：\n儿童的起源和意义...','2023 年 9 月 27 日','/blog/celebrating-the-joy-of-childhood-the-origin-and-significance-of-childrens-day/');

/*Table structure for table `components_components_unit_components` */

DROP TABLE IF EXISTS `components_components_unit_components`;

CREATE TABLE `components_components_unit_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` longtext DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `link_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;

/*Data for the table `components_components_unit_components` */

insert  into `components_components_unit_components`(`id`,`title`,`desc`,`link`,`link_text`) values 
(10,'myFirst CareBuds','World First Smart Transparency ModeTrue Wireless Stereo Earbuds for Children','/myfirst-carebuds',NULL),
(11,'myFirst Fone S3','4G Slim Square Screen WatchPhone With Integrated myFirst Circle','/myfirst-fone-s3',NULL),
(12,'Insta Wi','Create & Print Stunning Labels','/myfirst-camera-insta-wi',NULL),
(13,'BC Wireless Lite','Wireless Bone Conduction Headphones for Kids','/myfirst-headphones-bc-wireless-lite',NULL),
(14,'Stay Connected','Unlimited Data and Voice Call for Your Kids','/stay-connected','Learn More'),
(15,'Sketch Book','Just a simple click to save your child’s memorable work','/myfist-sketch-book',NULL),
(16,'3dPen Make','Create 3D Models​. Bring Your Drawings to Life','/myfirst-3dpen-make',NULL),
(17,'Insta 2','Instant Print Camera With Extra Selfie Lens','/myfirst-camera-insta-2',NULL),
(18,'Camera 3','Taking Your Kid’s Photography to the Next Level','/myfirst-camera-3',NULL),
(28,'myFirst 护理芽','全球首款智能透明模式真正的儿童无线立体声耳机','/myfirst-carebuds',NULL),
(29,'myFirst Fone S3','4G 纤薄方形屏幕手表手机，集成 myFirst Circle','/myfirst-fone-s3',NULL),
(30,'Insta Wi','创建和打印令人惊叹的标签','/myfirst-camera-insta-wi',NULL),
(31,'BC 无线精简版','儿童无线骨传导耳机','/myfirst-headphones-bc-wireless-lite',NULL),
(32,'保持联系','为您的孩子提供无限数据和语音通话','/stay-connected','了解更多'),
(33,'素描本','只需简单的点击即可保存您孩子难忘的作品','/myfist-sketch-book',NULL),
(34,'3d笔 制作','创建 3D 模型。 让您的图画栩栩如生','/myfirst-3dpen-make',NULL),
(35,'Insta 2','带有额外自拍镜头的即时打印相机','/myfirst-camera-insta-2',NULL),
(36,'Camera 3','让您孩子的摄影更上一层楼','/myfirst-camera-3',NULL),
(37,'myFirst 护理芽','全球首款智能透明模式真正的儿童无线立体声耳机','/myfirst-carebuds',NULL),
(38,'myFirst Fone S3','4G 纤薄方形屏幕手表手机，集成 myFirst Circle','/myfirst-fone-s3',NULL),
(39,'Insta Wi','创建和打印令人惊叹的标签','/myfirst-camera-insta-wi',NULL),
(40,'BC 无线精简版','儿童无线骨传导耳机','/myfirst-headphones-bc-wireless-lite',NULL),
(41,'保持联系','为您的孩子提供无限数据和语音通话','/stay-connected','了解更多'),
(42,'素描本','只需简单的点击即可保存您孩子难忘的作品','/myfist-sketch-book',NULL),
(43,'3d笔 制作','创建 3D 模型。 让您的图画栩栩如生','/myfirst-3dpen-make',NULL),
(44,'Insta 2','带有额外自拍镜头的即时打印相机','/myfirst-camera-insta-2',NULL),
(45,'Camera 3','让您孩子的摄影更上一层楼','/myfirst-camera-3',NULL);

/*Table structure for table `files` */

DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `alternative_text` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `formats` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`formats`)),
  `hash` varchar(255) DEFAULT NULL,
  `ext` varchar(255) DEFAULT NULL,
  `mime` varchar(255) DEFAULT NULL,
  `size` decimal(10,2) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `preview_url` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`provider_metadata`)),
  `folder_path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `upload_files_folder_path_index` (`folder_path`),
  KEY `upload_files_created_at_index` (`created_at`),
  KEY `upload_files_updated_at_index` (`updated_at`),
  KEY `upload_files_name_index` (`name`),
  KEY `upload_files_size_index` (`size`),
  KEY `upload_files_ext_index` (`ext`),
  KEY `files_created_by_id_fk` (`created_by_id`),
  KEY `files_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `files_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `files_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4;

/*Data for the table `files` */

insert  into `files`(`id`,`name`,`alternative_text`,`caption`,`width`,`height`,`formats`,`hash`,`ext`,`mime`,`size`,`url`,`preview_url`,`provider`,`provider_metadata`,`folder_path`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(5,'landing-main-hero.png','landing-main-hero.png','landing-main-hero.png',1920,1280,'{\"thumbnail\":{\"name\":\"thumbnail_landing-main-hero.png\",\"hash\":\"thumbnail_landing_main_hero_9e7a22ca2e\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":234,\"height\":156,\"size\":68.92,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698342856/thumbnail_landing_main_hero_9e7a22ca2e.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_landing_main_hero_9e7a22ca2e\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_landing-main-hero.png\",\"hash\":\"small_landing_main_hero_9e7a22ca2e\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":333,\"size\":263.55,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698342856/small_landing_main_hero_9e7a22ca2e.png\",\"provider_metadata\":{\"public_id\":\"small_landing_main_hero_9e7a22ca2e\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_landing-main-hero.png\",\"hash\":\"medium_landing_main_hero_9e7a22ca2e\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":500,\"size\":562.26,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698342858/medium_landing_main_hero_9e7a22ca2e.png\",\"provider_metadata\":{\"public_id\":\"medium_landing_main_hero_9e7a22ca2e\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_landing-main-hero.png\",\"hash\":\"large_landing_main_hero_9e7a22ca2e\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":667,\"size\":967.82,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698342864/large_landing_main_hero_9e7a22ca2e.png\",\"provider_metadata\":{\"public_id\":\"large_landing_main_hero_9e7a22ca2e\",\"resource_type\":\"image\"}}}','landing_main_hero_9e7a22ca2e','.png','image/png',725.39,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698342862/landing_main_hero_9e7a22ca2e.png',NULL,'cloudinary','{\"public_id\":\"landing_main_hero_9e7a22ca2e\",\"resource_type\":\"image\"}','/1','2023-10-27 02:52:39.929000','2023-10-27 03:24:21.248000',1,1),
(6,'3d-pen-make.png',NULL,NULL,682,597,'{\"thumbnail\":{\"name\":\"thumbnail_3d-pen-make.png\",\"hash\":\"thumbnail_3d_pen_make_582f04f89f\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":178,\"height\":156,\"size\":15.02,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/thumbnail_3d_pen_make_582f04f89f.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_3d_pen_make_582f04f89f\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_3d-pen-make.png\",\"hash\":\"small_3d_pen_make_582f04f89f\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":438,\"size\":81.46,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/small_3d_pen_make_582f04f89f.png\",\"provider_metadata\":{\"public_id\":\"small_3d_pen_make_582f04f89f\",\"resource_type\":\"image\"}}}','3d_pen_make_582f04f89f','.png','image/png',30.37,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/3d_pen_make_582f04f89f.png',NULL,'cloudinary','{\"public_id\":\"3d_pen_make_582f04f89f\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:39.811000','2023-10-27 02:57:39.811000',1,1),
(7,'camera3.png',NULL,NULL,682,597,'{\"thumbnail\":{\"name\":\"thumbnail_camera3.png\",\"hash\":\"thumbnail_camera3_2eb2a15fc4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":178,\"height\":156,\"size\":16.07,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/thumbnail_camera3_2eb2a15fc4.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_camera3_2eb2a15fc4\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_camera3.png\",\"hash\":\"small_camera3_2eb2a15fc4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":438,\"size\":82.77,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/small_camera3_2eb2a15fc4.png\",\"provider_metadata\":{\"public_id\":\"small_camera3_2eb2a15fc4\",\"resource_type\":\"image\"}}}','camera3_2eb2a15fc4','.png','image/png',34.41,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/camera3_2eb2a15fc4.png',NULL,'cloudinary','{\"public_id\":\"camera3_2eb2a15fc4\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:39.900000','2023-10-27 02:57:39.900000',1,1),
(8,'insta2.png',NULL,NULL,682,597,'{\"thumbnail\":{\"name\":\"thumbnail_insta2.png\",\"hash\":\"thumbnail_insta2_9fdc38adf7\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":178,\"height\":156,\"size\":18.39,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/thumbnail_insta2_9fdc38adf7.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_insta2_9fdc38adf7\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_insta2.png\",\"hash\":\"small_insta2_9fdc38adf7\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":438,\"size\":103.34,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/small_insta2_9fdc38adf7.png\",\"provider_metadata\":{\"public_id\":\"small_insta2_9fdc38adf7\",\"resource_type\":\"image\"}}}','insta2_9fdc38adf7','.png','image/png',43.59,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/insta2_9fdc38adf7.png',NULL,'cloudinary','{\"public_id\":\"insta2_9fdc38adf7\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:40.994000','2023-10-27 02:57:40.994000',1,1),
(9,'font-s3.png',NULL,NULL,1416,700,'{\"thumbnail\":{\"name\":\"thumbnail_font-s3.png\",\"hash\":\"thumbnail_font_s3_3d5835d75c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":121,\"size\":27.15,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/thumbnail_font_s3_3d5835d75c.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_font_s3_3d5835d75c\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_font-s3.png\",\"hash\":\"large_font_s3_3d5835d75c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":494,\"size\":323.53,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/large_font_s3_3d5835d75c.png\",\"provider_metadata\":{\"public_id\":\"large_font_s3_3d5835d75c\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_font-s3.png\",\"hash\":\"small_font_s3_3d5835d75c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":247,\"size\":88.24,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/small_font_s3_3d5835d75c.png\",\"provider_metadata\":{\"public_id\":\"small_font_s3_3d5835d75c\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_font-s3.png\",\"hash\":\"medium_font_s3_3d5835d75c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":371,\"size\":183.92,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/medium_font_s3_3d5835d75c.png\",\"provider_metadata\":{\"public_id\":\"medium_font_s3_3d5835d75c\",\"resource_type\":\"image\"}}}','font_s3_3d5835d75c','.png','image/png',135.18,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/font_s3_3d5835d75c.png',NULL,'cloudinary','{\"public_id\":\"font_s3_3d5835d75c\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:41.917000','2023-10-27 02:57:41.917000',1,1),
(10,'insta-wi.png',NULL,NULL,702,700,'{\"thumbnail\":{\"name\":\"thumbnail_insta-wi.png\",\"hash\":\"thumbnail_insta_wi_4d21baaf7d\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":32.81,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/thumbnail_insta_wi_4d21baaf7d.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_insta_wi_4d21baaf7d\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_insta-wi.png\",\"hash\":\"small_insta_wi_4d21baaf7d\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":499,\"size\":254.58,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/small_insta_wi_4d21baaf7d.png\",\"provider_metadata\":{\"public_id\":\"small_insta_wi_4d21baaf7d\",\"resource_type\":\"image\"}}}','insta_wi_4d21baaf7d','.png','image/png',136.47,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/insta_wi_4d21baaf7d.png',NULL,'cloudinary','{\"public_id\":\"insta_wi_4d21baaf7d\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:41.972000','2023-10-27 02:57:41.972000',1,1),
(11,'sketch-book.png',NULL,NULL,682,597,'{\"thumbnail\":{\"name\":\"thumbnail_sketch-book.png\",\"hash\":\"thumbnail_sketch_book_f8dfd40a69\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":178,\"height\":156,\"size\":24.71,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/thumbnail_sketch_book_f8dfd40a69.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_sketch_book_f8dfd40a69\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_sketch-book.png\",\"hash\":\"small_sketch_book_f8dfd40a69\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":438,\"size\":138.81,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/small_sketch_book_f8dfd40a69.png\",\"provider_metadata\":{\"public_id\":\"small_sketch_book_f8dfd40a69\",\"resource_type\":\"image\"}}}','sketch_book_f8dfd40a69','.png','image/png',65.94,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343166/sketch_book_f8dfd40a69.png',NULL,'cloudinary','{\"public_id\":\"sketch_book_f8dfd40a69\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:42.182000','2023-10-27 02:57:42.182000',1,1),
(12,'blog-sample.png',NULL,NULL,448,240,'{\"thumbnail\":{\"name\":\"thumbnail_blog-sample.png\",\"hash\":\"thumbnail_blog_sample_05deca18ef\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":131,\"size\":71.76,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343167/thumbnail_blog_sample_05deca18ef.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_blog_sample_05deca18ef\",\"resource_type\":\"image\"}}}','blog_sample_05deca18ef','.png','image/png',61.46,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343167/blog_sample_05deca18ef.png',NULL,'cloudinary','{\"public_id\":\"blog_sample_05deca18ef\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:43.047000','2023-10-27 02:57:43.047000',1,1),
(13,'bc-wireless-lite.png',NULL,NULL,702,700,'{\"thumbnail\":{\"name\":\"thumbnail_bc-wireless-lite.png\",\"hash\":\"thumbnail_bc_wireless_lite_a25a63b272\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":59.54,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343164/thumbnail_bc_wireless_lite_a25a63b272.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_bc_wireless_lite_a25a63b272\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_bc-wireless-lite.png\",\"hash\":\"small_bc_wireless_lite_a25a63b272\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":499,\"size\":479.55,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343172/small_bc_wireless_lite_a25a63b272.png\",\"provider_metadata\":{\"public_id\":\"small_bc_wireless_lite_a25a63b272\",\"resource_type\":\"image\"}}}','bc_wireless_lite_a25a63b272','.png','image/png',173.01,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343165/bc_wireless_lite_a25a63b272.png',NULL,'cloudinary','{\"public_id\":\"bc_wireless_lite_a25a63b272\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:47.899000','2023-10-27 02:57:47.899000',1,1),
(14,'stay-connected.png',NULL,NULL,1416,700,'{\"thumbnail\":{\"name\":\"thumbnail_stay-connected.png\",\"hash\":\"thumbnail_stay_connected_900202a5d4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":121,\"size\":41.56,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343167/thumbnail_stay_connected_900202a5d4.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_stay_connected_900202a5d4\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_stay-connected.png\",\"hash\":\"small_stay_connected_900202a5d4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":247,\"size\":154.11,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343167/small_stay_connected_900202a5d4.png\",\"provider_metadata\":{\"public_id\":\"small_stay_connected_900202a5d4\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_stay-connected.png\",\"hash\":\"large_stay_connected_900202a5d4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":494,\"size\":603.24,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343169/large_stay_connected_900202a5d4.png\",\"provider_metadata\":{\"public_id\":\"large_stay_connected_900202a5d4\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_stay-connected.png\",\"hash\":\"medium_stay_connected_900202a5d4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":371,\"size\":341.3,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343174/medium_stay_connected_900202a5d4.png\",\"provider_metadata\":{\"public_id\":\"medium_stay_connected_900202a5d4\",\"resource_type\":\"image\"}}}','stay_connected_900202a5d4','.png','image/png',298.19,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343171/stay_connected_900202a5d4.png',NULL,'cloudinary','{\"public_id\":\"stay_connected_900202a5d4\",\"resource_type\":\"image\"}','/1','2023-10-27 02:57:49.593000','2023-10-27 02:57:49.593000',1,1),
(15,'explore-news.png',NULL,NULL,448,240,'{\"thumbnail\":{\"name\":\"thumbnail_explore-news.png\",\"hash\":\"thumbnail_explore_news_ad4f46c017\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":131,\"size\":39.15,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/thumbnail_explore_news_ad4f46c017.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_explore_news_ad4f46c017\",\"resource_type\":\"image\"}}}','explore_news_ad4f46c017','.png','image/png',23.58,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/explore_news_ad4f46c017.png',NULL,'cloudinary','{\"public_id\":\"explore_news_ad4f46c017\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:00.543000','2023-10-27 02:59:00.543000',1,1),
(16,'story-green-girl.png',NULL,NULL,570,570,'{\"thumbnail\":{\"name\":\"thumbnail_story-green-girl.png\",\"hash\":\"thumbnail_story_green_girl_354210799d\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":24.73,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343246/thumbnail_story_green_girl_354210799d.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_story_green_girl_354210799d\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_story-green-girl.png\",\"hash\":\"small_story_green_girl_354210799d\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":500,\"size\":219.96,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343246/small_story_green_girl_354210799d.png\",\"provider_metadata\":{\"public_id\":\"small_story_green_girl_354210799d\",\"resource_type\":\"image\"}}}','story_green_girl_354210799d','.png','image/png',77.53,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/story_green_girl_354210799d.png',NULL,'cloudinary','{\"public_id\":\"story_green_girl_354210799d\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:01.887000','2023-10-27 02:59:01.887000',1,1),
(17,'explore-contact.png',NULL,NULL,448,240,'{\"thumbnail\":{\"name\":\"thumbnail_explore-contact.png\",\"hash\":\"thumbnail_explore_contact_62dd99c282\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":131,\"size\":49.78,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343246/thumbnail_explore_contact_62dd99c282.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_explore_contact_62dd99c282\",\"resource_type\":\"image\"}}}','explore_contact_62dd99c282','.png','image/png',43.12,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/explore_contact_62dd99c282.png',NULL,'cloudinary','{\"public_id\":\"explore_contact_62dd99c282\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:01.920000','2023-10-27 02:59:01.920000',1,1),
(18,'explore-compliance.png',NULL,NULL,448,240,'{\"thumbnail\":{\"name\":\"thumbnail_explore-compliance.png\",\"hash\":\"thumbnail_explore_compliance_b0d5866b08\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":131,\"size\":64.13,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343247/thumbnail_explore_compliance_b0d5866b08.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_explore_compliance_b0d5866b08\",\"resource_type\":\"image\"}}}','explore_compliance_b0d5866b08','.png','image/png',37.74,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/explore_compliance_b0d5866b08.png',NULL,'cloudinary','{\"public_id\":\"explore_compliance_b0d5866b08\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:02.276000','2023-10-27 02:59:02.276000',1,1),
(19,'story-blue-boy.png',NULL,NULL,570,570,'{\"thumbnail\":{\"name\":\"thumbnail_story-blue-boy.png\",\"hash\":\"thumbnail_story_blue_boy_74f9288c1c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":26.78,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/thumbnail_story_blue_boy_74f9288c1c.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_story_blue_boy_74f9288c1c\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_story-blue-boy.png\",\"hash\":\"small_story_blue_boy_74f9288c1c\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":500,\"size\":224.54,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343247/small_story_blue_boy_74f9288c1c.png\",\"provider_metadata\":{\"public_id\":\"small_story_blue_boy_74f9288c1c\",\"resource_type\":\"image\"}}}','story_blue_boy_74f9288c1c','.png','image/png',75.70,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343245/story_blue_boy_74f9288c1c.png',NULL,'cloudinary','{\"public_id\":\"story_blue_boy_74f9288c1c\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:02.926000','2023-10-27 02:59:02.926000',1,1),
(20,'story-pink-girl.png',NULL,NULL,570,570,'{\"thumbnail\":{\"name\":\"thumbnail_story-pink-girl.png\",\"hash\":\"thumbnail_story_pink_girl_056ef4c810\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":27.28,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343247/thumbnail_story_pink_girl_056ef4c810.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_story_pink_girl_056ef4c810\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_story-pink-girl.png\",\"hash\":\"small_story_pink_girl_056ef4c810\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":500,\"size\":233.76,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343253/small_story_pink_girl_056ef4c810.png\",\"provider_metadata\":{\"public_id\":\"small_story_pink_girl_056ef4c810\",\"resource_type\":\"image\"}}}','story_pink_girl_056ef4c810','.png','image/png',74.85,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343247/story_pink_girl_056ef4c810.png',NULL,'cloudinary','{\"public_id\":\"story_pink_girl_056ef4c810\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:08.837000','2023-10-27 02:59:08.837000',1,1),
(21,'about-hero.png',NULL,NULL,1440,799,'{\"thumbnail\":{\"name\":\"thumbnail_about-hero.png\",\"hash\":\"thumbnail_about_hero_f5cbe1b261\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":136,\"size\":91.31,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343248/thumbnail_about_hero_f5cbe1b261.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_about_hero_f5cbe1b261\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_about-hero.png\",\"hash\":\"small_about_hero_f5cbe1b261\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":277,\"size\":347.79,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343250/small_about_hero_f5cbe1b261.png\",\"provider_metadata\":{\"public_id\":\"small_about_hero_f5cbe1b261\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_about-hero.png\",\"hash\":\"medium_about_hero_f5cbe1b261\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":416,\"size\":744.95,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343263/medium_about_hero_f5cbe1b261.png\",\"provider_metadata\":{\"public_id\":\"medium_about_hero_f5cbe1b261\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_about-hero.png\",\"hash\":\"large_about_hero_f5cbe1b261\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":555,\"size\":1277.86,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343270/large_about_hero_f5cbe1b261.png\",\"provider_metadata\":{\"public_id\":\"large_about_hero_f5cbe1b261\",\"resource_type\":\"image\"}}}','about_hero_f5cbe1b261','.png','image/png',480.42,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343252/about_hero_f5cbe1b261.png',NULL,'cloudinary','{\"public_id\":\"about_hero_f5cbe1b261\",\"resource_type\":\"image\"}','/2','2023-10-27 02:59:25.414000','2023-10-27 02:59:25.414000',1,1),
(22,'singapore-icon.png',NULL,NULL,64,64,NULL,'singapore_icon_56c98b9f35','.png','image/png',0.70,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343353/singapore_icon_56c98b9f35.png',NULL,'cloudinary','{\"public_id\":\"singapore_icon_56c98b9f35\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:48.714000','2023-10-27 03:00:48.714000',1,1),
(23,'malaysia-icon.png',NULL,NULL,64,64,NULL,'malaysia_icon_5b36bebc79','.png','image/png',0.89,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343353/malaysia_icon_5b36bebc79.png',NULL,'cloudinary','{\"public_id\":\"malaysia_icon_5b36bebc79\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:48.804000','2023-10-27 03:00:48.804000',1,1),
(24,'support-home-icon.svg',NULL,NULL,64,64,NULL,'support_home_icon_352458633d','.svg','image/svg+xml',1.48,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343353/support_home_icon_352458633d.svg',NULL,'cloudinary','{\"public_id\":\"support_home_icon_352458633d\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:49.245000','2023-10-27 03:00:49.245000',1,1),
(25,'global-solid-icon.svg',NULL,NULL,64,64,NULL,'global_solid_icon_404d90cdf2','.svg','image/svg+xml',1.67,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343354/global_solid_icon_404d90cdf2.svg',NULL,'cloudinary','{\"public_id\":\"global_solid_icon_404d90cdf2\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:50.451000','2023-10-27 03:00:50.451000',1,1),
(26,'faq-icon.svg',NULL,NULL,64,64,NULL,'faq_icon_5bfcacdf2e','.svg','image/svg+xml',1.72,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343354/faq_icon_5bfcacdf2e.svg',NULL,'cloudinary','{\"public_id\":\"faq_icon_5bfcacdf2e\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:50.827000','2023-10-27 03:00:50.827000',1,1),
(27,'whatsapp-icon.svg',NULL,NULL,56,64,NULL,'whatsapp_icon_d3a5876481','.svg','image/svg+xml',1.54,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343354/whatsapp_icon_d3a5876481.svg',NULL,'cloudinary','{\"public_id\":\"whatsapp_icon_d3a5876481\",\"resource_type\":\"image\"}','/3','2023-10-27 03:00:51.052000','2023-10-27 03:00:51.052000',1,1),
(28,'hero.png',NULL,NULL,1440,799,'{\"thumbnail\":{\"name\":\"thumbnail_hero.png\",\"hash\":\"thumbnail_hero_0aa432a6c2\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":136,\"size\":59.84,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343354/thumbnail_hero_0aa432a6c2.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_hero_0aa432a6c2\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_hero.png\",\"hash\":\"small_hero_0aa432a6c2\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":277,\"size\":227.35,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343355/small_hero_0aa432a6c2.png\",\"provider_metadata\":{\"public_id\":\"small_hero_0aa432a6c2\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_hero.png\",\"hash\":\"medium_hero_0aa432a6c2\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":416,\"size\":500.28,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343360/medium_hero_0aa432a6c2.png\",\"provider_metadata\":{\"public_id\":\"medium_hero_0aa432a6c2\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_hero.png\",\"hash\":\"large_hero_0aa432a6c2\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":555,\"size\":870.41,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343369/large_hero_0aa432a6c2.png\",\"provider_metadata\":{\"public_id\":\"large_hero_0aa432a6c2\",\"resource_type\":\"image\"}}}','hero_0aa432a6c2','.png','image/png',412.98,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343361/hero_0aa432a6c2.png',NULL,'cloudinary','{\"public_id\":\"hero_0aa432a6c2\",\"resource_type\":\"image\"}','/3','2023-10-27 03:01:05.291000','2023-10-27 03:01:05.291000',1,1),
(29,'hero.png',NULL,NULL,1440,799,'{\"thumbnail\":{\"name\":\"thumbnail_hero.png\",\"hash\":\"thumbnail_hero_e1adcd0d17\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":245,\"height\":136,\"size\":83.15,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343424/thumbnail_hero_e1adcd0d17.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_hero_e1adcd0d17\",\"resource_type\":\"image\"}},\"medium\":{\"name\":\"medium_hero.png\",\"hash\":\"medium_hero_e1adcd0d17\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":750,\"height\":416,\"size\":734.33,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343428/medium_hero_e1adcd0d17.png\",\"provider_metadata\":{\"public_id\":\"medium_hero_e1adcd0d17\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_hero.png\",\"hash\":\"small_hero_e1adcd0d17\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":500,\"height\":277,\"size\":330.82,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343428/small_hero_e1adcd0d17.png\",\"provider_metadata\":{\"public_id\":\"small_hero_e1adcd0d17\",\"resource_type\":\"image\"}},\"large\":{\"name\":\"large_hero.png\",\"hash\":\"large_hero_e1adcd0d17\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":1000,\"height\":555,\"size\":1292.29,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343441/large_hero_e1adcd0d17.png\",\"provider_metadata\":{\"public_id\":\"large_hero_e1adcd0d17\",\"resource_type\":\"image\"}}}','hero_e1adcd0d17','.png','image/png',703.30,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343424/hero_e1adcd0d17.png',NULL,'cloudinary','{\"public_id\":\"hero_e1adcd0d17\",\"resource_type\":\"image\"}','/4','2023-10-27 03:02:18.256000','2023-10-27 03:02:18.256000',1,1),
(30,'drone.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_drone.png\",\"hash\":\"thumbnail_drone_fa3dfa1608\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":14.71,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/thumbnail_drone_fa3dfa1608.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_drone_fa3dfa1608\",\"resource_type\":\"image\"}}}','drone_fa3dfa1608','.png','image/png',4.35,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343565/drone_fa3dfa1608.png',NULL,'cloudinary','{\"public_id\":\"drone_fa3dfa1608\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:21.399000','2023-10-27 03:04:21.399000',1,1),
(31,'fone-s2.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_fone-s2.png\",\"hash\":\"thumbnail_fone_s2_090ddb4e46\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":27.67,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/thumbnail_fone_s2_090ddb4e46.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_fone_s2_090ddb4e46\",\"resource_type\":\"image\"}}}','fone_s2_090ddb4e46','.png','image/png',10.03,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/fone_s2_090ddb4e46.png',NULL,'cloudinary','{\"public_id\":\"fone_s2_090ddb4e46\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:21.986000','2023-10-27 03:04:21.986000',1,1),
(32,'camera.png',NULL,NULL,270,270,'{\"thumbnail\":{\"name\":\"thumbnail_camera.png\",\"hash\":\"thumbnail_camera_a12894823a\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":23.51,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/thumbnail_camera_a12894823a.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_camera_a12894823a\",\"resource_type\":\"image\"}}}','camera_a12894823a','.png','image/png',15.59,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/camera_a12894823a.png',NULL,'cloudinary','{\"public_id\":\"camera_a12894823a\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:22.154000','2023-10-27 03:04:22.154000',1,1),
(33,'fone-s1.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_fone-s1.png\",\"hash\":\"thumbnail_fone_s1_3deef8eabd\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":16.19,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343567/thumbnail_fone_s1_3deef8eabd.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_fone_s1_3deef8eabd\",\"resource_type\":\"image\"}}}','fone_s1_3deef8eabd','.png','image/png',5.14,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343565/fone_s1_3deef8eabd.png',NULL,'cloudinary','{\"public_id\":\"fone_s1_3deef8eabd\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:22.943000','2023-10-27 03:04:22.943000',1,1),
(34,'camera-insta.png',NULL,NULL,270,270,'{\"thumbnail\":{\"name\":\"thumbnail_camera-insta.png\",\"hash\":\"thumbnail_camera_insta_747220464a\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":25.47,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343567/thumbnail_camera_insta_747220464a.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_camera_insta_747220464a\",\"resource_type\":\"image\"}}}','camera_insta_747220464a','.png','image/png',15.03,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/camera_insta_747220464a.png',NULL,'cloudinary','{\"public_id\":\"camera_insta_747220464a\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:23.404000','2023-10-27 03:04:23.404000',1,1),
(35,'pen3d.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_pen3d.png\",\"hash\":\"thumbnail_pen3d_6c757e2290\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":18.17,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/thumbnail_pen3d_6c757e2290.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_pen3d_6c757e2290\",\"resource_type\":\"image\"}}}','pen3d_6c757e2290','.png','image/png',7.59,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/pen3d_6c757e2290.png',NULL,'cloudinary','{\"public_id\":\"pen3d_6c757e2290\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:23.730000','2023-10-27 03:04:23.730000',1,1),
(36,'headphones.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_headphones.png\",\"hash\":\"thumbnail_headphones_da89ed2387\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":11.32,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/thumbnail_headphones_da89ed2387.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_headphones_da89ed2387\",\"resource_type\":\"image\"}}}','headphones_da89ed2387','.png','image/png',4.45,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/headphones_da89ed2387.png',NULL,'cloudinary','{\"public_id\":\"headphones_da89ed2387\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:23.847000','2023-10-27 03:04:23.847000',1,1),
(37,'headphones-bc.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_headphones-bc.png\",\"hash\":\"thumbnail_headphones_bc_5d77ec4282\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":19.73,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/thumbnail_headphones_bc_5d77ec4282.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_headphones_bc_5d77ec4282\",\"resource_type\":\"image\"}}}','headphones_bc_5d77ec4282','.png','image/png',6.16,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343568/headphones_bc_5d77ec4282.png',NULL,'cloudinary','{\"public_id\":\"headphones_bc_5d77ec4282\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:23.960000','2023-10-27 03:04:23.960000',1,1),
(38,'sketch.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_sketch.png\",\"hash\":\"thumbnail_sketch_0a86cc96bf\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":11.8,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343569/thumbnail_sketch_0a86cc96bf.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_sketch_0a86cc96bf\",\"resource_type\":\"image\"}}}','sketch_0a86cc96bf','.png','image/png',3.74,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343569/sketch_0a86cc96bf.png',NULL,'cloudinary','{\"public_id\":\"sketch_0a86cc96bf\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:25.040000','2023-10-27 03:04:25.040000',1,1),
(39,'pen3d-dolphin.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_pen3d-dolphin.png\",\"hash\":\"thumbnail_pen3d_dolphin_4341c7f38e\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":11.52,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343570/thumbnail_pen3d_dolphin_4341c7f38e.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_pen3d_dolphin_4341c7f38e\",\"resource_type\":\"image\"}}}','pen3d_dolphin_4341c7f38e','.png','image/png',3.12,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343569/pen3d_dolphin_4341c7f38e.png',NULL,'cloudinary','{\"public_id\":\"pen3d_dolphin_4341c7f38e\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:25.530000','2023-10-27 03:04:25.530000',1,1),
(40,'shield.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_shield.png\",\"hash\":\"thumbnail_shield_16b79743c5\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":22.46,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343570/thumbnail_shield_16b79743c5.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_shield_16b79743c5\",\"resource_type\":\"image\"}}}','shield_16b79743c5','.png','image/png',7.13,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343569/shield_16b79743c5.png',NULL,'cloudinary','{\"public_id\":\"shield_16b79743c5\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:26.104000','2023-10-27 03:04:26.104000',1,1),
(41,'voice.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_voice.png\",\"hash\":\"thumbnail_voice_46353161b4\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":15.48,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343571/thumbnail_voice_46353161b4.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_voice_46353161b4\",\"resource_type\":\"image\"}}}','voice_46353161b4','.png','image/png',5.41,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343572/voice_46353161b4.png',NULL,'cloudinary','{\"public_id\":\"voice_46353161b4\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:27.747000','2023-10-27 03:04:27.747000',1,1),
(42,'fone-d2.png',NULL,NULL,167,167,'{\"thumbnail\":{\"name\":\"thumbnail_fone-d2.png\",\"hash\":\"thumbnail_fone_d2_61ef04363d\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":156,\"height\":156,\"size\":18.01,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343574/thumbnail_fone_d2_61ef04363d.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_fone_d2_61ef04363d\",\"resource_type\":\"image\"}}}','fone_d2_61ef04363d','.png','image/png',5.99,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698343566/fone_d2_61ef04363d.png',NULL,'cloudinary','{\"public_id\":\"fone_d2_61ef04363d\",\"resource_type\":\"image\"}','/5','2023-10-27 03:04:29.131000','2023-10-27 03:04:29.131000',1,1),
(43,'carebuds-mobile.png','carebuds-mobile.png','carebuds-mobile.png',394,600,'{\"thumbnail\":{\"name\":\"thumbnail_carebuds-mobile.png\",\"hash\":\"thumbnail_carebuds_mobile_3f440136ff\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":102,\"height\":156,\"size\":38.62,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698354989/thumbnail_carebuds_mobile_3f440136ff.png\",\"provider_metadata\":{\"public_id\":\"thumbnail_carebuds_mobile_3f440136ff\",\"resource_type\":\"image\"}},\"small\":{\"name\":\"small_carebuds-mobile.png\",\"hash\":\"small_carebuds_mobile_3f440136ff\",\"ext\":\".png\",\"mime\":\"image/png\",\"path\":null,\"width\":328,\"height\":500,\"size\":310.96,\"url\":\"https://res.cloudinary.com/myfirstsingapore/image/upload/v1698354993/small_carebuds_mobile_3f440136ff.png\",\"provider_metadata\":{\"public_id\":\"small_carebuds_mobile_3f440136ff\",\"resource_type\":\"image\"}}}','carebuds_mobile_3f440136ff','.png','image/png',109.02,'https://res.cloudinary.com/myfirstsingapore/image/upload/v1698354989/carebuds_mobile_3f440136ff.png',NULL,'cloudinary','{\"public_id\":\"carebuds_mobile_3f440136ff\",\"resource_type\":\"image\"}','/1','2023-10-27 06:14:48.318000','2023-10-27 06:14:48.318000',1,1);

/*Table structure for table `files_folder_links` */

DROP TABLE IF EXISTS `files_folder_links`;

CREATE TABLE `files_folder_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int(10) unsigned DEFAULT NULL,
  `folder_id` int(10) unsigned DEFAULT NULL,
  `file_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `files_folder_links_unique` (`file_id`,`folder_id`),
  KEY `files_folder_links_fk` (`file_id`),
  KEY `files_folder_links_inv_fk` (`folder_id`),
  KEY `files_folder_links_order_inv_fk` (`file_order`),
  CONSTRAINT `files_folder_links_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE,
  CONSTRAINT `files_folder_links_inv_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;

/*Data for the table `files_folder_links` */

insert  into `files_folder_links`(`id`,`file_id`,`folder_id`,`file_order`) values 
(1,5,1,1),
(2,6,1,2),
(3,7,1,3),
(4,8,1,4),
(5,9,1,5),
(6,10,1,6),
(7,11,1,7),
(8,12,1,8),
(9,13,1,9),
(10,14,1,10),
(11,15,2,1),
(12,16,2,2),
(13,17,2,3),
(14,18,2,4),
(15,19,2,5),
(16,20,2,6),
(17,21,2,7),
(18,22,3,1),
(19,23,3,2),
(20,24,3,3),
(21,25,3,4),
(22,26,3,5),
(23,27,3,6),
(24,28,3,7),
(25,29,4,1),
(26,30,5,1),
(27,31,5,2),
(28,32,5,3),
(29,33,5,4),
(30,34,5,5),
(31,35,5,6),
(32,36,5,7),
(33,37,5,8),
(34,38,5,9),
(35,39,5,10),
(36,40,5,11),
(37,41,5,12),
(38,42,5,13),
(40,43,1,11);

/*Table structure for table `files_related_morphs` */

DROP TABLE IF EXISTS `files_related_morphs`;

CREATE TABLE `files_related_morphs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `file_id` int(10) unsigned DEFAULT NULL,
  `related_id` int(10) unsigned DEFAULT NULL,
  `related_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_related_morphs_fk` (`file_id`),
  KEY `files_related_morphs_order_index` (`order`),
  KEY `files_related_morphs_id_column_index` (`related_id`),
  CONSTRAINT `files_related_morphs_fk` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4;

/*Data for the table `files_related_morphs` */

insert  into `files_related_morphs`(`id`,`file_id`,`related_id`,`related_type`,`field`,`order`) values 
(65,13,1,'api::post.post','cover',1),
(66,13,2,'api::post.post','cover',1),
(67,43,3,'api::post.post','cover',1),
(100,5,10,'components.unit-component','image',1),
(101,43,10,'components.unit-component','mobile_image',1),
(102,9,11,'components.unit-component','image',1),
(103,10,12,'components.unit-component','image',1),
(104,13,13,'components.unit-component','image',1),
(105,14,14,'components.unit-component','image',1),
(106,12,7,'components.blog-component','image',1),
(107,12,8,'components.blog-component','image',1),
(108,12,9,'components.blog-component','image',1),
(109,12,10,'components.blog-component','image',1),
(110,12,11,'components.blog-component','image',1),
(111,12,12,'components.blog-component','image',1),
(112,11,15,'components.unit-component','image',1),
(113,6,16,'components.unit-component','image',1),
(114,8,17,'components.unit-component','image',1),
(115,7,18,'components.unit-component','image',1),
(116,5,28,'components.unit-component','image',1),
(117,43,28,'components.unit-component','mobile_image',1),
(118,9,29,'components.unit-component','image',1),
(119,10,30,'components.unit-component','image',1),
(120,13,31,'components.unit-component','image',1),
(121,14,32,'components.unit-component','image',1),
(122,12,19,'components.blog-component','image',1),
(123,12,20,'components.blog-component','image',1),
(124,12,21,'components.blog-component','image',1),
(125,12,22,'components.blog-component','image',1),
(126,12,23,'components.blog-component','image',1),
(127,12,24,'components.blog-component','image',1),
(128,11,33,'components.unit-component','image',1),
(129,6,34,'components.unit-component','image',1),
(130,8,35,'components.unit-component','image',1),
(131,7,36,'components.unit-component','image',1),
(132,5,37,'components.unit-component','image',1),
(133,43,37,'components.unit-component','mobile_image',1),
(134,9,38,'components.unit-component','image',1),
(135,10,39,'components.unit-component','image',1),
(136,13,40,'components.unit-component','image',1),
(137,14,41,'components.unit-component','image',1),
(138,12,25,'components.blog-component','image',1),
(139,12,26,'components.blog-component','image',1),
(140,12,27,'components.blog-component','image',1),
(141,12,28,'components.blog-component','image',1),
(142,12,29,'components.blog-component','image',1),
(143,12,30,'components.blog-component','image',1),
(144,11,42,'components.unit-component','image',1),
(145,6,43,'components.unit-component','image',1),
(146,8,44,'components.unit-component','image',1),
(147,7,45,'components.unit-component','image',1);

/*Table structure for table `i18n_locale` */

DROP TABLE IF EXISTS `i18n_locale`;

CREATE TABLE `i18n_locale` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `i18n_locale_created_by_id_fk` (`created_by_id`),
  KEY `i18n_locale_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `i18n_locale_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `i18n_locale_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `i18n_locale` */

insert  into `i18n_locale`(`id`,`name`,`code`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'English (en)','en','2023-10-26 16:06:12.002000','2023-10-26 16:06:12.002000',NULL,NULL),
(3,'zh-Hans-SG','zh-Hans-SG','2023-10-27 09:00:08.108000','2023-10-27 15:03:29.142000',1,1),
(5,'Chinese (zh)','zh','2023-10-27 15:44:09.687000','2023-10-27 15:44:09.687000',1,1);

/*Table structure for table `landing_pages` */

DROP TABLE IF EXISTS `landing_pages`;

CREATE TABLE `landing_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `page_desc` longtext DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `landing_pages_created_by_id_fk` (`created_by_id`),
  KEY `landing_pages_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `landing_pages_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `landing_pages_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `landing_pages` */

insert  into `landing_pages`(`id`,`page_title`,`page_desc`,`created_at`,`updated_at`,`published_at`,`created_by_id`,`updated_by_id`,`locale`) values 
(1,'myFirst | Best Products & Gifts For Kids from Age 4 & Above','Explore the new era of technology designed specifically for kids. Shop watch phone, drawing tablet, instant print camera, and many more.','2023-10-27 03:28:33.132000','2023-10-27 15:44:26.277000','2023-10-27 15:32:12.643000',1,1,'en'),
(2,'myFirst | 适合 4 岁及以上儿童的最佳产品和礼物','探索专为儿童设计的新科技时代。 购买手表手机、绘图板、即时打印相机等。','2023-10-27 15:10:30.369000','2023-10-27 15:44:26.288000','2023-10-27 15:14:11.739000',1,1,'zh-Hans-SG'),
(3,'myFirst | 适合 4 岁及以上儿童的最佳产品和礼物','探索专为儿童设计的新科技时代。 购买手表手机、绘图板、即时打印相机等。','2023-10-27 15:44:26.199000','2023-10-27 15:44:38.237000','2023-10-27 15:44:38.234000',1,1,'zh');

/*Table structure for table `landing_pages_components` */

DROP TABLE IF EXISTS `landing_pages_components`;

CREATE TABLE `landing_pages_components` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `entity_id` int(10) unsigned DEFAULT NULL,
  `component_id` int(10) unsigned DEFAULT NULL,
  `component_type` varchar(255) DEFAULT NULL,
  `field` varchar(255) DEFAULT NULL,
  `order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `landing_pages_unique` (`entity_id`,`component_id`,`field`,`component_type`),
  KEY `landing_pages_field_index` (`field`),
  KEY `landing_pages_component_type_index` (`component_type`),
  KEY `landing_pages_entity_fk` (`entity_id`),
  CONSTRAINT `landing_pages_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `landing_pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8mb4;

/*Data for the table `landing_pages_components` */

insert  into `landing_pages_components`(`id`,`entity_id`,`component_id`,`component_type`,`field`,`order`) values 
(63,1,10,'components.unit-component','heroes_section',4),
(64,1,11,'components.unit-component','heroes_section',6),
(65,1,12,'components.unit-component','heroes_section',9),
(66,1,13,'components.unit-component','heroes_section',11),
(67,1,14,'components.unit-component','heroes_section',13),
(68,1,7,'components.blog-component','blogs_section',2),
(69,1,8,'components.blog-component','blogs_section',3),
(70,1,9,'components.blog-component','blogs_section',5),
(71,1,10,'components.blog-component','blogs_section',7),
(72,1,11,'components.blog-component','blogs_section',8),
(73,1,12,'components.blog-component','blogs_section',10),
(74,1,15,'components.unit-component','products_section',1),
(75,1,16,'components.unit-component','products_section',2),
(76,1,17,'components.unit-component','products_section',3),
(77,1,18,'components.unit-component','products_section',4),
(108,2,28,'components.unit-component','heroes_section',3),
(109,2,29,'components.unit-component','heroes_section',6),
(110,2,30,'components.unit-component','heroes_section',8),
(111,2,31,'components.unit-component','heroes_section',10),
(112,2,32,'components.unit-component','heroes_section',11),
(113,2,19,'components.blog-component','blogs_section',1),
(114,2,20,'components.blog-component','blogs_section',2),
(115,2,21,'components.blog-component','blogs_section',4),
(116,2,22,'components.blog-component','blogs_section',5),
(117,2,23,'components.blog-component','blogs_section',7),
(118,2,24,'components.blog-component','blogs_section',9),
(119,2,33,'components.unit-component','products_section',1),
(120,2,34,'components.unit-component','products_section',2),
(121,2,35,'components.unit-component','products_section',3),
(122,2,36,'components.unit-component','products_section',4),
(123,3,37,'components.unit-component','heroes_section',1),
(124,3,38,'components.unit-component','heroes_section',2),
(125,3,39,'components.unit-component','heroes_section',3),
(126,3,40,'components.unit-component','heroes_section',4),
(127,3,41,'components.unit-component','heroes_section',5),
(128,3,25,'components.blog-component','blogs_section',1),
(129,3,26,'components.blog-component','blogs_section',2),
(130,3,27,'components.blog-component','blogs_section',3),
(131,3,28,'components.blog-component','blogs_section',4),
(132,3,29,'components.blog-component','blogs_section',5),
(133,3,30,'components.blog-component','blogs_section',6),
(134,3,42,'components.unit-component','products_section',1),
(135,3,43,'components.unit-component','products_section',2),
(136,3,44,'components.unit-component','products_section',3),
(137,3,45,'components.unit-component','products_section',4);

/*Table structure for table `landing_pages_localizations_links` */

DROP TABLE IF EXISTS `landing_pages_localizations_links`;

CREATE TABLE `landing_pages_localizations_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `landing_page_id` int(10) unsigned DEFAULT NULL,
  `inv_landing_page_id` int(10) unsigned DEFAULT NULL,
  `landing_page_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `landing_pages_localizations_links_unique` (`landing_page_id`,`inv_landing_page_id`),
  KEY `landing_pages_localizations_links_fk` (`landing_page_id`),
  KEY `landing_pages_localizations_links_inv_fk` (`inv_landing_page_id`),
  KEY `landing_pages_localizations_links_order_fk` (`landing_page_order`),
  CONSTRAINT `landing_pages_localizations_links_fk` FOREIGN KEY (`landing_page_id`) REFERENCES `landing_pages` (`id`) ON DELETE CASCADE,
  CONSTRAINT `landing_pages_localizations_links_inv_fk` FOREIGN KEY (`inv_landing_page_id`) REFERENCES `landing_pages` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

/*Data for the table `landing_pages_localizations_links` */

insert  into `landing_pages_localizations_links`(`id`,`landing_page_id`,`inv_landing_page_id`,`landing_page_order`) values 
(1,2,1,2),
(2,1,2,2),
(3,3,1,1),
(4,3,2,2),
(5,1,3,1),
(7,2,3,1);

/*Table structure for table `posts` */

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `published_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  `locale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `posts_created_by_id_fk` (`created_by_id`),
  KEY `posts_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `posts_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `posts_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `posts` */

insert  into `posts`(`id`,`title`,`created_at`,`updated_at`,`published_at`,`created_by_id`,`updated_by_id`,`locale`) values 
(1,'a','2023-10-26 19:14:40.292000','2023-10-27 09:01:19.456000','2023-10-26 19:22:06.875000',1,1,'en'),
(2,'我','2023-10-27 09:09:05.969000','2023-10-27 09:09:06.921000','2023-10-27 09:09:06.917000',1,1,'zh-Hans-SG'),
(3,'我','2023-10-27 09:10:11.502000','2023-10-27 09:10:51.508000','2023-10-27 09:10:51.504000',1,1,'zh-Hans-SG');

/*Table structure for table `posts_localizations_links` */

DROP TABLE IF EXISTS `posts_localizations_links`;

CREATE TABLE `posts_localizations_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_id` int(10) unsigned DEFAULT NULL,
  `inv_post_id` int(10) unsigned DEFAULT NULL,
  `post_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `posts_localizations_links_unique` (`post_id`,`inv_post_id`),
  KEY `posts_localizations_links_fk` (`post_id`),
  KEY `posts_localizations_links_inv_fk` (`inv_post_id`),
  KEY `posts_localizations_links_order_fk` (`post_order`),
  CONSTRAINT `posts_localizations_links_fk` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  CONSTRAINT `posts_localizations_links_inv_fk` FOREIGN KEY (`inv_post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `posts_localizations_links` */

/*Table structure for table `strapi_api_token_permissions` */

DROP TABLE IF EXISTS `strapi_api_token_permissions`;

CREATE TABLE `strapi_api_token_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_api_token_permissions_created_by_id_fk` (`created_by_id`),
  KEY `strapi_api_token_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_api_token_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_api_token_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_api_token_permissions` */

/*Table structure for table `strapi_api_token_permissions_token_links` */

DROP TABLE IF EXISTS `strapi_api_token_permissions_token_links`;

CREATE TABLE `strapi_api_token_permissions_token_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `api_token_permission_id` int(10) unsigned DEFAULT NULL,
  `api_token_id` int(10) unsigned DEFAULT NULL,
  `api_token_permission_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_api_token_permissions_token_links_unique` (`api_token_permission_id`,`api_token_id`),
  KEY `strapi_api_token_permissions_token_links_fk` (`api_token_permission_id`),
  KEY `strapi_api_token_permissions_token_links_inv_fk` (`api_token_id`),
  KEY `strapi_api_token_permissions_token_links_order_inv_fk` (`api_token_permission_order`),
  CONSTRAINT `strapi_api_token_permissions_token_links_fk` FOREIGN KEY (`api_token_permission_id`) REFERENCES `strapi_api_token_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `strapi_api_token_permissions_token_links_inv_fk` FOREIGN KEY (`api_token_id`) REFERENCES `strapi_api_tokens` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_api_token_permissions_token_links` */

/*Table structure for table `strapi_api_tokens` */

DROP TABLE IF EXISTS `strapi_api_tokens`;

CREATE TABLE `strapi_api_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `last_used_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `lifespan` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_api_tokens_created_by_id_fk` (`created_by_id`),
  KEY `strapi_api_tokens_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_api_tokens_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_api_tokens_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_api_tokens` */

/*Table structure for table `strapi_core_store_settings` */

DROP TABLE IF EXISTS `strapi_core_store_settings`;

CREATE TABLE `strapi_core_store_settings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) DEFAULT NULL,
  `value` longtext DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `environment` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_core_store_settings` */

insert  into `strapi_core_store_settings`(`id`,`key`,`value`,`type`,`environment`,`tag`) values 
(1,'strapi_content_types_schema','{\"admin::permission\":{\"collectionName\":\"admin_permissions\",\"info\":{\"name\":\"Permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"actionParameters\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"properties\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::role\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_permissions\",\"info\":{\"name\":\"Permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"actionParameters\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"subject\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false},\"properties\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":{}},\"conditions\":{\"type\":\"json\",\"configurable\":false,\"required\":false,\"default\":[]},\"role\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::role\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"permission\",\"connection\":\"default\",\"uid\":\"admin::permission\",\"plugin\":\"admin\",\"globalId\":\"AdminPermission\"},\"admin::user\":{\"collectionName\":\"admin_users\",\"info\":{\"name\":\"User\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true,\"searchable\":false},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"configurable\":false,\"private\":true,\"type\":\"relation\",\"relation\":\"manyToMany\",\"inversedBy\":\"users\",\"target\":\"admin::role\",\"collectionName\":\"strapi_users_roles\"},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"preferedLanguage\":{\"type\":\"string\",\"configurable\":false,\"required\":false,\"searchable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"config\":{\"attributes\":{\"resetPasswordToken\":{\"hidden\":true},\"registrationToken\":{\"hidden\":true}}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_users\",\"info\":{\"name\":\"User\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"firstname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"lastname\":{\"type\":\"string\",\"unique\":false,\"minLength\":1,\"configurable\":false,\"required\":false},\"username\":{\"type\":\"string\",\"unique\":false,\"configurable\":false,\"required\":false},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true,\"unique\":true,\"private\":true},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"required\":false,\"private\":true,\"searchable\":false},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"registrationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"isActive\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"roles\":{\"configurable\":false,\"private\":true,\"type\":\"relation\",\"relation\":\"manyToMany\",\"inversedBy\":\"users\",\"target\":\"admin::role\",\"collectionName\":\"strapi_users_roles\"},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false,\"private\":true},\"preferedLanguage\":{\"type\":\"string\",\"configurable\":false,\"required\":false,\"searchable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"user\",\"connection\":\"default\",\"uid\":\"admin::user\",\"plugin\":\"admin\",\"globalId\":\"AdminUser\"},\"admin::role\":{\"collectionName\":\"admin_roles\",\"info\":{\"name\":\"Role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToMany\",\"mappedBy\":\"roles\",\"target\":\"admin::user\"},\"permissions\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"mappedBy\":\"role\",\"target\":\"admin::permission\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"admin_roles\",\"info\":{\"name\":\"Role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"code\":{\"type\":\"string\",\"minLength\":1,\"unique\":true,\"configurable\":false,\"required\":true},\"description\":{\"type\":\"string\",\"configurable\":false},\"users\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToMany\",\"mappedBy\":\"roles\",\"target\":\"admin::user\"},\"permissions\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"mappedBy\":\"role\",\"target\":\"admin::permission\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"role\",\"connection\":\"default\",\"uid\":\"admin::role\",\"plugin\":\"admin\",\"globalId\":\"AdminRole\"},\"admin::api-token\":{\"collectionName\":\"strapi_api_tokens\",\"info\":{\"name\":\"Api Token\",\"singularName\":\"api-token\",\"pluralName\":\"api-tokens\",\"displayName\":\"Api Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"type\":{\"type\":\"enumeration\",\"enum\":[\"read-only\",\"full-access\",\"custom\"],\"configurable\":false,\"required\":true,\"default\":\"read-only\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"searchable\":false},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::api-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"biginteger\",\"configurable\":false,\"required\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_api_tokens\",\"info\":{\"name\":\"Api Token\",\"singularName\":\"api-token\",\"pluralName\":\"api-tokens\",\"displayName\":\"Api Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"type\":{\"type\":\"enumeration\",\"enum\":[\"read-only\",\"full-access\",\"custom\"],\"configurable\":false,\"required\":true,\"default\":\"read-only\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"searchable\":false},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::api-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"biginteger\",\"configurable\":false,\"required\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"api-token\",\"connection\":\"default\",\"uid\":\"admin::api-token\",\"plugin\":\"admin\",\"globalId\":\"AdminApiToken\"},\"admin::api-token-permission\":{\"collectionName\":\"strapi_api_token_permissions\",\"info\":{\"name\":\"API Token Permission\",\"description\":\"\",\"singularName\":\"api-token-permission\",\"pluralName\":\"api-token-permissions\",\"displayName\":\"API Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::api-token\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_api_token_permissions\",\"info\":{\"name\":\"API Token Permission\",\"description\":\"\",\"singularName\":\"api-token-permission\",\"pluralName\":\"api-token-permissions\",\"displayName\":\"API Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::api-token\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"api-token-permission\",\"connection\":\"default\",\"uid\":\"admin::api-token-permission\",\"plugin\":\"admin\",\"globalId\":\"AdminApiTokenPermission\"},\"admin::transfer-token\":{\"collectionName\":\"strapi_transfer_tokens\",\"info\":{\"name\":\"Transfer Token\",\"singularName\":\"transfer-token\",\"pluralName\":\"transfer-tokens\",\"displayName\":\"Transfer Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::transfer-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"biginteger\",\"configurable\":false,\"required\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_transfer_tokens\",\"info\":{\"name\":\"Transfer Token\",\"singularName\":\"transfer-token\",\"pluralName\":\"transfer-tokens\",\"displayName\":\"Transfer Token\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true,\"unique\":true},\"description\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":false,\"default\":\"\"},\"accessKey\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"lastUsedAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"permissions\":{\"type\":\"relation\",\"target\":\"admin::transfer-token-permission\",\"relation\":\"oneToMany\",\"mappedBy\":\"token\",\"configurable\":false,\"required\":false},\"expiresAt\":{\"type\":\"datetime\",\"configurable\":false,\"required\":false},\"lifespan\":{\"type\":\"biginteger\",\"configurable\":false,\"required\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"transfer-token\",\"connection\":\"default\",\"uid\":\"admin::transfer-token\",\"plugin\":\"admin\",\"globalId\":\"AdminTransferToken\"},\"admin::transfer-token-permission\":{\"collectionName\":\"strapi_transfer_token_permissions\",\"info\":{\"name\":\"Transfer Token Permission\",\"description\":\"\",\"singularName\":\"transfer-token-permission\",\"pluralName\":\"transfer-token-permissions\",\"displayName\":\"Transfer Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::transfer-token\"},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"strapi_transfer_token_permissions\",\"info\":{\"name\":\"Transfer Token Permission\",\"description\":\"\",\"singularName\":\"transfer-token-permission\",\"pluralName\":\"transfer-token-permissions\",\"displayName\":\"Transfer Token Permission\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"minLength\":1,\"configurable\":false,\"required\":true},\"token\":{\"configurable\":false,\"type\":\"relation\",\"relation\":\"manyToOne\",\"inversedBy\":\"permissions\",\"target\":\"admin::transfer-token\"}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"transfer-token-permission\",\"connection\":\"default\",\"uid\":\"admin::transfer-token-permission\",\"plugin\":\"admin\",\"globalId\":\"AdminTransferTokenPermission\"},\"plugin::upload.file\":{\"collectionName\":\"files\",\"info\":{\"singularName\":\"file\",\"pluralName\":\"files\",\"displayName\":\"File\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"type\":\"relation\",\"relation\":\"morphToMany\",\"configurable\":false},\"folder\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"files\",\"private\":true},\"folderPath\":{\"type\":\"string\",\"min\":1,\"required\":true,\"private\":true,\"searchable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"indexes\":[{\"name\":\"upload_files_folder_path_index\",\"columns\":[\"folder_path\"],\"type\":null},{\"name\":\"upload_files_created_at_index\",\"columns\":[\"created_at\"],\"type\":null},{\"name\":\"upload_files_updated_at_index\",\"columns\":[\"updated_at\"],\"type\":null},{\"name\":\"upload_files_name_index\",\"columns\":[\"name\"],\"type\":null},{\"name\":\"upload_files_size_index\",\"columns\":[\"size\"],\"type\":null},{\"name\":\"upload_files_ext_index\",\"columns\":[\"ext\"],\"type\":null}],\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"files\",\"info\":{\"singularName\":\"file\",\"pluralName\":\"files\",\"displayName\":\"File\",\"description\":\"\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"alternativeText\":{\"type\":\"string\",\"configurable\":false},\"caption\":{\"type\":\"string\",\"configurable\":false},\"width\":{\"type\":\"integer\",\"configurable\":false},\"height\":{\"type\":\"integer\",\"configurable\":false},\"formats\":{\"type\":\"json\",\"configurable\":false},\"hash\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"ext\":{\"type\":\"string\",\"configurable\":false},\"mime\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"size\":{\"type\":\"decimal\",\"configurable\":false,\"required\":true},\"url\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"previewUrl\":{\"type\":\"string\",\"configurable\":false},\"provider\":{\"type\":\"string\",\"configurable\":false,\"required\":true},\"provider_metadata\":{\"type\":\"json\",\"configurable\":false},\"related\":{\"type\":\"relation\",\"relation\":\"morphToMany\",\"configurable\":false},\"folder\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"files\",\"private\":true},\"folderPath\":{\"type\":\"string\",\"min\":1,\"required\":true,\"private\":true,\"searchable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"file\",\"connection\":\"default\",\"uid\":\"plugin::upload.file\",\"plugin\":\"upload\",\"globalId\":\"UploadFile\"},\"plugin::upload.folder\":{\"collectionName\":\"upload_folders\",\"info\":{\"singularName\":\"folder\",\"pluralName\":\"folders\",\"displayName\":\"Folder\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"required\":true},\"pathId\":{\"type\":\"integer\",\"unique\":true,\"required\":true},\"parent\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"children\"},\"children\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.folder\",\"mappedBy\":\"parent\"},\"files\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.file\",\"mappedBy\":\"folder\"},\"path\":{\"type\":\"string\",\"min\":1,\"required\":true},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"indexes\":[{\"name\":\"upload_folders_path_id_index\",\"columns\":[\"path_id\"],\"type\":\"unique\"},{\"name\":\"upload_folders_path_index\",\"columns\":[\"path\"],\"type\":\"unique\"}],\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"upload_folders\",\"info\":{\"singularName\":\"folder\",\"pluralName\":\"folders\",\"displayName\":\"Folder\"},\"options\":{},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"required\":true},\"pathId\":{\"type\":\"integer\",\"unique\":true,\"required\":true},\"parent\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::upload.folder\",\"inversedBy\":\"children\"},\"children\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.folder\",\"mappedBy\":\"parent\"},\"files\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::upload.file\",\"mappedBy\":\"folder\"},\"path\":{\"type\":\"string\",\"min\":1,\"required\":true}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"folder\",\"connection\":\"default\",\"uid\":\"plugin::upload.folder\",\"plugin\":\"upload\",\"globalId\":\"UploadFolder\"},\"plugin::i18n.locale\":{\"info\":{\"singularName\":\"locale\",\"pluralName\":\"locales\",\"collectionName\":\"locales\",\"displayName\":\"Locale\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"max\":50,\"configurable\":false},\"code\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"info\":{\"singularName\":\"locale\",\"pluralName\":\"locales\",\"collectionName\":\"locales\",\"displayName\":\"Locale\",\"description\":\"\"},\"options\":{\"draftAndPublish\":false},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"min\":1,\"max\":50,\"configurable\":false},\"code\":{\"type\":\"string\",\"unique\":true,\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"locale\",\"connection\":\"default\",\"uid\":\"plugin::i18n.locale\",\"plugin\":\"i18n\",\"collectionName\":\"i18n_locale\",\"globalId\":\"I18NLocale\"},\"plugin::users-permissions.permission\":{\"collectionName\":\"up_permissions\",\"info\":{\"name\":\"permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"permissions\",\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"up_permissions\",\"info\":{\"name\":\"permission\",\"description\":\"\",\"singularName\":\"permission\",\"pluralName\":\"permissions\",\"displayName\":\"Permission\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"action\":{\"type\":\"string\",\"required\":true,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"permissions\",\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"permission\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.permission\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsPermission\"},\"plugin::users-permissions.role\":{\"collectionName\":\"up_roles\",\"info\":{\"name\":\"role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.permission\",\"mappedBy\":\"role\",\"configurable\":false},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"role\",\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"up_roles\",\"info\":{\"name\":\"role\",\"description\":\"\",\"singularName\":\"role\",\"pluralName\":\"roles\",\"displayName\":\"Role\"},\"pluginOptions\":{\"content-manager\":{\"visible\":false},\"content-type-builder\":{\"visible\":false}},\"attributes\":{\"name\":{\"type\":\"string\",\"minLength\":3,\"required\":true,\"configurable\":false},\"description\":{\"type\":\"string\",\"configurable\":false},\"type\":{\"type\":\"string\",\"unique\":true,\"configurable\":false},\"permissions\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.permission\",\"mappedBy\":\"role\",\"configurable\":false},\"users\":{\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"plugin::users-permissions.user\",\"mappedBy\":\"role\",\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"role\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.role\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsRole\"},\"plugin::users-permissions.user\":{\"collectionName\":\"up_users\",\"info\":{\"name\":\"user\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":true},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true,\"searchable\":false},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"users\",\"configurable\":false},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true}},\"config\":{\"attributes\":{\"resetPasswordToken\":{\"hidden\":true},\"confirmationToken\":{\"hidden\":true},\"provider\":{\"hidden\":true}}},\"kind\":\"collectionType\",\"__schema__\":{\"collectionName\":\"up_users\",\"info\":{\"name\":\"user\",\"description\":\"\",\"singularName\":\"user\",\"pluralName\":\"users\",\"displayName\":\"User\"},\"options\":{\"draftAndPublish\":false,\"timestamps\":true},\"attributes\":{\"username\":{\"type\":\"string\",\"minLength\":3,\"unique\":true,\"configurable\":false,\"required\":true},\"email\":{\"type\":\"email\",\"minLength\":6,\"configurable\":false,\"required\":true},\"provider\":{\"type\":\"string\",\"configurable\":false},\"password\":{\"type\":\"password\",\"minLength\":6,\"configurable\":false,\"private\":true,\"searchable\":false},\"resetPasswordToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"confirmationToken\":{\"type\":\"string\",\"configurable\":false,\"private\":true,\"searchable\":false},\"confirmed\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"blocked\":{\"type\":\"boolean\",\"default\":false,\"configurable\":false},\"role\":{\"type\":\"relation\",\"relation\":\"manyToOne\",\"target\":\"plugin::users-permissions.role\",\"inversedBy\":\"users\",\"configurable\":false}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"user\",\"connection\":\"default\",\"uid\":\"plugin::users-permissions.user\",\"plugin\":\"users-permissions\",\"globalId\":\"UsersPermissionsUser\"},\"api::landing-page.landing-page\":{\"kind\":\"singleType\",\"collectionName\":\"landing_pages\",\"info\":{\"singularName\":\"landing-page\",\"pluralName\":\"landing-pages\",\"displayName\":\"landing-page\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{\"i18n\":{\"localized\":true}},\"attributes\":{\"page_title\":{\"type\":\"string\",\"required\":true,\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"page_desc\":{\"type\":\"text\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"heroes_section\":{\"type\":\"component\",\"repeatable\":true,\"component\":\"components.unit-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"blogs_section\":{\"displayName\":\"blog-component\",\"type\":\"component\",\"repeatable\":true,\"component\":\"components.blog-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"products_section\":{\"type\":\"component\",\"repeatable\":true,\"component\":\"components.unit-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"localizations\":{\"writable\":true,\"private\":false,\"configurable\":false,\"visible\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::landing-page.landing-page\"},\"locale\":{\"writable\":true,\"private\":false,\"configurable\":false,\"visible\":false,\"type\":\"string\"}},\"__schema__\":{\"collectionName\":\"landing_pages\",\"info\":{\"singularName\":\"landing-page\",\"pluralName\":\"landing-pages\",\"displayName\":\"landing-page\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{\"i18n\":{\"localized\":true}},\"attributes\":{\"page_title\":{\"type\":\"string\",\"required\":true,\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"page_desc\":{\"type\":\"text\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"heroes_section\":{\"type\":\"component\",\"repeatable\":true,\"component\":\"components.unit-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"blogs_section\":{\"displayName\":\"blog-component\",\"type\":\"component\",\"repeatable\":true,\"component\":\"components.blog-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"products_section\":{\"type\":\"component\",\"repeatable\":true,\"component\":\"components.unit-component\",\"pluginOptions\":{\"i18n\":{\"localized\":true}}}},\"kind\":\"singleType\"},\"modelType\":\"contentType\",\"modelName\":\"landing-page\",\"connection\":\"default\",\"uid\":\"api::landing-page.landing-page\",\"apiName\":\"landing-page\",\"globalId\":\"LandingPage\",\"actions\":{},\"lifecycles\":{}},\"api::post.post\":{\"kind\":\"collectionType\",\"collectionName\":\"posts\",\"info\":{\"singularName\":\"post\",\"pluralName\":\"posts\",\"displayName\":\"Post\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{\"i18n\":{\"localized\":true}},\"attributes\":{\"title\":{\"type\":\"string\",\"required\":true,\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"cover\":{\"type\":\"media\",\"multiple\":false,\"required\":false,\"allowedTypes\":[\"images\",\"files\",\"videos\",\"audios\"],\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"createdAt\":{\"type\":\"datetime\"},\"updatedAt\":{\"type\":\"datetime\"},\"publishedAt\":{\"type\":\"datetime\",\"configurable\":false,\"writable\":true,\"visible\":false},\"createdBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"updatedBy\":{\"type\":\"relation\",\"relation\":\"oneToOne\",\"target\":\"admin::user\",\"configurable\":false,\"writable\":false,\"visible\":false,\"useJoinTable\":false,\"private\":true},\"localizations\":{\"writable\":true,\"private\":false,\"configurable\":false,\"visible\":false,\"type\":\"relation\",\"relation\":\"oneToMany\",\"target\":\"api::post.post\"},\"locale\":{\"writable\":true,\"private\":false,\"configurable\":false,\"visible\":false,\"type\":\"string\"}},\"__schema__\":{\"collectionName\":\"posts\",\"info\":{\"singularName\":\"post\",\"pluralName\":\"posts\",\"displayName\":\"Post\",\"description\":\"\"},\"options\":{\"draftAndPublish\":true},\"pluginOptions\":{\"i18n\":{\"localized\":true}},\"attributes\":{\"title\":{\"type\":\"string\",\"required\":true,\"pluginOptions\":{\"i18n\":{\"localized\":true}}},\"cover\":{\"type\":\"media\",\"multiple\":false,\"required\":false,\"allowedTypes\":[\"images\",\"files\",\"videos\",\"audios\"],\"pluginOptions\":{\"i18n\":{\"localized\":true}}}},\"kind\":\"collectionType\"},\"modelType\":\"contentType\",\"modelName\":\"post\",\"connection\":\"default\",\"uid\":\"api::post.post\",\"apiName\":\"post\",\"globalId\":\"Post\",\"actions\":{},\"lifecycles\":{}}}','object',NULL,NULL),
(2,'plugin_content_manager_configuration_content_types::admin::permission','{\"uid\":\"admin::permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"actionParameters\":{\"edit\":{\"label\":\"actionParameters\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"actionParameters\",\"searchable\":false,\"sortable\":false}},\"subject\":{\"edit\":{\"label\":\"subject\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"subject\",\"searchable\":true,\"sortable\":true}},\"properties\":{\"edit\":{\"label\":\"properties\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"properties\",\"searchable\":false,\"sortable\":false}},\"conditions\":{\"edit\":{\"label\":\"conditions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"conditions\",\"searchable\":false,\"sortable\":false}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"subject\",\"role\"],\"edit\":[[{\"name\":\"action\",\"size\":6}],[{\"name\":\"actionParameters\",\"size\":12}],[{\"name\":\"subject\",\"size\":6}],[{\"name\":\"properties\",\"size\":12}],[{\"name\":\"conditions\",\"size\":12}],[{\"name\":\"role\",\"size\":6}]]}}','object',NULL,NULL),
(3,'plugin_content_manager_configuration_content_types::admin::role','{\"uid\":\"admin::role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"code\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"description\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}],[{\"name\":\"description\",\"size\":6},{\"name\":\"users\",\"size\":6}],[{\"name\":\"permissions\",\"size\":6}]]}}','object',NULL,NULL),
(4,'plugin_content_manager_configuration_content_types::admin::user','{\"uid\":\"admin::user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"firstname\",\"defaultSortBy\":\"firstname\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"firstname\":{\"edit\":{\"label\":\"firstname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"firstname\",\"searchable\":true,\"sortable\":true}},\"lastname\":{\"edit\":{\"label\":\"lastname\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastname\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"email\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"resetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"resetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"registrationToken\":{\"edit\":{\"label\":\"registrationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"registrationToken\",\"searchable\":true,\"sortable\":true}},\"isActive\":{\"edit\":{\"label\":\"isActive\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"isActive\",\"searchable\":true,\"sortable\":true}},\"roles\":{\"edit\":{\"label\":\"roles\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"roles\",\"searchable\":false,\"sortable\":false}},\"blocked\":{\"edit\":{\"label\":\"blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"blocked\",\"searchable\":true,\"sortable\":true}},\"preferedLanguage\":{\"edit\":{\"label\":\"preferedLanguage\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"preferedLanguage\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"firstname\",\"lastname\",\"username\"],\"edit\":[[{\"name\":\"firstname\",\"size\":6},{\"name\":\"lastname\",\"size\":6}],[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"isActive\",\"size\":4}],[{\"name\":\"roles\",\"size\":6},{\"name\":\"blocked\",\"size\":4}],[{\"name\":\"preferedLanguage\",\"size\":6}]]}}','object',NULL,NULL),
(5,'plugin_content_manager_configuration_content_types::plugin::upload.file','{\"uid\":\"plugin::upload.file\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"alternativeText\":{\"edit\":{\"label\":\"alternativeText\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"alternativeText\",\"searchable\":true,\"sortable\":true}},\"caption\":{\"edit\":{\"label\":\"caption\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"caption\",\"searchable\":true,\"sortable\":true}},\"width\":{\"edit\":{\"label\":\"width\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"width\",\"searchable\":true,\"sortable\":true}},\"height\":{\"edit\":{\"label\":\"height\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"height\",\"searchable\":true,\"sortable\":true}},\"formats\":{\"edit\":{\"label\":\"formats\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"formats\",\"searchable\":false,\"sortable\":false}},\"hash\":{\"edit\":{\"label\":\"hash\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"hash\",\"searchable\":true,\"sortable\":true}},\"ext\":{\"edit\":{\"label\":\"ext\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"ext\",\"searchable\":true,\"sortable\":true}},\"mime\":{\"edit\":{\"label\":\"mime\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"mime\",\"searchable\":true,\"sortable\":true}},\"size\":{\"edit\":{\"label\":\"size\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"size\",\"searchable\":true,\"sortable\":true}},\"url\":{\"edit\":{\"label\":\"url\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"url\",\"searchable\":true,\"sortable\":true}},\"previewUrl\":{\"edit\":{\"label\":\"previewUrl\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"previewUrl\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"provider\",\"searchable\":true,\"sortable\":true}},\"provider_metadata\":{\"edit\":{\"label\":\"provider_metadata\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"provider_metadata\",\"searchable\":false,\"sortable\":false}},\"folder\":{\"edit\":{\"label\":\"folder\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"folder\",\"searchable\":true,\"sortable\":true}},\"folderPath\":{\"edit\":{\"label\":\"folderPath\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"folderPath\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"alternativeText\",\"caption\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"alternativeText\",\"size\":6}],[{\"name\":\"caption\",\"size\":6},{\"name\":\"width\",\"size\":4}],[{\"name\":\"height\",\"size\":4}],[{\"name\":\"formats\",\"size\":12}],[{\"name\":\"hash\",\"size\":6},{\"name\":\"ext\",\"size\":6}],[{\"name\":\"mime\",\"size\":6},{\"name\":\"size\",\"size\":4}],[{\"name\":\"url\",\"size\":6},{\"name\":\"previewUrl\",\"size\":6}],[{\"name\":\"provider\",\"size\":6}],[{\"name\":\"provider_metadata\",\"size\":12}],[{\"name\":\"folder\",\"size\":6},{\"name\":\"folderPath\",\"size\":6}]]}}','object',NULL,NULL),
(6,'plugin_content_manager_configuration_content_types::admin::api-token-permission','{\"uid\":\"admin::api-token-permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"token\":{\"edit\":{\"label\":\"token\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"token\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"token\",\"createdAt\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"token\",\"size\":6}]]}}','object',NULL,NULL),
(7,'plugin_content_manager_configuration_content_types::admin::transfer-token-permission','{\"uid\":\"admin::transfer-token-permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"token\":{\"edit\":{\"label\":\"token\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"token\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"token\",\"createdAt\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"token\",\"size\":6}]]}}','object',NULL,NULL),
(8,'plugin_content_manager_configuration_content_types::admin::api-token','{\"uid\":\"admin::api-token\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"type\",\"searchable\":true,\"sortable\":true}},\"accessKey\":{\"edit\":{\"label\":\"accessKey\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"accessKey\",\"searchable\":true,\"sortable\":true}},\"lastUsedAt\":{\"edit\":{\"label\":\"lastUsedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastUsedAt\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"expiresAt\":{\"edit\":{\"label\":\"expiresAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"expiresAt\",\"searchable\":true,\"sortable\":true}},\"lifespan\":{\"edit\":{\"label\":\"lifespan\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lifespan\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6},{\"name\":\"accessKey\",\"size\":6}],[{\"name\":\"lastUsedAt\",\"size\":6},{\"name\":\"permissions\",\"size\":6}],[{\"name\":\"expiresAt\",\"size\":6},{\"name\":\"lifespan\",\"size\":4}]]}}','object',NULL,NULL),
(9,'plugin_content_manager_configuration_content_types::admin::transfer-token','{\"uid\":\"admin::transfer-token\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"accessKey\":{\"edit\":{\"label\":\"accessKey\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"accessKey\",\"searchable\":true,\"sortable\":true}},\"lastUsedAt\":{\"edit\":{\"label\":\"lastUsedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lastUsedAt\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"expiresAt\":{\"edit\":{\"label\":\"expiresAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"expiresAt\",\"searchable\":true,\"sortable\":true}},\"lifespan\":{\"edit\":{\"label\":\"lifespan\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"lifespan\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"accessKey\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"accessKey\",\"size\":6},{\"name\":\"lastUsedAt\",\"size\":6}],[{\"name\":\"permissions\",\"size\":6},{\"name\":\"expiresAt\",\"size\":6}],[{\"name\":\"lifespan\",\"size\":4}]]}}','object',NULL,NULL),
(10,'plugin_content_manager_configuration_content_types::plugin::upload.folder','{\"uid\":\"plugin::upload.folder\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"pathId\":{\"edit\":{\"label\":\"pathId\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"pathId\",\"searchable\":true,\"sortable\":true}},\"parent\":{\"edit\":{\"label\":\"parent\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"parent\",\"searchable\":true,\"sortable\":true}},\"children\":{\"edit\":{\"label\":\"children\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"children\",\"searchable\":false,\"sortable\":false}},\"files\":{\"edit\":{\"label\":\"files\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"files\",\"searchable\":false,\"sortable\":false}},\"path\":{\"edit\":{\"label\":\"path\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"path\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"pathId\",\"parent\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"pathId\",\"size\":4}],[{\"name\":\"parent\",\"size\":6},{\"name\":\"children\",\"size\":6}],[{\"name\":\"files\",\"size\":6},{\"name\":\"path\",\"size\":6}]]}}','object',NULL,NULL),
(11,'plugin_content_manager_configuration_content_types::plugin::i18n.locale','{\"uid\":\"plugin::i18n.locale\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"code\":{\"edit\":{\"label\":\"code\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"code\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"code\",\"createdAt\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"code\",\"size\":6}]]}}','object',NULL,NULL),
(12,'plugin_content_manager_configuration_content_types::plugin::users-permissions.user','{\"uid\":\"plugin::users-permissions.user\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"username\",\"defaultSortBy\":\"username\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"username\":{\"edit\":{\"label\":\"username\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"username\",\"searchable\":true,\"sortable\":true}},\"email\":{\"edit\":{\"label\":\"email\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"email\",\"searchable\":true,\"sortable\":true}},\"provider\":{\"edit\":{\"label\":\"provider\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"provider\",\"searchable\":true,\"sortable\":true}},\"password\":{\"edit\":{\"label\":\"password\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"password\",\"searchable\":true,\"sortable\":true}},\"resetPasswordToken\":{\"edit\":{\"label\":\"resetPasswordToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"resetPasswordToken\",\"searchable\":true,\"sortable\":true}},\"confirmationToken\":{\"edit\":{\"label\":\"confirmationToken\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"confirmationToken\",\"searchable\":true,\"sortable\":true}},\"confirmed\":{\"edit\":{\"label\":\"confirmed\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"confirmed\",\"searchable\":true,\"sortable\":true}},\"blocked\":{\"edit\":{\"label\":\"blocked\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"blocked\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"username\",\"email\",\"confirmed\"],\"edit\":[[{\"name\":\"username\",\"size\":6},{\"name\":\"email\",\"size\":6}],[{\"name\":\"password\",\"size\":6},{\"name\":\"confirmed\",\"size\":4}],[{\"name\":\"blocked\",\"size\":4},{\"name\":\"role\",\"size\":6}]]}}','object',NULL,NULL),
(13,'plugin_content_manager_configuration_content_types::plugin::users-permissions.role','{\"uid\":\"plugin::users-permissions.role\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"name\",\"defaultSortBy\":\"name\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"name\":{\"edit\":{\"label\":\"name\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"name\",\"searchable\":true,\"sortable\":true}},\"description\":{\"edit\":{\"label\":\"description\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"description\",\"searchable\":true,\"sortable\":true}},\"type\":{\"edit\":{\"label\":\"type\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"type\",\"searchable\":true,\"sortable\":true}},\"permissions\":{\"edit\":{\"label\":\"permissions\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"action\"},\"list\":{\"label\":\"permissions\",\"searchable\":false,\"sortable\":false}},\"users\":{\"edit\":{\"label\":\"users\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"username\"},\"list\":{\"label\":\"users\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"name\",\"description\",\"type\"],\"edit\":[[{\"name\":\"name\",\"size\":6},{\"name\":\"description\",\"size\":6}],[{\"name\":\"type\",\"size\":6},{\"name\":\"permissions\",\"size\":6}],[{\"name\":\"users\",\"size\":6}]]}}','object',NULL,NULL),
(14,'plugin_content_manager_configuration_content_types::plugin::users-permissions.permission','{\"uid\":\"plugin::users-permissions.permission\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"action\",\"defaultSortBy\":\"action\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"action\":{\"edit\":{\"label\":\"action\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"action\",\"searchable\":true,\"sortable\":true}},\"role\":{\"edit\":{\"label\":\"role\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true,\"mainField\":\"name\"},\"list\":{\"label\":\"role\",\"searchable\":true,\"sortable\":true}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"action\",\"role\",\"createdAt\"],\"edit\":[[{\"name\":\"action\",\"size\":6},{\"name\":\"role\",\"size\":6}]]}}','object',NULL,NULL),
(15,'plugin_upload_settings','{\"sizeOptimization\":true,\"responsiveDimensions\":true,\"autoOrientation\":false}','object',NULL,NULL),
(16,'plugin_upload_view_configuration','{\"pageSize\":10,\"sort\":\"createdAt:DESC\"}','object',NULL,NULL),
(17,'plugin_upload_metrics','{\"weeklySchedule\":\"11 11 16 * * 4\",\"lastWeeklyUpdate\":1698304271036}','object',NULL,NULL),
(18,'plugin_i18n_default_locale','\"en\"','string',NULL,NULL),
(19,'plugin_users-permissions_grant','{\"email\":{\"enabled\":true,\"icon\":\"envelope\"},\"discord\":{\"enabled\":false,\"icon\":\"discord\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/discord/callback\",\"scope\":[\"identify\",\"email\"]},\"facebook\":{\"enabled\":false,\"icon\":\"facebook-square\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/facebook/callback\",\"scope\":[\"email\"]},\"google\":{\"enabled\":false,\"icon\":\"google\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/google/callback\",\"scope\":[\"email\"]},\"github\":{\"enabled\":false,\"icon\":\"github\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/github/callback\",\"scope\":[\"user\",\"user:email\"]},\"microsoft\":{\"enabled\":false,\"icon\":\"windows\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/microsoft/callback\",\"scope\":[\"user.read\"]},\"twitter\":{\"enabled\":false,\"icon\":\"twitter\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/twitter/callback\"},\"instagram\":{\"enabled\":false,\"icon\":\"instagram\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/instagram/callback\",\"scope\":[\"user_profile\"]},\"vk\":{\"enabled\":false,\"icon\":\"vk\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/vk/callback\",\"scope\":[\"email\"]},\"twitch\":{\"enabled\":false,\"icon\":\"twitch\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/twitch/callback\",\"scope\":[\"user:read:email\"]},\"linkedin\":{\"enabled\":false,\"icon\":\"linkedin\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/linkedin/callback\",\"scope\":[\"r_liteprofile\",\"r_emailaddress\"]},\"cognito\":{\"enabled\":false,\"icon\":\"aws\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my.subdomain.com\",\"callback\":\"api/auth/cognito/callback\",\"scope\":[\"email\",\"openid\",\"profile\"]},\"reddit\":{\"enabled\":false,\"icon\":\"reddit\",\"key\":\"\",\"secret\":\"\",\"state\":true,\"callback\":\"api/auth/reddit/callback\",\"scope\":[\"identity\"]},\"auth0\":{\"enabled\":false,\"icon\":\"\",\"key\":\"\",\"secret\":\"\",\"subdomain\":\"my-tenant.eu\",\"callback\":\"api/auth/auth0/callback\",\"scope\":[\"openid\",\"email\",\"profile\"]},\"cas\":{\"enabled\":false,\"icon\":\"book\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/cas/callback\",\"scope\":[\"openid email\"],\"subdomain\":\"my.subdomain.com/cas\"},\"patreon\":{\"enabled\":false,\"icon\":\"\",\"key\":\"\",\"secret\":\"\",\"callback\":\"api/auth/patreon/callback\",\"scope\":[\"identity\",\"identity[email]\"]}}','object',NULL,NULL),
(20,'plugin_users-permissions_email','{\"reset_password\":{\"display\":\"Email.template.reset_password\",\"icon\":\"sync\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Reset password\",\"message\":\"<p>We heard that you lost your password. Sorry about that!</p>\\n\\n<p>But don’t worry! You can use the following link to reset your password:</p>\\n<p><%= URL %>?code=<%= TOKEN %></p>\\n\\n<p>Thanks.</p>\"}},\"email_confirmation\":{\"display\":\"Email.template.email_confirmation\",\"icon\":\"check-square\",\"options\":{\"from\":{\"name\":\"Administration Panel\",\"email\":\"no-reply@strapi.io\"},\"response_email\":\"\",\"object\":\"Account confirmation\",\"message\":\"<p>Thank you for registering!</p>\\n\\n<p>You have to confirm your email address. Please click on the link below.</p>\\n\\n<p><%= URL %>?confirmation=<%= CODE %></p>\\n\\n<p>Thanks.</p>\"}}}','object',NULL,NULL),
(21,'plugin_users-permissions_advanced','{\"unique_email\":true,\"allow_register\":true,\"email_confirmation\":false,\"email_reset_password\":null,\"email_confirmation_redirection\":null,\"default_role\":\"authenticated\"}','object',NULL,NULL),
(22,'core_admin_auth','{\"providers\":{\"autoRegister\":false,\"defaultRole\":null,\"ssoLockedRoles\":null}}','object',NULL,NULL),
(25,'plugin_content_manager_configuration_content_types::api::post.post','{\"uid\":\"api::post.post\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"title\":{\"edit\":{\"label\":\"title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"title\",\"searchable\":true,\"sortable\":true}},\"cover\":{\"edit\":{\"label\":\"cover\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"cover\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"title\",\"cover\",\"createdAt\"],\"edit\":[[{\"name\":\"title\",\"size\":6},{\"name\":\"cover\",\"size\":6}]]}}','object',NULL,NULL),
(26,'plugin_content_manager_configuration_components::components.unit-component','{\"uid\":\"components.unit-component\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"title\",\"defaultSortBy\":\"title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":false,\"sortable\":false}},\"title\":{\"edit\":{\"label\":\"title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"title\",\"searchable\":true,\"sortable\":true}},\"image\":{\"edit\":{\"label\":\"image\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"image\",\"searchable\":false,\"sortable\":false}},\"desc\":{\"edit\":{\"label\":\"desc\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"desc\",\"searchable\":true,\"sortable\":true}},\"link\":{\"edit\":{\"label\":\"link\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"link\",\"searchable\":true,\"sortable\":true}},\"link_text\":{\"edit\":{\"label\":\"link_text\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"link_text\",\"searchable\":true,\"sortable\":true}},\"mobile_image\":{\"edit\":{\"label\":\"mobile_image\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"mobile_image\",\"searchable\":false,\"sortable\":false}}},\"layouts\":{\"list\":[\"id\",\"title\",\"image\",\"desc\"],\"edit\":[[{\"name\":\"title\",\"size\":6},{\"name\":\"image\",\"size\":6}],[{\"name\":\"desc\",\"size\":6},{\"name\":\"link\",\"size\":6}],[{\"name\":\"link_text\",\"size\":6},{\"name\":\"mobile_image\",\"size\":6}]]},\"isComponent\":true}','object',NULL,NULL),
(27,'plugin_content_manager_configuration_components::components.blog-component','{\"uid\":\"components.blog-component\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"date\",\"defaultSortBy\":\"id\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":false,\"sortable\":false}},\"title\":{\"edit\":{\"label\":\"title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"title\",\"searchable\":true,\"sortable\":true}},\"image\":{\"edit\":{\"label\":\"image\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"image\",\"searchable\":false,\"sortable\":false}},\"date\":{\"edit\":{\"label\":\"date\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"date\",\"searchable\":true,\"sortable\":true}},\"link\":{\"edit\":{\"label\":\"link\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"link\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"list\":[\"id\",\"title\",\"image\",\"date\"],\"edit\":[[{\"name\":\"title\",\"size\":6},{\"name\":\"image\",\"size\":6}],[{\"name\":\"date\",\"size\":6},{\"name\":\"link\",\"size\":6}]]},\"isComponent\":true}','object',NULL,NULL),
(28,'plugin_content_manager_configuration_content_types::api::landing-page.landing-page','{\"uid\":\"api::landing-page.landing-page\",\"settings\":{\"bulkable\":true,\"filterable\":true,\"searchable\":true,\"pageSize\":10,\"mainField\":\"page_title\",\"defaultSortBy\":\"page_title\",\"defaultSortOrder\":\"ASC\"},\"metadatas\":{\"id\":{\"edit\":{},\"list\":{\"label\":\"id\",\"searchable\":true,\"sortable\":true}},\"page_title\":{\"edit\":{\"label\":\"page_title\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"page_title\",\"searchable\":true,\"sortable\":true}},\"page_desc\":{\"edit\":{\"label\":\"page_desc\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"page_desc\",\"searchable\":true,\"sortable\":true}},\"blogs_section\":{\"edit\":{\"label\":\"blogs_section\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"blogs_section\",\"searchable\":false,\"sortable\":false}},\"heroes_section\":{\"edit\":{\"label\":\"heroes_section\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"heroes_section\",\"searchable\":false,\"sortable\":false}},\"products_section\":{\"edit\":{\"label\":\"products_section\",\"description\":\"\",\"placeholder\":\"\",\"visible\":true,\"editable\":true},\"list\":{\"label\":\"products_section\",\"searchable\":false,\"sortable\":false}},\"createdAt\":{\"edit\":{\"label\":\"createdAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"createdAt\",\"searchable\":true,\"sortable\":true}},\"updatedAt\":{\"edit\":{\"label\":\"updatedAt\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true},\"list\":{\"label\":\"updatedAt\",\"searchable\":true,\"sortable\":true}},\"createdBy\":{\"edit\":{\"label\":\"createdBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"createdBy\",\"searchable\":true,\"sortable\":true}},\"updatedBy\":{\"edit\":{\"label\":\"updatedBy\",\"description\":\"\",\"placeholder\":\"\",\"visible\":false,\"editable\":true,\"mainField\":\"firstname\"},\"list\":{\"label\":\"updatedBy\",\"searchable\":true,\"sortable\":true}}},\"layouts\":{\"edit\":[[{\"name\":\"page_title\",\"size\":6},{\"name\":\"page_desc\",\"size\":6}],[{\"name\":\"heroes_section\",\"size\":12}],[{\"name\":\"products_section\",\"size\":12}],[{\"name\":\"blogs_section\",\"size\":12}]],\"list\":[\"id\",\"page_title\",\"page_desc\",\"heroes_section\"]}}','object',NULL,NULL);

/*Table structure for table `strapi_database_schema` */

DROP TABLE IF EXISTS `strapi_database_schema`;

CREATE TABLE `strapi_database_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `schema` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`schema`)),
  `time` datetime DEFAULT NULL,
  `hash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_database_schema` */

insert  into `strapi_database_schema`(`id`,`schema`,`time`,`hash`) values 
(12,'{\"tables\":[{\"name\":\"strapi_core_store_settings\",\"indexes\":[],\"foreignKeys\":[],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"key\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"value\",\"type\":\"text\",\"args\":[\"longtext\"],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"type\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"environment\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"tag\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"strapi_webhooks\",\"indexes\":[],\"foreignKeys\":[],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"url\",\"type\":\"text\",\"args\":[\"longtext\"],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"headers\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"events\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"enabled\",\"type\":\"boolean\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"admin_permissions\",\"indexes\":[{\"name\":\"admin_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"admin_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"admin_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"admin_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"action\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"action_parameters\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"subject\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"properties\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"conditions\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"admin_users\",\"indexes\":[{\"name\":\"admin_users_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"admin_users_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"admin_users_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"admin_users_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"firstname\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"lastname\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"username\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"email\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"password\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"reset_password_token\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"registration_token\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"is_active\",\"type\":\"boolean\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"blocked\",\"type\":\"boolean\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"prefered_language\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"admin_roles\",\"indexes\":[{\"name\":\"admin_roles_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"admin_roles_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"admin_roles_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"admin_roles_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"code\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"description\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_api_tokens\",\"indexes\":[{\"name\":\"strapi_api_tokens_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"strapi_api_tokens_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"strapi_api_tokens_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"strapi_api_tokens_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"description\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"type\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"access_key\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"last_used_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"expires_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"lifespan\",\"type\":\"bigInteger\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_api_token_permissions\",\"indexes\":[{\"name\":\"strapi_api_token_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"strapi_api_token_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"strapi_api_token_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"strapi_api_token_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"action\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_transfer_tokens\",\"indexes\":[{\"name\":\"strapi_transfer_tokens_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"strapi_transfer_tokens_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"strapi_transfer_tokens_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"strapi_transfer_tokens_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"description\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"access_key\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"last_used_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"expires_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"lifespan\",\"type\":\"bigInteger\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_transfer_token_permissions\",\"indexes\":[{\"name\":\"strapi_transfer_token_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"strapi_transfer_token_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"strapi_transfer_token_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"strapi_transfer_token_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"action\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"files\",\"indexes\":[{\"name\":\"upload_files_folder_path_index\",\"columns\":[\"folder_path\"],\"type\":null},{\"name\":\"upload_files_created_at_index\",\"columns\":[\"created_at\"],\"type\":null},{\"name\":\"upload_files_updated_at_index\",\"columns\":[\"updated_at\"],\"type\":null},{\"name\":\"upload_files_name_index\",\"columns\":[\"name\"],\"type\":null},{\"name\":\"upload_files_size_index\",\"columns\":[\"size\"],\"type\":null},{\"name\":\"upload_files_ext_index\",\"columns\":[\"ext\"],\"type\":null},{\"name\":\"files_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"files_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"files_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"files_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"alternative_text\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"caption\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"width\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"height\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"formats\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"hash\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"ext\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"mime\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"size\",\"type\":\"decimal\",\"args\":[10,2],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"url\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"preview_url\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"provider\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"provider_metadata\",\"type\":\"jsonb\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"folder_path\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"upload_folders\",\"indexes\":[{\"name\":\"upload_folders_path_id_index\",\"columns\":[\"path_id\"],\"type\":\"unique\"},{\"name\":\"upload_folders_path_index\",\"columns\":[\"path\"],\"type\":\"unique\"},{\"name\":\"upload_folders_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"upload_folders_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"upload_folders_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"upload_folders_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"path_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"path\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"i18n_locale\",\"indexes\":[{\"name\":\"i18n_locale_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"i18n_locale_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"i18n_locale_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"i18n_locale_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"code\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"up_permissions\",\"indexes\":[{\"name\":\"up_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"up_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"up_permissions_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"up_permissions_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"action\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"up_roles\",\"indexes\":[{\"name\":\"up_roles_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"up_roles_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"up_roles_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"up_roles_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"name\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"description\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"type\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"up_users\",\"indexes\":[{\"name\":\"up_users_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"up_users_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"up_users_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"up_users_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"username\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"email\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"provider\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"password\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"reset_password_token\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"confirmation_token\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"confirmed\",\"type\":\"boolean\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"blocked\",\"type\":\"boolean\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"landing_pages\",\"indexes\":[{\"name\":\"landing_pages_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"landing_pages_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"landing_pages_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"landing_pages_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"page_title\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"page_desc\",\"type\":\"text\",\"args\":[\"longtext\"],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"published_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"locale\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"posts\",\"indexes\":[{\"name\":\"posts_created_by_id_fk\",\"columns\":[\"created_by_id\"]},{\"name\":\"posts_updated_by_id_fk\",\"columns\":[\"updated_by_id\"]}],\"foreignKeys\":[{\"name\":\"posts_created_by_id_fk\",\"columns\":[\"created_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"},{\"name\":\"posts_updated_by_id_fk\",\"columns\":[\"updated_by_id\"],\"referencedTable\":\"admin_users\",\"referencedColumns\":[\"id\"],\"onDelete\":\"SET NULL\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"title\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"updated_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"published_at\",\"type\":\"datetime\",\"args\":[{\"useTz\":false,\"precision\":6}],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"created_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"updated_by_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"locale\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"components_components_blog_components\",\"indexes\":[],\"foreignKeys\":[],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"title\",\"type\":\"text\",\"args\":[\"longtext\"],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"date\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"link\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"components_components_unit_components\",\"indexes\":[],\"foreignKeys\":[],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"title\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"desc\",\"type\":\"text\",\"args\":[\"longtext\"],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"link\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"link_text\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false}]},{\"name\":\"admin_permissions_role_links\",\"indexes\":[{\"name\":\"admin_permissions_role_links_fk\",\"columns\":[\"permission_id\"]},{\"name\":\"admin_permissions_role_links_inv_fk\",\"columns\":[\"role_id\"]},{\"name\":\"admin_permissions_role_links_unique\",\"columns\":[\"permission_id\",\"role_id\"],\"type\":\"unique\"},{\"name\":\"admin_permissions_role_links_order_inv_fk\",\"columns\":[\"permission_order\"]}],\"foreignKeys\":[{\"name\":\"admin_permissions_role_links_fk\",\"columns\":[\"permission_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"admin_permissions\",\"onDelete\":\"CASCADE\"},{\"name\":\"admin_permissions_role_links_inv_fk\",\"columns\":[\"role_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"admin_roles\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"permission_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"role_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"permission_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"admin_users_roles_links\",\"indexes\":[{\"name\":\"admin_users_roles_links_fk\",\"columns\":[\"user_id\"]},{\"name\":\"admin_users_roles_links_inv_fk\",\"columns\":[\"role_id\"]},{\"name\":\"admin_users_roles_links_unique\",\"columns\":[\"user_id\",\"role_id\"],\"type\":\"unique\"},{\"name\":\"admin_users_roles_links_order_fk\",\"columns\":[\"role_order\"]},{\"name\":\"admin_users_roles_links_order_inv_fk\",\"columns\":[\"user_order\"]}],\"foreignKeys\":[{\"name\":\"admin_users_roles_links_fk\",\"columns\":[\"user_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"admin_users\",\"onDelete\":\"CASCADE\"},{\"name\":\"admin_users_roles_links_inv_fk\",\"columns\":[\"role_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"admin_roles\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"user_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"role_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"role_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"user_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_api_token_permissions_token_links\",\"indexes\":[{\"name\":\"strapi_api_token_permissions_token_links_fk\",\"columns\":[\"api_token_permission_id\"]},{\"name\":\"strapi_api_token_permissions_token_links_inv_fk\",\"columns\":[\"api_token_id\"]},{\"name\":\"strapi_api_token_permissions_token_links_unique\",\"columns\":[\"api_token_permission_id\",\"api_token_id\"],\"type\":\"unique\"},{\"name\":\"strapi_api_token_permissions_token_links_order_inv_fk\",\"columns\":[\"api_token_permission_order\"]}],\"foreignKeys\":[{\"name\":\"strapi_api_token_permissions_token_links_fk\",\"columns\":[\"api_token_permission_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"strapi_api_token_permissions\",\"onDelete\":\"CASCADE\"},{\"name\":\"strapi_api_token_permissions_token_links_inv_fk\",\"columns\":[\"api_token_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"strapi_api_tokens\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"api_token_permission_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"api_token_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"api_token_permission_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"strapi_transfer_token_permissions_token_links\",\"indexes\":[{\"name\":\"strapi_transfer_token_permissions_token_links_fk\",\"columns\":[\"transfer_token_permission_id\"]},{\"name\":\"strapi_transfer_token_permissions_token_links_inv_fk\",\"columns\":[\"transfer_token_id\"]},{\"name\":\"strapi_transfer_token_permissions_token_links_unique\",\"columns\":[\"transfer_token_permission_id\",\"transfer_token_id\"],\"type\":\"unique\"},{\"name\":\"strapi_transfer_token_permissions_token_links_order_inv_fk\",\"columns\":[\"transfer_token_permission_order\"]}],\"foreignKeys\":[{\"name\":\"strapi_transfer_token_permissions_token_links_fk\",\"columns\":[\"transfer_token_permission_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"strapi_transfer_token_permissions\",\"onDelete\":\"CASCADE\"},{\"name\":\"strapi_transfer_token_permissions_token_links_inv_fk\",\"columns\":[\"transfer_token_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"strapi_transfer_tokens\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"transfer_token_permission_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"transfer_token_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"transfer_token_permission_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"files_related_morphs\",\"indexes\":[{\"name\":\"files_related_morphs_fk\",\"columns\":[\"file_id\"]},{\"name\":\"files_related_morphs_order_index\",\"columns\":[\"order\"]},{\"name\":\"files_related_morphs_id_column_index\",\"columns\":[\"related_id\"]}],\"foreignKeys\":[{\"name\":\"files_related_morphs_fk\",\"columns\":[\"file_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"files\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"file_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"related_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"related_type\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"field\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"files_folder_links\",\"indexes\":[{\"name\":\"files_folder_links_fk\",\"columns\":[\"file_id\"]},{\"name\":\"files_folder_links_inv_fk\",\"columns\":[\"folder_id\"]},{\"name\":\"files_folder_links_unique\",\"columns\":[\"file_id\",\"folder_id\"],\"type\":\"unique\"},{\"name\":\"files_folder_links_order_inv_fk\",\"columns\":[\"file_order\"]}],\"foreignKeys\":[{\"name\":\"files_folder_links_fk\",\"columns\":[\"file_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"files\",\"onDelete\":\"CASCADE\"},{\"name\":\"files_folder_links_inv_fk\",\"columns\":[\"folder_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"upload_folders\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"file_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"folder_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"file_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"upload_folders_parent_links\",\"indexes\":[{\"name\":\"upload_folders_parent_links_fk\",\"columns\":[\"folder_id\"]},{\"name\":\"upload_folders_parent_links_inv_fk\",\"columns\":[\"inv_folder_id\"]},{\"name\":\"upload_folders_parent_links_unique\",\"columns\":[\"folder_id\",\"inv_folder_id\"],\"type\":\"unique\"},{\"name\":\"upload_folders_parent_links_order_inv_fk\",\"columns\":[\"folder_order\"]}],\"foreignKeys\":[{\"name\":\"upload_folders_parent_links_fk\",\"columns\":[\"folder_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"upload_folders\",\"onDelete\":\"CASCADE\"},{\"name\":\"upload_folders_parent_links_inv_fk\",\"columns\":[\"inv_folder_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"upload_folders\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"folder_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"inv_folder_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"folder_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"up_permissions_role_links\",\"indexes\":[{\"name\":\"up_permissions_role_links_fk\",\"columns\":[\"permission_id\"]},{\"name\":\"up_permissions_role_links_inv_fk\",\"columns\":[\"role_id\"]},{\"name\":\"up_permissions_role_links_unique\",\"columns\":[\"permission_id\",\"role_id\"],\"type\":\"unique\"},{\"name\":\"up_permissions_role_links_order_inv_fk\",\"columns\":[\"permission_order\"]}],\"foreignKeys\":[{\"name\":\"up_permissions_role_links_fk\",\"columns\":[\"permission_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"up_permissions\",\"onDelete\":\"CASCADE\"},{\"name\":\"up_permissions_role_links_inv_fk\",\"columns\":[\"role_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"up_roles\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"permission_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"role_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"permission_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"up_users_role_links\",\"indexes\":[{\"name\":\"up_users_role_links_fk\",\"columns\":[\"user_id\"]},{\"name\":\"up_users_role_links_inv_fk\",\"columns\":[\"role_id\"]},{\"name\":\"up_users_role_links_unique\",\"columns\":[\"user_id\",\"role_id\"],\"type\":\"unique\"},{\"name\":\"up_users_role_links_order_inv_fk\",\"columns\":[\"user_order\"]}],\"foreignKeys\":[{\"name\":\"up_users_role_links_fk\",\"columns\":[\"user_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"up_users\",\"onDelete\":\"CASCADE\"},{\"name\":\"up_users_role_links_inv_fk\",\"columns\":[\"role_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"up_roles\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"user_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"role_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"user_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"landing_pages_components\",\"indexes\":[{\"name\":\"landing_pages_field_index\",\"columns\":[\"field\"]},{\"name\":\"landing_pages_component_type_index\",\"columns\":[\"component_type\"]},{\"name\":\"landing_pages_entity_fk\",\"columns\":[\"entity_id\"]},{\"name\":\"landing_pages_unique\",\"columns\":[\"entity_id\",\"component_id\",\"field\",\"component_type\"],\"type\":\"unique\"}],\"foreignKeys\":[{\"name\":\"landing_pages_entity_fk\",\"columns\":[\"entity_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"landing_pages\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"entity_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"component_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"component_type\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"field\",\"type\":\"string\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":false},{\"name\":\"order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"landing_pages_localizations_links\",\"indexes\":[{\"name\":\"landing_pages_localizations_links_fk\",\"columns\":[\"landing_page_id\"]},{\"name\":\"landing_pages_localizations_links_inv_fk\",\"columns\":[\"inv_landing_page_id\"]},{\"name\":\"landing_pages_localizations_links_unique\",\"columns\":[\"landing_page_id\",\"inv_landing_page_id\"],\"type\":\"unique\"},{\"name\":\"landing_pages_localizations_links_order_fk\",\"columns\":[\"landing_page_order\"]}],\"foreignKeys\":[{\"name\":\"landing_pages_localizations_links_fk\",\"columns\":[\"landing_page_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"landing_pages\",\"onDelete\":\"CASCADE\"},{\"name\":\"landing_pages_localizations_links_inv_fk\",\"columns\":[\"inv_landing_page_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"landing_pages\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"landing_page_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"inv_landing_page_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"landing_page_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]},{\"name\":\"posts_localizations_links\",\"indexes\":[{\"name\":\"posts_localizations_links_fk\",\"columns\":[\"post_id\"]},{\"name\":\"posts_localizations_links_inv_fk\",\"columns\":[\"inv_post_id\"]},{\"name\":\"posts_localizations_links_unique\",\"columns\":[\"post_id\",\"inv_post_id\"],\"type\":\"unique\"},{\"name\":\"posts_localizations_links_order_fk\",\"columns\":[\"post_order\"]}],\"foreignKeys\":[{\"name\":\"posts_localizations_links_fk\",\"columns\":[\"post_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"posts\",\"onDelete\":\"CASCADE\"},{\"name\":\"posts_localizations_links_inv_fk\",\"columns\":[\"inv_post_id\"],\"referencedColumns\":[\"id\"],\"referencedTable\":\"posts\",\"onDelete\":\"CASCADE\"}],\"columns\":[{\"name\":\"id\",\"type\":\"increments\",\"args\":[{\"primary\":true,\"primaryKey\":true}],\"defaultTo\":null,\"notNullable\":true,\"unsigned\":false},{\"name\":\"post_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"inv_post_id\",\"type\":\"integer\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true},{\"name\":\"post_order\",\"type\":\"double\",\"args\":[],\"defaultTo\":null,\"notNullable\":false,\"unsigned\":true}]}]}','2023-10-27 15:07:59','259f3bdc9c43bd222ea99df253a80627');

/*Table structure for table `strapi_migrations` */

DROP TABLE IF EXISTS `strapi_migrations`;

CREATE TABLE `strapi_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_migrations` */

/*Table structure for table `strapi_transfer_token_permissions` */

DROP TABLE IF EXISTS `strapi_transfer_token_permissions`;

CREATE TABLE `strapi_transfer_token_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_transfer_token_permissions_created_by_id_fk` (`created_by_id`),
  KEY `strapi_transfer_token_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_transfer_token_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_transfer_token_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_transfer_token_permissions` */

/*Table structure for table `strapi_transfer_token_permissions_token_links` */

DROP TABLE IF EXISTS `strapi_transfer_token_permissions_token_links`;

CREATE TABLE `strapi_transfer_token_permissions_token_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `transfer_token_permission_id` int(10) unsigned DEFAULT NULL,
  `transfer_token_id` int(10) unsigned DEFAULT NULL,
  `transfer_token_permission_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `strapi_transfer_token_permissions_token_links_unique` (`transfer_token_permission_id`,`transfer_token_id`),
  KEY `strapi_transfer_token_permissions_token_links_fk` (`transfer_token_permission_id`),
  KEY `strapi_transfer_token_permissions_token_links_inv_fk` (`transfer_token_id`),
  KEY `strapi_transfer_token_permissions_token_links_order_inv_fk` (`transfer_token_permission_order`),
  CONSTRAINT `strapi_transfer_token_permissions_token_links_fk` FOREIGN KEY (`transfer_token_permission_id`) REFERENCES `strapi_transfer_token_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `strapi_transfer_token_permissions_token_links_inv_fk` FOREIGN KEY (`transfer_token_id`) REFERENCES `strapi_transfer_tokens` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_transfer_token_permissions_token_links` */

/*Table structure for table `strapi_transfer_tokens` */

DROP TABLE IF EXISTS `strapi_transfer_tokens`;

CREATE TABLE `strapi_transfer_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `access_key` varchar(255) DEFAULT NULL,
  `last_used_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) DEFAULT NULL,
  `lifespan` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `strapi_transfer_tokens_created_by_id_fk` (`created_by_id`),
  KEY `strapi_transfer_tokens_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `strapi_transfer_tokens_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `strapi_transfer_tokens_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_transfer_tokens` */

/*Table structure for table `strapi_webhooks` */

DROP TABLE IF EXISTS `strapi_webhooks`;

CREATE TABLE `strapi_webhooks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `url` longtext DEFAULT NULL,
  `headers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`headers`)),
  `events` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`events`)),
  `enabled` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `strapi_webhooks` */

/*Table structure for table `up_permissions` */

DROP TABLE IF EXISTS `up_permissions`;

CREATE TABLE `up_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `action` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `up_permissions_created_by_id_fk` (`created_by_id`),
  KEY `up_permissions_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `up_permissions_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `up_permissions_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

/*Data for the table `up_permissions` */

insert  into `up_permissions`(`id`,`action`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'plugin::users-permissions.user.me','2023-10-26 16:06:12.047000','2023-10-26 16:06:12.047000',NULL,NULL),
(2,'plugin::users-permissions.auth.changePassword','2023-10-26 16:06:12.047000','2023-10-26 16:06:12.047000',NULL,NULL),
(3,'plugin::users-permissions.auth.callback','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(4,'plugin::users-permissions.auth.connect','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(5,'plugin::users-permissions.auth.register','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(6,'plugin::users-permissions.auth.forgotPassword','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(7,'plugin::users-permissions.auth.resetPassword','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(8,'plugin::users-permissions.auth.emailConfirmation','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(9,'plugin::users-permissions.auth.sendEmailConfirmation','2023-10-26 16:06:12.056000','2023-10-26 16:06:12.056000',NULL,NULL),
(12,'api::post.post.find','2023-10-26 19:07:50.615000','2023-10-26 19:07:50.615000',NULL,NULL),
(13,'api::post.post.findOne','2023-10-26 19:07:50.615000','2023-10-26 19:07:50.615000',NULL,NULL),
(15,'api::landing-page.landing-page.find','2023-10-27 04:17:04.309000','2023-10-27 04:17:04.309000',NULL,NULL),
(16,'api::landing-page.landing-page.find','2023-10-27 04:32:47.262000','2023-10-27 04:32:47.262000',NULL,NULL);

/*Table structure for table `up_permissions_role_links` */

DROP TABLE IF EXISTS `up_permissions_role_links`;

CREATE TABLE `up_permissions_role_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `permission_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `permission_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `up_permissions_role_links_unique` (`permission_id`,`role_id`),
  KEY `up_permissions_role_links_fk` (`permission_id`),
  KEY `up_permissions_role_links_inv_fk` (`role_id`),
  KEY `up_permissions_role_links_order_inv_fk` (`permission_order`),
  CONSTRAINT `up_permissions_role_links_fk` FOREIGN KEY (`permission_id`) REFERENCES `up_permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `up_permissions_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

/*Data for the table `up_permissions_role_links` */

insert  into `up_permissions_role_links`(`id`,`permission_id`,`role_id`,`permission_order`) values 
(1,1,1,1),
(2,2,1,1),
(3,3,2,1),
(4,4,2,1),
(5,5,2,1),
(6,6,2,1),
(7,7,2,2),
(8,8,2,2),
(9,9,2,2),
(12,12,2,3),
(13,13,2,4),
(15,15,1,2),
(16,16,2,5);

/*Table structure for table `up_roles` */

DROP TABLE IF EXISTS `up_roles`;

CREATE TABLE `up_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `up_roles_created_by_id_fk` (`created_by_id`),
  KEY `up_roles_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `up_roles_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `up_roles_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `up_roles` */

insert  into `up_roles`(`id`,`name`,`description`,`type`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'Authenticated','Default role given to authenticated user.','authenticated','2023-10-26 16:06:12.036000','2023-10-27 04:32:52.043000',NULL,NULL),
(2,'Public','Default role given to unauthenticated user.','public','2023-10-26 16:06:12.040000','2023-10-27 04:32:47.258000',NULL,NULL);

/*Table structure for table `up_users` */

DROP TABLE IF EXISTS `up_users`;

CREATE TABLE `up_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `blocked` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `up_users_created_by_id_fk` (`created_by_id`),
  KEY `up_users_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `up_users_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `up_users_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `up_users` */

/*Table structure for table `up_users_role_links` */

DROP TABLE IF EXISTS `up_users_role_links`;

CREATE TABLE `up_users_role_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `user_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `up_users_role_links_unique` (`user_id`,`role_id`),
  KEY `up_users_role_links_fk` (`user_id`),
  KEY `up_users_role_links_inv_fk` (`role_id`),
  KEY `up_users_role_links_order_inv_fk` (`user_order`),
  CONSTRAINT `up_users_role_links_fk` FOREIGN KEY (`user_id`) REFERENCES `up_users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `up_users_role_links_inv_fk` FOREIGN KEY (`role_id`) REFERENCES `up_roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `up_users_role_links` */

/*Table structure for table `upload_folders` */

DROP TABLE IF EXISTS `upload_folders`;

CREATE TABLE `upload_folders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `path_id` int(11) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `created_by_id` int(10) unsigned DEFAULT NULL,
  `updated_by_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `upload_folders_path_id_index` (`path_id`),
  UNIQUE KEY `upload_folders_path_index` (`path`),
  KEY `upload_folders_created_by_id_fk` (`created_by_id`),
  KEY `upload_folders_updated_by_id_fk` (`updated_by_id`),
  CONSTRAINT `upload_folders_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `upload_folders_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

/*Data for the table `upload_folders` */

insert  into `upload_folders`(`id`,`name`,`path_id`,`path`,`created_at`,`updated_at`,`created_by_id`,`updated_by_id`) values 
(1,'landing-page',1,'/1','2023-10-27 02:51:07.893000','2023-10-27 02:51:07.893000',1,1),
(2,'about-page',2,'/2','2023-10-27 02:58:29.298000','2023-10-27 02:58:29.298000',1,1),
(3,'contact-page',3,'/3','2023-10-27 02:59:32.997000','2023-10-27 02:59:32.997000',1,1),
(4,'locate-page',4,'/4','2023-10-27 03:01:33.179000','2023-10-27 03:01:33.179000',1,1),
(5,'archieve-page',5,'/5','2023-10-27 03:02:28.454000','2023-10-27 03:02:28.454000',1,1);

/*Table structure for table `upload_folders_parent_links` */

DROP TABLE IF EXISTS `upload_folders_parent_links`;

CREATE TABLE `upload_folders_parent_links` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `folder_id` int(10) unsigned DEFAULT NULL,
  `inv_folder_id` int(10) unsigned DEFAULT NULL,
  `folder_order` double unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `upload_folders_parent_links_unique` (`folder_id`,`inv_folder_id`),
  KEY `upload_folders_parent_links_fk` (`folder_id`),
  KEY `upload_folders_parent_links_inv_fk` (`inv_folder_id`),
  KEY `upload_folders_parent_links_order_inv_fk` (`folder_order`),
  CONSTRAINT `upload_folders_parent_links_fk` FOREIGN KEY (`folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `upload_folders_parent_links_inv_fk` FOREIGN KEY (`inv_folder_id`) REFERENCES `upload_folders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `upload_folders_parent_links` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
