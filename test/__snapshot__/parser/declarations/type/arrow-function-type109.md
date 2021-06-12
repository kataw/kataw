# Kataw parser test case

## Input

`````js
type a = (...b[([x])=> c] | d) => c;
`````

## Options


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
                    "kind": 208,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 268,
                                        "objectType": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 14
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 13,
                                            "end": 14
                                        },
                                        "indexType": {
                                            "kind": 261,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "parameters": {
                                                "kind": 279,
                                                "parameters": [
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
                                                                    "start": 17,
                                                                    "end": 18
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 17,
                                                                "end": 18
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 0,
                                                        "start": 16,
                                                        "end": 19
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "start": 15,
                                                "end": 22
                                            },
                                            "returnType": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "c",
                                                    "rawText": "c",
                                                    "flags": 96,
                                                    "start": 22,
                                                    "end": 24
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 22,
                                                "end": 24
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 15,
                                            "end": 24
                                        },
                                        "flags": 0,
                                        "start": 15,
                                        "end": 27
                                    },
                                    {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 27,
                                            "end": 29
                                        },
                                        "typeParameters": null,
                                        "flags": 0,
                                        "start": 27,
                                        "end": 29
                                    }
                                ],
                                "flags": 0,
                                "start": 25,
                                "end": 29
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 29
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 10,
                    "end": 29
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
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
    "source": "type a = (...b[([x])=> c] | d) => c;",
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

