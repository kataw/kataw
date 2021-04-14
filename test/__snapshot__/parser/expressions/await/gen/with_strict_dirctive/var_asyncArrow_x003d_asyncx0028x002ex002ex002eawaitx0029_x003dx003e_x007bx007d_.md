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
                            "kind": 81921,
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 768,
                            "start": 17,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 768,
                                "start": 46,
                                "end": 49
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 223,
                                    "flags": 256,
                                    "start": 37,
                                    "end": 45
                                }
                            ],
                            "asyncToken": {
                                "kind": 82031,
                                "flags": 768,
                                "start": 30,
                                "end": 36
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 256,
                                    "start": 51,
                                    "end": 51
                                },
                                "flags": 256,
                                "start": 49,
                                "end": 52
                            },
                            "flags": 2304,
                            "start": 30,
                            "end": 52
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 52
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 52
            },
            "flags": 128,
            "start": 13,
            "end": 53
        }
    ],
    "isModule": false,
    "text": "'use strict'; var asyncArrow = async(...await) => {};",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 31,
            "error": "The left hand side of the arrow is not destructible ",
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

