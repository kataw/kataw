# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var [yield] = [42];
## Input

`````js
'use strict'; var [yield] = [42];
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
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 768,
                                            "start": 19,
                                            "end": 24
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 19,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 25
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 768,
                                        "start": 29,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 32
            },
            "flags": 128,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "'use strict'; var [yield] = [42];",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

