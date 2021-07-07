# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/gen/with_strict_directive
> :: test: with strict directive
> :: case: for (var let = 1; let < 1; let++) {}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; for (var let = 1; let < 1; let++) {}
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
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "initializer": {
                "kind": 341,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 22
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "let",
                                "rawText": "let",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 26
                            },
                            "type": null,
                            "initializer": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 28,
                                "end": 30
                            },
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 22,
                            "end": 30
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 30
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 13,
                "end": 31
            },
            "condition": {
                "kind": 127,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 44,
                    "end": 46
                },
                "operand": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 40,
                    "end": 44
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 40,
                "end": 46
            },
            "incrementor": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "let",
                    "rawText": "let",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 31,
                    "end": 35
                },
                "operatorToken": {
                    "kind": 536971330,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "right": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 39
                },
                "flags": 96,
                "transformFlags": 5120,
                "start": 31,
                "end": 39
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 49
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 47,
                "end": 50
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 13,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for (var let = 1; let < 1; let++) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 22, end: 26
✖ Identifier expected. Reserved word in strict mode - start: 31, end: 35
✖ Identifier expected. Reserved word in strict mode - start: 40, end: 44

```

