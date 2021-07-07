# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/await/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/await/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: let { f: ...await f } = {};
## Options

`````js
{}
`````
## Input

`````js
'use strict'; let { f: ...await f } = {};
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
                                            "start": 19,
                                            "end": 21
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 22
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 22
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 26
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": null,
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 22,
                                        "end": 31
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "f",
                                        "rawText": "f",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 35
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
                                "start": 39,
                                "end": 39
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 37,
                            "end": 40
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 17,
                        "end": 40
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 17,
                "end": 40
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "'use strict'; let { f: ...await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object property expected - start: 22, end: 26
✖ ',' expected - start: 22, end: 26
✖ ',' expected - start: 31, end: 33

```

