# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-11
- From: kataw/test/__snapshot__/parser/expressions/yield/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/yield/gen/with_strict_dirctive
> :: test: with_strict_dirctive
> :: case: var [yield] = [42];
## Options

`````js
{}
`````
## Input

`````js
'use strict'; var [yield] = [42];
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 134299649,
                                        "text": "yield",
                                        "rawText": "yield",
                                        "flags": 96,
                                        "start": 19,
                                        "end": 24
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 19,
                                "end": 24
                            },
                            "flags": 32,
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
                                        "kind": 201392130,
                                        "text": 42,
                                        "rawText": "42",
                                        "flags": 96,
                                        "start": 29,
                                        "end": 31
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 29,
                                "end": 31
                            },
                            "flags": 32,
                            "start": 27,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 32
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 32
            },
            "flags": 16,
            "start": 13,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "'use strict'; var [yield] = [42];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected. 'yield' is a reserved word in strict mode - start: 19, end: 24

```

