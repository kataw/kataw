# Kataw parser test case

## Input

`````js
`${function(){}}`
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
                        "rawText": "",
                        "text": "",
                        "expression": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 0,
                                "start": 3,
                                "end": 11
                            },
                            "generatorToken": null,
                            "name": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 11,
                                "end": 13
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "start": 14,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 13,
                                "end": 15
                            },
                            "typeParameters": null,
                            "returnType": null,
                            "flags": 32,
                            "start": 3,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 15
                    }
                ],
                "tail": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "`${function(){}}`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

`${function () {}}`;
```

### Diagnostics

```javascript
✔ No errors
```

