# Kataw parser test case

## Input

`````js
type a = ((1 |-1)) => T;
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
                "kind": 288,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 18,
                    "end": 21
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134217968,
                                    "text": 1,
                                    "flags": 2097216,
                                    "start": 11,
                                    "end": 12
                                },
                                {
                                    "kind": 271,
                                    "subtractionToken": {
                                        "kind": 134318643,
                                        "flags": 64,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "text": 1,
                                    "flags": 2097216,
                                    "start": 14,
                                    "end": 16
                                }
                            ],
                            "flags": 2097152,
                            "start": 12,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 21
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 21,
                        "end": 23
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 21,
                    "end": 23
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 23
            },
            "flags": 2097152,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type a = ((1 |-1)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

