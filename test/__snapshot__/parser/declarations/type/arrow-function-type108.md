# Kataw parser test case

## Input

`````js
type a = (b[()=> c]) => c;
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
                    "start": 20,
                    "end": 23
                },
                "parameters": {
                    "kind": 268,
                    "objectType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 8,
                        "end": 11
                    },
                    "indexType": {
                        "kind": 261,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 14,
                            "end": 16
                        },
                        "parameters": {
                            "kind": 208,
                            "parameters": [],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 13,
                            "end": 13
                        },
                        "returnType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 16,
                                "end": 18
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 16,
                            "end": 18
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 12,
                        "end": 18
                    },
                    "flags": 0,
                    "start": 12,
                    "end": 20
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
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
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type a = (b[()=> c]) => c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

