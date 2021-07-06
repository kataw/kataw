# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/autogen.md
- Path: kataw/test/__snapshot__/ecma262/declarations/let/let-sloppy-only/gen/with_strict_directive
> :: test: with strict directive
> :: case: var [let] = []
## Options

`````js
{}
`````
## Input

`````js
"use strict"; var [let] = []
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
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "let",
                                        "rawText": "let",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 23
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 27
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 25,
                            "end": 28
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 17,
                        "end": 28
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 28
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 13,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; var [let] = []",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. Reserved word in strict mode - start: 19, end: 22

```

