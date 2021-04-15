# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var foo = yield = 1;
## Input

`````js
'use strict'; var foo = yield = 1;
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
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 768,
                            "start": 17,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 768,
                                "start": 23,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 768,
                                "start": 29,
                                "end": 31
                            },
                            "right": {
                                "kind": 134299649,
                                "text": 1,
                                "rawText": "1",
                                "flags": 768,
                                "start": 31,
                                "end": 33
                            },
                            "flags": 256,
                            "start": 23,
                            "end": 33
                        },
                        "flags": 128,
                        "start": 17,
                        "end": 33
                    }
                ],
                "flags": 128,
                "start": 17,
                "end": 33
            },
            "flags": 128,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "text": "'use strict'; var foo = yield = 1;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 34
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

