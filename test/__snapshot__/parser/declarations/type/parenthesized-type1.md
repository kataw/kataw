# Kataw parser test case

## Input

`````js
type X = (x & y);
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 144,
                    "id": {
                        "kind": 138,
                        "types": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 13,
                                "end": 15
                            }
                        ],
                        "flags": 0,
                        "start": 11,
                        "end": 15
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 15
                },
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "type X = (x & y);",
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
✔ No errors
```

