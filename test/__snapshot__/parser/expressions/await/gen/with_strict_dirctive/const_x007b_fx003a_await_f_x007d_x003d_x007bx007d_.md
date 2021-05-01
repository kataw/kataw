# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: const { f: await f } = {};
## Input

`````js
'use strict'; const { f: await f } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "original": "'use strict'",
                "rawText": "'use strict'",
                "flags": 4194400,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
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
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "original": "f",
                                            "text": "f",
                                            "rawText": " f",
                                            "flags": 96,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "original": "await",
                                                "text": "await",
                                                "rawText": " await",
                                                "flags": 96,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "flags": 32,
                                        "start": 21,
                                        "end": 30
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "original": "f",
                                            "text": "f",
                                            "rawText": " f",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 21,
                                "end": 32
                            },
                            "flags": 32,
                            "start": 19,
                            "end": 34
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 32,
                            "start": 36,
                            "end": 39
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 39
                    }
                ],
                "flags": 16777232,
                "start": 19,
                "end": 39
            },
            "flags": 33554448,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "'use strict'; const { f: await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 30, end: 32

```

