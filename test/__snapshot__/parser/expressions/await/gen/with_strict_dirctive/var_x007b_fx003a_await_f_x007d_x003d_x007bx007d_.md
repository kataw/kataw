# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var { f: await f } = {};
## Input

`````js
'use strict'; var { f: await f } = {};
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 13,
                "start": 0,
                "end": 17
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
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
                                            "start": 19,
                                            "end": 22
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 28
                                        },
                                        "flags": 256,
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
                                            "flags": 768,
                                            "start": 28,
                                            "end": 30
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 28,
                                        "end": 30
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 30
                            },
                            "flags": 256,
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
                                "multiline": false,
                                "flags": 0,
                                "start": 36,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 34,
                            "end": 37
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 37
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 37
            },
            "flags": 128,
            "start": 13,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "'use strict'; var { f: await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 28, end: 30

```

