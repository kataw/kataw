# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var foo = yield = 1;
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var foo = yield = 1;
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 17,
                            "end": 21
                        },
                        "type": null,
                        "initializer": {
                            "kind": 125,
                            "left": {
                                "kind": 134299649,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 96,
                                "start": 23,
                                "end": 29
                            },
                            "operatorToken": {
                                "kind": 4125,
                                "flags": 96,
                                "start": 29,
                                "end": 31
                            },
                            "right": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 31,
                                "end": 33
                            },
                            "flags": 32,
                            "start": 23,
                            "end": 33
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 33
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 33
            },
            "flags": 16,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "'use strict'; var foo = yield = 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

'\'use strict\'';
var foo = yield = 1;

```

### Diagnostics

```javascript
✔ No errors
```

