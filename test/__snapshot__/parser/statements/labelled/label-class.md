# Kataw parser test case

## Input

`````js
label: class x {}
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
                "text": "label",
                "rawText": "label",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "labels": [
                {
                    "kind": 256,
                    "label": "label",
                    "iterationStatement": false,
                    "flags": 16,
                    "start": 0,
                    "end": 5
                }
            ],
            "colonToken": {
                "kind": 21,
                "flags": 0,
                "start": 5,
                "end": 6
            },
            "statement": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 0,
                    "start": 6,
                    "end": 12
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 14,
                    "start": 32,
                    "end": 17
                },
                "flags": 16,
                "start": 6,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "label: class x {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Class declarations cannot be used in a single-statement context - start: 6, end: 12

```

