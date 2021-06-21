# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: with strict directive
> :: case: async ({ident: [foo, bar]/x}) => x
## Options

`````js
{}
`````
## Input

`````js
"use strict"; async ({ident: [foo, bar]/x}) => x
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
            "rawText": "\"use strict\"",
            "flags": 96,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 271,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 212,
                    "propertyList": {
                        "kind": 213,
                        "properties": [
                            {
                                "kind": 329,
                                "key": {
                                    "kind": 134299649,
                                    "text": "ident",
                                    "rawText": "ident",
                                    "flags": 96,
                                    "start": 22,
                                    "end": 27
                                },
                                "value": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 30,
                                                    "end": 33
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "bar",
                                                    "rawText": "bar",
                                                    "flags": 96,
                                                    "start": 34,
                                                    "end": 38
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 30,
                                            "end": 38
                                        },
                                        "flags": 32,
                                        "start": 28,
                                        "end": 39
                                    },
                                    "operatorToken": {
                                        "kind": 35640,
                                        "flags": 96,
                                        "start": 39,
                                        "end": 40
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 40,
                                        "end": 41
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 41
                                },
                                "initializer": null,
                                "flags": 32,
                                "start": 22,
                                "end": 41
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 22,
                        "end": 41
                    },
                    "flags": 48,
                    "start": 21,
                    "end": 42
                }
            ],
            "returnType": null,
            "arrowToken": {
                "kind": 10,
                "flags": 64,
                "start": 43,
                "end": 46
            },
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 46,
                "end": 48
            },
            "flags": 290,
            "start": 13,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; async ({ident: [foo, bar]/x}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left hand side of the arrow is not destructible  - start: 13, end: 46

```

