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
            "rawText": "use strict",
            "flags": 67109632,
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
                "flags": 768,
                "start": 13,
                "end": 19
            },
            "flags": 128,
            "start": 13,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 768,
                "start": 34,
                "end": 35
            },
            "flags": 128,
            "start": 34,
            "end": 35
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 37,
                            "end": 42
                        },
                        "flags": 128,
                        "start": 37,
                        "end": 42
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 37,
                "end": 42
            },
            "flags": 128,
            "start": 35,
            "end": 42
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": 42,
                "rawText": "42",
                "flags": 768,
                "start": 43,
                "end": 46
            },
            "flags": 128,
            "start": 43,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield /* comment */\\n {yield: 42}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Invalid hexadecimal escape sequence - start: 19, end: 33
@{x2716}@ Unexpected token. - start: 19, end: 34
@{x2716}@ Statement expected - start: 19, end: 34
@{x2716}@ Unexpected token. - start: 35, end: 37
@{x2716}@ Unexpected token. - start: 42, end: 43
@{x2716}@ Unexpected token. - start: 42, end: 43
@{x2716}@ Statement expected - start: 42, end: 43
@{x2716}@ Statement expected - start: 46, end: 47

```

