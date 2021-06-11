# Kataw parser test case

## Input

`````js
type X = (x | y, z: string) => T;
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
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 27,
                    "end": 30
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 144,
                                "id": {
                                    "kind": 137,
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
                            "optionalToken": null,
                            "types": null,
                            "flags": 0,
                            "start": 8,
                            "end": 15
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134299649,
                                "text": "z",
                                "rawText": "z",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "optionalToken": null,
                            "types": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 16,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 26
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 30,
                        "end": 32
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 30,
                    "end": 32
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "type X = (x | y, z: string) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

