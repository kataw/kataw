# Kataw parser test case

## Input

`````js
function a(options = {}) {
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
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "options",
                            "rawText": "options",
                            "flags": 96,
                            "start": 11,
                            "end": 18
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
                                "start": 22,
                                "end": 22
                            },
                            "flags": 48,
                            "start": 20,
                            "end": 23
                        },
                        "flags": 34,
                        "start": 11,
                        "end": 23
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 10,
                "end": 24
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
                            "start": 26,
                            "end": 41
                        }
                    ],
                    "statements": [],
                    "flags": 33,
                    "start": 26,
                    "end": 42
                },
                "flags": 32,
                "start": 24,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "function a(options = {}) {\n  \"use strict\";\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 11, end: 42

```

