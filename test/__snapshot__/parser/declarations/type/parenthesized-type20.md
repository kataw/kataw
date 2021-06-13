# Kataw parser test case

## Input

`````js
type a = ([-1])
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
                "text": "a",
                "rawText": "a",
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
                "kind": 290,
                "type": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 313,
                            "subtractionToken": {
                                "kind": 134318643,
                                "flags": 64,
                                "start": 11,
                                "end": 12
                            },
                            "text": 1,
                            "flags": 2097216,
                            "start": 11,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 10,
                    "end": 14
                },
                "flags": 2097152,
                "start": 8,
                "end": 15
            },
            "flags": 2097152,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "type a = ([-1])",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

