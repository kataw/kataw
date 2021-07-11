# Kataw parser test case

## Input

`````js
5 ? t => 5 : (t => 5);
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
                    "kind": 201392130,
                    "text": 5,
                    "rawText": "5",
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
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 134299649,
                        "text": "t",
                        "rawText": "t",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 5,
                        "end": 8
                    },
                    "contents": {
                        "kind": 201392130,
                        "text": 5,
                        "rawText": "5",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 10
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "t",
                            "rawText": "t",
                            "flags": 96,
                            "start": 14,
                            "end": 15
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 15,
                            "end": 18
                        },
                        "contents": {
                            "kind": 201392130,
                            "text": 5,
                            "rawText": "5",
                            "flags": 96,
                            "start": 18,
                            "end": 20
                        },
                        "flags": 32,
                        "start": 14,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 21
                },
                "flags": 96,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "5 ? t => 5 : (t => 5);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  5 ? t => 5 : (t => 5);

```

### Diagnostics

```javascript
✔ No errors
```

