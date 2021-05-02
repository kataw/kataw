# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Input

`````js
'use strict'; yield /* comment */\n {yield: 42}
`````

## Output

### Hybrid CST

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
            "kind": 249,
            "block": {
                "kind": 124,
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
                        "labels": [
                            {
                                "kind": 256,
                                "label": "yield",
                                "iterationStatement": false,
                                "flags": 16,
                                "start": 37,
                                "end": 42
                            }
                        ],
                        "colonToken": {
                            "kind": 21,
                            "flags": 0,
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
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 13, end: 19
✖ Invalid hexadecimal escape sequence - start: 19, end: 33
✖ Expected a `;` - start: 19, end: 34
✖ Declaration or statement expected - start: 19, end: 34
✖ Expected a `;` - start: 35, end: 37
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 37, end: 42
✖ Identifier expected. Reserved word in strict mode - start: 37, end: 43

```

