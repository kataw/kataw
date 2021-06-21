# Kataw parser test case

## Input

`````js
'use strict'; ({08: 4});

'use strict'; let {08: x} = y;

'use strict'; let {0123: z} = q;

'use strict'; 08;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 201392130,
                                    "text": 8,
                                    "rawText": "08",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 4,
                                    "rawText": "4",
                                    "flags": 96,
                                    "start": 19,
                                    "end": 21
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 21
                    },
                    "flags": 48,
                    "start": 15,
                    "end": 22
                },
                "flags": 32,
                "start": 13,
                "end": 23
            },
            "flags": 16,
            "start": 13,
            "end": 24
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 24,
                "end": 38
            },
            "flags": 16,
            "start": 24,
            "end": 39
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 39,
                "end": 43
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 201392130,
                                            "text": 8,
                                            "rawText": "08",
                                            "flags": 96,
                                            "start": 45,
                                            "end": 47
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 48,
                                            "end": 50
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 45,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 45,
                                "end": 50
                            },
                            "flags": 32,
                            "start": 43,
                            "end": 51
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 53,
                            "end": 55
                        },
                        "flags": 16,
                        "start": 43,
                        "end": 55
                    }
                ],
                "flags": 16,
                "start": 43,
                "end": 55
            },
            "flags": 33554448,
            "start": 39,
            "end": 56
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 56,
                "end": 70
            },
            "flags": 16,
            "start": 56,
            "end": 71
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 71,
                "end": 75
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 201392130,
                                            "text": 123,
                                            "rawText": "0123",
                                            "flags": 96,
                                            "start": 77,
                                            "end": 81
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "z",
                                            "rawText": "z",
                                            "flags": 96,
                                            "start": 82,
                                            "end": 84
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 77,
                                        "end": 84
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 77,
                                "end": 84
                            },
                            "flags": 32,
                            "start": 75,
                            "end": 85
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 87,
                            "end": 89
                        },
                        "flags": 16,
                        "start": 75,
                        "end": 89
                    }
                ],
                "flags": 16,
                "start": 75,
                "end": 89
            },
            "flags": 33554448,
            "start": 71,
            "end": 90
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 90,
                "end": 104
            },
            "flags": 16,
            "start": 90,
            "end": 105
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 8,
                "rawText": "08",
                "flags": 96,
                "start": 105,
                "end": 108
            },
            "flags": 16,
            "start": 105,
            "end": 109
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({08: 4});\n\n'use strict'; let {08: x} = y;\n\n'use strict'; let {0123: z} = q;\n\n'use strict'; 08;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 109
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Octal literals are not allowed in strict mode - start: 17, end: 18
✖ Octal literals are not allowed in strict mode - start: 46, end: 47
✖ Octal literals are not allowed in strict mode - start: 78, end: 79
✖ Octal literals are not allowed in strict mode - start: 107, end: 108

```

