-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-06-2020 a las 23:50:43
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoRTN`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `serie_id` int(11) NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `texto_res` varchar(1000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `puntaje` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id`, `serie_id`, `usuario_id`, `texto_res`, `createdAt`, `updatedAt`, `puntaje`) VALUES
(1, 48866, 1, '\'The 100 does something not many series can do, it gets better with every season, the character development is great and realistic. Honestly I don\'t know exactly what to say other than that this is a great series with an actually good story and writing that makes sense. There aren\'t huge plotholes which is extremely important for a sci-fi show.\'', '2018-03-20 00:00:00', '2019-03-20 00:00:00', 10),
(2, 2734, 2, '\'This used to be my favorite of the L&O franchise, until Stabler left. The last several seasons have done nothing but shamelessly pander to a political agenda, rather than focus on engaging plots, as they once did. It\'s regrettable that this show has become such a disappointment. It feels like I\'m watching a sinking ship.\'', '2012-02-18 00:00:00', '2012-04-18 00:00:00', 5),
(3, 91875, 3, '\'This show has potential but every scene is so over the top and convenient that it\'s hard to take it seriously.\'', '2020-05-26 17:12:42', '2020-05-26 00:00:00', 7),
(4, 80986, 4, '\'Very good pilot episode indeed. The pilot is one of the most important episode of a new series and they really nailed it in this one. I loved the CGI and the direction. Geoff Jones is absolutely a fantastic writer. Very excited about the future episodes now.\'', '2015-01-17 00:00:00', '2015-01-17 00:00:00', 8),
(5, 1622, 1, '\'I relized from the beginning this show brings real life. Even if there is no real connection you feel it . THAT YOU ARE NOT ALONE . That there are others dealing with simular situations. Plus they were the first show to create a help line. When they are emotional in a scene they bring their real selves into it. You can tell real fro. Fake. They helped my 100% To me they are Family\'', '2020-01-17 00:00:00', '2020-01-17 00:00:00', 10),
(6, 1403, 1, '\'Do a little analyse about this web site and you gonna discover that most people voting don\'t even watch the show. Most of the negative reviews are from the first episode , first year. Look at the True detective serie (most of the review are for the first season, second seasons was abyssal and even after that awful season the rating stay higher than 9. Season 2 of True detective not worth even a 5 of rating.) Also people are voting in the top 50/100 list. Result.... They vote for the same serie over and over. Rise the popularity of the already top 100 series which are old reviews from the first season. Result Series with a slow introduction of all characters in the first season are totally eclipsed. This serie is as good as Firefly if not better This is made by the same guy. Better than any Star Trek, or any actual super heroes series except maybe the Punisher but Punisher is a total different beast. Worth the trip. Let\'s see what is next....\'', '2015-11-16 00:00:00', '2015-11-16 00:00:00', 9),
(7, 34967, 2, '\'I could not finish watching the episode I saw tonight (series 4, episode 6). I am not one to judge too quickly and I thought the series might be a slow burner - but sadly it was a dud with Spielberg\'s dead formulaic hand all over it. I had enjoyed the first few series but the later ones rather than building on the earlier efforts are just hideous. There are so many unbelievable events, not just physically unbelievable but emotionally and logically.\nIt is an unholy mess driving onwards to a climax I don\'t care about anymore. This is a bad series, with no real development of the characters. Some of the leads, who are very good actors try their best - but it\'s not enough. When it comes down to it, the reason why this is a pile of chowder is the fault of the great fish head who made his name with another fish. If there\'s one thing I hate, it\'s film and TV makers who don\'t care about their audiences.\'', '2010-06-19 00:00:00', '2010-06-19 00:00:00', 1),
(8, 1412, 3, '\'The first 2 seasons of the show was amazing however after that it got stale and boring. I decided to give up less than half way through season 5. The flashbacks become uninteresting. The villains after 2 seasons are boring. Love story is soap opera material. Season 4 made the show unrealistic with the sci-fi magic. Arrow was more interesting when he was working alone without any sidekicks.\'', '2018-07-18 00:00:00', '2018-07-18 00:00:00', 5),
(10, 1396, 1, '\'Dont you ever watch this show as it is so perfect u will never be able to watch another show\'', '2019-09-19 00:00:00', '2019-09-19 00:00:00', 10),
(11, 4614, 1, '\'The first 12 or so seasons were great,but the writing has gotten weak, and how many times can you tell similar stories in similar settings. The last 4 years get a 1 star rating. CBS should have canceled NCIS and kept going with The Code\'', '2015-10-18 00:00:00', '2015-10-18 00:00:00', 7),
(12, 100, 2, '\'TI AM NOT AN ANIMAL. It was brilliant because it allowed the wackiness to be carried through without any flaws committed by poor writing. Totally magic!\'', '2017-11-19 00:00:00', '2018-11-19 00:00:00', 10),
(13, 456, 3, '\'The Simpsons is one of the best TV shows of all times. It is a perfect mirror of the American culture and has many memorable moments that will always be remembered . I don\'t know anybody who doesn\'t like this show, it\'s impossible not to be a fan of it. You could watch each episode 20 times and never get tired, you will always find a new funny thing every time you watch it. Unfotunatley the show is getting worse and worse with every new season, Maybe it\'s time to let The Simpsons die with dign\'', '2019-12-14 00:00:00', '2019-12-14 00:00:00', 10),
(14, 4607, 4, '\'It\'s awesome how good the series has aged. Seeing it all again also made some storylines make much more sense. I even think the ending makes much more sense now. That\'s something I was totally blind for the first time I\'ve seen Lost.\'', '2018-01-20 00:00:00', '2018-01-20 00:00:00', 9),
(15, 1407, 1, '\'I just finished watching season 8, which clearly has to be the last one. This is the best ending of a TV-series I have ever seen. Please Homeland-producers, no more seasons (although I love the show). This was the perfect ending. You nailed it. Don´t ruin it by making another.\'', '2020-01-20 00:00:00', '2020-01-20 00:00:00', 10),
(16, 62560, 1, ' \'I love watching this show. It is a true entertaining show. The story is very wonderful and has many layers of action and thriller. It is just awesome show with wonderful and powerful dialogues. I LOVE it!\'', '2020-05-20 00:00:00', '2020-06-05 01:52:39', 10),
(17, 63247, 2, '\'Season 1 was one of the best seasons I\'ve ever seen on television. Ever. Season 2 was forgettable. And season 3 is complete trash. I want to keep liking this show so badly. I love the addition of Aaron Paul and some of the other characters are still interesting, but it seems the show lost all direction just a couple episodes into season 2 and could never find its bearings again. This is not Westworld anymore\'', '2016-05-16 00:00:00', '2016-05-16 00:00:00', 3),
(18, 67195, 3, '\'This is one of the most creative, intelligent, visually unique works of art in entertainment. Shows like this should last years with the amazing story telling it imagines. Hope the same team worx up another original. We need it in this word of reboots and retellings of the same old stories.\'', '2012-04-18 00:00:00', '2012-04-18 00:00:00', 10),
(19, 61664, 4, '\'TSoft porn elements including orgy scenes, silliest action shots with fake blood fountains flowing all over the bodies, very pushed exaggerated pansexualism, insufficient sometimes boring script with continuity defects. Very disappointed with the show regarding Wachowskis other masterpiece works. I watched till the end only to see Sun\'s revenge as she was my favorite character. The 2 hour final episode never seemed to end. Bored to death.\'', '2018-03-19 00:00:00', '2018-04-19 00:00:00', 4),
(20, 1424, 1, '\'Season 5 is the perfect example of when the show needs to be over. First 2 seasons were amazing, then we saw a gradual decline in good storytelling. And season 5 has no common thread, all the old characters are not even given a chance to shine. The show seems very disconnected, too many ideas never form into anything interesting. Please let it be the last season because it\'s borderline embarrassing. Pass the word to American Horror Story, and the new Twin Peaks.\'', '2020-02-10 00:00:00', '2020-03-20 00:00:00', 5),
(21, 38472, 1, '\'I loved so much about season 1. But even if I try to think forgiving thoughts about a characters stupidity that sort of just goes on and on. Seamingly with no lesson learned. Ever. I can\'t get over every other stupid, reckless and well STUPID thing Trish does in season 2 & 3. Season one was a 9 for me. Now after 3. My annoyance with the way they wrote Trish (her actions) leave me at a 5. But I LOVED season 1.\'', '2019-12-19 00:00:00', '2019-12-19 00:00:00', 5),
(22, 1405, 2, '\'Just watch it i have watched this series 3 times over there is no better not breaking bad not game of thrones nothing comes close.\'', '2018-07-19 00:00:00', '2018-07-19 00:00:00', 10),
(23, 10545, 3, '\'I loved this show when it first came out. I stuck with it for a while. I didn\'t like it got pretty weird and dragged on towards the later seasons.\n\'', '2019-04-20 00:00:00', '2019-04-20 00:00:00', 7),
(25, 1668, 5, 'Jen looks beautiful <3', '2020-06-06 19:53:35', '2020-06-06 19:53:35', 10),
(28, 66788, 4, ' Was Hannah playing the victim when everything was basically her fault?! Hate it', '2020-06-07 01:47:24', '2020-06-07 21:10:56', 2),
(29, 66788, 3, 'I\'m bored', '2020-06-07 20:03:36', '2020-06-07 20:03:36', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre_usuario` varchar(400) NOT NULL,
  `email` varchar(400) DEFAULT NULL,
  `password` varchar(400) DEFAULT NULL,
  `fecha_nac` datetime DEFAULT NULL,
  `genero_fav` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `email`, `password`, `fecha_nac`, `genero_fav`) VALUES
(1, 'Camila Dominguez', 'camidominguez@gmail.com', '$2a$10$v9Bnc5TKi2lHx1LCJvVXBeu5dgZR7dYsHxwyk8NYJZzsCB.ApOJfe', '2000-02-01 00:00:00', 'Comedy'),
(2, 'Milagros Gomez', 'miligomez@hotmail.com', '$2a$10$2iVTl3hBvloiw8LJdBTNmOV70mfMNBP0Ea1mK/ST5r0U8QILIxlue', '1999-07-01 00:00:00', 'Animation'),
(3, 'Nicolas Riccitelli', 'nicoriccitelli@hotmail.com', '$2a$10$gBUlEr7RAkA9Iw8EKpUtNO6kMJL24QvJJh3fvh4lKYZ/GWU5Jr0KC', '2000-01-26 00:00:00', 'Mystery'),
(4, 'Angelina Jolie', 'angiejolie@hotmail.com', '$2a$10$.FUuWGps/6o6BNDojREDkukXsQtcRP8WlBOm8fwl.9NTHf4luJKLK', '1980-02-01 00:00:00', 'Crime'),
(5, 'Brad Pitt', 'bradpitt@hotmail.com', '$2a$10$fhQ3OjvXInZYR8o1uHH8kedzKrpZJ/gxrxXp3Ip32JZFz3bJ/pZWK', '2006-12-15 00:00:00', 'Drama'),
(7, 'Sofia Perez', 'sofiaperez@hotmail.com', '$2a$10$0wYLm75BaZTTcH97SQY0weFkhb86y.KNdLOSxJ3RIiNcUKOlHxGNW', '2006-12-08 00:00:00', 'Sci-Fi & Fantasy'),
(8, 'Silvia Montenegro', 'silviaimontenegro@hotmail.com', '$2a$10$/KCdgsjwLNn1JJ.i/1X75ewQCKfY9g/bI60aMRLJhLoCNNqtFBP92', '2001-06-30 00:00:00', 'Action & Adventure');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reseñas_FK` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `reseñas_FK` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;