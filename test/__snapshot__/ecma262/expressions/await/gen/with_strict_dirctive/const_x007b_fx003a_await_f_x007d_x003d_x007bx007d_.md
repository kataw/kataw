# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: const { f: await f } = {};
## Options

`````js
{}
`````
## Input

`````js
'use strict'; const { f: await f } = {};
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 19
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 23
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 21,
                                        "end": 30
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 34
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 36,
                            "end": 39
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 19,
                        "end": 39
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 19,
                "end": 39
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "'use strict'; const { f: await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 30, end: 32

```

