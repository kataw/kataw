# Kataw parser test case

## Input

`````js
type a = ((x | (y)=> T)) => T;
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
                    "start": 24,
                    "end": 27
                },
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 260,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 12
                                        },
                                        {
                                            "kind": 261,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 18,
                                                "end": 20
                                            },
                                            "parameters": {
                                                "kind": 144,
                                                "id": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 16,
                                                    "end": 17
                                                },
                                                "typeParameters": null,
                                                "flags": 0,
                                                "start": 14,
                                                "end": 17
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
                                                "flags": 0,
                                                "start": 20,
                                                "end": 22
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 14,
                                            "end": 22
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 12,
                                    "end": 22
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 10,
                                "end": 22
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 23
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 27
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 27,
                        "end": 29
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 27,
                    "end": 29
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "type a = ((x | (y)=> T)) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

