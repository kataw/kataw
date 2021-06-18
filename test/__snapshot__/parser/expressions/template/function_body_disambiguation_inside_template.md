# Kataw parser test case

## Input

`````js
`a ${function(){}} b`
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
                "kind": 227,
                "spans": [
                    {
                        "kind": 65764,
                        "rawText": "a ",
                        "text": "a ",
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 5,
                                "end": 13
                            },
                            "generatorToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 13,
                                "end": 15
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 16,
                                    "end": 16
                                },
                                "flags": 32,
                                "start": 15,
                                "end": 17
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 5,
                            "end": 17
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 17
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": " b",
                    "rawText": " b",
                    "flags": 96,
                    "start": 17,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "`a ${function(){}} b`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

`a ${function () {}} b`;
```

### Diagnostics

```javascript
✔ No errors
```

