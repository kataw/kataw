# Kataw parser test case

## Input

`````js
type A = B & (C)
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
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 138,
                    "types": [
                        {
                            "kind": 144,
                            "typeName": {
                                "kind": 134299649,
                                "text": "B",
                                "rawText": "B",
                                "flags": 96,
                                "start": 8,
                                "end": 10
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 10
                        },
                        {
                            "kind": 290,
                            "type": {
                                "kind": 144,
                                "typeName": {
                                    "kind": 134299649,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 12,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "flags": 2097152,
                    "start": 10,
                    "end": 16
                },
                "flags": 2097152,
                "start": 8,
                "end": 16
            },
            "flags": 64,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "type A = B & (C)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

type A = B & (C)
```

### Diagnostics

```javascript
✔ No errors
```

