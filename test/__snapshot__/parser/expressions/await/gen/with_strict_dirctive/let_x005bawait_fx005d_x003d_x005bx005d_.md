# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let [await f] = [];
## Input

`````js
'use strict'; let [await f] = [];
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 67174403,
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
                "flags": 768,
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
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "text": "await",
                                            "rawText": "await",
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
                                    },
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 81921,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 768,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 256,
                                        "start": 24,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 256,
                            "start": 17,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 256,
                                "start": 31,
                                "end": 31
                            },
                            "flags": 256,
                            "start": 29,
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
    "text": "'use strict'; let [await f] = [];",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 24,
            "end": 26
        }
    ],
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let [await f] = [];
## Input

`````js
'use strict'; let [await f] = [];
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: let [await f] = [];
## Input

`````js
'use strict'; let [await f] = [];
`````
```

