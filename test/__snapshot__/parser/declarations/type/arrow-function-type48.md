# Kataw parser test case

## Input

`````js
type a = (a[b][]) => T;
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
                    "start": 17,
                    "end": 20
                },
                "parameters": {
                    "kind": 136,
                    "type": {
                        "kind": 268,
                        "objectType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 10,
                                "end": 11
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 11
                        },
                        "indexType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 12,
                                "end": 13
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 12,
                            "end": 13
                        },
                        "flags": 2097152,
                        "start": 12,
                        "end": 15
                    },
                    "flags": 2097152,
                    "start": 15,
                    "end": 16
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 20,
                    "end": 22
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 22
            },
            "flags": 2097152,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = (a[b][]) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

