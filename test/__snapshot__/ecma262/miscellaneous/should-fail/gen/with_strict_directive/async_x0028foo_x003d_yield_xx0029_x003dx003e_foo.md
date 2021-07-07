# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/ecma262/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: async (foo = yield x) => foo
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async (foo = yield x) => foo
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
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 19
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 24
                            },
                            "optionalToken": null,
                            "type": null,
                            "right": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 26,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 4096,
                            "start": 21,
                            "end": 32
                        },
                        {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 34
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 21,
                    "end": 35
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 38
                },
                "contents": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 42
                },
                "flags": 290,
                "transformFlags": 0,
                "start": 13,
                "end": 42
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 13,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async (foo = yield x) => foo",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript

"\"use strict\"";
async (foo = yield, x) => foo;
```

### Diagnostics

```javascript
✔ No errors
```

