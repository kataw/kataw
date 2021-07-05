# Kataw parser test case

## Input

`````js
let y = async x => { await x; }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 13,
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
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 64,
                                                    "start": 20,
                                                    "end": 26
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 26,
                                                    "end": 28
                                                },
                                                "flags": 32,
                                                "start": 20,
                                                "end": 28
                                            },
                                            "flags": 16,
                                            "start": 20,
                                            "end": 29
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 20,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 18,
                                "end": 31
                            },
                            "flags": 288,
                            "start": 7,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 33554448,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "let y = async x => { await x; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

let y = async x => {
    await x;
  };
```

### Diagnostics

```javascript
✔ No errors
```

