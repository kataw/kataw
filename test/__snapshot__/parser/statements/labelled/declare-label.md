# Kataw parser test case

## Input

`````js

opaque: label;

declare: label;

type: label;

async: label;

yield: label;

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "opaque",
                "rawText": "opaque",
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "opaque",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 7
                },
                {
                    "kind": 256,
                    "label": "declare",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                {
                    "kind": 256,
                    "label": "type",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 32,
                    "end": 38
                },
                {
                    "kind": 256,
                    "label": "async",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 46,
                    "end": 53
                },
                {
                    "kind": 256,
                    "label": "yield",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 61,
                    "end": 68
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 7,
                "end": 8
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 8,
                    "end": 14
                },
                "flags": 16,
                "start": 8,
                "end": 15
            },
            "flags": 16,
            "start": 0,
            "end": 15
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "declare",
                "rawText": "declare",
                "flags": 96,
                "start": 15,
                "end": 24
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "opaque",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 7
                },
                {
                    "kind": 256,
                    "label": "declare",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                {
                    "kind": 256,
                    "label": "type",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 32,
                    "end": 38
                },
                {
                    "kind": 256,
                    "label": "async",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 46,
                    "end": 53
                },
                {
                    "kind": 256,
                    "label": "yield",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 61,
                    "end": 68
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 24,
                "end": 25
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 25,
                    "end": 31
                },
                "flags": 16,
                "start": 25,
                "end": 32
            },
            "flags": 16,
            "start": 15,
            "end": 32
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "type",
                "rawText": "type",
                "flags": 96,
                "start": 32,
                "end": 38
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "opaque",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 7
                },
                {
                    "kind": 256,
                    "label": "declare",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                {
                    "kind": 256,
                    "label": "type",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 32,
                    "end": 38
                },
                {
                    "kind": 256,
                    "label": "async",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 46,
                    "end": 53
                },
                {
                    "kind": 256,
                    "label": "yield",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 61,
                    "end": 68
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 38,
                "end": 39
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 39,
                    "end": 45
                },
                "flags": 16,
                "start": 39,
                "end": 46
            },
            "flags": 16,
            "start": 32,
            "end": 46
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 46,
                "end": 53
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "opaque",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 7
                },
                {
                    "kind": 256,
                    "label": "declare",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                {
                    "kind": 256,
                    "label": "type",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 32,
                    "end": 38
                },
                {
                    "kind": 256,
                    "label": "async",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 46,
                    "end": 53
                },
                {
                    "kind": 256,
                    "label": "yield",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 61,
                    "end": 68
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 53,
                "end": 54
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 54,
                    "end": 60
                },
                "flags": 16,
                "start": 54,
                "end": 61
            },
            "flags": 16,
            "start": 46,
            "end": 61
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 61,
                "end": 68
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "opaque",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 7
                },
                {
                    "kind": 256,
                    "label": "declare",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 15,
                    "end": 24
                },
                {
                    "kind": 256,
                    "label": "type",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 32,
                    "end": 38
                },
                {
                    "kind": 256,
                    "label": "async",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 46,
                    "end": 53
                },
                {
                    "kind": 256,
                    "label": "yield",
                    "iterationStatement": false,
                    "flags": 17,
                    "start": 61,
                    "end": 68
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 68,
                "end": 69
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "text": "label",
                    "rawText": "label",
                    "flags": 96,
                    "start": 69,
                    "end": 75
                },
                "flags": 16,
                "start": 69,
                "end": 76
            },
            "flags": 17,
            "start": 61,
            "end": 76
        }
    ],
    "isModule": false,
    "source": "\nopaque: label;\n\ndeclare: label;\n\ntype: label;\n\nasync: label;\n\nyield: label;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 77
}
```

### Printed

```javascript

opaque: label;
declare: label;
type: label;
async: label;
yield: label;
```

### Diagnostics

```javascript
✔ No errors
```

