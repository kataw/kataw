# Kataw parser test case

## Input

`````js
type a = ((x?:string)=> T) => T;
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
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 26,
                        "end": 29
                    },
                    "parameters": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 261,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 21,
                                    "end": 23
                                },
                                "parameters": {
                                    "kind": 279,
                                    "parameters": [
                                        {
                                            "kind": 149,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 12
                                            },
                                            "optionalToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "start": 12,
                                                "end": 13
                                            },
                                            "types": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 14,
                                                "end": 20
                                            },
                                            "flags": 0,
                                            "start": 8,
                                            "end": 20
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 8,
                                    "end": 20
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
                                    "flags": 0,
                                    "start": 23,
                                    "end": 25
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 8,
                                "end": 25
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 8,
                        "end": 29
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 29,
                            "end": 31
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 29,
                        "end": 31
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 8,
                    "end": 31
                },
                "flags": 0,
                "start": 8,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type a = ((x?:string)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

