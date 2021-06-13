# Kataw parser test case

## Input

`````js
type a = (((x | x))) => T;
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
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 20,
                    "end": 23
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 13
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 11,
                                        "end": 13
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 15,
                                            "end": 17
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 15,
                                        "end": 17
                                    }
                                ],
                                "flags": 2097152,
                                "start": 13,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 23
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 23,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 25
            },
            "flags": 2097152,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type a = (((x | x))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

