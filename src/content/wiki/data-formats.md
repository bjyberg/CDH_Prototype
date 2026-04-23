---
title: "Data Formats Reference"
description: "Reference guide to the file formats used in CDH datasets."
tags: ["formats", "reference", "technical"]
lastUpdated: 2024-03-01
---

## GeoTIFF and Cloud-Optimised GeoTIFF (COG)

GeoTIFF embeds geographic metadata (coordinate reference system, geotransform) into a standard TIFF image file. It is the most common format for raster climate data such as precipitation grids and temperature fields.

**Cloud-Optimised GeoTIFF (COG)** is a variant structured to allow HTTP range requests, enabling tools to read only the portion of a file they need without downloading it entirely.

**Typical uses:** Precipitation, temperature, land cover, vegetation indices.

**Recommended tools:** GDAL, rasterio (Python), QGIS, ArcGIS.

## NetCDF

Network Common Data Form (NetCDF) is a self-describing binary format designed for multidimensional scientific data (e.g., a 3D array of `[time, latitude, longitude]`). CDH distributes NetCDF files following **CF Conventions 1.7**.

**Typical uses:** Time-series climate model outputs, reanalysis products (ERA5, CMIP6).

**Recommended tools:** xarray + netCDF4 (Python), CDO, NCO, Panoply.

```python
import xarray as xr

ds = xr.open_dataset("era5_temperature_2020.nc")
print(ds["t2m"].attrs)       # variable metadata
da = ds["t2m"].sel(time="2020-06")  # select a time slice
```

## CSV / Tabular

Comma-separated value files are used for station observations, aggregated statistics, and lookup tables. Columns vary by dataset but typically include:

| Column | Description |
|--------|-------------|
| `station_id` | Unique station identifier |
| `date` | Observation date (ISO 8601) |
| `variable` | Climate variable code |
| `value` | Measured value |
| `unit` | Physical unit |
| `qc_flag` | Quality control flag |

## Coordinate Reference Systems

Unless stated otherwise in the dataset metadata, all spatial data is delivered in:

**WGS84 geographic coordinates (EPSG:4326)**

- Longitude: −180° to +180° (West to East)
- Latitude: −90° to +90° (South to North)

Some analysis-ready products may be projected (e.g., Equal Area for area calculations). The CRS is always documented in the STAC item's `properties` or asset metadata.

## Compression

- GeoTIFF files often use **LZW** or **DEFLATE** compression internally.
- NetCDF files commonly use **zlib** compression on variables.
- Neither requires manual decompression — standard libraries handle this transparently.
