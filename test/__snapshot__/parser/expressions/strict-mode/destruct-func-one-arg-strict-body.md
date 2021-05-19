# Kataw parser test case

## Input

`````js
+function f([x]){"use strict";}
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
                "kind": 126,
                "operandToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 0,
                    "end": 1
                },
                "operand": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 1,
                        "end": 9
                    },
                    "generatorToken": null,
                    "name": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 9,
                        "end": 11
                    },
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [
                            {
                                "kind": 215,
                                "ellipsisToken": null,
                                "binding": {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 202,
                                        "elements": [
                                            {
                                                "kind": 244,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 13,
                                                    "end": 14
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 13,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "start": 13,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 15
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 34,
                                "start": 12,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "start": 11,
                        "end": 16
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "\"use strict\"",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 29
                                }
                            ],
                            "statements": [],
                            "flags": 32,
                            "start": 17,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 16,
                        "end": 31
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 1,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "+function f([x]){\"use strict\";}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 12, end: 30

```

