# Kataw parser test case

## Input

`````js
async ( x = y ) => {
  'use strict';
}

async ( { x}  ) => {
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 7,
                            "end": 13
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 15
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 18
                },
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
                                "transformFlags": 0,
                                "start": 20,
                                "end": 35
                            }
                        ],
                        "statements": [],
                        "flags": 4194337,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 36
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 38
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 0,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 38
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 45
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 51
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 49,
                                "end": 51
                            },
                            "flags": 48,
                            "transformFlags": 0,
                            "start": 47,
                            "end": 52
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 47,
                    "end": 55
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 55,
                    "end": 58
                },
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
                                "transformFlags": 0,
                                "start": 60,
                                "end": 75
                            }
                        ],
                        "statements": [],
                        "flags": 4194337,
                        "transformFlags": 0,
                        "start": 60,
                        "end": 76
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 78
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 38,
                "end": 78
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 38,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "async ( x = y ) => {\n  'use strict';\n}\n\nasync ( { x}  ) => {\n  'use strict';\n}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 35, end: 36
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 75, end: 76

```

