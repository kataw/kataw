# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/gen/with_strict_directive
> :: test: with strict directive
> :: case: let = 1
## Options

`````js
{}
`````
## Input

`````js
"use strict"; let = 1
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "transformFlags": 0,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 17
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 19
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 21
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; let = 1",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'let' is a reserved word in strict mode - start: 17, end: 19

```

