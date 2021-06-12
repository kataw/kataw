# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/await/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\await\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: async function af(a, b = await a) { }
## Input

`````js
'use strict'; async function af(a, b = await a) { }
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "af",
                "rawText": "af",
                "flags": 96,
                "start": 28,
                "end": 31
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 32,
                        "end": 33
                    },
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 34,
                            "end": 36
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 208,
                            "awaitKeyword": {
                                "kind": 82196,
                                "flags": 64,
                                "start": 38,
                                "end": 44
                            },
                            "expression": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 44,
                                "end": 46
                            },
                            "flags": 32,
                            "start": 38,
                            "end": 46
                        },
                        "flags": 34,
                        "start": 34,
                        "end": 46
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 31,
                "end": 47
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 49,
                    "end": 49
                },
                "flags": 32,
                "start": 47,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "'use strict'; async function af(a, b = await a) { }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ `await` expression cannot be used in function parameters - start: 38, end: 44

```

