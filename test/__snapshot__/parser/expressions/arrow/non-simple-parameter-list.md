# Kataw parser test case

## Input

`````js
( x = y ) => {
  'use strict';
}

( { x}  ) => {
  'use strict';
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
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 271,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 9,
                        "end": 12
                    },
                    "typeParameters": null,
                    "parameters": [
                        {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 3
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 64,
                                "start": 3,
                                "end": 5
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 5,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 7
                        }
                    ],
                    "asyncKeyword": null,
                    "returnType": null,
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [
                                {
                                    "kind": 201392131,
                                    "text": "use strict",
                                    "rawText": "'use strict'",
                                    "flags": 4194401,
                                    "start": 14,
                                    "end": 29
                                }
                            ],
                            "statements": [],
                            "flags": 4194337,
                            "start": 14,
                            "end": 30
                        },
                        "flags": 32,
                        "start": 12,
                        "end": 32
                    },
                    "flags": 34,
                    "start": 0,
                    "end": 32
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 37,
                                "end": 39
                            },
                            "flags": 48,
                            "start": 35,
                            "end": 40
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 35,
                    "end": 40
                },
                "flags": 268435488,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 201392131,
                            "text": "use strict",
                            "rawText": "'use strict'",
                            "flags": 4194401,
                            "start": 48,
                            "end": 63
                        },
                        "flags": 16,
                        "start": 48,
                        "end": 64
                    }
                ],
                "flags": 4194321,
                "start": 48,
                "end": 64
            },
            "flags": 16,
            "start": 46,
            "end": 66
        }
    ],
    "isModule": false,
    "source": "( x = y ) => {\n  'use strict';\n}\n\n( { x}  ) => {\n  'use strict';\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 0, end: 30
✖ Expected a `;` - start: 43, end: 46

```

