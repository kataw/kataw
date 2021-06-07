# Kataw parser test case

## Input

`````js
function a([ option1, option2 ]) {
  "use strict";
}

async function a(options = {}) {
  "use strict";
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 202,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "option1",
                                    "rawText": "option1",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 20
                                },
                                {
                                    "kind": 134299649,
                                    "text": "option2",
                                    "rawText": "option2",
                                    "flags": 96,
                                    "start": 21,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 12,
                            "end": 29
                        },
                        "flags": 32,
                        "start": 11,
                        "end": 31
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 32
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
                            "flags": 97,
                            "start": 34,
                            "end": 49
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "start": 34,
                    "end": 50
                },
                "flags": 32,
                "start": 32,
                "end": 52
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 52
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "start": 52,
                "end": 59
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 59,
                "end": 68
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 68,
                "end": 70
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "options",
                            "rawText": "options",
                            "flags": 96,
                            "start": 71,
                            "end": 78
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 82,
                                "end": 82
                            },
                            "flags": 48,
                            "start": 80,
                            "end": 83
                        },
                        "flags": 34,
                        "start": 71,
                        "end": 83
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 70,
                "end": 84
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
                            "flags": 97,
                            "start": 86,
                            "end": 101
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "start": 86,
                    "end": 102
                },
                "flags": 32,
                "start": 84,
                "end": 104
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 52,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "function a([ option1, option2 ]) {\n  \"use strict\";\n}\n\nasync function a(options = {}) {\n  \"use strict\";\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

function a([option1, option2]) {}
async function a(options = {}) {}
```

### Diagnostics

```javascript
✔ No errors
```

