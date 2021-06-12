# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield * \n { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; yield * \n { yield: 12 }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "start": 13,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 23,
            "end": 24
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 163,
                        "label": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 26,
                            "end": 32
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 32,
                            "end": 33
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 16,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 36
                    }
                ],
                "flags": 16,
                "start": 26,
                "end": 36
            },
            "flags": 16,
            "start": 24,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 21, end: 22
✖ Identifier expected - start: 21, end: 23
✖ Expected a `;` - start: 24, end: 26
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 26, end: 33

```

