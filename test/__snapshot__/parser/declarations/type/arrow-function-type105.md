# Kataw parser test case

## Input

`````js
type a = ((q | y, x?:string )=> T) => T;
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
                    "start": 34,
                    "end": 37
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 261,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 29,
                                "end": 31
                            },
                            "parameters": {
                                "kind": 279,
                                "parameters": [
                                    {
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
                                                                "text": "q",
                                                                "rawText": "q",
                                                                "flags": 96,
                                                                "start": 11,
                                                                "end": 12
                                                            },
                                                            {
                                                                "kind": 144,
                                                                "id": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 14,
                                                                    "end": 16
                                                                },
                                                                "typeParameters": null,
                                                                "flags": 0,
                                                                "start": 14,
                                                                "end": 16
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "start": 12,
                                                        "end": 16
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 0,
                                                    "start": 8,
                                                    "end": 16
                                                },
                                                "optionalToken": null,
                                                "types": null,
                                                "flags": 0,
                                                "start": 8,
                                                "end": 16
                                            },
                                            {
                                                "kind": 149,
                                                "ellipsisToken": null,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 17,
                                                    "end": 19
                                                },
                                                "optionalToken": {
                                                    "kind": 134217750,
                                                    "flags": 64,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "types": {
                                                    "kind": 134234347,
                                                    "flags": 64,
                                                    "start": 21,
                                                    "end": 27
                                                },
                                                "flags": 0,
                                                "start": 17,
                                                "end": 27
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 8,
                                        "end": 27
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 8,
                                "end": 31
                            },
                            "returnType": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 33
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 31,
                                "end": 33
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 33
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 37
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 37,
                        "end": 39
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 37,
                    "end": 39
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 39
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "type a = ((q | y, x?:string )=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

