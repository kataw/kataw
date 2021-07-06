# Kataw parser test case

## Input

`````js
var obj = {
  * a(options = {}) {
    "use strict";
  }
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
                "flags": 80,
                "transformFlags": 0,
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 351,
                                        "asyncKeyword": null,
                                        "asteriskToken": {
                                            "kind": 67143222,
                                            "flags": 65,
                                            "transformFlags": 32,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "method": {
                                            "kind": 209,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 15,
                                                "end": 17
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
                                                            "start": 18,
                                                            "end": 25
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
                                                                "start": 29,
                                                                "end": 29
                                                            },
                                                            "flags": 48,
                                                            "transformFlags": 8,
                                                            "start": 27,
                                                            "end": 30
                                                        },
                                                        "flags": 34,
                                                        "transformFlags": 0,
                                                        "start": 18,
                                                        "end": 30
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 162,
                                                "transformFlags": 0,
                                                "start": 18,
                                                "end": 31
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
                                                            "transformFlags": 0,
                                                            "start": 33,
                                                            "end": 50
                                                        }
                                                    ],
                                                    "statements": [],
                                                    "flags": 33,
                                                    "transformFlags": 0,
                                                    "start": 33,
                                                    "end": 51
                                                },
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 31,
                                                "end": 55
                                            },
                                            "flags": 160,
                                            "transformFlags": 0,
                                            "start": 17,
                                            "end": 55
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 11,
                                        "end": 55
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 55
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 9,
                            "end": 57
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 57
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 57
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 58
        }
    ],
    "isModule": false,
    "source": "var obj = {\n  * a(options = {}) {\n    \"use strict\";\n  }\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 58
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 18, end: 51

```

