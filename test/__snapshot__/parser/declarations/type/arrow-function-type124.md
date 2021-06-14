# Kataw parser test case

## Input

`````js
type a = (x,symbol['string']) => T;
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
                    "start": 29,
                    "end": 32
                },
                "arrowToken": {
                    "kind": 292,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 10,
                                    "end": 11
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 8,
                                "end": 11
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 11
                        },
                        {
                            "kind": 284,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 311,
                                "objectType": {
                                    "kind": 134234343,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 18
                                },
                                "indexType": {
                                    "kind": 134217967,
                                    "text": "string",
                                    "flags": 2097216,
                                    "start": 19,
                                    "end": 27
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 29
                            },
                            "flags": 2097152,
                            "start": 12,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 28
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 32,
                        "end": 34
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 32,
                    "end": 34
                },
                "typeParameters": null,
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
    "source": "type a = (x,symbol['string']) => T;",
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

