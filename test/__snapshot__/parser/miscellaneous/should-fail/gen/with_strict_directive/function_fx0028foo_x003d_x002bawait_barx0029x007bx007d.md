# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: function f(foo = +await bar){}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; function f(foo = +await bar){}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 13,
                "end": 22
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 25,
                            "end": 28
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 126,
                            "operandToken": {
                                "kind": 99634,
                                "flags": 96,
                                "start": 30,
                                "end": 32
                            },
                            "operand": {
                                "kind": 134299649,
                                "text": "await",
                                "rawText": "await",
                                "flags": 96,
                                "start": 32,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 30,
                            "end": 37
                        },
                        "flags": 34,
                        "start": 25,
                        "end": 37
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "start": 37,
                        "end": 41
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "start": 24,
                "end": 42
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 43,
                    "end": 43
                },
                "flags": 32,
                "start": 42,
                "end": 44
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; function f(foo = +await bar){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 38, end: 41

```

