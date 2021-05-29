# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-28
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: var asyncArrow = async(await) => 1;
## Input

`````js
'use strict'; var asyncArrow = async(await) => 1;
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
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "text": "asyncArrow",
                            "rawText": "asyncArrow",
                            "flags": 96,
                            "start": 17,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 43,
                                "end": 46
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 37,
                                    "end": 42
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 30,
                                "end": 36
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 46,
                                "end": 48
                            },
                            "flags": 288,
                            "start": 30,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 48
            },
            "flags": 16,
            "start": 13,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "'use strict'; var asyncArrow = async(await) => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

var asyncArrow = async (await) =>  1;
```

### Diagnostics

```javascript
✔ No errors
```

