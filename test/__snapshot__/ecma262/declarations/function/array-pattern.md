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
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 10
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 201,
                        "elementList": {
                            "kind": 324,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "option1",
                                    "rawText": "option1",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 20
                                },
                                {
                                    "kind": 134299649,
                                    "text": "option2",
                                    "rawText": "option2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 29
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 29
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 31
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 11,
                "end": 31
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
                            "transformFlags": 0,
                            "start": 34,
                            "end": 49
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 34,
                    "end": 50
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 32,
                "end": 52
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 52
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 52,
                "end": 59
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 59,
                "end": 68
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 68,
                "end": 70
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "options",
                            "rawText": "options",
                            "flags": 96,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 82,
                                "end": 82
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 80,
                            "end": 83
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 71,
                        "end": 83
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 71,
                "end": 83
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
                            "transformFlags": 0,
                            "start": 86,
                            "end": 101
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 86,
                    "end": 102
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 84,
                "end": 104
            },
            "returnType": null,
            "flags": 144,
            "transformFlags": 0,
            "start": 52,
            "end": 104
        }
    ],
    "isModule": false,
    "source": "function a([ option1, option2 ]) {\n  \"use strict\";\n}\n\nasync function a(options = {}) {\n  \"use strict\";\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 104
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 101, end: 102

```

