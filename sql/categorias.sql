--
-- Base de datos: `negocio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `c_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `c_nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_observaciones` text COLLATE  utf8mb4_unicode_ci DEFAULT NULL,
  `c_habilitado` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_editando` char(1) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`c_id`, `c_nombre`, `c_habilitado`) VALUES
(1, 'Muebles', '1'),
(2, 'Linea Blanca', '1'),
(3, 'TV, Audio y Video', '1'),
(4, 'Electro y Aires', '1'),
(5, 'Jardinería', '1'),
(6, 'Bebés y Niños', '1');
