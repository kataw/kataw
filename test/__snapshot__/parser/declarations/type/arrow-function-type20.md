# Kataw parser test case

## Input

`````js
type a = (1 | 1[]) => T;
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
                    "start": 18,
                    "end": 21
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 137,
                            "types": [
                                {
                                    "kind": 134217968,
                                    "value": 1,
                                    "flags": 0,
                                    "start": 10,
                                    "end": 11
                                },
                                {
                                    "kind": 136,
                                    "type": {
                                        "kind": 134217968,
                                        "value": 1,
                                        "flags": 0,
                                        "start": 13,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                }
                            ],
                            "flags": 0,
                            "start": 11,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
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
                    "flags": 0,
                    "start": 21,
                    "end": 23
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "type a = (1 | 1[]) => T;",
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

