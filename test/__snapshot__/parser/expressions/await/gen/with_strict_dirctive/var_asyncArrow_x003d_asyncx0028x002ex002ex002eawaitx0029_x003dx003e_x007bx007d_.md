# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 67174403,
                "value": "use strict",
                "autofix": 0,
                "flags": 768,
                "start": 0,
                "end": 12
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 13
        },
        {
            "kind": 155,
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 81921,
                            "value": "asyncArrow",
                            "autofix": 0,
                            "flags": 768,
                            "start": 17,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 81921,
                                "value": "async",
                                "autofix": 0,
                                "flags": 768,
                                "start": 30,
                                "end": 36
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 223,
                                        "argument": {
                                            "kind": 81921,
                                            "value": "await",
                                            "autofix": 0,
                                            "flags": 768,
                                            "start": 40,
                                            "end": 45
                                        },
                                        "autofix": 0,
                                        "flags": 256,
                                        "start": 37,
                                        "end": 45
                                    }
                                ],
                                "trailingComma": false,
                                "autofix": 0,
                                "flags": 256,
                                "start": 37,
                                "end": 45
                            },
                            "flags": 256,
                            "start": 30,
                            "end": 46
                        },
                        "autofix": 0,
                        "flags": 128,
                        "start": 17,
                        "end": 46
                    }
                ],
                "autofix": 0,
                "flags": 128,
                "start": 17,
                "end": 46
            },
            "autofix": 0,
            "flags": 128,
            "start": 13,
            "end": 46
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "autofix": 0,
                "flags": 128,
                "start": 51,
                "end": 51
            },
            "autofix": 0,
            "flags": 128,
            "start": 49,
            "end": 52
        },
        {
            "kind": 168,
            "autofix": 0,
            "flags": 128,
            "start": 52,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "'use strict'; var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 4,
            "error": "',' expected",
            "start": 46,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 46,
            "end": 49
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 46,
            "end": 49
        }
    ],
    "start": 0,
    "end": 53
}
```

### Printed

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
`````
```

### Diagnostics

```javascript
ed test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
'use strict'; var asyncArrow = async(...await) => {};
`````
```

