# Kataw parser test case

## Input

`````js
var a = async (options = {}) => {
  "use strict";
};
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 28,
                                "end": 31
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "options",
                                        "rawText": "options",
                                        "flags": 96,
                                        "start": 15,
                                        "end": 22
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "right": {
                                        "kind": 220,
                                        "propertyList": {
                                            "kind": 218,
                                            "properties": [],
                                            "trailingComma": false,
                                            "flags": 16,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "flags": 48,
                                        "start": 24,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 15,
                                    "end": 27
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "returnType": null,
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
                                            "start": 33,
                                            "end": 48
                                        }
                                    ],
                                    "statements": [],
                                    "flags": 33,
                                    "start": 33,
                                    "end": 49
                                },
                                "flags": 32,
                                "start": 31,
                                "end": 51
                            },
                            "flags": 290,
                            "start": 7,
                            "end": 51
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 51
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 52
        }
    ],
    "isModule": false,
    "source": "var a = async (options = {}) => {\n  \"use strict\";\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 52
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 15, end: 49

```

