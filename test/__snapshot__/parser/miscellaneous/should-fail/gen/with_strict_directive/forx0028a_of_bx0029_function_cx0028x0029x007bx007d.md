# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-fail/gen/with_strict_directive
> :: test: with strict directive
> :: case: for(a of b) function c(){}
## Options

`````js
{}
`````
## Input

`````js
"use strict"; for(a of b) function c(){}
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 13,
                "end": 17
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 18,
                "end": 19
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 19,
                "end": 22
            },
            "expression": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "statement": {
                "kind": 176,
                "declareKeyword": null,
                "asyncKeyword": null,
                "functionKeyword": {
                    "kind": 37822554,
                    "flags": 64,
                    "start": 25,
                    "end": 34
                },
                "generatorToken": null,
                "name": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 34,
                    "end": 36
                },
                "typeParameters": null,
                "formalParameterList": {
                    "kind": 214,
                    "formalParameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 36,
                    "end": 38
                },
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 39,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 38,
                    "end": 40
                },
                "returnType": null,
                "flags": 16,
                "start": 25,
                "end": 40
            },
            "flags": 80,
            "start": 13,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "\"use strict\"; for(a of b) function c(){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Function declarations can only be declared at top level or inside a block in strict mode - start: 25, end: 34

```

