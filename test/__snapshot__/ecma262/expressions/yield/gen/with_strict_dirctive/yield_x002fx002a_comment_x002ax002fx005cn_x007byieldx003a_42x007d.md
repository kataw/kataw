# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield /* comment */\n {yield: 42}
## Options

`````js
{}
`````
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
            "transformFlags": 0,
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
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 34,
                "end": 35
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "transformFlags": 0,
                            "start": 37,
                            "end": 42
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 43,
                                "end": 46
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 43,
                            "end": 46
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 37,
                        "end": 46
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 37,
                "end": 46
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 35,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */\\n {yield: 42}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ '; ' is not allowed here. Did you mean ';'? - start: 19, end: 34
✖ '{' is not allowed here. Did you mean ';'? - start: 35, end: 37
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 37, end: 43

```

