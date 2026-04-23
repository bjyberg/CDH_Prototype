---
title: "Working with STAC Catalogs"
description: "Understand the SpatioTemporal Asset Catalog specification and how CDH uses it to describe datasets."
pubDate: 2024-02-10
tags: ["stac", "python", "intermediate"]
draft: false
---

## What is STAC?

The **SpatioTemporal Asset Catalog** (STAC) specification defines a common language for describing geospatial datasets. Every dataset in the CDH Catalog is described as a STAC Item — a GeoJSON Feature with standardised metadata fields.

## STAC Item Structure

A STAC Item has these core fields:

```json
{
  "type": "Feature",
  "stac_version": "1.0.0",
  "id": "dataset-unique-id",
  "bbox": [-180, -90, 180, 90],
  "geometry": { "type": "Polygon", "coordinates": [[...]] },
  "properties": {
    "datetime": null,
    "start_datetime": "1981-01-01T00:00:00Z",
    "end_datetime": "2023-12-31T23:59:59Z"
  },
  "assets": {
    "data": {
      "href": "https://example.org/dataset.tif",
      "type": "image/tiff; application=geotiff",
      "roles": ["data"]
    }
  },
  "links": [...]
}
```

### Key Fields

- **`bbox`** — Bounding box `[west, south, east, north]` in WGS84 decimal degrees
- **`properties.datetime`** — Single timestamp, or `null` if a range is used
- **`properties.start_datetime` / `end_datetime`** — Temporal range when `datetime` is null
- **`assets`** — Named links to the actual data files
- **`links`** — Navigation links (to parent catalog, source, documentation)

## Using pystac

The `pystac` Python library lets you read and work with STAC Items programmatically:

```python
import pystac
import requests

# Load a STAC Item from CDH (once a STAC API is available)
item_url = "https://cdh.cgiar.org/stac/items/chirps-v2-daily"
item = pystac.Item.from_dict(requests.get(item_url).json())

print(item.id)
print(item.bbox)
print(item.datetime)

# Access assets
for key, asset in item.assets.items():
    print(f"{key}: {asset.href}")
```

## Spatial Filtering

To find datasets covering a specific region, filter by `bbox` overlap. In Python:

```python
def bbox_overlaps(item_bbox, query_bbox):
    """Check if two bounding boxes overlap."""
    w1, s1, e1, n1 = item_bbox
    w2, s2, e2, n2 = query_bbox
    return not (e1 < w2 or e2 < w1 or n1 < s2 or n2 < s1)

# Example: filter for East Africa
east_africa = [28, -12, 52, 18]
```

## Temporal Filtering

```python
from datetime import datetime

def item_covers_date(item, check_date: datetime) -> bool:
    start = item.properties.get("start_datetime")
    end = item.properties.get("end_datetime")
    if start and end:
        return datetime.fromisoformat(start) <= check_date <= datetime.fromisoformat(end)
    return False
```

## Next Steps

- Browse the [Catalog](/catalog) to see CDH datasets as STAC Items.
- See the [Glossary](/wiki/glossary) for definitions of STAC terminology.
