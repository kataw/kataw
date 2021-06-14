# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters-errors/autogen.md
- Path: kataw/test/__snapshot__/parser/declarations/function/trailing-commas-in-parameters-errors/gen/with_strict_directive
> :: test: with strict directive
> :: case: function  a(b,,) {}
## Options

`````js
{}
`````
## Input

`````js
'use strict'; function  a(b,,) {}
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
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 22,
                "end": 25
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 26,
                        "end": 27
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 25,
                "end": 29
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 28,
                    "end": 28
                },
                "flags": 32,
                "start": 28,
                "end": 28
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 13,
            "end": 28
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 32,
                "end": 32
            },
            "flags": 16,
            "start": 30,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "'use strict'; function  a(b,,) {}",
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
✖ Expected a ')' to match the '(' token here - start: 28, end: 29
✖ Declaration or statement expected - start: 29, end: 30

```

