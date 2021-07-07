# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/gen/with_strict_directive
> :: test: with strict directive
> :: case: var let
## Options

`````js
{}
`````
## Input

`````js
"use strict"; var let
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
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
                            "start": 17,
                            "end": 21
                        },
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; var let",
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
✖ Identifier expected. Reserved word in strict mode - start: 17, end: 21

```

