# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
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
            "transformFlags": 0,
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
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 96,
                    "transformFlags": 32,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 21
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 4096,
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
                "transformFlags": 0,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
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
                            "transformFlags": 0,
                            "start": 26,
                            "end": 32
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
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
                                "transformFlags": 0,
                                "start": 33,
                                "end": 36
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 33,
                            "end": 36
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 26,
                        "end": 36
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 26,
                "end": 36
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 24,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
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
✖ '{' expected - start: 24, end: 26
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 26, end: 33

```

