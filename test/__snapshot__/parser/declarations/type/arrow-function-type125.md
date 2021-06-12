# Kataw parser test case

## Input

`````js
type a = (|1,symbol['string']) => T;
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
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134217968,
                                "value": 1,
                                "flags": 0,
                                "start": 11,
                                "end": 12
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 0,
                            "start": 8,
                            "end": 12
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 268,
                                "objectType": {
                                    "kind": 134234343,
                                    "flags": 64,
                                    "start": 13,
                                    "end": 19
                                },
                                "indexType": {
                                    "kind": 134217967,
                                    "value": "string",
                                    "flags": 0,
                                    "start": 20,
                                    "end": 28
                                },
                                "flags": 0,
                                "start": 20,
                                "end": 30
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 29
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
    "source": "type a = (|1,symbol['string']) => T;",
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

