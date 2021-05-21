# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let { ...await f } = {};
## Input

`````js
'use strict'; let { ...await f } = {};
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
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "await",
                                            "rawText": "await",
                                            "flags": 96,
                                            "start": 23,
                                            "end": 28
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 28
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 32
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
                                "start": 36,
                                "end": 36
                            },
                            "flags": 48,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 37
                    }
                ],
                "flags": 33554448,
                "start": 17,
                "end": 37
            },
            "flags": 33554448,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "'use strict'; let { ...await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 28, end: 30

```

