# Kataw parser test case

## Input

`````js
a ? async (b => c) : d => e;
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
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "async",
                        "rawText": "async",
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 15
                                },
                                "contents": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 11,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3,
                        "end": 3
                    },
                    "flags": 268435488,
                    "start": 3,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "alternate": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 22,
                        "end": 25
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 25,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 27
                },
                "flags": 96,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "a ? async (b => c) : d => e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

a ? async(b => c) : d => e;
```

### Diagnostics

```javascript
✔ No errors
```

