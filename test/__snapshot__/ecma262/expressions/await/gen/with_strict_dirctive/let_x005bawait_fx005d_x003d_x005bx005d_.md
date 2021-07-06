# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let [await f] = [];
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let [await f] = [];
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 13,
                "end": 17
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 201,
                            "elementList": {
                                "kind": 324,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 24
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 27
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
                                "start": 31,
                                "end": 31
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 29,
                            "end": 32
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 32
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "'use strict'; let [await f] = [];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 24, end: 26

```

