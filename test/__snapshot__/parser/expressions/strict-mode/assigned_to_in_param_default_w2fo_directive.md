# Kataw parser test case

## Input

`````js
(x=interface=10) => { }
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 19
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 1,
                            "end": 2
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "interface",
                                "rawText": "interface",
                                "flags": 96,
                                "start": 3,
                                "end": 12
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 12,
                                "end": 13
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 10,
                                "rawText": "10",
                                "flags": 96,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 15
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 21,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 23
                },
                "flags": 34,
                "start": 0,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "(x=interface=10) => { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

(x = interface = 10) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

