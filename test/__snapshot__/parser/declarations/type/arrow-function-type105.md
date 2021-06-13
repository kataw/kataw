# Kataw parser test case

## Input

`````js
type a = ((...b?:string | d) => c);
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
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowTypeParameterList": {
                        "kind": 10,
                        "flags": 64,
                        "start": 28,
                        "end": 31
                    },
                    "arrowToken": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 14
                                },
                                "name": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 15,
                                    "end": 16
                                },
                                "types": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134234347,
                                            "flags": 2097216,
                                            "start": 17,
                                            "end": 23
                                        },
                                        {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "d",
                                                "rawText": "d",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 27
                                            },
                                            "typeParameters": null,
                                            "flags": 2097152,
                                            "start": 25,
                                            "end": 27
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 23,
                                    "end": 27
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 27
                            }
                        ],
                        "trailingComma": false,
                        "flags": 2097152,
                        "start": 8,
                        "end": 31
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 31,
                            "end": 33
                        },
                        "typeParameters": null,
                        "flags": 2097152,
                        "start": 31,
                        "end": 33
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 8,
                    "end": 33
                },
                "flags": 2097152,
                "start": 8,
                "end": 34
            },
            "flags": 2097152,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type a = ((...b?:string | d) => c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

