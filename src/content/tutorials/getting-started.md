---
title: "Getting Started with the Climate Data Hub"
description: "Learn how to navigate the CDH, find datasets, and download climate data."
pubDate: 2024-01-15
tags: ["beginner", "overview", "data-access"]
draft: false
---

## Introduction

The CGIAR Climate Data Hub (CDH) provides access to curated climate datasets for agricultural research and food security analysis. This guide walks you through the basics of finding and accessing data.

## Navigating the Site

The CDH has three main sections:

- **Catalog** — Browse and search climate datasets described in STAC format
- **Tutorials** — Step-by-step guides for accessing and working with data
- **Wiki** — Reference documentation, glossaries, and technical guides

## Finding a Dataset

1. Go to the **Catalog** section from the navigation bar.
2. Browse the full list or use the **Search** button (top-right) to find specific datasets.
3. Click a dataset title to view full metadata including:
   - Temporal coverage (date range)
   - Spatial extent (bounding box)
   - Available assets and download links

## Data Formats

Datasets on CDH are typically provided in one of these formats:

| Format | Description |
|--------|-------------|
| GeoTIFF / COG | Raster grids for spatial analysis; Cloud-Optimised GeoTIFF allows streaming access |
| NetCDF | Multidimensional arrays for time-series climate data |
| CSV | Tabular summaries and station observations |

## Downloading Data

Most datasets link to external repositories (e.g., Copernicus CDS, CHIRTS, NASA Earthdata). Follow the asset links on each dataset's detail page to access the actual files.

## Next Steps

- Read [Working with STAC Catalogs](/tutorials/working-with-stac) to query the catalog programmatically.
- See the [Data Formats Reference](/wiki/data-formats) in the Wiki for detailed format documentation.
