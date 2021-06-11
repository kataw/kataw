# Kataw parser test case

## Input

`````js
type A = (x: string, number) => void
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
                "text": "A",
                "rawText": "A",
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
                    "start": 28,
                    "end": 31
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
                                "start": 10,
                                "end": 11
                            },
                            "optionalToken": null,
                            "types": {
                                "kind": 134234347,
                                "flags": 64,
                                "start": 12,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 8,
                            "end": 19
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 134234345,
                                "flags": 64,
                                "start": 20,
                                "end": 27
                            },
                            "flags": 0,
                            "start": 20,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 27
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 31,
                    "end": 36
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type A = (x: string, number) => void",
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

