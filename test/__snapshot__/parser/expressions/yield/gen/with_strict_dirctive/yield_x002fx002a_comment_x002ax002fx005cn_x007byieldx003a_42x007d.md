# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\yield\gen\with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
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
                "kind": 134299649,
                "text": "yield",
                "rawText": "yield",
                "flags": 96,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 34,
                "end": 35
            },
            "flags": 16,
            "start": 34,
            "end": 35
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
                            "start": 37,
                            "end": 42
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "start": 42,
                            "end": 43
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 42,
                                "rawText": "42",
                                "flags": 96,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 43,
                            "end": 46
                        },
                        "flags": 16,
                        "start": 37,
                        "end": 46
                    }
                ],
                "flags": 16,
                "start": 37,
                "end": 46
            },
            "flags": 16,
            "start": 35,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */\\n {yield: 42}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 19, end: 33
✖ Expected a `;` - start: 19, end: 34
✖ Expected a `;` - start: 35, end: 37
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 37, end: 43

```

