# Kataw parser test case

## Input

`````js
a ? async (b) : c => d : e;
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
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 17,
                        "end": 20
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        }
                    ],
                    "asyncKeyword": {
                        "kind": 82031,
                        "flags": 64,
                        "start": 3,
                        "end": 9
                    },
                    "returnType": {
                        "kind": 139,
                        "bitwiseOrToken": null,
                        "bitwiseAndToken": null,
                        "type": {
                            "kind": 144,
                            "name": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 15,
                                "end": 17
                            },
                            "typeParameters": null,
                            "flags": 2097152,
                            "start": 15,
                            "end": 17
                        },
                        "flags": 2097152,
                        "start": 15,
                        "end": 17
                    },
                    "contents": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 288,
                    "start": 3,
                    "end": 22
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 22,
                    "end": 24
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "e",
                    "rawText": "e",
                    "flags": 96,
                    "start": 24,
                    "end": 26
                },
                "flags": 32,
                "start": 0,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "a ? async (b) : c => d : e;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

a ? async (b) =>  d : e;
```

### Diagnostics

```javascript
✔ No errors
```

