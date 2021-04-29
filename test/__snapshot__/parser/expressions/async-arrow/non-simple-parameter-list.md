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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 15,
                "end": 18
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
                        "start": 7,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 9,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 13
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
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
                            "rawText": "use strict",
                            "flags": 4194401,
                            "start": 20,
                            "end": 35
                        }
                    ],
                    "statements": [],
                    "flags": 4194337,
                    "start": 20,
                    "end": 36
                },
                "flags": 32,
                "start": 18,
                "end": 38
            },
            "flags": 290,
            "start": 0,
            "end": 38
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 55,
                "end": 58
            },
            "typeParameters": null,
            "parameters": [
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
                                "start": 49,
                                "end": 51
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 49,
                        "end": 51
                    },
                    "flags": 32,
                    "start": 47,
                    "end": 52
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 38,
                "end": 45
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
                            "rawText": "use strict",
                            "flags": 4194401,
                            "start": 60,
                            "end": 75
                        }
                    ],
                    "statements": [],
                    "flags": 4194337,
                    "start": 60,
                    "end": 76
                },
                "flags": 32,
                "start": 58,
                "end": 78
            },
            "flags": 290,
            "start": 38,
            "end": 78
        }
    ],
    "isModule": false,
    "source": "async ( x = y ) => {\n  'use strict';\n}\n\nasync ( { x}  ) => {\n  'use strict';\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 35, end: 36
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 75, end: 76

```

