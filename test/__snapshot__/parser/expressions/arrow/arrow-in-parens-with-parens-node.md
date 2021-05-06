# Kataw parser test case

## Input

`````js
var asserted1 = <any>((n) => { return n; });
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "asserted1",
                            "rawText": "asserted1",
                            "flags": 96,
                            "start": 3,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "n",
                                        "rawText": "n",
                                        "flags": 96,
                                        "start": 23,
                                        "end": 24
                                    }
                                ],
                                "asyncToken": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 0,
                                                    "start": 30,
                                                    "end": 37
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "n",
                                                    "rawText": "n",
                                                    "flags": 96,
                                                    "start": 37,
                                                    "end": 39
                                                },
                                                "flags": 16,
                                                "start": 0,
                                                "end": 30
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 30,
                                        "end": 40
                                    },
                                    "flags": 32,
                                    "start": 28,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 22,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 15,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var asserted1 = <any>((n) => { return n; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

