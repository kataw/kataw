# Kataw parser test case

## Input

`````js
type a = (((x | ((y & [x]))))) => T;
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
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 30,
                    "end": 33
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
                                "kind": 260,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 137,
                                        "types": [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 13
                                            },
                                            {
                                                "kind": 260,
                                                "type": {
                                                    "kind": 260,
                                                    "type": {
                                                        "kind": 144,
                                                        "id": {
                                                            "kind": 138,
                                                            "types": [
                                                                {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 18,
                                                                    "end": 19
                                                                },
                                                                {
                                                                    "kind": 147,
                                                                    "elementTypes": [
                                                                        {
                                                                            "kind": 144,
                                                                            "id": {
                                                                                "kind": 134299649,
                                                                                "text": "x",
                                                                                "rawText": "x",
                                                                                "flags": 96,
                                                                                "start": 23,
                                                                                "end": 24
                                                                            },
                                                                            "typeParameters": null,
                                                                            "flags": 0,
                                                                            "start": 23,
                                                                            "end": 24
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 0,
                                                                    "start": 21,
                                                                    "end": 25
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "start": 19,
                                                            "end": 25
                                                        },
                                                        "typeParameters": null,
                                                        "flags": 0,
                                                        "start": 17,
                                                        "end": 25
                                                    },
                                                    "flags": 0,
                                                    "start": 17,
                                                    "end": 26
                                                },
                                                "flags": 0,
                                                "start": 15,
                                                "end": 27
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 13,
                                        "end": 27
                                    },
                                    "typeParameters": null,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 27
                                },
                                "flags": 0,
                                "start": 11,
                                "end": 28
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 33
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 33,
                        "end": 35
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 33,
                    "end": 35
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = (((x | ((y & [x]))))) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

