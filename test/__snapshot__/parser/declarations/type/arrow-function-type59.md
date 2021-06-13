# Kataw parser test case

## Input

`````js
type a = (?x) => T;
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
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 13,
                    "end": 16
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 134217970,
                            "nullableToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 10,
                                "end": 11
                            },
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 11,
                                "end": 12
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 16
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 16,
                    "end": 18
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 18
            },
            "flags": 2097152,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "type a = (?x) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

