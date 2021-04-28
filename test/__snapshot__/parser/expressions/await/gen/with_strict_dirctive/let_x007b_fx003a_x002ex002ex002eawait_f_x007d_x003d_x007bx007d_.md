# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let { f: ...await f } = {};
## Input

`````js
'use strict'; let { f: ...await f } = {};
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
                "kind": 41951307,
                "flags": 640,
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
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 22,
                                                "start": 512,
                                                "end": 26
                                            },
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 768,
                                                "start": 26,
                                                "end": 31
                                            },
                                            "initializer": null,
                                            "flags": 256,
                                            "start": 22,
                                            "end": 31
                                        },
                                        "flags": 256,
                                        "start": 19,
                                        "end": 31
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "right": null,
                                        "flags": 256,
                                        "start": 31,
                                        "end": 33
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 35
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
                                "start": 39,
                                "end": 39
                            },
                            "flags": 256,
                            "start": 37,
                            "end": 40
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 40
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 40
            },
            "flags": 128,
            "start": 13,
            "end": 41
        }
    ],
    "isModule": false,
    "text": "'use strict'; let { f: ...await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 31, end: 33

```

