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
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 67109632,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 768,
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
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 24,
                                                "end": 30
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 24,
                                            "end": 30
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 21,
                                        "end": 30
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 30,
                                            "end": 32
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 21,
                                "end": 32
                            },
                            "flags": 256,
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
                                "multiline": false,
                                "flags": 0,
                                "start": 38,
                                "end": 38
                            },
                            "flags": 256,
                            "start": 36,
                            "end": 39
                        },
                        "flags": 128,
                        "start": 19,
                        "end": 39
                    }
                ],
                "flags": 160,
                "start": 19,
                "end": 39
            },
            "flags": 128,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "text": "'use strict'; const { f: await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

