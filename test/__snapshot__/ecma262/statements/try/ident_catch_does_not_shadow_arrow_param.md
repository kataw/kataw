# Kataw parser test case

## Input

`````js
g => {
  try {}
  catch (g) {}
}
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 1,
                    "end": 4
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 81,
                                    "start": 6,
                                    "end": 12
                                },
                                "block": {
                                    "kind": 124,
                                    "block": {
                                        "kind": 249,
                                        "statements": [],
                                        "flags": 16,
                                        "start": 14,
                                        "end": 14
                                    },
                                    "flags": 16,
                                    "start": 12,
                                    "end": 15
                                },
                                "catchClause": {
                                    "kind": 173,
                                    "catchKeyword": {
                                        "kind": 4202575,
                                        "flags": 81,
                                        "start": 15,
                                        "end": 23
                                    },
                                    "catchParameter": {
                                        "kind": 134299649,
                                        "text": "g",
                                        "rawText": "g",
                                        "flags": 96,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "block": {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [],
                                            "flags": 16,
                                            "start": 29,
                                            "end": 29
                                        },
                                        "flags": 16,
                                        "start": 27,
                                        "end": 30
                                    },
                                    "flags": 81,
                                    "start": 15,
                                    "end": 30
                                },
                                "finallyKeyword": null,
                                "finallyBlock": null,
                                "flags": 16,
                                "start": 6,
                                "end": 30
                            }
                        ],
                        "flags": 33,
                        "start": 6,
                        "end": 30
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 32
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "g => {\n  try {}\n  catch (g) {}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

g => {
  try {}
  catch (g){}
};

```

### Diagnostics

```javascript
✔ No errors
```

