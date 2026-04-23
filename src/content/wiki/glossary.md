---
title: "Glossary"
description: "Definitions of key terms used throughout the CGIAR Climate Data Hub."
tags: ["glossary", "reference"]
lastUpdated: 2024-03-15
---

## Bbox

**Bounding box** — A rectangular geographic extent expressed as four numbers:
`[west, south, east, north]` in decimal degrees (WGS84).

Example: `[-180, -50, 180, 50]` covers the globe between 50°S and 50°N.

## CF Conventions

**Climate and Forecast (CF) Metadata Conventions** — A set of naming and metadata standards for NetCDF files used by the climate science community. Ensures consistent variable names, units, and coordinate definitions.

## CHIRPS

**Climate Hazards Group InfraRed Precipitation with Station data** — A quasi-global, high-resolution (0.05°) rainfall dataset produced by UC Santa Barbara. Combines satellite imagery with ground station data; available from 1981 to present.

## COG

**Cloud-Optimised GeoTIFF** — A GeoTIFF file structured so that HTTP range requests can retrieve spatial subsets without downloading the entire file. Enables efficient access over the web.

## CRS

**Coordinate Reference System** — Defines how coordinates map to locations on Earth. CDH defaults to **WGS84 / EPSG:4326** (geographic coordinates in decimal degrees).

## ERA5

**ECMWF Reanalysis v5** — A global atmospheric reanalysis produced by the European Centre for Medium-Range Weather Forecasts (ECMWF). Provides hourly data at 0.25° resolution from 1940 to present.

## GeoTIFF

A TIFF image file that embeds geospatial metadata (CRS, geotransform) so that each pixel corresponds to a geographic location on Earth.

## NetCDF

**Network Common Data Form** — A binary file format for self-describing, multidimensional scientific data. Standard format for climate model outputs and reanalysis products.

## Reanalysis

A reanalysis combines historical observations with a modern weather model to produce a spatially and temporally complete estimate of past atmospheric conditions. ERA5 and MERRA-2 are widely used reanalysis products.

## STAC

**SpatioTemporal Asset Catalog** — A specification for describing geospatial datasets in a consistent, machine-readable JSON format. Each dataset is described as a STAC *Item* (a GeoJSON Feature) containing metadata, a bounding box, temporal extent, and links to assets.

See also: [STAC specification](https://stacspec.org)

## Temporal Extent

The time period covered by a dataset. In STAC, expressed as either:
- A single `datetime` field (point in time)
- A `start_datetime` / `end_datetime` pair (a range; `datetime` is set to `null`)

## WGS84

**World Geodetic System 1984** — The global coordinate system used by GPS and most web mapping platforms. Geographic coordinates are expressed as longitude (X) and latitude (Y) in decimal degrees.

EPSG code: **4326**
