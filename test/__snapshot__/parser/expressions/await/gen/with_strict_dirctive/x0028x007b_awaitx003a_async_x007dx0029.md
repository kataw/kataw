# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: ({ await: async })
## Input

`````js
'use strict'; ({ await: async })
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
                                "generatorToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 16,
                                    "end": 22
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "async",
                                    "rawText": "async",
                                    "flags": 96,
                                    "start": 23,
                                    "end": 29
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "start": 16,
                        "end": 29
                    },
                    "flags": 48,
                    "start": 15,
                    "end": 31
                },
                "flags": 32,
                "start": 13,
                "end": 32
            },
            "flags": 16,
            "start": 13,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "'use strict'; ({ await: async })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript

({ await: async });
```

### Diagnostics

```javascript
✔ No errors
```

