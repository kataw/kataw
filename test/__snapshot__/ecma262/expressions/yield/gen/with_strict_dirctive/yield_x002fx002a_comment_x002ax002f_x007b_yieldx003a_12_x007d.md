# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: yield /* comment */ { yield: 12 }
## Options

`````js
{}
`````
## Input

`````js
'use strict'; yield /* comment */ { yield: 12 }
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
                            "start": 35,
                            "end": 41
                        },
                        "colonToken": {
                            "kind": 21,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 41,
                            "end": 42
                        },
                        "statement": {
                            "kind": 120,
                            "expression": {
                                "kind": 201392130,
                                "text": 12,
                                "rawText": "12",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 42,
                                "end": 45
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 42,
                            "end": 45
                        },
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 35,
                        "end": 45
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 35,
                "end": 45
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 19,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "'use strict'; yield /* comment */ { yield: 12 }",
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
✖ '{' is not allowed here. Did you mean ';'? - start: 19, end: 35
✖ Identifier expected. 'yield' is a reserved word in strict mode and cannot be used as an label - start: 35, end: 42

```

