# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: kataw8/test\__snapshot__/parser/declarations/function/trailing-commas-in-parameters-errors/autogen.md
- Path: kataw8/test\__snapshot__\parser\declarations\function\trailing-commas-in-parameters-errors\gen\stand_alone
> :: test: stand alone
> :: case: function  a(b,,) {}
## Input

`````js
function  a(b,,) {}
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 8,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [
                    {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 12,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 15
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "start": 14,
                    "end": 14
                },
                "flags": 32,
                "start": 14,
                "end": 14
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 18,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "function  a(b,,) {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 14, end: 15
✖ Declaration or statement expected - start: 15, end: 16

```

