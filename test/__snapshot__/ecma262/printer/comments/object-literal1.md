# Kataw parser test case

## Input

`````js
({/*1*/x/*2*/:/*3*/y/*4*/})
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 20
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 20
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 26
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "({/*1*/x/*2*/:/*3*/y/*4*/})",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
({ /*1*/ x /*2*/:/*3*/  y /*4*/ });
```

### Diagnostics

```javascript
✔ No errors
```

